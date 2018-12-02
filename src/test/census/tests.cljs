(ns test.census.tests
  (:require
    [cljs.core.async      :refer [chan close! >! <! timeout to-chan promise-chan]
     :refer-macros [go alt!]]
    [cljs.test            :refer-macros [async deftest is testing run-tests]]
    [test.fixtures.core   :refer [*g* test-async test-async-timed
                                  time-spot heap-spot]
                          :as ts]
    [census.utils.core    :refer [URL-GEOKEYMAP $GET$]]
    [census.statsAPI.core :refer [cfg>cfg=C-Stats]]
    [census.geoAPI.core   :refer [cfg>cfg=C-GeoCLJ]]
    [census.core          :refer [core-pattern
                                  IOE-Census
                                  census]]))



(defn test-async-time
  [args f]
  (let [time-in (js/Date.)]
    (census args
      (fn [err res]
        (if res
            (do (f res)
                (prn (str "Elapsed ms: "(- (js/Date.) time-in))))
            (prn "Error: " err))))))

(comment
  (test-async-time ts/args-ok-wms-only js/console.log) ; :geocodes   ms = 275
  (test-async-time (ts/test-args 9 3 3 0) prn)         ; :geocodes   ms = 362
  (test-async-time ts/args-ok-s+g-v+ps js/console.log) ; :stats+geos ms = 2747
  (test-async-time ts/args-ok-s+g-v+ps prn)            ; :stats+geos ms = 274
  (test-async-time ts/args-ok-s+g-vals prn)            ; :stats+geos ms = 1852
  (test-async-time ts/args-na-sts-pred prn)            ; :no-values
  (test-async-time ts/args-ok-sts-v+ps prn)            ; :stats-only ms = 384
  (test-async-time ts/args-ok-sts-vals prn)            ; :stats-only ms = 757
  (test-async-time {:vintage 2016                      ; :stats+geos NA
                    :sourcePath ["acs" "acs5"]
                    :values ["B25001_001E"]
                    :geoHierarchy {:state "42"
                                   :county "003"
                                   :county-subdivision "*"}
                    :geoResolution "4k"
                    :statsKey ts/stats-key}
                   prn)
  (test-async-time {:vintage 2016                      ; :stats-only ms = 158
                    :sourcePath ["acs" "acs5"]
                    :values ["B25001_001E"]
                    :geoHierarchy {:state "42"
                                   :county "*"}
                    :statsKey ts/stats-key}
                   prn)

  (test-async-time {:vintage 22                      ; :stats+geos ms = 22034
                    :sourcePath ["acs" "acs5"]
                    :values ["B25001_001E"]
                    :geoHierarchy {:county "*"}
                    :geoResolution "500k"
                    :statsKey ts/stats-key}
                   prn)

  (test-async-time {:vintage 2016                       ; :stats+geos ms = 2316
                    :sourcePath ["acs" "acs5"]
                    :values ["B25001_001E"]
                    :geoHierarchy {:state "42"
                                   :county "003"
                                   :tract "*"}
                    :geoResolution "500k"
                    :statsKey ts/stats-key}
                   prn)
  (test-async-time {:vintage 2016                       ; :stats+geos ms = 3810
                    :sourcePath ["acs" "acs5"]
                    :values ["B25001_001E"]
                    :geoHierarchy {:state "42"
                                   :county "003"
                                   :block-group "*"}
                    :geoResolution "500k"
                    :statsKey ts/stats-key}
                   prn)
  (test-async-time {:vintage 2016                       ; :stats+geos ms = 258
                    :sourcePath ["acs" "acs5"]
                    :values ["B01001_001E"]
                    :geoHierarchy {:state "50"
                                   :school-district-_elementary_ "*"}
                    :geoResolution "500k"
                    :statsKey ts/stats-key}
                   prn)
  (test-async-time {:vintage 2016  ; FATAL ERROR: FIXME: WEB WORKERS?
                    :sourcePath ["acs" "acs5"]
                    :values ["B25001_001E"]
                    :geoHierarchy {:zip-code-tabulation-area "*"}
                    :geoResolution "500k"
                    :statsKey ts/stats-key}
                   prn))
