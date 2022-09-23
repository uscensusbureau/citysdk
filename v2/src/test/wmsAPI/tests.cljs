(ns test.wmsAPI.tests
  (:require
   [cljs.core.async :refer [chan close! >! <!]
    :refer-macros [go]]
   [cljs.test :refer-macros [deftest is  run-tests]]
   [test.fixtures.core :refer [GG test-async] :as ts]
   [census.wmsAPI.core :refer [$g$->wms-cfg
                               lookup-id->match?
                               search-id->match?
                               C->GIS-url
                               configed-map
                               try-census-wms
                               wms-engage?
                               =>args=GIS=args=>
                               I-<wms=I=]]))


(def wms-only {:vintage     2014,
               :geoHierarchy {:state {:lat 28.2639, :lng -80.7214}, :county "*"}})

(deftest $g$->wms-cfg-test
  (is (= ($g$->wms-cfg GG wms-only)
         {:vintage       2014,
          :layers        ["82"],
          :cur-layer-idx 0,
          :lat           28.2639,
          :lng           -80.7214,
          :sub-levels    '([:county "*"]), ;; don't ask
          :geo           [:STATE],
          :looked-up-in  :2010})))


(deftest lookup-id->match?-test
  (is (= (lookup-id->match? :CONCITY                        ; ↓ seq'd inverted geoKeyMap ↓
                            [{:2017 {:wms {:layers ["24"], :lookup [:STATE :CONCITY]}}
                              :2016 {:wms {:layers ["24"], :lookup [:STATE :CONCITY]}}}
                             :consolidated-cities
                             {:2014 {:wms {:layers ["24"], :lookup [:BLOOP]}}
                              :2016 {:wms {:layers ["24"], :lookup [:BLOOP]}}}
                             :something-else])
         :consolidated-cities)))

(deftest search-id->match?-test
  (is (= (search-id->match? GG :CONCITY)
         '(:consolidated-cities))))

(deftest configed-map-test
  (is (= (configed-map GG {:STATE "51", :COUNTY "013"})
         {:STATE {:state "51"}, :COUNTY {:county "013"}})))


(def WMS_GO {:vintage     "2014",
             :geoHierarchy {:state {:lat 28.2639, :lng -80.7214}, :county "*"}})

(deftest C->GIS-url-test
  (is (= (C->GIS-url GG WMS_GO)
         "https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_ACS2014/MapServer/82/query?geometry=-80.7214,28.2639&geometryType=esriGeometryPoint&inSR=4269&spatialRel=esriSpatialRelIntersects&returnGeometry=false&f=json&outFields=STATE")))

(deftest try-census-wms-test
  (let [=O= (chan 1)]
    (test-async
     (go (try-census-wms GG WMS_GO 0 =O=)
         (let [res (<! =O=)]
           (is (= res
                  {:STATE {:state "12"}}))
           (close! =O=))))))

(deftest test-atom-via-chan
  (let [=O= (chan 1)
        $A$ (atom {})]
    (test-async
     (go (>! =O= (reset! $A$ {:key "val"}))
         (let [res (<! =O=)]
           (is (= res
                  {:key "val"}))
           (>! =O= @$A$)
           (is (identical? (<! =O=)
                           res))
           (close! =O=))))))

(deftest wms-engage?-test
  (is (and (= (wms-engage? {:geoHierarchy {:county {:lat 1 :lng -7} :tract "*"}})
              true)
           (= (wms-engage? {:geoHierarchy {:county "01" :tract "*"}})
              false))))


(deftest =>args=GIS=args=>-test
  (let [args-in {:vintage      "2017",
                 :geoHierarchy {:state {:lat 38.8816, :lng -77.0910}, :county "*"}}
        args-out {:vintage      "2017",
                  :geoHierarchy {:state "51", :county "*"}}
        =>args= (chan 1)
        =args=> (chan 1)]
    (test-async
     (go (>! =>args= args-in)
         ((=>args=GIS=args=> GG) =>args= =args=>)
         (is (= (<! =args=>)
                args-out))
         (close! =>args=)
         (close! =args=>)))))

(deftest I-<wms=I=-test
  (let [args-in {:vintage      "2017",
                 :geoHierarchy {:state {:lat 38.8816, :lng -77.0910}, :county "*"}}
        args-na {:vintage      "1997"
                 :geoHierarchy {:county {:lat 22.2222, :lng -66.6666}}}
        =args=> (chan 1)]
    (test-async
     (go ((I-<wms=I= GG) args-in =args=>)
         (is (= (<! =args=>)
                {:vintage      "2017",
                 :geoHierarchy {:state "51", :county "*"}}))
         ((I-<wms=I= GG) args-na =args=>)
         (is (= (<! =args=>)
                "No FIPS (Census geocodes) found for given arguments"))
         (close! =args=>)))))


(run-tests)
