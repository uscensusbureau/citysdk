(ns census.core
  (:require
    [cljs.core.async      :refer-macros [go]
                          :refer [chan >! <! close! pipeline-async to-chan take!
                                  put! promise-chan]]
    [defun.core           :refer-macros [defun]]
    [cuerdas.core         :refer [join split]]
    [census.utils.core    :refer [throw-err err-type =O?>-cb ->args
                                  $GET$ URL-GEOKEYMAP amap-type]]
    [census.wmsAPI.core   :refer [=>args=census-wms=args=> I-<wms=I=]]
    [census.geoAPI.core   :refer [IOE-census-GeoJSON-str pre-cfg-Census-GeoCLJ]]
    [census.statsAPI.core :refer [IOE->census-stats pre-cfg-Census-Stats]]
    [census.merger.core   :refer [merge-spooler]]
    [test.fixtures.core   :as ts]))


(def err-no-values "When using `predicates`, you must also supply at least one value to `values`")

(defun deploy-census-function
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

#_(deploy-census-function
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
        (let [deploy (deploy-census-function args)]
          (prn deploy)
          (case deploy
            :stats+geos ((merge-spooler $g$ (to-chan [args]) [pre-cfg-Census-Stats pre-cfg-Census-GeoCLJ]) =O= =E=)
            :stats-only (IOE->census-stats (to-chan [args]) =O= =E=)
            :geos-only  ((IOE-census-GeoJSON-str $g$) (to-chan [args]) =O= =E=)
            :geocodes   ((=>args=census-wms=args=> $g$) (to-chan [args]) =O= =E=)
            :no-values  (put! =E= err-no-values)
            (prn "No matching clause for the arguments provided. Please check arguments against requirements")))))))


(def $GET$-geoKeyMap ($GET$ :edn "Unsuccessful fetch for geoKeyMap (configuration)"))

(def =GKM= (promise-chan))

($GET$-geoKeyMap (to-chan [URL-GEOKEYMAP]) =GKM=)

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



(defn test-async-time
  [args f]
  (let [time-in (js/Date.)]
     (census args
             (fn [err res] (if res
                             (do (f res)
                                 (prn (str "Elapsed ms: "(- (js/Date.) time-in))))
                             (prn "Error: " err))))))

(prn ts/args-ok-s+g-vals)
(comment
  (test-async-time ts/args-ok-wms-only prn)
  (test-async-time (ts/test-args 9 3 3 0) prn)
  ;(test-async-time ts/args-ok-geo-only prn) ; 1st = "Elapsed ms: 22589" 2nd = "Elapsed ms: 18298" 3rd = "Elapsed ms: 37648"
  (test-async-time ts/args-ok-s+g-v+ps js/console.log) ; "Elapsed ms: 2444"
  (test-async-time ts/args-ok-s+g-v+ps prn)
  ; { rss: 267894784,
  ;   heapTotal: 243630080,
  ;   heapUsed: 194502992,
  ;   external: 112275
  (test-async-time ts/args-ok-s+g-vals prn)
  (test-async-time ts/args-na-sts-pred prn)
  (test-async-time ts/args-ok-sts-v+ps prn)
  (test-async-time ts/args-ok-sts-vals prn)
  (test-async-time {:vintage 2016
                    :sourcePath ["acs" "acs5"]
                    :values ["B25001_001E"]
                    :geoHierarchy {:state "42"
                                   :county "003"
                                   :county-subdivision "*"}
                    :geoResolution "4k"
                    :statsKey ts/stats-key}
                   prn)

  (test-async-time {:vintage 2016
                    :sourcePath ["acs" "acs5"]
                    :values ["B25001_001E"]
                    :geoHierarchy {:county "*"}
                    :geoResolution "500k"
                    :statsKey ts/stats-key}
                   prn)
  ;tests:
  ; original = "Elapsed ms: 11365"
  ; changed group = "Elapsed ms: 11857"
  ; changed deep-merge= "Elapsed ms: 11974"
  ; returning a seq: "Elapsed ms: 13317"
  ; 4: "Elapsed ms: 11447"

  (test-async-time {:vintage 2016
                    :sourcePath ["acs" "acs5"]
                    :values ["B25001_001E"]
                    :geoHierarchy {:state "42"
                                   :county "003"
                                   :tract "*"}
                    :geoResolution "500k"
                    :statsKey ts/stats-key}
                   prn)
  (test-async-time {:vintage 2016
                    :sourcePath ["acs" "acs5"]
                    :values ["B25001_001E"]
                    :geoHierarchy {:state "42"
                                   :county "003"
                                   :block-group "*"}
                    :geoResolution "500k"
                    :statsKey ts/stats-key}
                   prn)
  (test-async-time {:vintage 2016
                    :sourcePath ["acs" "acs5"]
                    :values ["B01001_001E"]
                    :geoHierarchy {:state "50"
                                   :school-district-_elementary_ "*"}
                    :geoResolution "500k"
                    :statsKey ts/stats-key}
                   prn)
  (test-async-time {:vintage 2016
                    :sourcePath ["acs" "acs5"]
                    :values ["B25001_001E"]
                    :geoHierarchy {:zip-code-tabulation-area "*"}
                    :geoResolution "500k"
                    :statsKey ts/stats-key}
                   prn))


