(ns census.wmsAPI.core
  (:require
    [cljs.core.async   :refer [>! <! chan promise-chan close! take!]
                       :refer-macros [go alt!]]
    [clojure.set       :refer [map-invert]]
    [cuerdas.core      :refer [join]]
    [linked.core       :as -=-]
    [com.rpl.specter   :refer [MAP-VALS MAP-KEYS ALL]
                       :refer-macros [select transform traverse setval]]
    [census.utils.core :refer [I=O<<=IO=
                               I-<I= cb-<OE= $GET$
                               amap-type vec-type throw-err js->args
                               URL-WMS URL-GEOKEYMAP $geoKeyMap$]]))

(defn geoKey->wms-config
  "
  Creates a configuration map for the WMS url-builder from the geoHierarchy map.
  "
  ([$g$ args] (geoKey->wms-config $g$ args 0))
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
                {:geo          lookup
                 :looked-up-in (keyword vintage)})
          (merge-with assoc config
                {:geo          (get-in $g$ [scope lookup :id<-json])
                 :lookup-up-in lookup})))))


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
  WMS geographic identifier.
  "
  [$g$ GEO]
  (let [inverted-geoKeyMap (seq (map-invert $g$))]
    (remove nil?
      (map #(lookup-id->match? GEO %)
           inverted-geoKeyMap))))


(defn wms-url-builder
  "
  Constructs a URL for the TigerWeb Web Mapping Service (WMS) using a lookup
  from the geoKeyMap configuration file cross-referenced against the users args.
  "
  ([$g$ args] (wms-url-builder $g$ args 0))
  ([$g$ args server-index]
   (let [{:keys [vintage layers cur-layer-idx lat lng geo]}
         (geoKey->wms-config $g$ args server-index)]
     (str URL-WMS
          (cond
            (= "2010" (str vintage)) (str "TIGERweb/tigerWMS_Census2010")
            (= "2000" (str vintage)) (str "Census2010/tigerWMS_Census2000")
            :else                    (str "TIGERweb/tigerWMS_ACS" vintage))
          "/Mapserver/"
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
  (let [wms-keys (select MAP-KEYS attrs)
        wms-vals (select MAP-VALS attrs)
        geo-keys (map #(search-id->match? $g$ %)
                      wms-keys)]
    (loop [idx 0
           result {}]
      (if (= nil (get wms-keys idx))
        result
        (recur (inc idx)
               (assoc result
                      (get wms-keys idx)
                      ;; returns an empty map ({}) if invalid
                      {(get (select [ALL ALL] geo-keys) idx)
                       (get wms-vals idx)}))))))

(def $GET$-wms
  ($GET$ :json "unlucky Census WMS request... "))

(defn try-census-wms
  "
  Takes the geoKeyMap with the users' arguments, a current WMS server index (used
  for retrying if more than one exists for a given geography in WMS) and a
  channel that will convey the result. Tries to cal the WMS and puts the
  `configed-map` into the channel if successful.
  "
  [$g$ args server-idx =err= =res=]
  (go (let [=args= (chan 1 (map #(configed-map $g$
                                   (get-in % [:features 0 :attributes]))))
            url    (wms-url-builder $g$ args server-idx)]
        (((I-<I= $GET$-wms url) =err= ) =args=)
        ;((I=O<<=IO= IO-ajax-GET-json) url =args=)
        (>! =res= (<! =args=))
        (close! =args=)))) ; don't do anything on error... may try again.


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


(defn IO-census-wms
  "
  Fetches a remote geoKeyMap resource and caches it to local atom ($geoKeyMap$)
  then tries to find the appropriate geographic identifiers for a provided
  geoHierarchy argument, which contains a {:lat <float> :lng <float>} coordinate
  instead of an actual FIPS code set. If FIPS are already provided, this step is
  skipped.
  "
  [$g$]
  (fn [=args-in=]
    (fn [=err=]
      (fn [=args-out=]
        (go (let [args-in (<! =args-in=)
                  =res=   (chan 1)]
              (if (wms-engage? args-in)
                (loop [args args-in
                       idx 0]
                  (try-census-wms $g$ args idx =err= =res=)
                  (let [{:keys [layers sub-level]} (geoKey->wms-config $g$ args)
                        result (<! =res=)]
                    (cond
                      (not (empty? result))
                      (do (>! =args-out=
                            (transform :geoHierarchy #(into {} %)
                              (setval :geoHierarchy
                                (conj (-=-/map)
                                  (into (-=-/map) (traverse MAP-VALS result))
                                  (into (-=-/map) [sub-level]))
                                args)))
                          (close! =res=))
                      (and (empty? result) (not (nil? (get layers (inc idx)))))
                      (recur args (inc idx))
                      :else
                      (do (>! =args-out= {})
                          (>! =err= "No Geography found for this lat/lng pair")
                          (close! =res=)))))
                (do (>! =args-out= args-in)
                    (close! =res=)))))))))

(defn censusWMS
  "
  Provided a synchronous input and callback API to IO-census-wms
  "
  [$g$]    ; takes an async I/O function
  (fn [I cb]
    (let [args (js->args I)]  ; converts any #js types to cljs with proper keys
      (go (cb-<OE= (I-<I= (IO-census-wms $g$) args) cb)))))


(defn Icb<-wms-args-<I=
  "Provides a syncronous input to a function that accepts a channel for args
  and calls the Census WMS for geocoding; providing the results to the channel"
  [$g$]
  (fn [f]
    (fn [I]
      (let [=args= (chan 1)
            =err=  (chan 1 (map throw-err))
            args   (js->args I)]
        (go ((I-<I= (IO-census-wms $g$) args) =err= =args=)
            (f =args=))))))
