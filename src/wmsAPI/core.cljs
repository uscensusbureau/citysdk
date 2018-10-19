(ns wmsAPI.core
  (:require
    [cljs.core.async :as <|]
    [clojure.set :refer [map-invert]]
    [cljs.pprint :refer [pprint]]
    [clojure.repl :refer [source]]
    [cuerdas.core :as s]
    [geojson.index :refer [geoKeyMap]]
    [linked.core :as linked]
    [com.rpl.specter :as sp]
    [utils.core :as ut]
    [test.core :as ts]))

(def base-url "https://tigerweb.geo.census.gov/arcgis/rest/services")

(defn geoKey->wms-config
  "
  Creates a configuration map for the WMS url-builder from the geoHierarchy map.
  "
  {:test #(assert
            (= (geoKey->wms-config
                 {:vintage      "2016"
                  :geoHierarchy {:county {:lat 3 :lng -7} :tract "*"}})
               {:vintage       "2016"
                :layers        ["84"]
                :cur-layer-idx 0
                :lat           3
                :lng           -7
                :sub-level     [:tract "*"]
                :geo           [:STATE :COUNTY]
                :lookup-up-in  :2010}))}
  ([args] (geoKey->wms-config args 0))
  ([{:keys [geoHierarchy vintage]} server-index]
   (let [[[scope {:keys [lat lng]}] sub-level] (vec geoHierarchy)
         {:keys [lookup layers]} (get-in geoKeyMap
                                         [scope (keyword (str vintage))
                                          :wms])
         res {:vintage       vintage
              :layers        layers
              :cur-layer-idx server-index
              :lat           lat
              :lng           lng
              :sub-level     sub-level}]
     (if (instance? ut/vec-type lookup)
       (merge-with assoc res
                   {:geo          lookup
                    :looked-up-in (keyword vintage)})
       (merge-with assoc res
                   {:geo          (get-in geoKeyMap [scope lookup :id<-json])
                    :lookup-up-in lookup})))))

;(test geoKey->wms-config)

(defn lookup-id->match?
  "
  Looks in a single entry from the inverted geoKeyMap for a matching geoKey via
  `some`ing through each of its vintages for a match with a provided GEO-Key.
  "
  [GEO-KEY [geo-val geo-key]]
  (let [vins (map (fn [[_ {:keys [id<-json] {:keys [lookup]} :wms}]]
                    (if (instance? ut/vec-type lookup)
                      (last lookup)
                      (last id<-json)))
                  (vec geo-val))]
    (if (some #(= GEO-KEY %) vins)
      geo-key
      nil)))

(defn search-id->match?
  "
  Searches the entire geoKeyMap (inverted) for a geo key match provided a given
  WMS GEO-KEY.
  "
  {:test #(assert
            (and (= (search-id->match? :CONCITY)
                    '(:consolidated-cities))
                 (= (search-id->match? :COUNTY)
                    '(:county))
                 (= (search-id->match? :ZCTA5)
                    '(:zip-code-tabulation-area))))}
  [GEO-KEY]
  (let [inverted-geoKeyMap (seq (map-invert geoKeyMap))]
    (remove nil? (map #(lookup-id->match? GEO-KEY %)
                      inverted-geoKeyMap))))

;(test search-id->match?)


(defn wms-url-builder
  {:test #(assert
            (= (wms-url-builder
                 {:vintage      2010
                  :geoHierarchy {:county {:lat 38.8816 :lng -77.091}
                                 :tract "*"}})
               (str "https://tigerweb.geo.census.gov/arcgis/rest/services"
                     "/TIGERweb/tigerWMS_Census2010/Mapserver/100/query?"
                     "geometry=-77.091,38.8816"
                     "&geometryType=esriGeometryPoint"
                     "&inSR=4269"
                     "&spatialRel=esriSpatialRelIntersects"
                     "&returnGeometry=false"
                     "&f=pjson"
                     "&outFields=STATE,COUNTY")))}

  ([args] (wms-url-builder args 0))
  ([args server-index]
   (let [{:keys [vintage layers cur-layer-idx lat lng geo]}
         (geoKey->wms-config args server-index)]
     (str base-url
          (cond
            (= "2010" (str vintage)) (str "/TIGERweb/tigerWMS_Census2010")
            (= "2000" (str vintage)) (str "/Census2010/tigerWMS_Census2000")
            :else                    (str "/TIGERweb/tigerWMS_ACS" vintage))
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

;(test wms-url-builder)


(defn configed-map
  {:test #(assert
            (= (configed-map {:STATE "51", :COUNTY "013"})
               {:STATE {:state "51"}, :COUNTY {:county "013"}}))}
  [attrs]
  (let [wms-keys (sp/select sp/MAP-KEYS attrs)
        wms-vals (sp/select sp/MAP-VALS attrs)
        geo-keys (map #(search-id->match? %) wms-keys)]
    ;(prn wms-keys wms-vals geo-keys)
    (loop [idx 0
           result {}]
      (if (= nil (get wms-keys idx))
        result
        (recur (inc idx)
               (assoc result
                 (get wms-keys idx)
                 {(get (sp/select [sp/ALL sp/ALL] geo-keys) idx)
                  (get wms-vals idx)}))))))

;(test configed-map)

(comment
  {:displayFieldName "BASENAME",
   :fieldAliases     {:STATE "STATE", :COUNTY "COUNTY"},
   :fields
                     [{:name   "STATE",
                       :type   "esriFieldTypeString",
                       :alias  "STATE",
                       :length 2}
                      {:name   "COUNTY",
                       :type   "esriFieldTypeString",
                       :alias  "COUNTY",
                       :length 3}],
   :features         [{:attributes {:STATE "51", :COUNTY "013"}}]})


(defn try-census-wms
  [args server-idx =res=]
  (<|/go (let [=args= (<|/chan 1 (map #(configed-map (get-in % [:features 0 :attributes]))))
               url (wms-url-builder args server-idx)]
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
  (let [[_ v] (first geoHierarchy)]
    (if (instance? ut/amap-type v)
      true
      false)))

;(test wms-engage?)


(defn IO-census-wms
  [=args-in= =args-out=]
  (<|/go (let [args- (<|/<! =args-in=)
               =res= (<|/chan 1)]
           (if (wms-engage? args-)
               (loop [args args-
                      idx 0]
                 (try-census-wms args idx =res=)
                 (let [{:keys [layers sub-level]} (geoKey->wms-config args)
                       result (<|/<! =res=)]
                      (cond
                        (not (empty? result))
                        (do (<|/>! =args-out=
                                   (sp/transform :geoHierarchy #(into {} %)
                                     (sp/setval :geoHierarchy
                                       (conj (linked/map)
                                         (into (linked/map) (sp/traverse sp/MAP-VALS result))
                                         (into (linked/map) [sub-level]))
                                       args)))
                            (<|/close! =res=))
                        (and (empty? result) (not (nil? (get layers (inc idx)))))
                        (recur args (inc idx))
                        :else (do (<|/>! =args-out= (str "No Geography found for this lat/lng pair"))
                                  (<|/close! =res=)))))
               (do (<|/>! =args-out= args-)
                   (<|/close! =res=))))))


(let [args ts/test-args-3
      =args-in=  (<|/chan 1)
      =args-out= (<|/chan 1)]
  (<|/go (<|/>! =args-in= args)
         (IO-census-wms =args-in= =args-out=)
         (prn (<|/<! =args-out=))
         (<|/close! =args-in=)
         (<|/close! =args-out=)))


(defn Icb<-args<<=IO=
  "
  Version of ut/Icb<<=IO=, which checks for args which require conversion from WMS.
  "
  [f]                                     ; takes an async I/O function
  (fn [I cb]                              ; returns a function with sync input  / callback for output
    (let [=O=    (<|/chan 1 (map ut/throw-err))
          =args= (<|/chan 1)              ; this is an add-on to engage wms if needed
          args   (ut/args-digester I)]    ; converts any #js types to cljs with proper keys
      (<|/go ((ut/I=O<<=IO= IO-census-wms) args =args=)
             (f =args= =O=)               ; apply the async I/O function with the internal `chan`s
             (<|/take! =O= #(do (cb %)    ; use async `take!` to allow lambdas/closures
                                (<|/close! =O=)
                                (<|/close! =args=)))))))


;    ~~~888~~~   ,88~-_   888~-_     ,88~-_
;       888     d888   \  888   \   d888   \
;       888    88888    | 888    | 88888    |
;       888    88888    | 888    | 88888    |
;       888     Y888   /  888   /   Y888   /
;       888      `88_-~   888_-~     `88_-~
