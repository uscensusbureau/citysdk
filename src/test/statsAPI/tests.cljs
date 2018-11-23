(ns test.statsAPI.tests
  (:require
    [cljs.core.async      :refer [chan promise-chan close! >! <! pipeline]
                          :refer-macros [go alt!]]
    [cljs.test            :refer-macros [async deftest is testing run-tests]]
    [test.fixtures.core   :refer [test-async test-async-timed Icb<==IO=fixture]
                          :as ts]
    [census.utils.core    :refer [stats-key]]
    [census.statsAPI.core :refer [stats-url-builder
                                  parse-if-number
                                  xf!-csv-response->JSON
                                  IOE->census-stats
                                  -<IO-pp-census-stats>-]]))

(deftest stats-url-builder-test
  (is (= (stats-url-builder {:vintage      "2016"
                             :sourcePath   ["acs" "acs5"]
                             :geoHierarchy {:state "01" :county "073" :tract "000100"}
                             :values       ["B01001_001E" "B01001_001M"]
                             :statsKey     "NA-key"})
         "https://api.census.gov/data/2016/acs/acs5?get=B01001_001E,B01001_001M&in=state:01%20county:073&for=tract:000100&key=NA-key"))
  (is (= (stats-url-builder {:vintage      "2016"
                             :sourcePath   ["acs" "acs5"]
                             :geoHierarchy {:state "12" :state-legislative-district-_upper-chamber_ "*"}
                             :values       ["B01001_001E" "NAME"]
                             :predicates   {:B00001_001E "0:30000"}})
         "https://api.census.gov/data/2016/acs/acs5?get=B01001_001E,NAME&B00001_001E=0:30000&in=state:12&for=state legislative district (upper chamber):*")))

(deftest parse-if-number-test
  (is (= (parse-if-number "30")
         30))
  (is (= (parse-if-number "string")
         "string"))
  (is (= (parse-if-number "0.5")
         0.5)))

(deftest xf!-csv-response->JSON-test
  (is (= (transduce
           (xf!-csv-response->JSON
             {:values     ["B01001_001E" "NAME"]
              :predicates {:B00001_001E "0:30000"}
              :keywords})
           conj
           [["B01001_001E","NAME","B00001_001E","state","state legislative district (upper chamber)"],
            ["486727","State Senate District 4 (2016), Florida","28800","12","004"],
            ["491350","State Senate District 6 (2016), Florida","29938","12","006"]])
         '({:B01001_001E 491350,
            :NAME "State Senate District 6 (2016), Florida",
            :B00001_001E 29938,
            :state "12",
            :state-legislative-district-_upper-chamber_ "006"}
           {:B01001_001E 486727,
            :NAME "State Senate District 4 (2016), Florida",
            :B00001_001E 28800,
            :state "12",
            :state-legislative-district-_upper-chamber_ "004"})))
  (is (= (transduce
           (xf!-csv-response->JSON
             {:values     ["B01001_001E" "NAME"]
              :predicates {:B00001_001E "0:30000"}})
           conj
           [["B01001_001E","NAME","B00001_001E","state","state legislative district (upper chamber)"],
            ["486727","State Senate District 4 (2016), Florida","28800","12","004"],
            ["491350","State Senate District 6 (2016), Florida","29938","12","006"]])
         '({"B01001_001E" 491350,
            "NAME" "State Senate District 6 (2016), Florida",
            "B00001_001E" 29938,
            "state" "12",
            "state legislative district (upper chamber)" "006"}
           {"B01001_001E" 486727,
            "NAME" "State Senate District 4 (2016), Florida",
            "B00001_001E" 28800,
            "state" "12",
            "state legislative district (upper chamber)" "004"}))))


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

(deftest -<IO-pp-census-stats>-test
  (let [args {:vintage      "2016"
              :sourcePath   ["acs" "acs5"]
              :geoHierarchy {:state "01" :county "073" :tract "000100"}
              :values       ["B01001_001E" "B01001_001M"]}
        #_args #_{:vintage      "2016"
                  :sourcePath   ["acs" "acs5"]
                  :geoHierarchy {:county "*"}
                  :values       ["B01001_001E" "B01001_001M"]}
        =I= (chan 1)
        =O= (chan 1)
        =E= (chan 1)
        time-in (js/Date.)]
    (test-async-timed
      time-in
      (go
        (>! =I= args)
        (-<IO-pp-census-stats>- =I= =O= =E=)
        (is (= (alt! =O= ([res] (apply str res))
                     =E= ([err] err))
               "{\"01073000100\" {:properties {:B01001_001E 3111, :B01001_001M 369, :state \"01\", :county \"073\", :tract \"000100\"}}}"))
        #_(alt! =O= ([O] (prn O))
                =E= ([E] (prn (str "Error: " E))))
        (close! =I=)
        (close! =O=)
        (close! =E=)))))

({"01073000100" {:properties {:B01001_001E 3111, :B01001_001M 369, :state "01", :county "073", :tract "000100"}}})
({"01073000100" {:properties {:B01001_001E 3111, :B01001_001M 369, :state "01", :county "073", :tract "000100"}}})


(run-tests)