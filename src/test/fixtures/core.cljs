(ns test.fixtures.core
  (:require
    [cljs.core.async :refer [take! pipeline chan promise-chan]
                     :refer-macros [go]]
    [cljs.test       :refer-macros [deftest is testing run-tests async]]
    [com.rpl.specter :refer [MAP-VALS]
                     :refer-macros [select setval]]
    [cljs.reader     :refer [read-string]]
    ;[oops.core       :refer [oget]]
    ["fs"            :as fs]
    ["dotenv"        :as env]))

(defn read-edn [path] (read-string (str (fs/readFileSync path))))

(def stats-key (get-in (js->clj (env/load)) ["parsed" "Census_Key_Pro"]))
;(prn stats-key)
(def *g* (read-edn "./src/configs/geojson/index.edn"))

(defn time-spot [] (js/Date.))

(defn test-async
  "Asynchronous test awaiting ch to produce a value or close."
  [=test=]
  (async done
    (take! =test= (fn [_] (done)))))

(defn heap-spot
  []
  (reduce-kv #(assoc %1 (keyword %2) (/ %3 1024 1024))
             {}
             (js->clj (js/process.memoryUsage))))

(defn heap-diff
  [heap-out heap-in]
  (reduce-kv #(assoc %1 (keyword %2) (/ (js/Math.round (* 100 %3)) 100))
             {}
             (merge-with - heap-out heap-in)))

#_(merge-with -
    {:rss 92.88, :heapTotal 53.84, :heapUsed 44.76, :external 0.05}
    {:rss 61.88, :heapTotal 42.84, :heapUsed 31.76, :external 0.04})

(defn test-async-timed
  "Asynchronous test awaiting ch to produce a value or close."
  ([test-name time-in =test=] (test-async-timed test-name time-in nil =test=))
  ([test-name time-in heap-in =test=]
   (async done
     (take! =test=
            (fn [_]
              (do (if-let [heap-before heap-in]
                    (do (prn (str test-name " - Heap stats (MB):"))
                        (prn (heap-diff (heap-spot) heap-before)))
                    nil)
                  (prn (str test-name ": Elapsed ms= "(- (js/Date.) time-in)))
                  (done)))))))


#_(defn test-async-time
    [afn args f]
    (let [time-in (js/Date.)]
      (afn args
           (fn [res] (do (f res)
                         (prn (str "Elapsed ms: "(- (js/Date.) time-in))))))))


(defn Icb<==IO=fixture
  [=I= =O=]
  (pipeline 1 =O= (map identity) =I=))

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
        ge1s (if (= [:coords] (select MAP-VALS (get-path :geo1 geo)))
               (setval MAP-VALS (get-path :crds 0) (get-path :geo1 geo))
               (get-path :geo1 geo))
        ge2s (get-path :geo2 geo)
        geoH {:geoHierarchy  (conj {} ge1s ge2s)}
        ress {:geoResolution (get-path :geoR res)}]
    (into {} (map (fn [val] (if (= [nil] (select MAP-VALS val)) nil val))
                  [vins geoH srcs ress prds vals (if (= 1 s-key)
                                                     {:statsKey stats-key}
                                                     {:statsKey nil})]))))


(def args-ok-wms-only (test-args 9 2 4 0))
#_{:vintage     "2016",
   :geoHierarchy {:state {:lat 28.2639, :lng -80.7214}, :county "*"}}
;(prn args-ok-wms-only)

(def args-na-wms-only (test-args 9 0 4 0))
#_{:vintage "2016",
   :geoHierarchy {:invalid "*"}}


(def args-ok-s+g-v+ps (test-args 6 1 2 1))
#_{:vintage 2016,
   :geoHierarchy {:state "01", :county "001"},
   :sourcePath ["acs" "acs5"],
   :geoResolution "500k",
   :predicates {:B00001_001E "0:1000000"},
   :values ["NAME"],
   :statsKey "6980d91653a1f78acd456d9187ed28e23ea5d4e3"}

;(js/console.log (clj->js args-ok-s+g-v+ps))

(def args-na-sts-pred (test-args 8 1 3 1))
#_{:vintage 2017,
   :geoHierarchy {:state "01", :county "001"},
   :sourcePath ["acs" "acs1"],
   :predicates {:B00001_001E "0:1000000"},
   :statsKey "6980d91653a1f78acd456d9187ed28e23ea5d4e3"}

(def args-ok-geo-only (test-args 9 2 2 0))
#_{:vintage 2014,
   :geoHierarchy {:state {:lat 28.2639, :lng -80.7214}, :county "*"},
   :geoResolution "500k"}

(def args-na-geo-only (test-args 9 4 1 0))
#_{:vintage 2014,
   :geoHierarchy {:state "01", :zip-code-tabulation-area "*"},
   :geoResolution "5m"}

(def args-ok-s+g-vals (test-args 5 3 0 1))
#_{:vintage "2015",
   :geoHierarchy {:county {:lat 28.2639, :lng -80.7214}},
   :sourcePath ["cbp"],
   :geoResolution "20m",
   :values ["ESTAB"],
   :statsKey "6980d91653a1f78acd456d9187ed28e23ea5d4e3"}

(def args-ok-sts-vals (test-args 5 3 3 1))
#_{:vintage "2015",
   :geoHierarchy {:county {:lat 28.2639, :lng -80.7214}},
   :sourcePath ["cbp"],
   :values ["ESTAB"],
   :statsKey "6980d91653a1f78acd456d9187ed28e23ea5d4e3"}

(def args-ok-s+g-v+ps (test-args 6 3 1 1))
#_{:vintage 2016,
   :geoHierarchy {:county {:lat 28.2639, :lng -80.7214}},
   :sourcePath ["acs" "acs5"],
   :geoResolution "5m",
   :predicates {:B00001_001E "0:1000000"},
   :values ["NAME"],
   :statsKey "6980d91653a1f78acd456d9187ed28e23ea5d4e3"}

(def args-ok-sts-v+ps (test-args 6 3 3 1))
#_{:vintage 2016,
   :geoHierarchy {:county {:lat 28.2639, :lng -80.7214}},
   :sourcePath ["acs" "acs5"],
   :predicates {:B00001_001E "0:1000000"},
   :values ["NAME"],
   :statsKey "6980d91653a1f78acd456d9187ed28e23ea5d4e3"}

(def args-na-s+g-vals (test-args 5 0 0 1))
#_{:vintage "2015",
   :geoHierarchy {:invalid "*"},
   :sourcePath ["cbp"],
   :geoResolution "20m",
   :values ["ESTAB"],
   :statsKey "6980d91653a1f78acd456d9187ed28e23ea5d4e3"}

(def args-na-sts-vals (test-args 5 0 3 1))
#_{:vintage "2015",
   :geoHierarchy {:invalid "*"},
   :sourcePath ["cbp"],
   :values ["ESTAB"],
   :statsKey "6980d91653a1f78acd456d9187ed28e23ea5d4e3"}

#_(js/console.log (clj->js {:vintage 2016
                            :sourcePath ["acs" "acs5"]
                            :values ["B25001_001E"]
                            :geoHierarchy {:zip-code-tabulation-area "*"}
                            :geoResolution "500k"
                            :statsKey stats-key}))

#_(map #(js/console.log (clj->js %))
       [args-ok-wms-only
        args-ok-s+g-v+ps
        args-ok-sts-vals
        args-ok-s+g-vals
        args-ok-geo-only])

;(comment
;  { vintage: 2014,
;    geoHierarchy: { state: { lat: 28.2639, lng: -80.7214 }, county: '*'}}
;  { vintage: 2016,
;    geoHierarchy: { county: { lat: 28.2639, lng: -80.7214 } },
;    sourcePath: [ 'acs', 'acs5' ],
;    geoResolution: '5m',
;    predicates: { B00001_001E: '0:1000000' },
;    values: [ 'B01001_001E']}
;  { vintage: '2015',
;    geoHierarchy: { county: { lat: 28.2639, lng: -80.7214 } },
;    sourcePath: [ 'cbp' ],
;    values: [ 'ESTAB']}
;  { vintage: '2015',
;     geoHierarchy: { county: { lat: 28.2639, lng: -80.7214 } },
;     sourcePath: [ 'cbp' ],
;     geoResolution: '20m',
;     values: [ 'ESTAB']}
;  { vintage: 2014,
;    geoHierarchy: { state: { lat: 28.2639, lng: -80.7214 }, county: '*' },
;    geoResolution: '500k'}
;  { vintage: 2016,
;   sourcePath: [ 'acs', 'acs5' ],
;   values: [ 'B25001_001E' ],
;   geoHierarchy: { 'zip-code-tabulation-area': '*' },
;   geoResolution: '500k',})






