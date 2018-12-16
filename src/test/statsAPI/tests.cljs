(ns test.statsAPI.tests
  (:require
    [cljs.core.async       :refer [chan close! >! <! timeout]
                           :refer-macros [go alt!]]
    [cljs.test             :refer-macros [async deftest is testing run-tests]]
    [test.fixtures.core    :refer [test-async test-async-timed heap-spot time-spot]]
    [census.statsAPI.core  :refer [C-S-args->url
                                   ->valid#?->#
                                   xf!-CSV->CLJ
                                   xf-'key'<w-stat
                                   xf-stats->js
                                   xf-mergeable<-stats
                                   IOE-C->stats
                                   IOE-C-S->JS
                                   =cfg=C-Stats]]))

(deftest stats-url-builder-test
  (let [args-1 {:vintage      "2016"
                :sourcePath   ["acs" "acs5"]
                :geoHierarchy {:state "01" :county "073" :tract "000100"}
                :values       ["B01001_001E" "B01001_001M"]
                :statsKey     "NA-key"}
        args-2 {:vintage      "2016"
                :sourcePath   ["acs" "acs5"]
                :geoHierarchy {:state "12" :state-legislative-district-_upper-chamber_ "*"}
                :values       ["B01001_001E" "NAME"]
                :predicates   {:B00001_001E "0:30000"}}]
    (is (= (C-S-args->url args-1)
           "https://api.census.gov/data/2016/acs/acs5?get=B01001_001E,B01001_001M&in=state:01%20county:073&for=tract:000100&key=NA-key"))
    (is (= (C-S-args->url args-2)
           "https://api.census.gov/data/2016/acs/acs5?get=B01001_001E,NAME&B00001_001E=0:30000&in=state:12&for=state legislative district (upper chamber):*"))))

(deftest ->valid#?->#-test
  (is (= (->valid#?-># "30")
         30))
  (is (= (->valid#?-># "string")
         "string"))
  (is (= (->valid#?-># "0.5")
         0.5))
  (is (= (->valid#?-># "-666666666.0000")
         "NAN: -666666666")))

(deftest xf!-csv->clj-test
  (let [args {:values     ["B01001_001E" "NAME"]
              :predicates {:B00001_001E "0:30000"}}
        input [["B01001_001E","NAME","B00001_001E","state","state legislative district (upper chamber)"],
               ["-666666666.0000","State Senate District 4 (2016), Florida","28800","12","004"],
               ["491350","State Senate District 6 (2016), Florida","29938","12","006"]]]
    (is (= (transduce (xf!-CSV->CLJ args) conj [] input)
           [{:B01001_001E 491350,
             :NAME "State Senate District 6 (2016), Florida",
             :B00001_001E 29938,
             :state "12",
             :state-legislative-district-_upper-chamber_ "006"}
            {:B01001_001E "NAN: -666666666",
             :NAME "State Senate District 4 (2016), Florida",
             :B00001_001E 28800,
             :state "12",
             :state-legislative-district-_upper-chamber_ "004"}]))))

(deftest xf-stats->js-test
  (let [args {:vintage      "2016"
              :sourcePath   ["acs" "acs5"]
              :geoHierarchy {:state "01" :county "073" :tract "000100"}
              :values       ["B01001_001E" "B01001_001M"]}
        input [["B01001_001E" "B01001_001M" "state" "county" "tract"]
               ["3111" "369" "01" "073" "000100"]
               ["3111" "222" "21" "0223" "000100"]]]
    (is (= (eduction (xf-stats->js args) input)
           '(#js {:B01001_001E 3111, :B01001_001M 369, :state "01", :county "073", :tract "000100"}
             #js {:B01001_001E 3111, :B01001_001M 222, :state "21", :county "0223", :tract "000100"})))))

(deftest xf-geoid+<-stat-test
  (let [input '({:B01001_001E 55049, :B01001_001M -555555555, :state "01", :county "001"}
                {:B01001_001E 199510, :B01001_001M -555555555, :state "01", :county "003"}
                {:B01001_001E 26614, :B01001_001M -555555555, :state "01", :county "005"}
                {:B01001_001E 22572, :B01001_001M -555555555, :state "01", :county "007"}
                {:B01001_001E 57704, :B01001_001M -555555555, :state "01", :county "009"})]
       (is (= (transduce (xf-'key'<w-stat 2) conj input)
              [{"01001" {:properties {:B01001_001E 55049, :B01001_001M -555555555, :state "01", :county "001"}}}
               {"01003" {:properties {:B01001_001E 199510, :B01001_001M -555555555, :state "01", :county "003"}}}
               {"01005" {:properties {:B01001_001E 26614, :B01001_001M -555555555, :state "01", :county "005"}}}
               {"01007" {:properties {:B01001_001E 22572, :B01001_001M -555555555, :state "01", :county "007"}}}
               {"01009" {:properties {:B01001_001E 57704, :B01001_001M -555555555, :state "01", :county "009"}}}]))))

(deftest xf-stats-mergeable-test
  (let [args {:vintage      "2016"
              :sourcePath   ["acs" "acs5"]
              :geoHierarchy {:state "01" :county "073" :tract "000100"}
              :values       ["B01001_001E" "B01001_001M"]}
        input [["B01001_001E" "B01001_001M" "state" "county" "tract"]
               ["3111" "369" "01" "073" "000100"]
               ["3111" "222" "21" "0223" "000100"]]
        vars# 2]
    (is (= (transduce (xf-mergeable<-stats args vars#) conj input)
           '({"210223000100"
              {:properties
               {:B01001_001E 3111
                :B01001_001M 222
                :state "21"
                :county "0223"
                :tract "000100"}}}
             {"01073000100"
              {:properties
               {:B01001_001E 3111
                :B01001_001M 369
                :state "01"
                :county "073"
                :tract "000100"}}})))))

(def ARGS-2 {:vintage      "2017"
             :sourcePath   ["acs" "acs1"]
             :geoHierarchy {:state "44" :county "*"}
             :values       ["B01001_001E" "B01001_001M"]})

(deftest IOE-C->stats-test
  (let [=I= (chan 1)
        =O= (chan 1)
        =E= (chan 1)
        time-in (js/Date.)]
    (test-async-timed
      "IOE-C->stats-test"
      time-in
      (go (>! =I= ARGS-2)
          (IOE-C->stats =I= =O= =E=)
          (is (= (alt! =O= ([res] res)
                       =E= ([err] err))
                 [["B01001_001E" "B01001_001M" "state" "county"]
                  ["163760" "-555555555" "44" "003"]
                  ["83460" "-555555555" "44" "005"]
                  ["637357" "-555555555" "44" "007"]
                  ["126150" "-555555555" "44" "009"]]))
          (close! =I=)
          (close! =O=)
          (close! =E=)))))

(deftest IOE-C-S->JS-test
  (let [=I= (chan 1)
        =O= (chan 1)
        =E= (chan 1)
        time-in (js/Date.)]
    (test-async-timed
      "IOE-C-S->JS-test"
      time-in
      (go (>! =I= ARGS-2)
          (IOE-C-S->JS =I= =O= =E=)
          (is (= (-> (alt! =O= ([res] res)
                           =E= ([err] err))
                     str)
                 (-> #js [#js {:B01001_001E 163760, :B01001_001M -555555555, :state "44", :county "003"}
                          #js {:B01001_001E 83460, :B01001_001M -555555555, :state "44", :county "005"}
                          #js {:B01001_001E 637357, :B01001_001M -555555555, :state "44", :county "007"}
                          #js {:B01001_001E 126150, :B01001_001M -555555555, :state "44", :county "009"}]
                     str)))
          (close! =I=)
          (close! =O=)
          (close! =E=)))))

;
;(deftest censusStatsJSON-test
;  (let [$S$ (atom "")
;        cb  (fn [E O] (if-let [err E]
;                        (reset! $S$ err)
;                        (reset! $S$ O)))
;        time-in (js/Date.)
;        heap-in (heap-spot)]
;    (test-async-timed
;      "censusStatsJSON-test"
;      time-in
;      heap-in
;      (go (censusStatsJSON ARGS-2 cb)
;          (<! (timeout 2000))
;          (prn @$S$)
;          (is (= @$S$
;                 "[{\"B01001_001E\":49228,\"B01001_001M\":-555555555,\"state\":\"44\",\"county\":\"001\"},{\"B01001_001E\":164886,\"B01001_001M\":-555555555,\"state\":\"44\",\"county\":\"003\"},{\"B01001_001E\":82714,\"B01001_001M\":-555555555,\"state\":\"44\",\"county\":\"005\"},{\"B01001_001E\":631344,\"B01001_001M\":-555555555,\"state\":\"44\",\"county\":\"007\"},{\"B01001_001E\":126319,\"B01001_001M\":-555555555,\"state\":\"44\",\"county\":\"009\"}]"))))))

; With eduction:
; "$GET$ data from source:"
;"https://api.census.gov/data/2016/acs/acs5?get=B01001_001E,B01001_001M&for=zip code tabulation area:*"
; "censusStatsJSON-test: Heap used: "
;{:rss 53.21, :heapTotal 51.27, :heapUsed 54.55, :external 2.56}
;"censusStatsJSON-test: Elapsed ms= 2532"
; With transduce
;"$GET$ data from cache proxy:"
;#object[cljs$core$str] "https://api.census.gov/data/2016/acs/acs5?get=B01001_001E,B01001_001M&for=zip code tabulation area:*"
;"censusStatsJSON-test: Heap used: "
;{:rss 90.79, :heapTotal 79.54, :heapUsed 61.04, :external 2.51}
;"censusStatsJSON-test: Elapsed ms= 2829"


;  888~~  888 Y88b    /      e    e      888~~
;  888___ 888  Y88b  /      d8b  d8b     888___
;  888    888   Y88b/      d888bdY88b    888
;  888    888   /Y88b     / Y88Y Y888b   888
;  888    888  /  Y88b   /   YY   Y888b  888
;  888    888 /    Y88b /          Y888b 888___



(deftest cfg-Census-Stats-test
  (let [args-1 {:vintage      "2016"
                :sourcePath   ["acs" "acs5"]
                :geoHierarchy {:state "01" :county "073" :tract "000100"}
                :values       ["B01001_001E" "B01001_001M"]}
        =args= (chan 1)
        =cfg=  (chan 1)
        time-in (time-spot)
        heap-in (heap-spot)]
    (test-async-timed
      "cfg-Census-Stats-test"
      time-in
      heap-in
      (go (>! =args= args-1)
          (=cfg=C-Stats =args= =cfg=)
          (let [{:keys [url xform getter filter-id]} (<! =cfg=)]
            (is (= url
                   "https://api.census.gov/data/2016/acs/acs5?get=B01001_001E,B01001_001M&in=state:01%20county:073&for=tract:000100"))
            (is (= (fn? xform)
                   true))
            (is (= (fn? getter)
                   true))
            (is (= filter-id
                   :B01001_001E))
            (close! =args=)
            (close! =cfg=))))))


(run-tests)