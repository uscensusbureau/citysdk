(ns census.wmsAPI.core
  (:require
    [cljs.core.async :as <|]
    [clojure.set :refer [map-invert]]
    [cuerdas.core :as s]
    [linked.core :as -=-]
    [com.rpl.specter :as sp]
    [census.utils.core :as ut :refer [$geoKeyMap$]]
    [census.test.core :as ts  :refer [*g*]]))

(defn geoKey->wms-config
  "
  Creates a configuration map for the WMS url-builder from the geoHierarchy map.
  "
  {:test #(assert
             (= (geoKey->wms-config *g* ts/args-ok-wms-only)
                {:vintage 2014,
                 :layers ["82"],
                 :cur-layer-idx 0,
                 :lat 28.2639,
                 :lng -80.7214,
                 :sub-level [:county "*"],
                 :geo [:STATE],
                 :lookup-up-in :2010}))}

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
        (if (instance? ut/vec-type lookup)
          (merge-with assoc config
                {:geo          lookup
                 :looked-up-in (keyword vintage)})
          (merge-with assoc config
                {:geo          (get-in $g$ [scope lookup :id<-json])
                 :lookup-up-in lookup})))))

(test geoKey->wms-config)


(defn lookup-id->match?
  "
  Looks in a single entry from the inverted geoKeyMap for a matching geoKey via
  `some`ing through each of its vintages for a match with a provided WMS
  geographic identifier.
  "
  {:test #(assert
            (= (lookup-id->match? :CONCITY
                 [{:2017 {:wms {:layers ["24"], :lookup [:STATE :CONCITY]},}
                   :2016 {:wms {:layers ["24"], :lookup [:STATE :CONCITY]},}}
                  :consolidated-cities
                  {:2014 {:wms {:layers ["24"], :lookup [:BLOOP]},}
                   :2016 {:wms {:layers ["24"], :lookup [:BLOOP]},}}
                  :something-else])
               :consolidated-cities))}

  [GEO [geo-val geo-key]]
  (let [vins (map (fn [[_ {:keys [id<-json] {:keys [lookup]} :wms}]]
                      (if (instance? ut/vec-type lookup)
                          (last lookup)
                          (last id<-json)))
                  (vec geo-val))]
       (if (some #(= GEO %) vins)
           geo-key
           nil)))

(test geoKey->wms-config)


(defn search-id->match?
  "
  Searches the entire geoKeyMap (inverted) for a geo key match provided a given
  WMS geographic identifier.
  "
  {:test #(assert
            (= (search-id->match? *g* :CONCITY)
              '(:consolidated-cities)))}

  [$g$ GEO]
  (let [inverted-geoKeyMap (seq (map-invert $g$))]
    (remove nil?
      (map #(lookup-id->match? GEO %)
           inverted-geoKeyMap))))

(test search-id->match?)


(defn wms-url-builder
  "
  Constructs a URL for the TigerWeb Web Mapping Service (WMS) using a lookup
  from the geoKeyMap configuration file cross-referenced against the users args.
  "
  {:test #(assert
            (= (wms-url-builder *g* ts/args-ok-wms-only)
               "https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_ACS2014/Mapserver/82/query?geometry=-80.7214,28.2639&geometryType=esriGeometryPoint&inSR=4269&spatialRel=esriSpatialRelIntersects&returnGeometry=false&f=pjson&outFields=STATE"))}

  ([$g$ args] (wms-url-builder $g$ args 0))
  ([$g$ args server-index]
   (let [{:keys [vintage layers cur-layer-idx lat lng geo]}
         (geoKey->wms-config $g$ args server-index)]
     (str ut/base-url-wms
       (cond
         (= "2010" (str vintage)) (str "TIGERweb/tigerWMS_Census2010")
         (= "2000" (str vintage)) (str "Census2010/tigerWMS_Census2000")
         :else                    (str "TIGERweb/tigerWMS_ACS" vintage))
       "/Mapserver/"
       (get layers cur-layer-idx)
       "/query?"
       (s/join "&"
         (map #(s/join "=" %)
              [["geometry" (str lng "," lat)]
               ["geometryType" "esriGeometryPoint"]
               ["inSR" "4269"]
               ["spatialRel" "esriSpatialRelIntersects"]
               ["returnGeometry" "false"]
               ["f" "pjson"]
               ["outFields" (s/join "," (map name geo))]]))))))

(test wms-url-builder)


(defn configed-map
  "
  Takes the geoKeyMap configuration and the attributes from the WMS service
  API (js->cljs response) and returns a config map (:key = attribute ; value =
  corresponding configured map with (:geography 'value') needed to call Census'
  data API).
  "
  {:test #(assert (= (configed-map *g* {:STATE "51", :COUNTY "013"})
                     {:STATE {:state "51"}, :COUNTY {:county "013"}}))}

  [$g$ attrs]
  (let [wms-keys (sp/select sp/MAP-KEYS attrs)
        wms-vals (sp/select sp/MAP-VALS attrs)
        geo-keys (map #(search-id->match? $g$ %)
                      wms-keys)]
    (loop [idx 0
           result {}]
      (if (= nil (get wms-keys idx))
        result
        (recur (inc idx)
               (assoc result
                      (get wms-keys idx)
                      {(get (sp/select [sp/ALL sp/ALL] geo-keys) idx)
                       (get wms-vals idx)}))))))

(test configed-map)

(comment
  (configed-map
    *g*
    (get-in
     {:displayFieldName "BASENAME",
      :fieldAliases     {:STATE "STATE", :COUNTY "COUNTY"},
      :fields           [{:name   "STATE",
                          :type   "esriFieldTypeString",
                          :alias  "STATE",
                          :length 2}
                         {:name   "COUNTY",
                          :type   "esriFieldTypeString",
                          :alias  "COUNTY",
                          :length 3}],
      :features         [{:attributes {:STATE "51", :COUNTY "013"}}]}
     [:features 0 :attributes])))


(defn try-census-wms
  "
  Takes the geoKeyMap with the users' arguments, a current WMS server index (used
  for retrying if more than one exists for a given geography in WMS) and a
  channel that will convey the result. Tries to cal the WMS and puts the
  `configed-map` into the channel if successful.
  "
  {:test-location "census.test.tests"}

  [$g$ args server-idx =res=]
  (<|/go (let [=args= (<|/chan 1 (map #(configed-map $g$ (get-in % [:features 0 :attributes]))))
               url    (wms-url-builder $g$ args server-idx)]
              ((ut/I=O<<=IO= ut/IO-ajax-GET-json) url =args=)
              (<|/>! =res= (<|/<! =args=))
              (<|/close! =args=))))


(defn wms-engage?
  "
  Engages the wms-service workflow if the first element in the geoHierarchy
  contains a map argument, which implies that the user doesn't have a GEOID handy.
  "
  {:test #(assert
            (and (= (wms-engage? {:geoHierarchy {:county {:lat 1 :lng -7} :tract "*"}})
                    true)
                 (= (wms-engage? {:geoHierarchy {:county "01" :tract "*"}})
                    false)))}

  [{:keys [geoHierarchy]}]
  (let [[_ geo-val] (first geoHierarchy)]
    (if (instance? ut/amap-type geo-val)
      true
      false)))

(wms-engage? {:geoHierarchy {:county "01" :tract "*"}})

(test wms-engage?)

#_(let [=url= (<|/chan 1)
        =geo= (<|/chan 1)]
    (<|/go (<|/>! =url= ut/base-url-geoKeyMap)
           ((ut/IO-cache-GET-edn $geoKeyMap$) =url= =geo=)
           (prn (<|/<! =geo=))))

(defn IO-census-wms
  "
  Fetches a remote geoKeyMap resource and caches it to local atom ($geoKeyMap$)
  then tries to find the appropriate geographic identifiers for a provided
  geoHierarchy argument, which contains a {:lat <float> :lng <float>} coordinate
  instead of an actual FIPS code set. If FIPS are already provided, this step is
  skipped.
  "
  {:test-location "census.test.tests"}

  [=args-in= =args-out=]
  (let [=geo= (<|/chan 1)]
    ((ut/I=O<<=IO= (ut/IO-cache-GET-edn $geoKeyMap$)) ut/base-url-geoKeyMap =geo=)
    (<|/go
      (let [args-in (<|/<! =args-in=)
            $g$     (<|/<! =geo=)
            =res=   (<|/chan 1)]
        (if (wms-engage? args-in)
          (loop [args args-in
                 idx 0]
            (try-census-wms $g$ args idx =res=)
            (let [{:keys [layers sub-level]} (geoKey->wms-config $g$ args)
                  result (<|/<! =res=)]
              (cond
                (not (empty? result))
                (do (<|/>! =args-out=
                      (sp/transform :geoHierarchy #(into {} %)
                        (sp/setval :geoHierarchy
                          (conj (-=-/map)
                            (into (-=-/map) (sp/traverse sp/MAP-VALS result))
                            (into (-=-/map) [sub-level]))
                          args)))
                    (<|/close! =res=)
                    (<|/close! =geo=))
                (and (empty? result) (not (nil? (get layers (inc idx)))))
                (recur args (inc idx))
                :else
                (do (<|/>! =args-out= (str "No Geography found for this lat/lng pair"))
                    (<|/close! =res=)
                    (<|/close! =geo=)))))
          (do (<|/>! =args-out= args-in)
              (<|/close! =res=)
              (<|/close! =geo=)))))))


; TODO setup tests with wms/Icb<-wms-args<<=IO=

(defn Icb<-wms-args<<=IO=
  "
  Version of ut/Icb<<=IO=, which checks for args which require conversion from WMS.
  "
  {:test-location "census.test.tests"}

  [f]                                     ; takes an async I/O function
  (fn [I cb]                              ; returns a function with sync input  / callback for output
    (let [=O=    (<|/chan 1 (map ut/throw-err))
          =args= (<|/chan 1)              ; this is an add-on to engage wms if needed
          args   (ut/js->args I)]         ; converts any #js types to cljs with proper keys
      (<|/go ((ut/I=O<<=IO= IO-census-wms) args =args=)
             (f =args= =O=)               ; apply the async I/O function with the internal `chan`s
             (<|/take! =O= #(do (cb %)    ; use async `take!` to allow lambdas/closures
                                (<|/close! =O=)
                                (<|/close! =args=)))))))

