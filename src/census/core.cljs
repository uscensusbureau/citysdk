(ns census.core
  (:require
    [cljs.core.async :as <|]
    [defun.core :refer-macros [defun]]
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
  ([{:vintage _ :geoHierarchy _                                                                   }] :geocodes))

(deploy-census-function
  ts/test-args-1)
  ;ts/test-args-2)
  ;ts/test-args-3)
  ;ts/test-args-4)


(defn IO-census
  [=I= =O=]
  (<|/go (let [args (<|/<! =I=)
               deploy (deploy-census-function args)]
           (prn deploy)
           (cond
             (= deploy :stats+geos) ((ut/I=O<<=IO= IO-geo+stats)          args =O=)
             (= deploy :stats-only) ((ut/I=O<<=IO= IO-pp->census-stats)   args =O=)
             (= deploy :geos-only)  ((ut/I=O<<=IO= IO-pp->census-GeoJSON) args =O=)
             (= deploy :geocodes)   ((ut/I=O<<=IO= IO-census-wms)         args =O=)))))


#_(<|/go (let [=I= (<|/chan 1)
               =O= (<|/chan 1)]
           (<|/>! =I= ts/test-args-6)
           (IO-census =I= =O=)
           (prn (<|/<! =O=))
           (<|/close! =I=)
           (<|/close! =O=)))

(defn census
  [I cb]
  ((Icb<-args<<=IO= IO-census) I #(cb (js/JSON.stringify (clj->js %)))))

(census ts/test-js-args-1 js/console.log)