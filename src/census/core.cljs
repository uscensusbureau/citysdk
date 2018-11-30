(ns census.core
  (:require
    [cljs.core.async      :refer [chan close! to-chan take!
                                  put! promise-chan]]
    [defun.core           :refer-macros [defun]]
    [census.utils.core    :refer [throw-err err-type =O?>-cb ->args
                                  $GET$ URL-GEOKEYMAP amap-type]]
    [census.wmsAPI.core   :refer [=>args=GIS=args=> I-<wms=I=]]
    [census.geoAPI.core   :refer [IOE-C-GeoJSON cfg>cfg=C-GeoCLJ]]
    [census.statsAPI.core :refer [IOE-C-S->JSON cfg>cfg=C-Stats]]
                                  ;IOE-C->stats ]]
    [census.merger.core   :refer [I=OE-M-spooler]]))


(def err-no-vals "When using `predicates`, you must also supply at least one value to `values`")

(defun core-pattern
  "
  takes a pattern of args and deploys one of the various underlying functions
  of this library.
  "
  ([{:vintage _ :geoHierarchy _ :predicates _ :values _ :sourcePath _ :geoResolution _}] :stats+geos)
  ([{:vintage _ :geoHierarchy _               :values _ :sourcePath _ :geoResolution _}] :stats+geos)
  ([{:vintage _ :geoHierarchy _ :predicates _ :values _ :sourcePath _                 }] :stats-only)
  ([{:vintage _ :geoHierarchy _               :values _ :sourcePath _                 }] :stats-only)
  ([{:vintage _ :geoHierarchy _ :predicates _           :sourcePath _ :geoResolution _}] :no-values)
  ([{:vintage _ :geoHierarchy _ :predicates _           :sourcePath _                 }] :no-values)
  ([{:vintage _ :geoHierarchy _                                       :geoResolution _}] :geos-only)
  ([{:vintage _ :geoHierarchy _                                                       }] :geocodes)
  ([& anything-else] nil))

#_(core-pattern
    ts/args-ok-wms-only)
    ;ts/args-ok-geo-only
    ;ts/args-ok-s+g-v+ps
    ;ts/args-ok-s+g-vals
    ;ts/args-ok-sts-pred
    ;ts/args-ok-sts-v+ps
    ;ts/args-ok-sts-vals
    ;ts/args-na-geo-only)

#_(prn ts/args-ok-wms-only)


(defn IOE-Census
  [$g$]
  (fn [=I= =O= =E=]
    (take! =I=
      (fn [args]
        (let [deploy (core-pattern args)]
          (prn deploy)
          (case deploy
            :stats+geos ((I=OE-M-spooler $g$ (to-chan [args]) [cfg>cfg=C-Stats cfg>cfg=C-GeoCLJ]) =O= =E=)
            :stats-only (IOE-C-S->JSON       (to-chan [args]) =O= =E=)
            :geos-only  ((IOE-C-GeoJSON $g$) (to-chan [args]) =O= =E=)
            :geocodes   ((=>args=GIS=args=> $g$) (to-chan [args]) =O= =E=)
            :no-values  (put! =E= err-no-vals)
            (prn "No matching clause for the arguments provided. Please check arguments against requirements")))))))


(def $GET$-GeoKeyMap ($GET$ :edn "Unsuccessful fetch for configuration."))

(def =GKM= (promise-chan))

($GET$-GeoKeyMap (to-chan [URL-GEOKEYMAP]) =GKM= :silent)

(defn census
  [I cb]
  (let [=args=> (chan 1)
        =O=     (chan 1)
        =E=     (chan 1)]
    (take! =GKM=
      (fn [$g$]
        ((I-<wms=I= $g$) I =args=>)
        (take! =args=>
          (fn [?args]
            (if (= (type ?args) amap-type)
                (do ((IOE-Census $g$) (to-chan [?args]) =O= =E=)
                    (take! =O= (fn [r] (cb nil r)))
                    (take! =E= (fn [e] (cb e nil))))
                (cb ?args nil))))))))


