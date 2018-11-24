(ns test.geoAPI.tests
  (:require
    [cljs.core.async    :refer [chan close! >! <! timeout]
                        :refer-macros [go alt!]]
    [cljs.test          :refer-macros [async deftest is testing run-tests]]
    [test.fixtures.core :refer [*g* test-async test-async-timed]
                        :as ts]
    [census.geoAPI.core :refer [geo-error
                                geo-url-builder
                                geo-scoper
                                lg-warn->geo
                                geo-pattern-matcher
                                geo-pattern-maker
                                geo-url-composer
                                IOE-census-GeoJSON
                                ids<-$g$<-args
                                geoid<-feature
                                features<-geoids]]))


(deftest geo-error-test
  (let [vin 2022
        res "500k"
        lev :county]
    (is (= (geo-error *g* res vin lev)
           ["No GeoJSON found for county at this scope" "in vintage: 2022" "at resolution: 500k" "For :county try one of the following `{:<vintage> {:<scopes> ...`"
            [{:2017 {:us ["5m" "20m" "500k"], :st nil},
              :2016 {:us ["5m" "20m" "500k"], :st nil},
              :2015 {:us ["5m" "20m" "500k"], :st nil},
              :2014 {:us ["5m" "20m" "500k"], :st nil},
              :2013 {:us ["5m" "20m" "500k"], :st nil},
              :2010 {:us ["5m" "20m" "500k"], :st nil},
              :2000 {:us ["500k"], :st ["500k"]},
              :1990 {:us ["500k"], :st ["500k"]}}]]))))

(deftest geo-url-builder-test
  (let [vin 2022
        res "500k"
        lev :county
        st  "01"]
    (is (= (geo-url-builder res vin lev)
           "https://raw.githubusercontent.com/loganpowell/census-geojson/master/GeoJSON/500k/2016/county.json"))
    (is (= (geo-url-builder res vin lev st)
           "https://raw.githubusercontent.com/loganpowell/census-geojson/master/GeoJSON/500k/2016/01/county.json"))))

(deftest geo-scoper-test
  (let [vin 2016
        res "500k"
        lev :county
        USr ["5m" "20m" "500k"]
        STr nil
        st "01"]
    (is (= (geo-scoper *g* res vin lev USr)
           "https://raw.githubusercontent.com/loganpowell/census-geojson/master/GeoJSON/500k/2016/county.json"))
    (is (= (geo-scoper *g* res vin lev USr STr)
           "https://raw.githubusercontent.com/loganpowell/census-geojson/master/GeoJSON/500k/2016/county.json"))
    (is (= (geo-scoper *g* res vin lev USr STr st)
           "https://raw.githubusercontent.com/loganpowell/census-geojson/master/GeoJSON/500k/2016/county.json"))))

(deftest lg-warn->geo-test
  (let [vin 2016
        res "500k"
        lev :county
        USr ["5m" "20m" "500k"]
        STr nil
        st "01"]
    (is (= (lg-warn->geo *g* res vin lev USr STr st) ;; SIDE EFFECT: Logs warning to console
           "https://raw.githubusercontent.com/loganpowell/census-geojson/master/GeoJSON/500k/2016/county.json"))))

(deftest geo-pattern-maker-test
  (let [args {:vintage      "2016"
              :sourcePath   ["acs" "acs5"]
              :geoHierarchy {:state "12" :state-legislative-district-_upper-chamber_ "*"}
              :values       ["B01001_001E" "NAME"]
              :predicates   {:B00001_001E "0:30000"}
              :geoResolution "500k"}]
    (is (= (geo-pattern-maker *g* args)
           ["500k" "2016" "12"
            [:state-legislative-district-_upper-chamber_ "*"]
            {:us nil,
             :st ["500k"]}]))))

(deftest geo-url-composer-test
  (let [args {:vintage      "2016"
              :sourcePath   ["acs" "acs5"]
              :geoHierarchy {:state "12" :state-legislative-district-_upper-chamber_ "*"}
              :values       ["B01001_001E" "NAME"]
              :predicates   {:B00001_001E "0:30000"}
              :geoResolution "500k"}]
    (is (= (geo-url-composer *g* args)
           "https://raw.githubusercontent.com/loganpowell/census-geojson/master/GeoJSON/500k/2016/12/state-legislative-district-_upper-chamber_.json"))))



(run-tests)
;; Examples ==============================

#_(prn ts/test-args-5)

#_(let [=I= (chan 1)
        =O= (chan 1 (map throw-err))
        args {:vintage       "2000"
              :geoHierarchy  {:state "01" :state-legislative-district-_upper-chamber_ "*"}
              :sourcePath    ["acs" "acs5"]
              :geoResolution "500k"
              :values        ["B01001_001E"]}]
    (go (>! =I= args)
        (IOE-census-GeoJSON =I= =O=)
        (prn (<! =O=))
        (close! =I=)
        (close! =O=)))

;; =======================================



;; Examples ==============================

#_((ids<-$g$<-args *g*) {:vintage       "2010"
                         :sourcePath    ["acs" "acs5"]
                         ;:geoHierarchy {:state "12" :state-legislative-district-_upper-chamber_ "*"}
                         :geoHierarchy  {:county "*"} ;; @ 30 seconds
                         ;:geoHierarchy {:zip-code-tabulation-area "*"} ; # 1 min - 3 min for completion
                         :geoResolution "500k"
                         :values        ["B01001_001E" "NAME"]
                         :predicates    {:B00001_001E "0:30000"}})

; =>
; (:STATE :COUNTY)
;; =======================================


;; Examples ==============================

#_(eduction (geoid<-feature '(:STATE :COUNTY))
            [{:type "Feature",
              :properties
                    {:STATEFP  "01",
                     :GEOID    "01005",
                     :STATE "123"
                     :COUNTY "456"}
              :geometry
                    {:type "Polygon",
                     :coordinates
                           [[[-85.748032 31.619181]
                             [-85.729832 31.632373]]]}}])

; => {"123456" {:type "Feature",
;           :properties {:STATEFP "01",
;                        :GEOID "01005",
;                        :STATE "123",
;                        :COUNTY "456"},
;           :geometry {:type "Polygon",
;                      :coordinates [[[-85.748032 31.619181]
;                                     [-85.729832 31.632373]]]}}}

#_(eduction   (map (geoid<-feature
                     ((ids<-$g$<-args *g*
                       {:vintage      "2010"
                        :sourcePath   ["acs" "acs5"]
                        ;:geoHierarchy {:state "12" :state-legislative-district-_upper-chamber_ "*"}
                        :geoHierarchy {:county "*"} ;; @ 30 seconds
                        ;:geoHierarchy {:zip-code-tabulation-area "*"} ; # 1 min - 3 min for completion
                        :geoResolution "500k"
                        :values       ["B01001_001E" "NAME"]
                        :predicates   {:B00001_001E "0:30000"}})))) ;; add `:predicates` and count them for `vars#`
              ;conj
              [{:type "Feature",
                :properties
                      {:STATEFP  "01",
                       :GEOID    "01005",
                       :STATE "123"
                       :COUNTY "456"}
                :geometry
                      {:type "Polygon",
                       :coordinates
                             [[[-85.748032 31.619181]
                               [-85.729832 31.632373]]]}}
               {:type "Feature",
                :properties
                      {:STATEFP  "01",
                       :GEOID    "01005",
                       :STATE "789"
                       :COUNTY "1011"}
                :geometry
                      {:type "Polygon",
                       :coordinates
                             [[[-85.748032 31.619181]
                               [-85.729832 31.632373]]]}}])

; =>
; [{"123456" {:type "Feature",
;            :properties {:STATEFP "01",
;                         :GEOID "01005",
;                         :STATE "123",
;                         :COUNTY "456"},
;            :geometry {:type "Polygon",
;                       :coordinates [[[-85.748032 31.619181]
;                                      [-85.729832 31.632373]]]}}}
; {"7891011" {:type "Feature",
;             :properties {:STATEFP "01",
;                          :GEOID "01005",
;                          :STATE "789",
;                          :COUNTY "1011"},
;             :geometry {:type "Polygon",
;                        :coordinates [[[-85.748032 31.619181]
;                                       [-85.729832 31.632373]]]}}}]


;==========================================


;; Examples =================================

#_(eduction  (features<-geoids `(:STATE :COUNTY))
             ;conj
             [{:type "FeatureCollection"
               :features [{:type "Feature",
                           :properties
                                 {:STATEFP  "01",
                                  :GEOID    "01005",
                                  :STATE "123"
                                  :COUNTY "456"}
                           :geometry
                                 {:type "Polygon",
                                  :coordinates
                                        [[[-85.748032 31.619181]
                                          [-85.729832 31.632373]]]}}
                          {:type "Feature",
                           :properties
                                 {:STATEFP  "01",
                                  :GEOID    "01005",
                                  :STATE "789"
                                  :COUNTY "1011"}
                           :geometry
                                 {:type "Polygon",
                                  :coordinates
                                        [[[-85.748032 31.619181]
                                          [-85.729832 31.632373]]]}}]}])

; =>
; [[{"123456" {:type "Feature",
;             :properties {:STATEFP "01",
;                          :GEOID "01005",
;                          :STATE "123",
;                          :COUNTY "456"},
;             :geometry {:type "Polygon",
;                        :coordinates [[[-85.748032 31.619181]
;                                       [-85.729832 31.632373]]]}}}
;  {"7891011" {:type "Feature",
;              :properties {:STATEFP "01",
;                           :GEOID "01005",
;                           :STATE "789",
;                           :COUNTY "1011"},
;              :geometry {:type "Polygon",
;                         :coordinates [[[-85.748032 31.619181]
;                                        [-85.729832 31.632373]]]}}}]]

;==========================================




#_(defn deep-merge-with
    "
    Recursively merges two maps together along matching key paths. Implements
    `clojure/core.merge-with`.

    [stolen](https://gist.github.com/danielpcox/c70a8aa2c36766200a95#gistcomment-2711849)
    "
    [& maps]
    (apply merge-with
           (fn [& args]
             (prn "Inside deep-merge-with:")
             (js/console.log (js/process.memoryUsage))
             (if (every? map? args)
               (apply deep-merge-with args)
               (last args)))
           maps))

; heapUsed: 162236048, -
; heapUsed: 162244864, = @ 8kb per pass

;==========================================




;; Examples ==============================

#_(prn ts/test-args-5)

#_(let [=I= (chan 1)
        =O= (chan 1 (map throw-err))
        =GKM= (chan 1)
        args {:vintage      "2016"
              :sourcePath   ["acs" "acs5"]
              :geoHierarchy {:state "44" :school-district-_secondary_ "*"}
              :values       ["B01001_001E" "NAME"]
              :geoResolution "500k"}]
    ((I=O<<=IO= (IO-cache-GET-edn $geoKeyMap$)) URL-GEOKEYMAP =GKM=)
    (go (let [$g$ (<! =GKM=)]
          (>! =I= args)
          (close! =GKM=)
          ;((IO-pp->census-GeoJSON $g$) =I= =O=)
          ((-<IO-pp-census-geos>- $g$) =I= =O=)
          (prn (<! =O=))
          (prn "Done with -<IO-pp->census-GeoJSON>-:")
          (js/console.log (js/process.memoryUsage))
          (close! =I=)
          (close! =O=))))

; =>
; ({"4400420" {:type "Feature", :geometry {:bbox [-71.79764920214579 41.7245691839672 -71.575107 41.934098], :type "Polygon", :coordinates [[[-71.79764920214579 41.92855554217849] [-71.796522 41.928537999999996] [-71.741975 41.929979] [-71.722467 41.930490999999996] [-71.70913999999999 41.930824] [-71.700519 41.931042999999995] [-71.68197599999999 41.931354999999996] [-71.67849 41.931543] [-71.66675 41.931664] [-71.663134 41.931697] [-71.639304 41.932279] [-71.629311 41.932272999999995] [-71.613315 41.932589] [-71.590108 41.934098] [-71.587508 41.920998] [-71.58770799999999 41.920398] [-71.58250000000001 41.89496] [-71.580294 41.884626] [-71.57985 41.882132999999996] [-71.579815 41.881954] [-71.577534 41.871891] [-71.57609599999999 41.863509] [-71.575107 41.858599] [-71.60494899999999 41.857799] [-71.613108 41.857599] [-71.622309 41.857198] [-71.626662 41.857558] [-71.67680399999999 41.856677] [-71.69103199999999 41.856553] [-71.689076 41.844879] [-71.688705 41.843365] [-71.6855 41.825379999999996] [-71.685311 41.823617000000006] [-71.679749 41.792595999999996] [-71.679504 41.791202999999996] [-71.678029 41.782551999999995] [-71.675898 41.770385999999995] [-71.675894 41.770362] [-71.67363 41.757647999999996] [-71.670802 41.739695] [-71.667802 41.727482] [-71.700584 41.726731] [-71.720162 41.726298] [-71.754031 41.725553] [-71.754346 41.725606] [-71.7896715648333 41.7245691839672] [-71.789678 41.724734] [-71.79105925492189 41.770182676218795] [-71.791062 41.770272999999996] [-71.79125806357601 41.774496473912] [-71.7926269448023 41.8039840221115] [-71.79265663505639 41.804623590236304] [-71.792767 41.807001] [-71.79278599999999 41.80867] [-71.794161 41.840140999999996] [-71.794161 41.841100999999995] [-71.7944823560536 41.8491578858595] [-71.7946917826635 41.854408530038015] [-71.7966877946775 41.904451592213896] [-71.79715894256209 41.9162639874898] [-71.79764920214579 41.92855554217849]]]}, :properties {:STATEFP "44", :SCSDLEA "00420", :AFFGEOID "9600000US4400420", :GEOID "4400420", :NAME "Foster-Glocester Regional School District", :LSAD "00", :ALAND 271895236, :AWATER 9727071}}})

; "Inside IO-pp->census-GeoJSON:"
;{ rss: 74190848,
;  heapTotal: 51838976,
;  heapUsed: 47867872,
;  external: 58196 }

; "Done with -<IO-pp->census-GeoJSON>-:"
;{ rss: 134819840,
;  heapTotal: 111394816,
;  heapUsed: 76246040,
;  external: 116537 }
;; =======================================

