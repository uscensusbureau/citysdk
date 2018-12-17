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
                                  census]]
    ["fs"                 :as fs]))


(comment
  ;; NOTE: If you need to increase memory of Node in Shadow... Eval in REPL:
  (shadow.cljs.devtools.api/node-repl {:node-args ["--max-old-space-size=4096"]}))
;; or in Node: node --max-old-space-size=4096

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
  (test-async-time ts/args-ok-geo-only js/console.log) ; :geos-only  ms = 20907
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
  (test-async-time {:vintage 2016                      ; ERROR
                    :sourcePath ["acs" "acs5"]
                    :values ["B25001_001E"]
                    :geoHierarchy {:state "42"
                                   :block-group "*"}
                    :geoResolution "500k"
                    :statsKey ts/stats-key}
                   prn)

  (test-async-time {:vintage 2016                      ; :stats+geos ms = 22034
                    :sourcePath ["acs" "acs5"]
                    :values ["B25001_001E"]
                    :geoHierarchy {:county "*"}
                    :geoResolution "500k"
                    :statsKey ts/stats-key}
                   js/console.log)
  (test-async-time {:vintage 2016                      ; :stats+geos ms = 22034
                    :sourcePath ["acs" "acs5"]
                    :values ["B25001_001E"]
                    :geoHierarchy {:county "*"}
                    :geoResolution "500k"
                    :statsKey ts/stats-key}
                   (fn [json] ; <- include err in cb (test-async-time handles here)
                     (let [jsStr (js/JSON.stringify json)]
                       (fs/writeFile
                         "./json/stats_w_geos.json"
                         jsStr
                         #(prn "Done")))))
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
                   js/console.log))
; GINI INDEX
(test-async-time {:vintage 2016                       ; :stats+geos ms = 258
                  :sourcePath ["acs" "acs5"]
                  :values ["B19083_001E"]
                  :geoHierarchy {:county "*"}
                  :geoResolution "500k"
                  :statsKey ts/stats-key}
                 prn)
; TEST error codes (NAN: )
(test-async-time {:vintage 2017                       ; :stats+geos ms = 258
                  :sourcePath ["acs" "acs5"]
                  :values ["B00001_001E","B01001_001E", "B08303_001E", "B19083_001E"]
                  :geoHierarchy {:state "01"
                                 ;:tract "*"}
                                 :county "015"
                                 :tract "981902"}
                  ;:geoResolution "500k"
                  :statsKey ts/stats-key}
                 prn)

; 	https://api.census.gov/data/timeseries/asm/industry?get=EMP,NAICS_TTL,GEO_TTL&for=us:*&time=2016&NAICS=31-33&key=YOUR_KEY_GOES_HERE
(test-async-time {:vintage "timeseries"
                  :sourcePath ["asm" "industry"]
                  :values ["EMP" "NAICS_TTL" "GEO_TTL"]
                  :geoHierarchy {:us "*"}
                  :predicates {:time "2016"
                               :NAICS "31-33"}}
                 prn)
; 	https://api.census.gov/data/timeseries/healthins/sahie?get=NIC_PT,NAME,NUI_PT&for=county:*&time=2016&key=YOUR_KEY_GOES_HERE
(test-async-time {:vintage "timeseries"
                  :sourcePath ["healthins" "sahie"]
                  :values ["NIC_PT" "NAME" "NUI_PT"]
                  :geoHierarchy {:county "*"}
                  :predicates {:time "2016"}}
                 prn)

; https://api.census.gov/data/timeseries/qwi/se?get=year,quarter,sex&for=metropolitan%20statistical%20area/micropolitan%20statistical%20area:*&in=state:24&time=2010-Q1

(test-async-time {:vintage "timeseries"
                  :sourcePath ["qwi" "se"]
                  :values ["year" "quarter" "sex"]
                  :geoHierarchy {:state "24"
                                 :metropolitan-statistical-area!micropolitan-statistical-area "*"}
                  :predicates {:time "2010-Q1"}}
                 prn)