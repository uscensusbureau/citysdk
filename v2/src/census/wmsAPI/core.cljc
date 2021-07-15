(ns census.wmsAPI.core
  (:require
    #?(:cljs [cljs.core.async   :refer [>! <! chan promise-chan close! take! put! to-chan!
                                        timeout]
                                :refer-macros [go alt!]]
       :clj [clojure.core.async :refer [>! <! chan promise-chan close! take! put! to-chan!
                                        timeout go alt!]])
    ;#?(:cljs [com.rpl.specter   :refer [MAP-VALS MAP-KEYS ALL]
    ;                            :refer-macros [select transform traverse setval]]
    ;   :clj  [com.rpl.specter   :refer [MAP-VALS MAP-KEYS ALL select transform traverse setval]])
    [clojure.set       :refer [map-invert]]
    [cuerdas.core      :refer [join]]
    [linked.core       :as -=-]
    [census.utils.core :refer [=O?>-cb $GET$
                               amap-type vec-type throw-err ->args
                               URL-WMS URL-GEOKEYMAP]]))

(defn $g$->wms-cfg
  "
  Creates a configuration map for the WMS url-builder from the geoHierarchy map.

  if  : lookup key is a vec -> direct looked up
  else: lookup at :id<-json key

  ($g$->wms-cfg
    $g$
    {:vintage     2014,
     :geoHierarchy {:state {:lat 28.2639, :lng -80.7214}, :county '*'}})
  ;=>
  {:vintage 2014,
   :layers ['84'],
   :cur-layer-idx 0,
   :lat 28.2639,
   :lng -80.7214,
   :sub-level [:county '*'],
   :geo [:STATE],
   :looked-up-in :2010}
  "
  ([$g$ args] ($g$->wms-cfg $g$ args 0))
  ([$g$ {:keys [geoHierarchy vintage]} server-index]
   (let [[[scope {:keys [lat lng]}] sub-level] (vec geoHierarchy)
         {:keys [lookup layers]} (get-in $g$ [scope (keyword (str vintage)) :wms])
         config {:vintage        vintage
                 :layers         layers
                 :cur-layer-idx  server-index
                 :lat            lat
                 :lng            lng
                 :sub-level      sub-level}]
        (if (instance? vec-type lookup)
            (merge-with assoc config
                {:geo            lookup
                 :looked-up-in   (keyword vintage)})
            (merge-with assoc config
                {:geo            (get-in $g$ [scope lookup :id<-json])
                 ; lookup-up-in
                 :looked-up-in   lookup})))))


(defn lookup-id->match?
  "
  Looks in a single entry from the inverted geoKeyMap for a matching geoKey via
  `some`ing through each of its vintages for a match with a provided WMS
  geographic identifier.
  "
  [GEO [geo-val geo-key]]
  (let [vins (map (fn [[_ {:keys [id<-json] {:keys [lookup]} :wms}]]
                      (if (instance? vec-type lookup)
                          (last lookup)
                          (last id<-json)))
                  (vec geo-val))]
       (if (some #(= GEO %) vins)
           geo-key
           nil)))


(defn search-id->match?
  "
  Searches the entire geoKeyMap (inverted) for a geo key match provided a given
  WMS geographic identifier. Returned values are used in combination with a
  response from the TigerWeb WMS geocoding response to determine the geographic
  hierarchy of a geography for filling-in the data API request geography for
  geocoding requests
  "
  [$g$ GEO]
  (let [inverted-geoKeyMap (seq (map-invert $g$))]
    (remove nil?
      (map #(lookup-id->match? GEO %)
           inverted-geoKeyMap))))

; https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_ACS2012/MapServer
; https://tigerweb.geo.census.gov/arcgis/rest/services/Census2020/tigerWMS_Census2000/MapServer
(defn C->GIS-url
  "
  Constructs a URL for the TigerWeb Web Mapping Service (WMS) using a lookup
  from the geoKeyMap configuration file cross-referenced against the users args.
  "
  ([$g$ args] (C->GIS-url $g$ args 0))
  ([$g$ args server-index]
   (let [{:keys [vintage layers cur-layer-idx lat lng geo]}
         ($g$->wms-cfg $g$ args server-index)]
     (str URL-WMS
          (cond
            (= 0 (mod vintage 10)) (str "Census2020/tigerWMS_Census" vintage)
            :else                  (str "TIGERweb/tigerWMS_ACS" vintage))
          "/MapServer/"
          (get layers cur-layer-idx)
          "/query?"
          (join "&"
            (map #(join "=" %)
                 [["geometry" (str lng "," lat)]
                  ["geometryType" "esriGeometryPoint"]
                  ["inSR" "4269"]
                  ["spatialRel" "esriSpatialRelIntersects"]
                  ["returnGeometry" "false"]
                  ["f" "pjson"]
                  ["outFields" (join "," (map name geo))]]))))))


(defn configed-map
  "
  Takes the geoKeyMap configuration and the attributes from the WMS service
  API (js->cljs response) and returns a config map (:key = attribute ; value =
  corresponding configured map with (:geography 'value') needed to call Census'
  data API).
  "
  [$g$ attrs]
  (let [wms-keys (into [] (keys attrs))
        wms-vals (into [] (vals attrs))
        geo-keys (map #(search-id->match? $g$ %) wms-keys)]
    (loop [idx    0
           result {}]
      (if (= nil (get wms-keys idx))
        result
        (recur (inc idx)
               (assoc result ; TODO: `revert` if no bueno
                      (get wms-keys idx)
                      ;; returns an empty map ({}) if invalid
                      {(get (mapv #(first %) geo-keys) idx)
                       (get wms-vals idx)}))))))

(def $url$ (atom ""))
(def $res$ (atom []))
(def $err$ (atom {}))

(def $GET$-wms ($GET$ :json "Census FIPS Geocoding" $url$ $res$ $err$))

(defn try-census-wms
  "
  Takes the geoKeyMap with the users' arguments, a current WMS server index (used
  for retrying if more than one exists for a given geography in WMS) and a
  channel that will convey the result. Tries to cal the WMS and puts the
  `configed-map` into the channel if successful.
  "
  [$g$ args server-idx =res=]
  (let [=args=> (chan 1 (map #(configed-map $g$ (get-in % [:features 0 :attributes]))))
        url (C->GIS-url $g$ args server-idx)]
    ($GET$-wms (to-chan! [url]) =args=> =args=>)
    (take! =args=> (fn [args->] (do (put! =res= args->)
                                    (close! =args=>))))))



(defn wms-engage?
  "
  Engages the wms-service workflow if the first element in the geoHierarchy
  contains a map argument, which implies that the user doesn't have a GEOID handy.
  "
  [{:keys [geoHierarchy]}]
  (let [[_ geo-val] (first geoHierarchy)]
    (if (instance? amap-type geo-val)
      true
      false)))


; TODO: can this be cleaned up?

(defn =>args=GIS=args=>
  "
  Tries to find the appropriate geographic identifiers for a provided
  geoHierarchy argument, which contains a {:lat <float> :lng <float>} coordinate
  instead of an actual FIPS code set. If FIPS are already provided, this step is
  skipped. If not, the users' arguments are augmented with FIPS codes from the
  Census Tiger WMS.
  "
  [$g$]
  (fn [=>args= =args=>]
    (go (let [->args (<! =>args=)
              =res= (chan 1)]
          (if (not (wms-engage? ->args))
            (do (>! =args=> ->args)
                (close! =res=))
            (loop [args ->args
                   idx 0]
              (try-census-wms $g$ args idx =res=)
              (let [{:keys [layers sub-level]} ($g$->wms-cfg $g$ args)
                    res (<! =res=)]
                (cond
                  (not (empty? res))
                  (do (>! =args=>
                        (merge args
                          (assoc {} :geoHierarchy
                            (conj (-=-/map)
                                  (into (-=-/map) (vals res))
                                  (into (-=-/map) [sub-level])))))
                      (close! =res=))
                  ; if another layer is available: recur
                  (and (empty? res) (not (nil? (get layers (inc idx)))))
                  (recur ->args (inc idx))
                  :else
                  (do (>! =args=> "No FIPS (Census geocodes) found for given arguments")
                      (close! =res=))))))))))

(defn I-<wms=I=
  "Provides a synchronous input to a function that accepts a channel for args
  and calls the Census WMS for geocoding; providing the results to the channel"
  [$g$]
  (fn [I =args=>]
    ((=>args=GIS=args=> $g$) (to-chan! [(->args I)]) =args=>)))

