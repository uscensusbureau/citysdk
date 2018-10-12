(ns wmsAPI.core
  (:require
    [cljs.core.async
     :refer [chan put! take! >! <! pipe timeout close! alts! pipeline
             pipeline-async promise-chan]
     :as async
     :refer-macros [go go-loop alt!]]
    [clojure.set :refer [map-invert]]
    [ajax.core :refer [GET POST]]
    [cljs.pprint :refer [pprint]]
    [clojure.repl :refer [source]]
    [cuerdas.core :as s]
    [geoAPI.core :refer [IO-pp->census-GeoJSON]]
    [geojson.index :refer [geoKeyMap]]
    [statsAPI.core
     :refer [IO-pp->census-stats stats-key]]
    [geojson.core
     :refer [geo+config->mkdirp->fsW!]]
    [utils.core
     :refer [throw-err strs->keys keys->strs map-idcs-range
             I=O<<=IO= Icb<<=IO= IO-ajax-GET-json xfxf<< xf!<< xf<<
             json-geo-args?->clj-keys]]))

(def base-url "https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_")

"https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_ACS2016/MapServer/10/query?geometry=-87.240372%2C30.433283&geometryType=esriGeometryPoint&inSR=4269&spatialRel=esriSpatialRelIntersects&outFields=*&returnGeometry=false&f=pjson"


(def test-args {:vintage       "2016"
                :sourcePath    ["acs" "acs5"]
                ;:geoHierarchy  {:state "12" :state-legislative-district-_upper-chamber_ "*"}
                ;:geoHierarchy  {:county {:lat 38.8816 :lng -77.0910} :tract "*"} ;; @ 1 minute
                :geoHierarchy  {:consolidated-cities {:lat 38.8816 :lng -77.0910}}
                ;:geoHierarchy  { :state "12" :county "*"}
                ;:geoHierarchy {:zip-code-tabulation-area "*"} ; @ 17 minutes for completion
                :geoResolution "500k"
                :values        ["B01001_001E" "NAME"]
                ;:predicates    {:B00001_001E "0:30000"} ;; add `:predicates` and count them for `vars#`
                :statsKey      stats-key})

(type {:k "v"})

(defn wms-engage?
  "
  Engages the wms-service workflow if the first element in the geoHierarchy
  contains a map argument, which implies that the user doesn't have a GEOID handy.
  "
  [{:keys [geoHierarchy]}]
  (let [[_ v] (first geoHierarchy)]
    (if (= (type v) cljs.core/PersistentArrayMap)
      true
      false)))

(wms-engage? test-args)

(vec {:county {:lat 38.8816 :lng -77.0910} :tract "*"})

(defn geoKey->wmsGEO
  "
  Creates a configuration map for the WMS url-builder from the geoHierarchy map.
  "
  ([args] (geoKey->wmsGEO args 0))
  ([{:keys [geoHierarchy vintage]} server-index]
   (let [[[scope {:keys [lat lng]}] sub] (vec geoHierarchy)
         wms       (get-in geoKeyMap [scope (keyword vintage) :wms])
         out       (get-in wms [:lookup])
         layers    (get-in wms [:layers])
         layers#   (count layers)
         layer     (get-in layers [server-index])
         res       {:layers# layers#
                    :cur-layer-idx server-index
                    :layer layer
                    :lat lat
                    :lng lng
                    :sub sub}]
     (if (= (type out) cljs.core/PersistentVector)
      (merge-with assoc res {:outFields out})
      (merge-with assoc res {:outFields (get-in geoKeyMap [scope out :id<-json])})))))

(geoKey->wmsGEO test-args)

(def theObjINeed
  {:layer "00"
   :outFields [:FOO :BAR]
   :new-args {:geoHierarchy {:foo-key "FOO-VAL"
                             :bar-key "BAR-VAL"
                             :target? "*"}}})

(merge-with assoc (:new-args theObjINeed) {:c "c"})


;    ~~~888~~~   ,88~-_   888~-_     ,88~-_
;       888     d888   \  888   \   d888   \
;       888    88888    | 888    | 88888    |
;       888    88888    | 888    | 88888    |
;       888     Y888   /  888   /   Y888   /
;       888      `88_-~   888_-~     `88_-~

; TODO: create functions:
(comment [1 "a `wmsGEO->geoKey` lookup to get `:geoHeirarchy` conforming args = a function to lookup each of the `:outFields` in the returned vector (from `geoKey->wmsGEO` function)"
          2 "a function that merges the returned FIPS codes into the conforming args"
          3 "IO-wms-GET function"])

(defn geoKeyMatch?
  [vec-o-KEYS]
  (map find (map-inverted)))


(defn wms-url-builder
  ([args] (wms-url-builder args 0))
  ([{:keys [geoHierarchy vintage]} server-index]
   (let [[[scope [lat lng]] _] (vec geoHierarchy)
         wms       (get-in geoKeyMap [scope (keyword vintage) :wms])
         out       (get-in wms [:lookup])
         layers    (get-in wms [:layers])
         layer     (get-in layers [server-index])]
     (str base-url
          (if (= "2010" (str vintage))
            "Census2010"
            (str "ACS" vintage))
          "/Mapserver/"
          layer
          "/query?"
          (s/join
            "&"
            (map #(s/join "=" %)
                 [["geometry"       (str lng "," lat)]
                  ["geometryType"   "esriGeometryPoint"]
                  ["inSR"           "4269"]
                  ["spatialRel"     "esriSpatialRelIntersects"]
                  ["returnGeometry" "false"]
                  ["f"              "pjson"]
                  ["outFields" (s/join "," (if (= (type out) cljs.core/PersistentVector)
                                             (map name out)
                                             (map name (get-in geoKeyMap [scope out :id<-json]))))]]))))))


(vec {:county [28.18, -82.46]})

(comment
  (let [[scope [lat lng]] (first geoHierarchy)
        [target _] (last geoHierarchy)])
  (let [[target [lat lng]] (first geoHierarchy)])
  (prn target)
  (prn lat)
  (prn lng))

(type [1 2 3])
(wms-url-builder test-args)