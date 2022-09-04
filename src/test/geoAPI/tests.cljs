(ns test.geoAPI.tests
  (:require
   [cljs.core.async    :refer [chan close! >! <! timeout to-chan!]
    :refer-macros [go alt!]]
   [cljs.test          :refer-macros [are async deftest is testing run-tests]]
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
; (shadow.cljs.devtools.api/node-repl {:node-args ["--max-old-space-size=8192"]})

(def base-URL "https://ddbc5tjh37x38.cloudfront.net/")
;;(def base-URL "https://census-geojson.s3.amazonaws.com/")

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


(deftest G-pattern->url-test
  (let [vin 2022
        res "500k"
        lev :county
        st "01"]
    (is (= (G-pattern->url res vin lev)
           (str base-URL "500k/2022/county.json")))
    (is (= (G-pattern->url res vin lev st)
           (str base-URL "500k/2022/01/county.json")))))

(deftest scope-test
  (let [vin 2016
        res "500k"
        lev :county
        USr ["5m" "20m" "500k"]
        STr nil
        st "01"]
    (is (= (scope GG res vin lev USr)
           (str base-URL "500k/2016/county.json")))
    (is (= (scope GG res vin lev USr STr)
           (str base-URL "500k/2016/county.json")))
    (is (= (scope GG res vin lev USr STr st)
           (str base-URL "500k/2016/county.json")))))

(deftest big-G-test                                  ;; TESTS SIDE EFFECT: Logs warning to console
  (let [vin 2016
        res "500k"
        lev :county
        USr ["5m" "20m" "500k"]
        STr nil
        st "01"]
    (is (= (big-G GG res vin lev USr STr st)
           (str base-URL "500k/2016/county.json")))))

(deftest G-patterner-test
  (are [args url] (= (G-patterner GG args) (str base-URL url))

    ["500k" "2019" "01" [:zip-code-tabulation-area "*"] {:us ["500k"] :st nil}]
    "500k/2019/zip-code-tabulation-area.json"

    ["500k" "2021" "01" [:zip-code-tabulation-area "*"] {:us nil :st nil :xref "2020"}]
    "500k/2020/zip-code-tabulation-area.json"))


(def TEST-ARGS-2
  {:vintage       "2016"
   :geoHierarchy  {:state "44" :school-district-_secondary_ "*"}
   :geoResolution "500k"})

(def TEST-ARGS-3
  {:vintage       "2016"
   :geoHierarchy  {:county "*"}
   :geoResolution "500k"})

(deftest G-pattern-cfg-test
  (are [args pattern] (= (G-pattern-cfg GG args) pattern)
    TEST-ARGS-1 ["500k" "2016" "12" [:state-legislative-district-_upper-chamber_ "*"] {:us nil :st ["500k"]}]
    TEST-ARGS-3 ["500k" "2016" nil [:county "*"] {:us ["5m" "20m" "500k"] :st nil}]))

;;(prn (->> (G-pattern-cfg GG TEST-ARGS-3)
;;          (G-patterner GG)))


(deftest C-G-pattern->url-test
  (is (= (C-G-pattern->url GG TEST-ARGS-1)
         (str base-URL "500k/2016/12/state-legislative-district-_upper-chamber_.json"))))

(def GEOJSON-RAW-STR
  "{\"type\":\"FeatureCollection\",\"features\":[{\"type\":\"Feature\",\"geometry\":{\"bbox\":[-71.79764920214579,41.7245691839672,-71.575107,41.934098],\"type\":\"Polygon\",\"coordinates\":[[[-71.79764920214579,41.92855554217849],[-71.796522,41.928537999999996],[-71.741975,41.929979],[-71.722467,41.930490999999996],[-71.70913999999999,41.930824],[-71.700519,41.931042999999995],[-71.68197599999999,41.931354999999996],[-71.67849,41.931543],[-71.66675,41.931664],[-71.663134,41.931697],[-71.639304,41.932279],[-71.629311,41.932272999999995],[-71.613315,41.932589],[-71.590108,41.934098],[-71.587508,41.920998],[-71.58770799999999,41.920398],[-71.58250000000001,41.89496],[-71.580294,41.884626],[-71.57985,41.882132999999996],[-71.579815,41.881954],[-71.577534,41.871891],[-71.57609599999999,41.863509],[-71.575107,41.858599],[-71.60494899999999,41.857799],[-71.613108,41.857599],[-71.622309,41.857198],[-71.626662,41.857558],[-71.67680399999999,41.856677],[-71.69103199999999,41.856553],[-71.689076,41.844879],[-71.688705,41.843365],[-71.6855,41.825379999999996],[-71.685311,41.823617000000006],[-71.679749,41.792595999999996],[-71.679504,41.791202999999996],[-71.678029,41.782551999999995],[-71.675898,41.770385999999995],[-71.675894,41.770362],[-71.67363,41.757647999999996],[-71.670802,41.739695],[-71.667802,41.727482],[-71.700584,41.726731],[-71.720162,41.726298],[-71.754031,41.725553],[-71.754346,41.725606],[-71.7896715648333,41.7245691839672],[-71.789678,41.724734],[-71.79105925492189,41.770182676218795],[-71.791062,41.770272999999996],[-71.79125806357601,41.774496473912],[-71.7926269448023,41.8039840221115],[-71.79265663505639,41.804623590236304],[-71.792767,41.807001],[-71.79278599999999,41.80867],[-71.794161,41.840140999999996],[-71.794161,41.841100999999995],[-71.7944823560536,41.8491578858595],[-71.7946917826635,41.854408530038015],[-71.7966877946775,41.904451592213896],[-71.79715894256209,41.9162639874898],[-71.79764920214579,41.92855554217849]]]},\"properties\":{\"STATEFP\":\"44\",\"SCSDLEA\":\"00420\",\"AFFGEOID\":\"9600000US4400420\",\"GEOID\":\"4400420\",\"NAME\":\"Foster-Glocester Regional School District\",\"LSAD\":\"00\",\"ALAND\":271895236,\"AWATER\":9727071}}],\"fileName\":\"cb_2016_44_scsd_500k\"}")

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
                         =E= ([E] (do (prn (str "Error:" E))
                                      E)))]
        ;;   (prn res)
           (is (= res
                  GEOJSON-RAW-STR))
           (close! =O=)
           (close! =E=))))))


;;    88~\                                                            /
;;  _888__  e88~-_  888-~\       888-~88e-~88e  e88~~8e  888-~\ e88~88e  e88~~8e
;;   888   d888   i 888          888  888  888 d888  88b 888    888 888 d888  88b
;;   888   8888   | 888          888  888  888 8888__888 888    "88_88" 8888__888
;;   888   Y888   ' 888          888  888  888 Y888    , 888     /      Y888    ,
;;   888    "88_-~  888          888  888  888  "88___/  888    Cb       "88___/
;;         

(deftest GEOIDS<-$g$+args-test
  (are [args key-list] (= (GEOIDS<-$g$+args GG args) key-list)

    {:vintage "2016" :geoHierarchy {:state "44" :school-district-_secondary_ "*"}}
    '(:GEOID)

    {:vintage "2016" :geoHierarchy {:county "*"}}
    '(:GEOID)))


(deftest xf-mergeable-features-test
  (is (= (transduce (xf-mergeable-features
                     GG {:vintage       "2016"
                         :geoHierarchy  {:state "44" :school-district-_secondary_ "*"}
                         :geoResolution "500k"})
                    conj

                    [{:type "Feature",
                      :properties {:STATEFP  "44",
                                   :SCSDLEA  "00420",
                                   :AFFGEOID "9600000US4400420",
                                   :GEOID    "4400420",
                                   :NAME     "Foster-Glocester Regional School District",
                                   :LSAD     "00",
                                   :ALAND    271895236,
                                   :AWATER   9727071}
                      :geometry
                      {:bbox [1 2 3 4] :type "Polygon" :coordinates [[[1 2] [3 4] [5 6]]]}}])

         [{"4400420"
           {:type "Feature",
            :properties {:STATEFP "44",
                         :SCSDLEA "00420",
                         :AFFGEOID "9600000US4400420",
                         :GEOID "4400420",
                         :NAME "Foster-Glocester Regional School District",
                         :LSAD "00",
                         :ALAND 271895236,
                         :AWATER 9727071},
            :geometry {:bbox [1 2 3 4],
                       :type "Polygon",
                       :coordinates [[[1 2] [3 4] [5 6]]]}}}])))

(deftest xf-mergeable<-GeoCLJS-test
  (is (= (->> (transduce (xf-mergeable<-GeoCLJS GG TEST-ARGS-2)
                         conj
                         ;; NOTE: channel represented as [] collection
                         [{:type     "FeatureCollection",
                           :fileName "cb_2016_44_scsd_500k"
                           :features [{:type       "Feature",
                                       :properties {:STATEFP "44" :SCSDLEA "00420" :GEOID   "4400420" :NAME "Foster-Glocester Regional School District" :ALAND   271895236 :AWATER  9727071}
                                       :geometry   {:bbox        [111 222] :coordinates [[[333 444]]]}}
                                      {:type       "Feature",
                                       :properties {:STATEFP "44", :SCSDLEA "00421" :GEOID   "4400421" :NAME "Bloop",:ALAND   271895236, :AWATER  9727071}
                                       :geometry   {:bbox        [777 888] :coordinates [[[999 000]]]}}]}])
              flatten) ;; flattened for test, but actually ['({} {})] 

         [{"4400420" {:type "Feature",
                      :properties {:STATEFP "44", :SCSDLEA "00420", :GEOID "4400420", :NAME "Foster-Glocester Regional School District", :ALAND 271895236, :AWATER 9727071},
                      :geometry {:bbox [111 222], :coordinates [[[333 444]]]}}}
          {"4400421" {:type "Feature",
                      :properties {:STATEFP "44", :SCSDLEA "00421", :GEOID "4400421", :NAME "Bloop", :ALAND 271895236, :AWATER 9727071},
                      :geometry {:bbox [777 888], :coordinates [[[999 0]]]}}}])))



(deftest cfg-Census-GeoCLJ-test
  (let [args-1 {:vintage       "2016"
                :sourcePath    ["acs" "acs5"]
                :geoHierarchy  {:state "01" :county "073" :tract "000100"}
                :values        ["B01001_001E" "B01001_001M"]
                :geoResolution "500k"}
        args-2 {:vintage       "2016"
                :geoHierarchy  {:county "*"}
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
                  (str base-URL "500k/2016/01/tract.json")))
           (is (= (fn? xform)
                  true))
           (is (= (fn? getter)
                  true))
           (is (= filter-id
                  :GEOID))
           (close! =args=)
           (close! =cfg=))))))



(run-tests)
