(ns test.merger.tests
  (:require
   [cljs.core.async      :refer [chan close! >! <! timeout to-chan! promise-chan]
    :refer-macros [go alt!]]
   [cljs.test            :refer-macros [async deftest is testing run-tests]]
   [test.fixtures.core   :refer [GG test-async test-async-timed
                                 time-spot heap-spot]]
   [census.utils.core    :refer [URL-GEOKEYMAP $GET$]]
   [census.statsAPI.core :refer [cfg>cfg=C-Stats]]
   [census.geoAPI.core   :refer [cfg>cfg=C-GeoCLJ]]
   [net.cgrand.xforms :as x]
   [census.merger.core   :refer [deep-merge-a-coll
                                 remove-unmerged
                                 xf<-Grands->JS
                                 xf-Grands-M->JSON
                                 I=OE-M-spooler]]))


(def PRE-MERGED
  '({"12040" {:type       "Feature",
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
                           :state-legislative-district-_upper-chamber_ "040"}}}))

(deftest deep-merge-a-coll-test
  (is (= (deep-merge-a-coll PRE-MERGED)
         {"12040" {:type "Feature",
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
                              :coordinates [[[-85.748032 31.619181] [-85.729832 31.632373]]]}}})))

(def MERGED-LIST
  '({"12040" {:type "Feature",
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
                           :state-legislative-district-_upper-chamber_ "036"}}}))

(def CLEANED-LIST
  '({:type "Feature",
     :properties {:STATEFP "01", :COUNTY "456", :STATE "123", :state "12", :GEOID "01005", :B01001_001E 494981, :state-legislative-district-_upper-chamber_ "040", :B00001_001E 29661, :NAME "State Senate District 40 (2016), Florida"},
     :geometry {:type "Polygon", :coordinates [[[-85.748032 31.619181] [-85.729832 31.632373]]]}}
    {:type "Feature",
     :properties {:STATEFP "01", :COUNTY "1011", :STATE "789", :state "12", :GEOID "01005", :B01001_001E 493899, :state-legislative-district-_upper-chamber_ "035", :B00001_001E 25615, :NAME "State Senate District 35 (2016), Florida"},
     :geometry {:type "Polygon", :coordinates [[[-85.748032 31.619181] [-85.729832 31.632373]]]}}
    nil))

(deftest remove-unmerged-test
  (is (= (map (remove-unmerged [:GEOID :B01001_001E]) (net.cgrand.xforms/into [] MERGED-LIST))
         CLEANED-LIST)))

;;  ,e,                               d8
;;   "  888-~88e 888-~88e  888  888 _d88__
;;  888 888  888 888  888b 888  888  888
;;  888 888  888 888  8888 888  888  888
;;  888 888  888 888  888P 888  888  888
;;  888 888  888 888-_88"  "88_-888  "88_/
;;               888
;; 
;; source format coming from upstream transformations (e.g., stats/geojson)
(def CONCATED-LIST
  '({"12040" {:type       "Feature",
              :properties {:STATEFP "01",
                           :GEOID   "01005",
                           :STATE   "123",
                           :COUNTY  "456"},
              :geometry   {:type        "Polygon",
                           :coordinates [[[-85.748032 31.619181]
                                          [-85.729832 31.632373]]]}}}
    {"12040" {:properties {:B01001_001E                                494981,
                           :NAME                                       "District 40 (2016), Florida",
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
                           :NAME                                       "District 35 (2016), Florida",
                           :B00001_001E                                25615,
                           :state                                      "12",
                           :state-legislative-district-_upper-chamber_ "035"}}}
    {"12036" {:properties {:B01001_001E                                492259,
                           :NAME                                       "District 36 (2016), Florida",
                           :B00001_001E                                29475,
                           :state                                      "12",
                           :state-legislative-district-_upper-chamber_ "036"}}}))

(def XFd-JSON [['("12040")
                #js {:type
                     "Feature",
                     :properties
                     #js {:STATEFP "01",
                          :COUNTY "456",
                          :STATE "123",
                          :state "12",
                          :GEOID "01005",
                          :B01001_001E 494981,
                          :state-legislative-district-_upper-chamber_ "040",
                          :B00001_001E 29661, :NAME "District 40 (2016), Florida"},
                     :geometry
                     #js {:type "Polygon",
                          :coordinates #js [#js [#js [-85.748032 31.619181] #js [-85.729832 31.632373]]]}}]
               ['("12035")
                #js {:type
                     "Feature",
                     :properties
                     #js {:STATEFP "01",
                          :COUNTY "1011",
                          :STATE "789",
                          :state "12",
                          :GEOID "01005",
                          :B01001_001E 493899,
                          :state-legislative-district-_upper-chamber_ "035",
                          :B00001_001E 25615,
                          :NAME "District 35 (2016), Florida"},
                     :geometry #js {:type "Polygon",
                                    :coordinates #js [#js [#js [-85.748032 31.619181] #js [-85.729832 31.632373]]]}}]
               ['("12036") nil]])

(defn convert-vals-to-clj-for-eq-test [[k v]] {k (js->clj v)})
(defn map-converter [vec] (map convert-vals-to-clj-for-eq-test vec))

(deftest xf<-Grands->JS-test
  (is (= (map-converter (transduce (x/by-key keys (xf<-Grands->JS [:GEOID :B01001_001E]))
                                   conj
                                   CONCATED-LIST))
         (map-converter XFd-JSON))))

(def JSON-result
  (map js->clj [#js {:type "Feature",
                     :properties #js {:STATEFP "01",
                                      :COUNTY "456",
                                      :STATE "123",
                                      :state "12",
                                      :GEOID "01005",
                                      :B01001_001E 494981,
                                      :state-legislative-district-_upper-chamber_ "040",
                                      :B00001_001E 29661,
                                      :NAME "District 40 (2016), Florida"},
                     :geometry #js {:type "Polygon",
                                    :coordinates #js [#js [#js [-85.748032 31.619181] #js [-85.729832 31.632373]]]}}
                #js {:type "Feature",
                     :properties #js {:STATEFP "01",
                                      :COUNTY "1011",
                                      :STATE "789",
                                      :state "12",
                                      :GEOID "01005",
                                      :B01001_001E 493899,
                                      :state-legislative-district-_upper-chamber_ "035",
                                      :B00001_001E 25615,
                                      :NAME "District 35 (2016), Florida"},
                     :geometry #js {:type "Polygon",
                                    :coordinates #js [#js [#js [-85.748032 31.619181] #js [-85.729832 31.632373]]]}}]))


(deftest xf-Grands-M->JSON-test
  (let [xfd (transduce (xf-Grands-M->JSON [:GEOID :B01001_001E])
                       conj
                       CONCATED-LIST)]
    (is (= (map js->clj xfd) JSON-result))))

(def ARGS-4-STATS+GEOS-CLJ
  [{:properties {:school-district-_secondary_ "00420",
                 :STATEFP                     "44",
                 :LSAD                        "00",
                 :B01001_001M                 40,
                 :AFFGEOID                    "9600000US4400420",
                 :state                       "44",
                 :GEOID                       "4400420",
                 :AWATER                      9727071,
                 :B01001_001E                 14611,
                 :SCSDLEA                     "00420",
                 :NAME                        "Foster-Glocester Regional School District",
                 :ALAND                       271895236},
    :type       "Feature",
    :geometry   {:bbox        [-71.79764920214579 41.7245691839672 -71.575107 41.934098],
                 :type        "Polygon",
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

(def JS-school-secondary
  #js {:type "FeatureCollection",
       :features
       #js [#js {:properties #js {:school-district-_secondary_ "00420", :STATEFP "44", :LSAD "00", :B01001_001M 40, :AFFGEOID "9600000US4400420", :state "44", :GEOID "4400420", :AWATER 9727071, :B01001_001E 14611, :SCSDLEA "00420", :NAME "Foster-Glocester Regional School District", :ALAND 271895236}, :type "Feature", :geometry #js {:bbox #js [-71.79764920214579 41.7245691839672 -71.575107 41.934098], :type "Polygon", :coordinates #js [#js [#js [-71.79764920214579 41.92855554217849] #js [-71.796522 41.928537999999996] #js [-71.741975 41.929979] #js [-71.722467 41.930490999999996] #js [-71.70913999999999 41.930824] #js [-71.700519 41.931042999999995] #js [-71.68197599999999 41.931354999999996] #js [-71.67849 41.931543] #js [-71.66675 41.931664] #js [-71.663134 41.931697] #js [-71.639304 41.932279] #js [-71.629311 41.932272999999995] #js [-71.613315 41.932589] #js [-71.590108 41.934098] #js [-71.587508 41.920998] #js [-71.58770799999999 41.920398] #js [-71.58250000000001 41.89496] #js [-71.580294 41.884626] #js [-71.57985 41.882132999999996] #js [-71.579815 41.881954] #js [-71.577534 41.871891] #js [-71.57609599999999 41.863509] #js [-71.575107 41.858599] #js [-71.60494899999999 41.857799] #js [-71.613108 41.857599] #js [-71.622309 41.857198] #js [-71.626662 41.857558] #js [-71.67680399999999 41.856677] #js [-71.69103199999999 41.856553] #js [-71.689076 41.844879] #js [-71.688705 41.843365] #js [-71.6855 41.825379999999996] #js [-71.685311 41.823617000000006] #js [-71.679749 41.792595999999996] #js [-71.679504 41.791202999999996] #js [-71.678029 41.782551999999995] #js [-71.675898 41.770385999999995] #js [-71.675894 41.770362] #js [-71.67363 41.757647999999996] #js [-71.670802 41.739695] #js [-71.667802 41.727482] #js [-71.700584 41.726731] #js [-71.720162 41.726298] #js [-71.754031 41.725553] #js [-71.754346 41.725606] #js [-71.7896715648333 41.7245691839672] #js [-71.789678 41.724734] #js [-71.79105925492189 41.770182676218795] #js [-71.791062 41.770272999999996] #js [-71.79125806357601 41.774496473912] #js [-71.7926269448023 41.8039840221115] #js [-71.79265663505639 41.804623590236304] #js [-71.792767 41.807001] #js [-71.79278599999999 41.80867] #js [-71.794161 41.840140999999996] #js [-71.794161 41.841100999999995] #js [-71.7944823560536 41.8491578858595] #js [-71.7946917826635 41.854408530038015] #js [-71.7966877946775 41.904451592213896] #js [-71.79715894256209 41.9162639874898] #js [-71.79764920214579 41.92855554217849]]]}}]})

(deftest I=OE-M-spooler-test
  (let [args-4 {:sourcePath    ["acs" "acs5"]
                :vintage       "2016"
                ;;:geoHierarchy  {:state "44" :school-district-_elementary_ "*"} ; <- collection
                :geoHierarchy  {:state "44" :school-district-_secondary_ "*"} ; <- single feature
                :geoResolution "500k"
                :values        ["B01001_001E" "B01001_001M"]}
        time-in (time-spot)
        heap-in (heap-spot)]
    (test-async-timed
     "I=OE-M-spooler-test"
     time-in
     heap-in
     (go (let [=args= (chan 1)
               =O=    (chan 1)
               =E=    (chan 1)]
           (>! =args= args-4)
           ((I=OE-M-spooler GG =args= [cfg>cfg=C-Stats cfg>cfg=C-GeoCLJ]) =O= =E=)
           (is (= (alt! =O= ([data] (js->clj data))
                        =E= ([err]  (prn (err))))
                  (js->clj JS-school-secondary)))
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


(deftest I=OE-M-spooler-performance-test
  (let [ARGS_SM {:sourcePath    ["acs" "acs5"]
                 :vintage       "2016"
                 :geoHierarchy  {:county-subdivision "*"}
                 :geoResolution "500k"
                 :values        ["B01001_001E" "B01001_001M"]}
        ARGS_LG {:sourcePath    ["acs" "acs5"]
                 :vintage       "2016"
                 :geoHierarchy  {:county "*"}
                 :geoResolution "500k"
                 :values        ["B01001_001E" "B01001_001M"]}
        time-in (time-spot)
        heap-in (heap-spot)]
    (test-async-timed
     "I=OE-M-spooler-performance-test"
     time-in
     heap-in
     (go (let [=args= (chan 1)
               =O=    (chan 1)
               =E=    (chan 1)]
           (>! =args= ARGS_SM)
           ((I=OE-M-spooler GG =args= [cfg>cfg=C-Stats cfg>cfg=C-GeoCLJ]) =O= =E=)
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


