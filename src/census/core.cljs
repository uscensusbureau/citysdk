(ns census.core
  (:require
    [cljs.core.async      :refer-macros [go]
                          :refer [chan >! <! close! pipeline-async]]
    [defun.core           :refer-macros [defun]]
    [cuerdas.core         :refer [join split]]
    [census.utils.core    :refer [throw-err I=O<<=IO= js->args $geoKeyMap$
                                  IO-cache-GET-edn URL-GEOKEYMAP]]
    [census.wmsAPI.core   :refer [IO-census-wms Icb<-wms-args<<=IO=]]
    [census.geoAPI.core   :refer [IO-pp->census-GeoJSON -<IO-pp->census-GeoJSON>-
                                  ids<-$g$<<args]]
    [census.statsAPI.core :refer [IO-pp->census-stats -<IO-pp-census-stats>-]]
    [census.merger.core   :refer [IO-merge]]
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

; GEOAPI ====================================
(let [=I= (chan 1)
      =O= (chan 1 (map throw-err))
      =GKM= (chan 1)]
  ((I=O<<=IO= (IO-cache-GET-edn $geoKeyMap$)) URL-GEOKEYMAP =GKM=)
  (go (let [$g$ (<! =GKM=)]
        (>! =I= {:vintage       "2000"
                 :geoHierarchy  {:state "01" :state-legislative-district-_upper-chamber_ "*"}
                 :sourcePath    ["acs" "acs5"]
                 :geoResolution "500k"
                 :values        ["B01001_001E"]})
        (close! =GKM=)
        ;((IO-pp->census-GeoJSON $g$) =I= =O=)
        ((-<IO-pp->census-GeoJSON>- $g$) =I= =O=)
        (prn (<! =O=))
        (prn "Done with -<IO-pp->census-GeoJSON>-:")
        (js/console.log (js/process.memoryUsage))
        (close! =I=)
        (close! =O=))))
; GEOAPI ====================================

;; STATSAPI ==============================

(let [=I= (chan 1)
      =O= (chan 1)
      args {:vintage      "2016"
            :sourcePath   ["acs" "acs5"]
            :geoHierarchy {:state "01" :county "*"}
            :values       ["B01001_001E" "B01001_001M"]}]
  (go (>! =I= args)
      ;(IO-pp->census-stats =I= =O=)
      (-<IO-pp-census-stats>- =I= =O=)
      (cljs.pprint/pprint (<! =O=))
      (close! =I=)
      (close! =O=)))

;; =======================================



#_(prn ts/args-ok-wms-only)

(defn IO-census
  [=I= =O=]
  (let [=GKM= (chan 1)]
    ((I=O<<=IO= (IO-cache-GET-edn $geoKeyMap$)) URL-GEOKEYMAP =GKM=)
    (go (let [args      (<! =I=)
              deploy    (deploy-census-function args)
              $g$       (<! =GKM=)
              key-geoJS (first ((ids<-$g$<<args $g$) args))
              key-stats (keyword (first (get args :values)))]
          (prn deploy)
          (case deploy
                :stats+geos
                (go ((I=O<<=IO= (-<IO-pp->census-GeoJSON>- $g$)) args =features=)
                    ((I=O<<=IO= -<IO-pp-census-stats>-) args =stats=)
                    ((IO-merge [key-geoJS key-stats]) [=features= =stats=] =O=))
                ;:stats+geos ((I=O<<=IO= IO-geo+stats)          args =O=)
                :stats-only ((I=O<<=IO= IO-pp->census-stats)   args =O=)
                :geos-only  ((I=O<<=IO= (IO-pp->census-GeoJSON =GKM=)) args =O=)
                :geocodes   ((I=O<<=IO= IO-census-wms)         args =O=)
                :no-values  (>! =O= err-no-values)
                (prn "No matching clause for the arguments provided. Please check arguments against requirements"))))))


#_(go (let [=I= (chan 1)
            =O= (chan 1 (map throw-err))]
        (>! =I= {:vintage       "2016"
                 :geoHierarchy  {:state "01" :state-legislative-district-_upper-chamber_ "*"}
                 :sourcePath    ["acs" "acs5"]
                 :geoResolution "500k"
                 :values        ["B01001_001E"]})
        (IO-census =I= =O=)
        (prn (<! =O=))
        (close! =I=)
        (close! =O=)))

(defn census
  [I cb]
  ((Icb<-wms-args<<=IO= IO-census) I #(cb (js/JSON.stringify (clj->js %)))))
#_(let [=args=   (chan 1)
        =cljson= (chan 1 (map clj->js))
        =json=   (chan 1)]
    (go ((I=O<<=IO= IO-census-wms) (js->args I) =args=)
        ;(pipeline-async 1 =args= (I=O<<=IO= IO-census-wms) =arg-in=)
        (pipeline-async 1 =cljson= (I=O<<=IO= IO-census) =args=)
        (pipeline-async 1 =json= I=O=stringify =cljson=)
        (cb (<! =json=))))
      ;((Icb<-wms-args<<=IO= IO-census) I (fn [cljson] (bfj-stringify (clj->js cljson) #(cb %)))))))


()
#_(type (clj->js "string"))
#_(type (clj->js (js/console.log "test")))


(defn test-async-time
  [args f]
  (let [time-in (js/Date.)]
     (census args
             #(do (prn (str "Elapsed ms: "(- (js/Date.) time-in)))
                  (f %)))))

(prn ts/args-ok-s+g-vals)
(comment
  (test-async-time ts/args-ok-wms-only prn)
  (test-async-time (ts/test-args 9 3 3 0) js/console.log)
  (test-async-time ts/args-ok-geo-only js/console.log) ; 1st = "Elapsed ms: 22589" 2nd = "Elapsed ms: 18298"
  (test-async-time ts/args-ok-s+g-v+ps js/console.log) ; "Elapsed ms: 2444"
  (test-async-time ts/args-ok-s+g-v+ps js/console.log)
  ; { rss: 267894784,
  ;   heapTotal: 243630080,
  ;   heapUsed: 194502992,
  ;   external: 112275
  (test-async-time ts/args-ok-s+g-vals js/console.log)
  (test-async-time ts/args-na-sts-pred js/console.log)
  (test-async-time ts/args-ok-sts-v+ps js/console.log)
  (test-async-time ts/args-ok-sts-vals js/console.log)
  (test-async-time {:vintage 2016
                    :sourcePath ["acs" "acs5"]
                    :values ["B25001_001E"]
                    :geoHierarchy {:state "42"
                                   :county "003"
                                   :county-subdivision "*"}
                    :geoResolution "4k"
                    :statsKey ts/stats-key}
                   js/console.log)

  (test-async-time {:vintage 2016
                    :sourcePath ["acs" "acs5"]
                    :values ["B25001_001E"]
                    :geoHierarchy {:county "*"}
                    :geoResolution "500k"
                    :statsKey ts/stats-key}
                   js/console.log)
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
                   js/console.log)
  (test-async-time {:vintage 2016
                    :sourcePath ["acs" "acs5"]
                    :values ["B25001_001E"]
                    :geoHierarchy {:state "42"
                                   :county "003"
                                   :block-group "*"}
                    :geoResolution "500k"
                    :statsKey ts/stats-key}
                   js/console.log)
  (test-async-time {:vintage 2016
                    :sourcePath ["acs" "acs5"]
                    :values ["B01001_001E"]
                    :geoHierarchy {:state "50"
                                   :school-district-_elementary_ "*"}
                    :geoResolution "500k"
                    :statsKey ts/stats-key}
                   js/console.log)
  (test-async-time {:vintage 2016
                    :sourcePath ["acs" "acs5"]
                    :values ["B25001_001E"]
                    :geoHierarchy {:zip-code-tabulation-area "*"}
                    :geoResolution "500k"
                    :statsKey ts/stats-key}
                   js/console.log))


