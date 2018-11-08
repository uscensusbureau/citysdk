(ns census.test.core
  (:require
    [cljs.core.async :as <|]
    [cljs.test :refer-macros [deftest is testing run-tests async]]
    [com.rpl.specter :as sp]
    [census.utils.core :as ut :refer [stats-key]]))

(def *g* (ut/read-edn "./src/census/geojson/index.edn"))

(defn test-async
  "Asynchronous test awaiting ch to produce a value or close."
  [=test=]
  (async done
    (<|/take! =test= (fn [_] (done)))))

; WMS TESTS

(def test-args-1 {:vintage       "2000"
                  :geoHierarchy  {:state {:lat 28.2639 :lng -80.7214} :state-legislative-district-_upper-chamber_ "*"}
                  :sourcePath    ["acs" "acs5"]
                  :geoResolution "500k"
                  :values        ["B01001_001E"]
                  :statsKey      stats-key})

(def test-args-2 {:vintage       2016
                  :geoHierarchy {:place {:lat 28.2639 :lng -80.7214}}
                  :sourcePath    ["acs" "acs5"]
                  :geoResolution "500k"
                  :values        ["B01001_001E"]
                  :statsKey      stats-key})

(def test-args-3 {:vintage       "2016"
                  :geoHierarchy {:county {:lat 28.2639 :lng -80.7214} :tract "*"}
                  :sourcePath    ["acs" "acs5"]
                  :geoResolution "500k"
                  :values        ["B01001_001E"]
                  :statsKey      stats-key})

(def test-args-4 {:vintage       2010
                  :geoHierarchy  {:state "01" :county "001" :someting-non-existant "*"}
                  :sourcePath    ["acs" "acs5"]
                  :geoResolution "500k"
                  :values        ["B01001_001E"]
                  :statsKey      stats-key})

(def test-args-5 {:vintage       2016
                  :geoHierarchy  {:state "*" :tract "*"}
                  :sourcePath    ["acs" "acs5"]
                  :geoResolution "500k"
                  :values        ["B01001_001E"]
                  :statsKey      stats-key})


(def test-args-6 {:vintage       "2016"
                  :geoHierarchy  {:state "01" :county "001" :tract "*"}
                  :sourcePath    ["acs" "acs5"]
                  :geoResolution "500k"
                  :values        ["B01001_001E"]
                  :statsKey      stats-key})

(def test-js-args-1 #js {"vintage"     "2016"
                         "geoHierarchy"  #js {"state" "12" "state legislative district (upper chamber)" "*"}
                         "sourcePath"    #js ["acs" "acs5"]
                         "values"        #js ["B01001_001E" "NAME"]
                         "predicates"    #js {"B00001_001E" "0:30000"}
                         "geoResolution" "500k"
                         "statsKey"      stats-key})

(def test-js-args-2 #js {"vintage"      2016
                         "geoHierarchy" #js {"state" #js {"lat" 28.2639 "lng" -80.7214} "state legislative district (upper chamber)" "*"}
                         "sourcePath"   #js ["acs" "acs5"]
                         "values"       #js ["B01001_001E" "NAME"]
                         "predicates"   #js {"B00001_001E" "0:30000"}
                         "geoResolution" "500k"
                         "statsKey"     stats-key})


(def test-arg-map
  {:vins [2000 "2000" 2010 "2010" 2015 "2015" 2016 "2016" 2017 2014]
   :crds [{:lat 28.2639 :lng -80.7214}]
   :geo1 [{:invalid "*"} {:state "01"}   {:state :coords} {:county :coords} {:state "01"}]
   :geo2 [nil            {:county "001"} {:county "*"}    nil               {:zip-code-tabulation-area "*"}]
   :srcP {:2000 ["nonemp"]        :2010 ["dec" "sf1"]      :2015 ["cbp"]   :2016 ["acs" "acs5"] :2017 ["acs" "acs1"]}
   :pred {:2000 {:NAICS1997 "72"} :2010 {:H016001 "0:500"} :2015 nil       :2016 {:B00001_001E "0:1000000"} :2017 {:B00001_001E "0:1000000"}}
   :vals {:2000 ["NAME" "NESTAB"] :2010 ["P001001"]        :2015 ["ESTAB"] :2016 ["B01001_001E"]}
   :geoR ["20m" "5m" "500k"]
   :sKey stats-key})

(defn get-path
  [& path]
  (get-in test-arg-map path))

(defn test-args
  [vin geo res s-key]
  (let [vkey (keyword (str (get-path :vins vin)))
        vins {:vintage       (get-path :vins vin)}
        srcs {:sourcePath    (get-path :srcP vkey)}
        prds {:predicates    (get-path :pred vkey)}
        vals {:values        (get-path :vals vkey)}
        ge1s (if (= [:coords] (sp/select sp/MAP-VALS (get-path :geo1 geo)))
               (sp/setval sp/MAP-VALS (get-path :crds 0) (get-path :geo1 geo))
               (get-path :geo1 geo))
        ge2s (get-path :geo2 geo)
        geoH {:geoHierarchy  (conj {} ge1s ge2s)}
        ress {:geoResolution (get-path :geoR res)}]
    (into {} (map (fn [val] (if (= [nil] (sp/select sp/MAP-VALS val)) nil val))
                  [vins geoH srcs ress prds vals (if (= 1 s-key) {:statsKey stats-key} {:statsKey nil})]))))


(def args-ok-wms-only (test-args 9 2 4 0))
#_{:vintage     "2016",
   :geoHierachy {:state {:lat 28.2639, :lng -80.7214}, :county "*"}}

(def args-na-wms-only (test-args 9 0 4 0))
#_{:vintage "2016",
   :geoHierachy {:invalid "*"}}

(def args-ok-s+g-v+ps (test-args 6 1 2 1))
#_{:vintage 2016,
   :geoHierachy {:state "01", :county "001"},
   :sourcePath ["acs" "acs5"],
   :geoResolution "500k",
   :predicates {:B00001_001E "0:1000000"},
   :values ["NAME"],
   :statsKey "6980d91653a1f78acd456d9187ed28e23ea5d4e3"}

(def args-na-sts-pred (test-args 8 1 3 1))
#_{:vintage 2017,
   :geoHierachy {:state "01", :county "001"},
   :sourcePath ["acs" "acs1"],
   :predicates {:B00001_001E "0:1000000"},
   :statsKey "6980d91653a1f78acd456d9187ed28e23ea5d4e3"}

(def args-ok-geo-only (test-args 9 2 2 0))
#_{:vintage 2014,
   :geoHierachy {:state {:lat 28.2639, :lng -80.7214}, :county "*"},
   :geoResolution "500k"}

(def args-na-geo-only (test-args 9 4 1 0))
#_{:vintage 2014,
   :geoHierachy {:state "01", :zip-code-tabulation-area "*"},
   :geoResolution "5m"}

(def args-ok-s+g-vals (test-args 5 3 0 1))
#_{:vintage "2015",
   :geoHierachy {:county {:lat 28.2639, :lng -80.7214}},
   :sourcePath ["cbp"],
   :geoResolution "20m",
   :values ["ESTAB"],
   :statsKey "6980d91653a1f78acd456d9187ed28e23ea5d4e3"}

(def args-ok-sts-vals (test-args 5 3 3 1))
#_{:vintage "2015",
   :geoHierachy {:county {:lat 28.2639, :lng -80.7214}},
   :sourcePath ["cbp"],
   :values ["ESTAB"],
   :statsKey "6980d91653a1f78acd456d9187ed28e23ea5d4e3"}

(def args-ok-s+g-v+ps (test-args 6 3 1 1))
#_{:vintage 2016,
   :geoHierachy {:county {:lat 28.2639, :lng -80.7214}},
   :sourcePath ["acs" "acs5"],
   :geoResolution "5m",
   :predicates {:B00001_001E "0:1000000"},
   :values ["NAME"],
   :statsKey "6980d91653a1f78acd456d9187ed28e23ea5d4e3"}

(def args-ok-sts-v+ps (test-args 6 3 3 1))
#_{:vintage 2016,
   :geoHierachy {:county {:lat 28.2639, :lng -80.7214}},
   :sourcePath ["acs" "acs5"],
   :predicates {:B00001_001E "0:1000000"},
   :values ["NAME"],
   :statsKey "6980d91653a1f78acd456d9187ed28e23ea5d4e3"}

(def args-na-s+g-vals (test-args 5 0 0 1))
#_{:vintage "2015",
   :geoHierachy {:invalid "*"},
   :sourcePath ["cbp"],
   :geoResolution "20m",
   :values ["ESTAB"],
   :statsKey "6980d91653a1f78acd456d9187ed28e23ea5d4e3"}

(def args-na-sts-vals (test-args 5 0 3 1))
#_{:vintage "2015",
   :geoHierachy {:invalid "*"},
   :sourcePath ["cbp"],
   :values ["ESTAB"],
   :statsKey "6980d91653a1f78acd456d9187ed28e23ea5d4e3"}









