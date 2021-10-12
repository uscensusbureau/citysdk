(ns test.geoAPI.tests
  (:require
    [cljs.core.async    :refer [chan close! >! <! timeout to-chan!]
                        :refer-macros [go alt!]]
    [cljs.test          :refer-macros [async deftest is testing run-tests]]
    [test.fixtures.core :refer [GG test-async test-async-timed
                                time-spot heap-spot]]
    [census.geoAPI.core :refer [G-err-payload
                                G-err
                                G-pattern->url
                                scope
                                big-G
                                G-patterner
                                G-pattern-cfg
                                C-G-pattern->url
                                IOE-C-GeoJSON
                                GEOIDS<-$g$+args
                                xf-mergeable-features
                                xf-mergeable<-GeoCLJS
                                =cfg=C-GeoCLJ]]))

;; NOTE: If you need to increase memory of Node in Shadow... Eval in REPL:
(comment
  (shadow.cljs.devtools.api/node-repl {:node-args ["--max-old-space-size=8192"]}))


(def TEST-ARGS-1
  {:vintage      "2016"
   :sourcePath   ["acs" "acs5"]
   :geoHierarchy {:state "12" :state-legislative-district-_upper-chamber_ "*"}
   :values       ["B01001_001E" "NAME"]
   :predicates   {:B00001_001E "0:30000"}
   :geoResolution "500k"})


(def G-err-payload-args
  (let [vin 1922
        res "500k"
        lev :county]
    (G-err-payload GG res vin lev)))

;(cljs.pprint/pprint G-err-payload-args)

(deftest G-err-payload-test
  (let [vin 1922
        res "500k"
        lev :county]
    (is (= (G-err-payload GG res vin lev)
           G-err-payload-args))))


(deftest geo-url-builder-test
  (let [vin 2022
        res "500k"
        lev :county
        st "01"]
    (is (= (G-pattern->url res vin lev)
           "https://raw.githubusercontent.com/uscensusbureau/citysdk/master/v2/GeoJSON/500k/2022/county.json"))
    (is (= (G-pattern->url res vin lev st)
           "https://raw.githubusercontent.com/uscensusbureau/citysdk/master/v2/GeoJSON/500k/2022/01/county.json"))))

(deftest geo-scoper-test
  (let [vin 2016
        res "500k"
        lev :county
        USr ["5m" "20m" "500k"]
        STr nil
        st "01"]
    (is (= (scope GG res vin lev USr)
           "https://raw.githubusercontent.com/uscensusbureau/citysdk/master/v2/GeoJSON/500k/2016/county.json"))
    (is (= (scope GG res vin lev USr STr)
           "https://raw.githubusercontent.com/uscensusbureau/citysdk/master/v2/GeoJSON/500k/2016/county.json"))
    (is (= (scope GG res vin lev USr STr st)
           "https://raw.githubusercontent.com/uscensusbureau/citysdk/master/v2/GeoJSON/500k/2016/county.json"))))

(deftest lg-warn->geo-test                                  ;; TESTS SIDE EFFECT: Logs warning to console
  (let [vin 2016
        res "500k"
        lev :county
        USr ["5m" "20m" "500k"]
        STr nil
        st "01"]
    (is (= (big-G GG res vin lev USr STr st)
           "https://raw.githubusercontent.com/uscensusbureau/citysdk/master/v2/GeoJSON/500k/2016/county.json"))))

(deftest geo-pattern-maker-test
  (is (= (G-pattern-cfg GG TEST-ARGS-1)
         ["500k" "2016" "12"
          [:state-legislative-district-_upper-chamber_ "*"]
          {:us nil,
           :st ["500k"]}])))

(deftest geo-url-composer-test
  (is (= (C-G-pattern->url GG TEST-ARGS-1)
         "https://raw.githubusercontent.com/uscensusbureau/citysdk/master/v2/GeoJSON/500k/2016/12/state-legislative-district-_upper-chamber_.json")))

(def TEST-ARGS-2
  {:vintage       "2016"
   :geoHierarchy  {:state "44" :school-district-_secondary_ "*"}
   :geoResolution "500k"})

(def GEOJSON-RAW
  #js {:type "FeatureCollection",
       :features #js [#js {:type "Feature", :geometry #js {:bbox #js [-71.79764920214579 41.7245691839672 -71.575107 41.934098], :type "Polygon", :coordinates #js [#js [#js [-71.79764920214579 41.92855554217849] #js [-71.796522 41.928537999999996] #js [-71.741975 41.929979] #js [-71.722467 41.930490999999996] #js [-71.70913999999999 41.930824] #js [-71.700519 41.931042999999995] #js [-71.68197599999999 41.931354999999996] #js [-71.67849 41.931543] #js [-71.66675 41.931664] #js [-71.663134 41.931697] #js [-71.639304 41.932279] #js [-71.629311 41.932272999999995] #js [-71.613315 41.932589] #js [-71.590108 41.934098] #js [-71.587508 41.920998] #js [-71.58770799999999 41.920398] #js [-71.58250000000001 41.89496] #js [-71.580294 41.884626] #js [-71.57985 41.882132999999996] #js [-71.579815 41.881954] #js [-71.577534 41.871891] #js [-71.57609599999999 41.863509] #js [-71.575107 41.858599] #js [-71.60494899999999 41.857799] #js [-71.613108 41.857599] #js [-71.622309 41.857198] #js [-71.626662 41.857558] #js [-71.67680399999999 41.856677] #js [-71.69103199999999 41.856553] #js [-71.689076 41.844879] #js [-71.688705 41.843365] #js [-71.6855 41.825379999999996] #js [-71.685311 41.823617000000006] #js [-71.679749 41.792595999999996] #js [-71.679504 41.791202999999996] #js [-71.678029 41.782551999999995] #js [-71.675898 41.770385999999995] #js [-71.675894 41.770362] #js [-71.67363 41.757647999999996] #js [-71.670802 41.739695] #js [-71.667802 41.727482] #js [-71.700584 41.726731] #js [-71.720162 41.726298] #js [-71.754031 41.725553] #js [-71.754346 41.725606] #js [-71.7896715648333 41.7245691839672] #js [-71.789678 41.724734] #js [-71.79105925492189 41.770182676218795] #js [-71.791062 41.770272999999996] #js [-71.79125806357601 41.774496473912] #js [-71.7926269448023 41.8039840221115] #js [-71.79265663505639 41.804623590236304] #js [-71.792767 41.807001] #js [-71.79278599999999 41.80867] #js [-71.794161 41.840140999999996] #js [-71.794161 41.841100999999995] #js [-71.7944823560536 41.8491578858595] #js [-71.7946917826635 41.854408530038015] #js [-71.7966877946775 41.904451592213896] #js [-71.79715894256209 41.9162639874898] #js [-71.79764920214579 41.92855554217849]]]},
                           :properties #js {:STATEFP "44", :SCSDLEA "00420", :AFFGEOID "9600000US4400420", :GEOID "4400420", :NAME "Foster-Glocester Regional School District", :LSAD "00", :ALAND 271895236, :AWATER 9727071}}],
       :fileName "cb_2016_44_scsd_500k"})

(deftest IOE-census-GeoJSON-str-test
  (let [=O= (chan 1)
        =E= (chan 1)
        time-in (time-spot)
        heap-in (heap-spot)]
    (test-async-timed
      "IOE-census-GeoJSON-test"
      time-in
      heap-in
      (go ((IOE-C-GeoJSON GG) (to-chan! [TEST-ARGS-2]) =O= =E=)
          (let [res (alt! =O= ([O] O)
                          =E= ([E] (do (prn "Error:")
                                       E)))]
            ;(prn res)
            (is (= (js/JSON.stringify res)
                   (js/JSON.stringify GEOJSON-RAW)))
            (close! =O=)
            (close! =E=))))))


(deftest ids<-$g$<-args-test
  (is (= (GEOIDS<-$g$+args GG TEST-ARGS-2)
         '(:GEOID))))

(def GEOJSON-2
  {:type     "FeatureCollection",
   :fileName "cb_2016_44_scsd_500k"
   :features [{:type "Feature",
               :properties
                     {:STATEFP  "44",
                      :SCSDLEA  "00420",
                      :AFFGEOID "9600000US4400420",
                      :GEOID    "4400420",
                      :NAME     "Foster-Glocester Regional School District",
                      :LSAD     "00",
                      :ALAND    271895236,
                      :AWATER   9727071}
               :geometry
                     {:bbox        [1 2 3 4],
                      :type        "Polygon",
                      :coordinates [[[1 2] [3 4] [5 6]]]}}]})


(def GEOJSON-4-MERGE
  [{"4400420" {:type "Feature",
               :properties {:STATEFP "44",
                            :SCSDLEA "00420",
                            :AFFGEOID "9600000US4400420",
                            :GEOID "4400420",
                            :NAME "Foster-Glocester Regional School District",
                            :LSAD "00",
                            :ALAND 271895236,
                            :AWATER 9727071},
               :geometry {:bbox [1 2 3 4], :type "Polygon", :coordinates [[[1 2] [3 4] [5 6]]]}}}])


(deftest xf-mergeable-features-test
  (is (= (transduce (xf-mergeable-features GG TEST-ARGS-2)
                    conj
                    (get GEOJSON-2 :features))
         GEOJSON-4-MERGE)))

(def GEOJSON-SMALL
  [{:type     "FeatureCollection",                          ; NOTE: channel represented as [] collection
    :fileName "cb_2016_44_scsd_500k"
    :features [{:type       "Feature",
                :properties {:STATEFP "44",
                             :SCSDLEA "00420",
                             :GEOID   "4400420",
                             :NAME    "Foster-Glocester Regional School District",
                             :ALAND   271895236,
                             :AWATER  9727071}
                :geometry   {:bbox        [111 222],
                             :coordinates [[[333 444]]]}}
               {:type       "Feature",
                :properties {:STATEFP "44",
                             :SCSDLEA "00421",
                             :GEOID   "4400421",
                             :NAME    "Bloop",
                             :ALAND   271895236,
                             :AWATER  9727071}
                :geometry   {:bbox        [777 888],
                             :coordinates [[[999 000]]]}}]}])

(def GEO-nested
  [{"4400420" {:type "Feature",
                :properties {:STATEFP "44",
                             :SCSDLEA "00420",
                             :GEOID "4400420",
                             :NAME "Foster-Glocester Regional School District",
                             :ALAND 271895236,
                             :AWATER 9727071},
                :geometry {:bbox [111 222], :coordinates [[[333 444]]]}}}
   {"4400421" {:type "Feature",
               :properties {:STATEFP "44",
                            :SCSDLEA "00421",
                            :GEOID "4400421",
                            :NAME "Bloop",
                            :ALAND 271895236,
                            :AWATER 9727071},
               :geometry {:bbox [777 888], :coordinates [[[999 0]]]}}}])

(deftest xf-mergeable<-GeoCLJS-test
  (is (= (->> (transduce (xf-mergeable<-GeoCLJS GG TEST-ARGS-2)
                         conj
                         GEOJSON-SMALL)
              flatten
              vec)
         GEO-nested)))

(def TEST-ARGS-BIG
  {:vintage       "2016"
   :geoHierarchy  {:county "*"}
   :geoResolution "500k"})

(deftest cfg-Census-GeoCLJ-test
  (let [args-1 {:vintage       "2016"
                :sourcePath    ["acs" "acs5"]
                :geoHierarchy  {:state "01" :county "073" :tract "000100"}
                :values        ["B01001_001E" "B01001_001M"]
                :geoResolution "500k"}
        =args= (chan 1)
        =cfg= (chan 1)
        time-in (time-spot)
        heap-in (heap-spot)]
    (test-async-timed
      "cfg-Census-GeoCLJ-test"
      time-in
      heap-in
      (go (>! =args= args-1)
          ((=cfg=C-GeoCLJ GG) =args= =cfg=)
          (let [{:keys [url xform getter filter-id]} (<! =cfg=)]
            (is (= url
                   "https://raw.githubusercontent.com/uscensusbureau/citysdk/master/v2/GeoJSON/500k/2016/01/tract.json"))
            (is (= (fn? xform)
                   true))
            (is (= (fn? getter)
                   true))
            (is (= filter-id
                   :GEOID))
            (close! =args=)
            (close! =cfg=))))))

; 2016 County GeoJSON size = 29.4 MB

; With volatile!:
; "$GET$ data from source:"
; "https://raw.githubusercontent.com/uscensusbureau/citysdk/master/v2/GeoJSON/500k/2016/county.json"
; "-<IOE->census-geoCLJ>-test - Heap stats (MB):"
; {:rss 1046.34, :heapTotal 1010.64, :heapUsed 974.82, :external 29.44}
; "-<IOE->census-geoCLJ>-test: Elapsed ms= 20078"
; "-<IOE->census-geoCLJ>-test - Heap stats (MB):"
; {:rss 418.21, :heapTotal 388.38, :heapUsed 360.52, :external 29.33}
; "-<IOE->census-geoCLJ>-test: Elapsed ms= 13109"

; "-<IOE->census-geoCLJ>-test - Heap stats (MB):"
;{:rss 479.19, :heapTotal 448.14, :heapUsed 428.03, :external 29.49}
;"-<IOE->census-geoCLJ>-test: Elapsed ms= 20968"

; with atom
; "$GET$ data from source:"
; "https://raw.githubusercontent.com/uscensusbureau/citysdk/master/v2/GeoJSON/500k/2016/county.json"
; "-<IOE->census-geoCLJ>-test - Heap stats (MB):"
; {:rss 1120.41, :heapTotal 1084.14, :heapUsed 967.92, :external 29.41}
; "-<IOE->census-geoCLJ>-test: Elapsed ms= 22911"

; "$GET$ data from cache:"
; "https://raw.githubusercontent.com/uscensusbureau/citysdk/master/v2/GeoJSON/500k/2016/county.json"
; "-<IOE->census-geoCLJ>-test - Heap stats (MB):"
; {:rss 416.84, :heapTotal 387.38, :heapUsed 369.72, :external 29.35}
; "-<IOE->census-geoCLJ>-test: Elapsed ms= 16075"


(run-tests)