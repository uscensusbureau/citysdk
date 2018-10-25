(ns census.core
  (:require
    [cljs.core.async :as <|]
    [defun.core :refer-macros [defun]]
    [cuerdas.core :as s]
    [utils.core :as ut]
    [test.core :as ts :refer [stats-key]]
    [wmsAPI.core   :refer [IO-census-wms Icb<-args<<=IO=]]
    [geoAPI.core   :refer [IO-pp->census-GeoJSON]]
    [statsAPI.core :refer [IO-pp->census-stats]]
    [merger.core   :refer [IO-geo+stats]]
    [geojson.core  :refer [geo+config->mkdirp->fsW!]]))

(defun deploy-census-function
  "
  takes a pattern of args and deploys one of the various underlying functions
  of this library.
  "
  ([{:vintage _ :geoHierarchy _ :predicates _ :values _ :statsKey _ :sourcePath _ :geoResolution _}] :stats+geos)
  ([{:vintage _ :geoHierarchy _ :predicates _           :statsKey _ :sourcePath _ :geoResolution _}] :stats+geos)
  ([{:vintage _ :geoHierarchy _               :values _ :statsKey _ :sourcePath _ :geoResolution _}] :stats+geos)
  ([{:vintage _ :geoHierarchy _ :predicates _ :values _ :statsKey _ :sourcePath _                 }] :stats-only)
  ([{:vintage _ :geoHierarchy _ :predicates _           :statsKey _ :sourcePath _                 }] :stats-only)
  ([{:vintage _ :geoHierarchy _               :values _ :statsKey _ :sourcePath _                 }] :stats-only)
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


(prn ts/args-ok-wms-only)

(defn IO-census
  [=I= =O=]
  (<|/go (let [args (<|/<! =I=)
               deploy (deploy-census-function args)]
           (prn deploy)
           (cond
             (= deploy :stats+geos) ((ut/I=O<<=IO= IO-geo+stats)          args =O=)
             (= deploy :stats-only) ((ut/I=O<<=IO= IO-pp->census-stats)   args =O=)
             (= deploy :geos-only)  ((ut/I=O<<=IO= IO-pp->census-GeoJSON) args =O=)
             (= deploy :geocodes)   ((ut/I=O<<=IO= IO-census-wms)         args =O=)
             :else (prn "No matching clause for the arguments provided. Please check arguments against requirements")))))


#_(<|/go (let [=I= (<|/chan 1)
               =O= (<|/chan 1)]
           (<|/>! =I= ts/test-args-6)
           (IO-census =I= =O=)
           (prn (<|/<! =O=))
           (<|/close! =I=)
           (<|/close! =O=)))

(defn census
  [I cb?]
  (if (= (type cb?) js/String)
      (let [directory (str (s/join "/" (butlast (s/split cb? "/"))) "/")]
        ((Icb<-args<<=IO= IO-census) I
           #(geo+config->mkdirp->fsW!
              {:filepath cb?
               :directory directory
               :json (js/JSON.stringify (clj->js %))})))
      ((Icb<-args<<=IO= IO-census) I #(cb? (js/JSON.stringify (clj->js %))))))



(type (clj->js "string"))
(type (clj->js (js/console.log "test")))
(comment
  (census ts/args-ok-wms-only prn)
  (census (ts/test-args 9 3 3 0) js/console.log)
  (census ts/args-ok-geo-only js/console.log)
  (census ts/args-ok-s+g-v+ps "./json/s-g.json")
  (census ts/args-ok-s+g-v+ps js/console.log)
  (census ts/args-ok-s+g-vals "./json/s_1.json")
  (census ts/args-na-sts-pred "./json/sts-pred.json")
  (census ts/args-ok-sts-v+ps js/console.log)
  (census ts/args-ok-sts-vals js/console.log))