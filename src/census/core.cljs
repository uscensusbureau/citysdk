(ns census.core
  (:require
    [cljs.core.async :as <|]
    [defun.core :refer-macros [defun]]
    [cuerdas.core :as s]
    [census.utils.core :as ut :refer [stats-key]]
    [census.test.core :as ts]
    [census.wmsAPI.core   :refer [IO-census-wms Icb<-wms-args<<=IO=]]
    [census.geoAPI.core   :refer [IO-pp->census-GeoJSON]]
    [census.statsAPI.core :refer [IO-pp->census-stats]]
    [census.merger.core   :refer [IO-geo+stats]]
    [census.geojson.core  :refer [geo+config->mkdirp->fsW!]]))


(def err-no-values "When using `predicates`, you must also supply at least one value to `values`")

(defun deploy-census-function
  "
  takes a pattern of args and deploys one of the various underlying functions
  of this library.
  "
  ([{:vintage _ :geoHierarchy _ :predicates _ :values _ :statsKey _ :sourcePath _ :geoResolution _}] :stats+geos)
  ([{:vintage _ :geoHierarchy _               :values _ :statsKey _ :sourcePath _ :geoResolution _}] :stats+geos)
  ([{:vintage _ :geoHierarchy _ :predicates _ :values _ :statsKey _ :sourcePath _                 }] :stats-only)
  ([{:vintage _ :geoHierarchy _               :values _ :statsKey _ :sourcePath _                 }] :stats-only)
  ([{:vintage _ :geoHierarchy _ :predicates _           :statsKey _ :sourcePath _ :geoResolution _}] :no-values)
  ([{:vintage _ :geoHierarchy _ :predicates _           :statsKey _ :sourcePath _                 }] :no-values)
  ([{:vintage _ :geoHierarchy _                                                   :geoResolution _}] :geos-only)
  ([{:vintage _ :geoHierarchy _                                                                   }] :geocodes)
  ([& anything-else] nil))

(deploy-census-function
  ;ts/args-ok-wms-only
  ;ts/args-ok-geo-only
  ;ts/args-ok-s+g-v+ps
  ;ts/args-ok-s+g-vals
  ;ts/args-ok-sts-pred
  ;ts/args-ok-sts-v+ps
  ;ts/args-ok-sts-vals
  ts/args-na-geo-only)


#_(prn ts/args-ok-wms-only)

(defn IO-census
  [=I= =O=]
  (<|/go (let [args   (<|/<! =I=)
               deploy (deploy-census-function args)]
           (prn deploy)
           (case deploy
                 :stats+geos ((ut/I=O<<=IO= IO-geo+stats)          args =O=)
                 :stats-only ((ut/I=O<<=IO= IO-pp->census-stats)   args =O=)
                 :geos-only  ((ut/I=O<<=IO= IO-pp->census-GeoJSON) args =O=)
                 :geocodes   ((ut/I=O<<=IO= IO-census-wms)         args =O=)
                 :no-values  (<|/>! =O= err-no-values)
                 (prn "No matching clause for the arguments provided. Please check arguments against requirements")))))


(<|/go (let [=I= (<|/chan 1)
             =O= (<|/chan 1 (map ut/throw-err))]
         (<|/>! =I= ts/args-ok-sts-vals)
         (IO-census =I= =O=)
         (prn (<|/<! =O=))
         (<|/close! =I=)
         (<|/close! =O=)))

(defn census
  [I cb?]
  (if (= (type cb?) js/String)
    (let [directory (str (s/join "/" (butlast (s/split cb? "/"))) "/")]
      ((Icb<-wms-args<<=IO= IO-census) I
         #(geo+config->mkdirp->fsW!
            {:filepath cb?
             :directory directory
             :json (js/JSON.stringify (clj->js %))})))
    ((Icb<-wms-args<<=IO= IO-census) I #(cb? (js/JSON.stringify (clj->js %))))))



#_(type (clj->js "string"))
#_(type (clj->js (js/console.log "test")))
(comment
  (census ts/args-ok-wms-only prn)
  (census (ts/test-args 9 3 3 0) js/console.log)
  (census ts/args-ok-geo-only js/console.log)
  (census ts/args-ok-s+g-v+ps "./json/s-g.json")
  (census ts/args-ok-s+g-v+ps js/console.log)
  (census ts/args-ok-s+g-vals "./json/s_1.json")
  (census ts/args-na-sts-pred "./json/sts-pred.json")
  (census ts/args-ok-sts-v+ps js/console.log)
  (census ts/args-ok-sts-vals js/console.log)
  (census {:vintage 2016
           :sourcePath ["acs" "acs5"]
           :values ["B25001_001E"]
           :geoHierarchy {:state "42"
                          :county "003"
                          :county-subdivision "*"}
           :geoResolution "500k"
           :statsKey stats-key}
          "./json/Census_County-and-Subdivisions_.json")
  (census {:vintage 2016
           :sourcePath ["acs" "acs5"]
           :values ["B25001_001E"]
           :geoHierarchy {:state "42"
                          :county "003"
                          :tract "*"}
           :geoResolution "500k"
           :statsKey stats-key}
          "./json/Census_County-and-Tracts_.json")
  (census {:vintage 2016
           :sourcePath ["acs" "acs5"]
           :values ["B25001_001E"]
           :geoHierarchy {:state "42"
                          :county "003"
                          :block-group "*"}
           :geoResolution "500k"
           :statsKey stats-key}
          "./json/Census_County-and-Block-Groups_.json")
  (census {:vintage 2016
           :sourcePath ["acs" "acs5"]
           :values ["B01001_001E"]
           :geoHierarchy {:state "50"
                          :school-district-_elementary_ "*"}
           :geoResolution "500k"
           :statsKey stats-key}
          "./json/Census_State-and-School-Districts_.json")
  (census {:vintage 2016
           :sourcePath ["acs" "acs5"]
           :values ["B25001_001E"]
           :geoHierarchy {:zip-code-tabulation-area "*"}
           :geoResolution "500k"
           :statsKey stats-key}
          "./json/Census_ZCTAs_.json"))


