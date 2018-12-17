(ns test.merger.tests
  (:require
    [cljs.core.async      :refer [chan close! >! <! timeout to-chan promise-chan]
                          :refer-macros [go alt!]]
    [cljs.test            :refer-macros [async deftest is testing run-tests]]
    [test.fixtures.core   :refer [*g* test-async test-async-timed
                                  time-spot heap-spot]]
    [census.utils.core    :refer [URL-GEOKEYMAP $GET$]]
    [census.statsAPI.core :refer [cfg>cfg=C-Stats]]
    [census.geoAPI.core   :refer [cfg>cfg=C-GeoCLJ]]
    [census.merger.core   :refer [deep-merge-a-coll
                                  remove-unmerged
                                  xf<-Grands->JS
                                  xf-Grands-M->JSON
                                  I=OE-M-spooler]]))


;==========================================

(def CONCATED-LIST
  [{"12040" {:type       "Feature",
             :properties {:STATEFP "01",
                          :GEOID   "01005",
                          :STATE   "123",
                          :COUNTY  "456"},
             :geometry   {:type        "Polygon",
                          :coordinates [[[-85.748032 31.619181]
                                         [-85.729832 31.632373]]]}}}
   {"12040" {:properties {:B01001_001E                                494981,
                          :NAME                                       "State Senate District 40 (2016), Florida",
                          :B00001_001E                                29661,
                          :state                                      "12",
                          :state-legislative-district-_upper-chamber_ "040"}}}
   {"12035" {:type       "Feature",
             :properties {:STATEFP "01",
                          :GEOID   "01005",
                          :STATE   "789",
                          :COUNTY  "1011"},
             :geometry   {:type        "Polygon",
                          :coordinates [[[-85.748032 31.619181]
                                         [-85.729832 31.632373]]]}}}
   {"12035" {:properties {:B01001_001E                                493899,
                          :NAME                                       "State Senate District 35 (2016), Florida",
                          :B00001_001E                                25615,
                          :state                                      "12",
                          :state-legislative-district-_upper-chamber_ "035"}}}
   {"12036" {:properties {:B01001_001E                                492259,
                          :NAME                                       "State Senate District 36 (2016), Florida",
                          :B00001_001E                                29475,
                          :state                                      "12",
                          :state-legislative-district-_upper-chamber_ "036"}}}])

(def INSIDE-x-into-1
  [{"12040" {:type "Feature",
             :properties {:STATEFP "01",
                          :GEOID "01005",
                          :STATE "123",
                          :COUNTY "456"},
             :geometry {:type "Polygon",
                        :coordinates [[[-85.748032 31.619181]
                                       [-85.729832 31.632373]]]}}}
   {"12040" {:properties {:B01001_001E 494981,
                          :NAME "State Senate District 40 (2016), Florida",
                          :B00001_001E 29661,
                          :state "12",
                          :state-legislative-district-_upper-chamber_ "040"}}}])

(def INSIDE-x-into->deep-merge-with-2
  {"12035" {:type "Feature",
            :properties {:STATEFP "01",
                         :COUNTY "1011",
                         :STATE "789",
                         :state "12",
                         :GEOID "01005",
                         :B01001_001E 493899,
                         :state-legislative-district-_upper-chamber_ "035",
                         :B00001_001E 25615,
                         :NAME "State Senate District 35 (2016), Florida"},
            :geometry {:type "Polygon",
                       :coordinates [[[-85.748032 31.619181]
                                      [-85.729832 31.632373]]]}}})


(transduce (xf-Grands-M->JSON [:GEOID :B01001_001E]) conj CONCATED-LIST)

(def GROUPED-LIST
  {'("12040") [{"12040" {:type       "Feature",
                         :properties {:STATEFP "01",
                                      :GEOID   "01005",
                                      :STATE   "123",
                                      :COUNTY  "456"},
                         :geometry   {:type        "Polygon",
                                      :coordinates [[[-85.748032 31.619181]
                                                     [-85.729832 31.632373]]]}}}
               {"12040" {:properties {:B01001_001E                                494981,
                                      :NAME                                       "State Senate District 40 (2016), Florida",
                                      :B00001_001E                                29661,
                                      :state                                      "12",
                                      :state-legislative-district-_upper-chamber_ "040"}}}],
   '("12035") [{"12035" {:type       "Feature",
                         :properties {:STATEFP "01",
                                      :GEOID   "01005",
                                      :STATE   "789",
                                      :COUNTY  "1011"},
                         :geometry   {:type        "Polygon",
                                      :coordinates [[[-85.748032 31.619181]
                                                     [-85.729832 31.632373]]]}}}
               {"12035" {:properties {:B01001_001E                                493899,
                                      :NAME                                       "State Senate District 35 (2016), Florida",
                                      :B00001_001E                                25615,
                                      :state                                      "12",
                                      :state-legislative-district-_upper-chamber_ "035"}}}],
   '("12036") [{"12036" {:properties {:B01001_001E                                492259,
                                      :NAME                                       "State Senate District 36 (2016), Florida",
                                      :B00001_001E                                29475,
                                      :state                                      "12",
                                      :state-legislative-district-_upper-chamber_ "036"}}}]})

;
;(deftest group-by-keys-test
;  (is (= (group-by-keys CONCATED-LIST)
;         GROUPED-LIST)))
;
;(deftest deep-merge-with-test
;  (is (= (deep-merge-with-seq
;           {"12040" {:type       "Feature",
;                     :properties {:STATEFP "01",
;                                  :GEOID   "01005",
;                                  :STATE   "123",
;                                  :COUNTY  "456"},
;                     :geometry   {:type        "Polygon",
;                                  :coordinates [[[-85.748032 31.619181]
;                                                 [-85.729832 31.632373]]]}}}
;           {"12040" {:properties {:B01001_001E                                494981,
;                                  :NAME                                       "State Senate District 40 (2016), Florida",
;                                  :B00001_001E                                29661,
;                                  :state                                      "12",
;                                  :state-legislative-district-_upper-chamber_ "040"}}})
;         {"12040" {:type "Feature",
;                   :properties {:STATEFP "01",
;                                :COUNTY "456",
;                                :STATE "123",
;                                :state "12",
;                                :GEOID "01005",
;                                :B01001_001E 494981,
;                                :state-legislative-district-_upper-chamber_ "040",
;                                :B00001_001E 29661,
;                                :NAME "State Senate District 40 (2016), Florida"},
;                   :geometry {:type "Polygon",
;                              :coordinates [[[-85.748032 31.619181] [-85.729832 31.632373]]]}}})))

(def MERGED-LIST
  [{"12040" {:type "Feature",
             :properties {:STATEFP "01",
                          :COUNTY "456",
                          :STATE "123",
                          :state "12",
                          :GEOID "01005",
                          :B01001_001E 494981,
                          :state-legislative-district-_upper-chamber_ "040",
                          :B00001_001E 29661,
                          :NAME "State Senate District 40 (2016), Florida"},
             :geometry {:type "Polygon",
                        :coordinates [[[-85.748032 31.619181]
                                       [-85.729832 31.632373]]]}}}
   {"12035" {:type "Feature",
             :properties {:STATEFP "01",
                          :COUNTY "1011",
                          :STATE "789",
                          :state "12",
                          :GEOID "01005",
                          :B01001_001E 493899,
                          :state-legislative-district-_upper-chamber_ "035",
                          :B00001_001E 25615,
                          :NAME "State Senate District 35 (2016), Florida"},
             :geometry {:type "Polygon",
                        :coordinates [[[-85.748032 31.619181]
                                       [-85.729832 31.632373]]]}}}
   {"12036" {:properties {:B01001_001E 492259,
                          :NAME "State Senate District 36 (2016), Florida",
                          :B00001_001E 29475,
                          :state "12",
                          :state-legislative-district-_upper-chamber_ "036"}}}])

;
;(deftest xf-deep-merge-test
;  (is (= (transduce xf-deep-merge-seq
;                    conj
;                    GROUPED-LIST)
;         MERGED-LIST)))


(def FILTERED-LIST
  [{:type "Feature",
    :properties {:STATEFP "01",
                 :COUNTY "456",
                 :STATE "123",
                 :state "12",
                 :GEOID "01005",
                 :B01001_001E 494981,
                 :state-legislative-district-_upper-chamber_ "040",
                 :B00001_001E 29661,
                 :NAME "State Senate District 40 (2016), Florida"},
    :geometry {:type "Polygon",
               :coordinates [[[-85.748032 31.619181] [-85.729832 31.632373]]]}}
   {:type "Feature",
    :properties {:STATEFP "01",
                 :COUNTY "1011",
                 :STATE "789",
                 :state "12",
                 :GEOID "01005",
                 :B01001_001E 493899,
                 :state-legislative-district-_upper-chamber_ "035",
                 :B00001_001E 25615,
                 :NAME "State Senate District 35 (2016), Florida"},
    :geometry {:type "Polygon",
               :coordinates [[[-85.748032 31.619181] [-85.729832 31.632373]]]}}])

;
;(deftest xf-remove-unmerged-test
;  (is (= (transduce (xf-remove-unmerged [:GEOID :B01001_001E])
;                    conj
;                    MERGED-LIST)
;         FILTERED-LIST)))
;
;
;(deftest xf-merge->filter-test
;  (is (= (transduce (xf-merge->filter [:GEOID :B01001_001E])
;                    conj
;                    GROUPED-LIST)
;         FILTERED-LIST)))

(def ARGS-4-STATS+GEOS-CLJ
  [{:properties {:school-district-_secondary_ "00420",
                 :STATEFP "44",
                 :LSAD "00",
                 :B01001_001M 40,
                 :AFFGEOID "9600000US4400420",
                 :state "44",
                 :GEOID "4400420",
                 :AWATER 9727071,
                 :B01001_001E 14611,
                 :SCSDLEA "00420",
                 :NAME "Foster-Glocester Regional School District",
                 :ALAND 271895236},
    :type "Feature",
    :geometry {:bbox [-71.79764920214579 41.7245691839672 -71.575107 41.934098],
               :type "Polygon",
               :coordinates [[[-71.79764920214579 41.92855554217849] [-71.796522 41.928537999999996] [-71.741975 41.929979] [-71.722467 41.930490999999996] [-71.70913999999999 41.930824] [-71.700519 41.931042999999995] [-71.68197599999999 41.931354999999996] [-71.67849 41.931543] [-71.66675 41.931664] [-71.663134 41.931697] [-71.639304 41.932279] [-71.629311 41.932272999999995] [-71.613315 41.932589] [-71.590108 41.934098] [-71.587508 41.920998] [-71.58770799999999 41.920398] [-71.58250000000001 41.89496] [-71.580294 41.884626] [-71.57985 41.882132999999996] [-71.579815 41.881954] [-71.577534 41.871891] [-71.57609599999999 41.863509] [-71.575107 41.858599] [-71.60494899999999 41.857799] [-71.613108 41.857599] [-71.622309 41.857198] [-71.626662 41.857558] [-71.67680399999999 41.856677] [-71.69103199999999 41.856553] [-71.689076 41.844879] [-71.688705 41.843365] [-71.6855 41.825379999999996] [-71.685311 41.823617000000006] [-71.679749 41.792595999999996] [-71.679504 41.791202999999996] [-71.678029 41.782551999999995] [-71.675898 41.770385999999995] [-71.675894 41.770362] [-71.67363 41.757647999999996] [-71.670802 41.739695] [-71.667802 41.727482] [-71.700584 41.726731] [-71.720162 41.726298] [-71.754031 41.725553] [-71.754346 41.725606] [-71.7896715648333 41.7245691839672] [-71.789678 41.724734] [-71.79105925492189 41.770182676218795] [-71.791062 41.770272999999996] [-71.79125806357601 41.774496473912] [-71.7926269448023 41.8039840221115] [-71.79265663505639 41.804623590236304] [-71.792767 41.807001] [-71.79278599999999 41.80867] [-71.794161 41.840140999999996] [-71.794161 41.841100999999995] [-71.7944823560536 41.8491578858595] [-71.7946917826635 41.854408530038015] [-71.7966877946775 41.904451592213896] [-71.79715894256209 41.9162639874898] [-71.79764920214579 41.92855554217849]]]}}])

(def ARGS-1-JS-RES
  "{\"type\":\"FeatureCollection\",\"features\":[{\"properties\":{\"B01001_001E\":1039880,\"B01001_001M\":40,\"state\":\"44\",\"school-district-_secondary_\":\"99999\"}},{\"properties\":{\"B01001_001E\":14611,\"B01001_001M\":40,\"state\":\"44\",\"school-district-_secondary_\":\"00420\"}}]}")

(def ARGS-1-STATS-CLJ
  [{:properties {:B01001_001E 1039880,
                 :B01001_001M 40,
                 :state "44",
                 :school-district-_secondary_ "99999"}}
   {:properties {:B01001_001E 14611,
                 :B01001_001M 40,
                 :state "44",
                 :school-district-_secondary_ "00420"}}])

(def JSON-school-secondary
  "{\"type\":\"FeatureCollection\",\"features\":[{\"properties\":{\"school-district-_secondary_\":\"00420\",\"STATEFP\":\"44\",\"LSAD\":\"00\",\"B01001_001M\":40,\"AFFGEOID\":\"9600000US4400420\",\"state\":\"44\",\"GEOID\":\"4400420\",\"AWATER\":9727071,\"B01001_001E\":14611,\"SCSDLEA\":\"00420\",\"NAME\":\"Foster-Glocester Regional School District\",\"ALAND\":271895236},\"type\":\"Feature\",\"geometry\":{\"bbox\":[-71.79764920214579,41.7245691839672,-71.575107,41.934098],\"type\":\"Polygon\",\"coordinates\":[[[-71.79764920214579,41.92855554217849],[-71.796522,41.928537999999996],[-71.741975,41.929979],[-71.722467,41.930490999999996],[-71.70913999999999,41.930824],[-71.700519,41.931042999999995],[-71.68197599999999,41.931354999999996],[-71.67849,41.931543],[-71.66675,41.931664],[-71.663134,41.931697],[-71.639304,41.932279],[-71.629311,41.932272999999995],[-71.613315,41.932589],[-71.590108,41.934098],[-71.587508,41.920998],[-71.58770799999999,41.920398],[-71.58250000000001,41.89496],[-71.580294,41.884626],[-71.57985,41.882132999999996],[-71.579815,41.881954],[-71.577534,41.871891],[-71.57609599999999,41.863509],[-71.575107,41.858599],[-71.60494899999999,41.857799],[-71.613108,41.857599],[-71.622309,41.857198],[-71.626662,41.857558],[-71.67680399999999,41.856677],[-71.69103199999999,41.856553],[-71.689076,41.844879],[-71.688705,41.843365],[-71.6855,41.825379999999996],[-71.685311,41.823617000000006],[-71.679749,41.792595999999996],[-71.679504,41.791202999999996],[-71.678029,41.782551999999995],[-71.675898,41.770385999999995],[-71.675894,41.770362],[-71.67363,41.757647999999996],[-71.670802,41.739695],[-71.667802,41.727482],[-71.700584,41.726731],[-71.720162,41.726298],[-71.754031,41.725553],[-71.754346,41.725606],[-71.7896715648333,41.7245691839672],[-71.789678,41.724734],[-71.79105925492189,41.770182676218795],[-71.791062,41.770272999999996],[-71.79125806357601,41.774496473912],[-71.7926269448023,41.8039840221115],[-71.79265663505639,41.804623590236304],[-71.792767,41.807001],[-71.79278599999999,41.80867],[-71.794161,41.840140999999996],[-71.794161,41.841100999999995],[-71.7944823560536,41.8491578858595],[-71.7946917826635,41.854408530038015],[-71.7966877946775,41.904451592213896],[-71.79715894256209,41.9162639874898],[-71.79764920214579,41.92855554217849]]]}}]}")


(deftest merge-spooler-merge-test
  (let [args-4 {:sourcePath    ["acs" "acs5"]
                :vintage       "2016"
                :geoHierarchy  {:state "44" :school-district-_elementary_ "*"} ; <- collection
                ;:geoHierarchy  {:state "44" :school-district-_secondary_ "*"} ; <- single feature
                :geoResolution "500k"
                :values        ["B01001_001E" "B01001_001M"]}
        time-in (time-spot)
        heap-in (heap-spot)]
    (test-async-timed
      "merge-spooler-merge-test"
      time-in
      heap-in
      (go (let [=args= (chan 1)
                =O=    (chan 1)
                =E=    (chan 1)]
            (>! =args= args-4)
            ((I=OE-M-spooler *g* =args= [cfg>cfg=C-Stats cfg>cfg=C-GeoCLJ]) =O= =E=)
            (is (= (alt! =O= ([data] data)
                         =E= ([err]  err))
                   JSON-school-secondary))
            (close! =args=)
            (close! =O=)
            (close! =E=))))))


(def ARGS-1-GEOS-CLJ
  [{:type "Feature",
    :geometry {:bbox [-71.79764920214579 41.7245691839672 -71.575107 41.934098],
               :type "Polygon",
               :coordinates [[[-71.79764920214579 41.92855554217849] [-71.796522 41.928537999999996] [-71.741975 41.929979] [-71.722467 41.930490999999996] [-71.70913999999999 41.930824] [-71.700519 41.931042999999995] [-71.68197599999999 41.931354999999996] [-71.67849 41.931543] [-71.66675 41.931664] [-71.663134 41.931697] [-71.639304 41.932279] [-71.629311 41.932272999999995] [-71.613315 41.932589] [-71.590108 41.934098] [-71.587508 41.920998] [-71.58770799999999 41.920398] [-71.58250000000001 41.89496] [-71.580294 41.884626] [-71.57985 41.882132999999996] [-71.579815 41.881954] [-71.577534 41.871891] [-71.57609599999999 41.863509] [-71.575107 41.858599] [-71.60494899999999 41.857799] [-71.613108 41.857599] [-71.622309 41.857198] [-71.626662 41.857558] [-71.67680399999999 41.856677] [-71.69103199999999 41.856553] [-71.689076 41.844879] [-71.688705 41.843365] [-71.6855 41.825379999999996] [-71.685311 41.823617000000006] [-71.679749 41.792595999999996] [-71.679504 41.791202999999996] [-71.678029 41.782551999999995] [-71.675898 41.770385999999995] [-71.675894 41.770362] [-71.67363 41.757647999999996] [-71.670802 41.739695] [-71.667802 41.727482] [-71.700584 41.726731] [-71.720162 41.726298] [-71.754031 41.725553] [-71.754346 41.725606] [-71.7896715648333 41.7245691839672] [-71.789678 41.724734] [-71.79105925492189 41.770182676218795] [-71.791062 41.770272999999996] [-71.79125806357601 41.774496473912] [-71.7926269448023 41.8039840221115] [-71.79265663505639 41.804623590236304] [-71.792767 41.807001] [-71.79278599999999 41.80867] [-71.794161 41.840140999999996] [-71.794161 41.841100999999995] [-71.7944823560536 41.8491578858595] [-71.7946917826635 41.854408530038015] [-71.7966877946775 41.904451592213896] [-71.79715894256209 41.9162639874898] [-71.79764920214579 41.92855554217849]]]},
    :properties {:STATEFP "44",
                 :SCSDLEA "00420",
                 :AFFGEOID "9600000US4400420",
                 :GEOID "4400420",
                 :NAME "Foster-Glocester Regional School District",
                 :LSAD "00",
                 :ALAND 271895236,
                 :AWATER 9727071}}])

(comment
  ;; NOTE: If you need to increase memory of Node in Shadow... Eval in REPL:
  (shadow.cljs.devtools.api/node-repl {:node-args ["--max-old-space-size=4096"]}))

(deftest merge-spooler-performance-test
  (let [args-2 {:sourcePath    ["acs" "acs5"]
                :vintage       "2016"
                :geoHierarchy  {:state "44" :county-subdivision "*"}
                :geoResolution "500k"
                :values        ["B01001_001E" "B01001_001M"]}
        args-3 {:sourcePath    ["acs" "acs5"]
                :vintage       "2016"
                :geoHierarchy  {:zip-code-tabulation-area "*"}
                :geoResolution "50k"
                :values        ["B01001_001E" "B01001_001M"]}
        time-in (time-spot)
        heap-in (heap-spot)]
    (test-async-timed
      "merge-spooler-performance-test"
      time-in
      heap-in
      (go (let [=args= (chan 1)
                =O=    (chan 1)
                =E=    (chan 1)]
            (>! =args= args-2)
            ((I=OE-M-spooler *g* =args= [cfg>cfg=C-Stats cfg>cfg=C-GeoCLJ ]) =O= =E=)
            (alt! =O= ([data] (prn data))
                  =E= ([err]  (prn err)))
            (close! =args=)
            (close! =O=)
            (close! =E=))))))

; "$GET$ data from source (stringified):"
;"https://raw.githubusercontent.com/loganpowell/census-geojson/master/GeoJSON/500k/2016/county.json"
; "merge-spooler-merge-test - Heap stats (MB):"
;{:rss 997.83, :heapTotal 944.91, :heapUsed 873.16, :external 29.2}
;"merge-spooler-merge-test: Elapsed ms= 17941"
; From cache (stringified):
; "merge-spooler-merge-test - Heap stats (MB):"
;{:rss -72.83, :heapTotal -74, :heapUsed 38.3, :external -0.01}
;"merge-spooler-merge-test: Elapsed ms= 12179"


; ; TODO: HAVE TO INCREASE HEAP TO 4G
; From source (all :zip-code-tabulation-area - stringified):
; "merge-spooler-performance-test - Heap stats (MB):"
;{:rss 3385.56, :heapTotal 3276.07, :heapUsed 3017.03, :external 99.58}
;"merge-spooler-performance-test: Elapsed ms= 127244"

; From cache (all :zip-codes - stringified):
; "merge-spooler-performance-test - Heap stats (MB):"
;{:rss 596.38, :heapTotal 495.23, :heapUsed 421.74, :external 99.85}
;"merge-spooler-performance-test: Elapsed ms= 112313"
;
;; =======================================

(run-tests)



;  888~~  888 Y88b    /      e    e      888~~
;  888___ 888  Y88b  /      d8b  d8b     888___
;  888    888   Y88b/      d888bdY88b    888
;  888    888   /Y88b     / Y88Y Y888b   888
;  888    888  /  Y88b   /   YY   Y888b  888
;  888    888 /    Y88b /          Y888b 888___


