(ns test.statsAPI.tests
  (:require
    [cljs.core.async      :refer [chan close! >! <! timeout]
                          :refer-macros [go alt!]]
    [cljs.test            :refer-macros [async deftest is testing run-tests]]
    [test.fixtures.core   :refer [test-async test-async-timed heap-spot time-spot]]
    [census.statsAPI.core :refer [stats-url-builder
                                  parse-if-number
                                  xf!-csv->clj
                                  xf-geoid+<-stat
                                  xf-stats->js
                                  xf-stats-mergeable
                                  IOE->census-stats
                                  censusStatsJSON
                                  -<IO-pp-census-stats>-]]))

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
    (is (= (stats-url-builder args-1)
           "https://api.census.gov/data/2016/acs/acs5?get=B01001_001E,B01001_001M&in=state:01%20county:073&for=tract:000100&key=NA-key"))
    (is (= (stats-url-builder args-2)
           "https://api.census.gov/data/2016/acs/acs5?get=B01001_001E,NAME&B00001_001E=0:30000&in=state:12&for=state legislative district (upper chamber):*"))))

(deftest parse-if-number-test
  (is (= (parse-if-number "30")
         30))
  (is (= (parse-if-number "string")
         "string"))
  (is (= (parse-if-number "0.5")
         0.5)))

(deftest xf!-csv->clj-test
  (let [args {:values     ["B01001_001E" "NAME"]
              :predicates {:B00001_001E "0:30000"}}
        input [["B01001_001E","NAME","B00001_001E","state","state legislative district (upper chamber)"],
               ["486727","State Senate District 4 (2016), Florida","28800","12","004"],
               ["491350","State Senate District 6 (2016), Florida","29938","12","006"]]]
    (is (= (transduce (xf!-csv->clj args) conj [] input)
           [{:B01001_001E 491350,
             :NAME "State Senate District 6 (2016), Florida",
             :B00001_001E 29938,
             :state "12",
             :state-legislative-district-_upper-chamber_ "006"}
            {:B01001_001E 486727,
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
    (is (= (eduction (xf-stats->js args) input))
        '("{\"B01001_001E\":3111,\"B01001_001M\":369,\"state\":\"01\",\"county\":\"073\",\"tract\":\"000100\"}"
          "{\"B01001_001E\":3111,\"B01001_001M\":222,\"state\":\"21\",\"county\":\"0223\",\"tract\":\"000100\"}"))))

(deftest xf-geoid+<-stat-test
  (let [input '({:B01001_001E 55049, :B01001_001M -555555555, :state "01", :county "001"}
                {:B01001_001E 199510, :B01001_001M -555555555, :state "01", :county "003"}
                {:B01001_001E 26614, :B01001_001M -555555555, :state "01", :county "005"}
                {:B01001_001E 22572, :B01001_001M -555555555, :state "01", :county "007"}
                {:B01001_001E 57704, :B01001_001M -555555555, :state "01", :county "009"})]
       (is (= (transduce (xf-geoid+<-stat 2) conj input)
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
    (is (= (transduce (xf-stats-mergeable args vars#) conj input)
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

(deftest IOE->census-stats-test
  (let [args {:vintage      "2016"
              :sourcePath   ["acs" "acs5"]
              :geoHierarchy {:state "01" :county "073" :tract "000100"}
              :values       ["B01001_001E" "B01001_001M"]}
        =I= (chan 1)
        =O= (chan 1)
        =E= (chan 1)
        time-in (js/Date.)]
    (test-async-timed
      "IOE->census-stats-test"
      time-in
      (go (>! =I= args)
          (IOE->census-stats =I= =O= =E=)
          (is (= (alt! =O= ([res] res)
                       =E= ([err] err))
                 [["B01001_001E" "B01001_001M" "state" "county" "tract"]
                  ["3111" "369" "01" "073" "000100"]]))
          (close! =I=)
          (close! =O=)
          (close! =E=)))))

(deftest censusStatsJSON-test
  (let [args {:vintage      "2016"
              :sourcePath   ["acs" "acs5"]
              :geoHierarchy {:state "01" :county "073" :tract "000100"}
              :values       ["B01001_001E" "B01001_001M"]}
        args-big {:vintage      "2016"
                  :sourcePath   ["acs" "acs5"]
                  :geoHierarchy {:zip-code-tabulation-area "*"}
                  :values       ["B01001_001E" "B01001_001M"]}
        $S$ (atom "")
        cb  (fn [E O] (if-let [err E]
                        (reset! $S$ err)
                        (reset! $S$ O)))
        time-in (js/Date.)
        heap-in (heap-spot)]
    (test-async-timed
      "censusStatsJSON-test"
      time-in
      heap-in
      (go (censusStatsJSON args-big cb)
          (<! (timeout 500))
          ;(js/console.log @$S$)))))
          (is (= @$S$
                 "[{\"B01001_001E\":3111,\"B01001_001M\":369,\"state\":\"01\",\"county\":\"073\",\"tract\":\"000100\"}]"))))))

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


(deftest -<IO-pp-census-stats>-test
  (let [args-ok {:vintage      "2016"
                 :sourcePath   ["acs" "acs5"]
                 :geoHierarchy {:state "01" :county "073" :tract "000100"}
                 :values       ["B01001_001E" "B01001_001M"]}
        args-big {:vintage      "2016"
                  :sourcePath   ["acs" "acs5"]
                  :geoHierarchy {:zip "*"}
                  :values       ["B01001_001E" "B01001_001M"]}
        args-na {:vintage      "1991"
                 :sourcePath   ["acs" "acs5"]
                 :geoHierarchy {:county "*"}
                 :values       ["B01001_001E" "B01001_001M"]}
        =I= (chan 1)
        =O= (chan 1)
        =E= (chan 1)
        time-in (time-spot)
        heap-in (heap-spot)]
    (test-async-timed
      "-<IO-pp-census-stats>-test"
      time-in
      heap-in
      (go
        (>! =I= args-ok)
        (-<IO-pp-census-stats>- =I= =O= =E=)
        (is (= (alt! =O= ([res] (apply str res))
                     =E= ([err] err))
               "{\"01073000100\" {:properties {:B01001_001E 3111, :B01001_001M 369, :state \"01\", :county \"073\", :tract \"000100\"}}}"))
        (>! =I= args-na)
        (-<IO-pp-census-stats>- =I= =O= =E=)
        (is (= (alt! =O= ([O] O)
                     =E= ([E] (str "Error: " E)))
               "Error: ERROR status: 404  for URL https://api.census.gov/data/1991/acs/acs5?get=B01001_001E,B01001_001M&for=county:* ... output empty `{}`"))
        ;(>! =I= args-big)
        ;(-<IO-pp-census-stats>- =I= =O= =E=)
        ;(is (= (alt! =O= ([O] O)
        ;             =E= ([E] (str "Error: " E)))
        ;       "")) ; <- Meant to break to test performance (eduction won... this time)
        (close! =I=)
        (close! =O=)
        (close! =E=)))))


(run-tests)