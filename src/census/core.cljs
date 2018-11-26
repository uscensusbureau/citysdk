(ns census.core
  (:require
    [cljs.core.async      :refer-macros [go]
                          :refer [chan >! <! close! pipeline-async
                                  promise-chan]
                          :as <|]
    [defun.core           :refer-macros [defun]]
    [cuerdas.core         :refer [join split]]
    [census.utils.core    :refer [throw-err err-type I=O<<=IO= ->args $geoKeyMap$
                                  IO-cache-GET-edn URL-GEOKEYMAP]]
    [census.wmsAPI.core   :refer [IOE-census-wms Icb<-wms-args<<=IO=]]
    [census.geoAPI.core   :refer [cfg-Census-GeoCLJ -<IO-pp-census-geos>-
                                  ids<-$g$<<args]]
    [census.statsAPI.core :refer [IO-pp->census-stats -<IO-pp-census-stats>-]]
    [census.merger.core   :refer [IO-merge]]
    [net.cgrand.xforms    :as x]
    [test.fixtures.core   :as ts]))
    ;[clojure.test         :as test
    ;                      :refer-macros [async deftest is testing run-tests]]
    ;[taoensso.tufte       :refer-macros [defnp p profiled profile]
    ;                      :as tufte]))


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

(defn IO-census
  [$g$]
  (fn [=I= =O=]
    (go (let [args    (<! =I=)
              deploy  (deploy-census-function args)
              key-g   (first ((ids<-$g$<-args $g$) args))
              key-s   (keyword (first (get args :values)))
              =geos?= (chan 1)]
          (prn deploy)
          (case deploy
                :stats+geos
                (go ((I=O<<=IO= (-<xf+IOE-census-geos>- $g$)) args =geos?=)
                    (if-let [geos (<! =geos?=)]
                            (go (close! =geos?=)
                                (let [=stats= (chan 1)]
                                     ((I=O<<=IO= -<IO-pp-census-stats>-) args =stats=)
                                     ((IO-merge [key-g key-s]) [geos (<! =stats=)] =O=)
                                     (close! =stats=)))
                      (go (close! =geos?=))))
                :stats-only ((I=O<<=IO= IOE->census-stats)         args =O=)
                :geos-only  ((I=O<<=IO= (cfg-Census-GeoCLJ $g$)) args =O=)
                :geocodes   ((I=O<<=IO= (IOE-census-wms $g$))         args =O=)
                :no-values  (>! =O= err-no-values)
                (prn "No matching clause for the arguments provided. Please check arguments against requirements"))))))


(let [args {:vintage       "2016"
            :geoHierarchy  {:state "01" :state-legislative-district-_upper-chamber_ "*"}
            :sourcePath    ["acs" "acs5"]
            :geoResolution "500k"
            :values        ["B01001_001E"]}
      =I= (chan 1)
      =O= (chan 1 (map throw-err))]
  (go (>! =I= args)
      ;(prn args)
      (IO-census =I= =O=)
      (prn (<! =O=))
      (close! =I=)))
      ;(close! =O=)))

(defn census
  [I cb]
  (let [=GKM= (chan 1)]
    ((I=O<<=IO= (IO-cache-GET-edn $geoKeyMap$)) URL-GEOKEYMAP =GKM=)
    (go (let [$g$ (<! =GKM=)]
          (close! =GKM=)
          (((Icb<-wms-args<<=IO= $g$) (IO-census $g$))
           I
           (fn [res] (cb (clj->js res))))))))



(defn test-async-time
  [args f]
  (let [time-in (js/Date.)]
     (census args
             (fn [res] (do (f res)
                           (prn (str "Elapsed ms: "(- (js/Date.) time-in))))))))

(prn ts/args-ok-s+g-vals)
(comment
  (test-async-time ts/args-ok-wms-only prn)
  (test-async-time (ts/test-args 9 3 3 0) prn)
  (test-async-time ts/args-ok-geo-only prn) ; 1st = "Elapsed ms: 22589" 2nd = "Elapsed ms: 18298" 3rd = "Elapsed ms: 37648"
  (test-async-time ts/args-ok-s+g-v+ps prn) ; "Elapsed ms: 2444"
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


