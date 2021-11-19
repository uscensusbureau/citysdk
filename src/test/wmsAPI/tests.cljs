(ns test.wmsAPI.tests
  (:require
    [cljs.core.async :refer [chan promise-chan close! >! <! pipeline
                             take! put! timeout to-chan!]
     :refer-macros [go alt!]]
    [cljs.test :refer-macros [async deftest is testing run-tests]]
    [test.fixtures.core :refer [GG test-async Icb<==IO=fixture]
     :as ts]
    [census.wmsAPI.core :refer [$g$->wms-cfg
                                lookup-id->match?
                                search-id->match?
                                C->GIS-url
                                configed-map
                                try-census-wms
                                wms-engage?
                                =>args=GIS=args=>
                                I-<wms=I=]]))

;(prn ts/args-ok-wms-only)
(deftest $g$->wms-cfg-test
  (is (= ($g$->wms-cfg GG ts/args-ok-wms-only)
         {:vintage       2014,
          :layers        ["82"],
          :cur-layer-idx 0,
          :lat           28.2639,
          :lng           -80.7214,
          :sub-level     [:county "*"],
          :geo           [:STATE],
          :looked-up-in  :2010})))
#_(= {
      :vintage       2014,
      :layers        ["82"],
      :cur-layer-idx 0,
      :lat           28.2639,
      :lng           -80.7214,
      :sub-level     [:county "*"],
      :geo           [:GEOID],
      :looked-up-in  nil}
     {:vintage       2014,
      :layers        ["82"],
      :cur-layer-idx 0,
      :lat           28.2639,
      :lng           -80.7214,
      :sub-level     [:county "*"],
      :geo           [:STATE],
      :looked-up-in  :2010})

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

(deftest C->GIS-url-test
  (is (= (C->GIS-url GG ts/args-ok-wms-only)
         "https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_ACS2014/MapServer/82/query?geometry=-80.7214,28.2639&geometryType=esriGeometryPoint&inSR=4269&spatialRel=esriSpatialRelIntersects&returnGeometry=false&f=pjson&outFields=STATE")))

(deftest configed-map-test
  (is (= (configed-map GG {:STATE "51", :COUNTY "013"})
         {:STATE {:state "51"}, :COUNTY {:county "013"}})))

#_(=
    {:STATE {nil "51"}, :COUNTY {nil "013"}}
    {:STATE {:state "51"}, :COUNTY {:county "013"}})


(comment "Got by getting in response from WMS api (below converted to edn from json)"
         (configed-map
           GG
           (get-in
             {:displayFieldName "BASENAME",
              :fieldAliases     {:STATE "STATE", :COUNTY "COUNTY"},
              :fields           [{:name   "STATE",
                                  :type   "esriFieldTypeString",
                                  :alias  "STATE",
                                  :length 2}
                                 {:name   "COUNTY",
                                  :type   "esriFieldTypeString",
                                  :alias  "COUNTY",
                                  :length 3}],
              :features         [{:attributes {:STATE "51", :COUNTY "013"}}]}
             [:features 0 :attributes])))

(deftest try-census-wms-test
  (let [=O= (chan 1)]
    (test-async
      (go (try-census-wms GG ts/args-ok-wms-only 0 =O=)
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

#_(deftest censusWMS-test
    (let [args-in (clj->js {:vintage      "2017",
                            :geoHierarchy {:state {:lat 38.8816, :lng -77.0910}, :county "*"}}
                           :keywordize-keys true)
          args-na {:vintage      "1997"
                   :geoHierarchy {:county {:lat 22.2222, :lng -66.6666}}}
          $r$ (atom "")
          tcb (fn [E O] (if-let [err E]
                          (reset! $r$ err)
                          (reset! $r$ O)))]
      (test-async
        (go ((censusWMS GG) args-in tcb)
            (<! (timeout 1000))
            (is (= @$r$
                   {:vintage      "2017",
                    :geoHierarchy {:state "51", :county "*"}}))
            ((censusWMS GG) args-na tcb)
            (<! (timeout 1000))
            (is (= @$r$
                   "No FIPS (Census geocodes) found for given arguments"))))))

(run-tests)
