(ns test.wmsAPI.tests
  (:require
    [cljs.core.async    :refer [chan promise-chan close! >! <! pipeline
                                take! put! timeout to-chan]
                        :refer-macros [go alt!]]
    [cljs.test          :refer-macros [async deftest is testing run-tests]]
    [test.fixtures.core :refer [*g* test-async Icb<==IO=fixture]
                        :as ts]
    [census.wmsAPI.core :refer [$g$->wms-cfg
                                lookup-id->match?
                                search-id->match?
                                C->GIS-url
                                configed-map
                                try-census-wms
                                wms-engage?
                                =>args=GIS=args=>
                                I-<wms=I=
                                censusWMS]]))

(deftest geoKey->wms-config-test
  (is (= ($g$->wms-cfg *g* ts/args-ok-wms-only)
         {:vintage 2014,
          :layers ["82"],
          :cur-layer-idx 0,
          :lat 28.2639,
          :lng -80.7214,
          :sub-level [:county "*"],
          :geo [:STATE],
          :lookup-up-in :2010})))


(deftest lookup-id->match?-test
  (is (= (lookup-id->match? :CONCITY    ; ↓ seq'd inverted geoKeyMap ↓
                            [{:2017 {:wms {:layers ["24"], :lookup [:STATE :CONCITY]}}
                              :2016 {:wms {:layers ["24"], :lookup [:STATE :CONCITY]}}}
                             :consolidated-cities
                             {:2014 {:wms {:layers ["24"], :lookup [:BLOOP]}}
                              :2016 {:wms {:layers ["24"], :lookup [:BLOOP]}}}
                             :something-else])
         :consolidated-cities)))

(deftest search-id->match?-test
  (is (= (search-id->match? *g* :CONCITY)
       '(:consolidated-cities))))

(deftest wms-url-builder-test
  (is (= (C->GIS-url *g* ts/args-ok-wms-only)
         "https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_ACS2014/Mapserver/82/query?geometry=-80.7214,28.2639&geometryType=esriGeometryPoint&inSR=4269&spatialRel=esriSpatialRelIntersects&returnGeometry=false&f=pjson&outFields=STATE")))

(deftest configed-map-test
  (is (= (configed-map *g* {:STATE "51", :COUNTY "013"})
         {:STATE {:state "51"}, :COUNTY {:county "013"}})))

(comment "Got by getting in response from WMS api (below converted to edn from json)"
  (configed-map
    *g*
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
      (go (try-census-wms *g* ts/args-ok-wms-only 0 =O=)
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


(deftest =>args=census-wms=args=>-test
  (let [args-in {:vintage     "2017",
                 :geoHierarchy {:state {:lat 38.8816, :lng -77.0910}, :county "*"}}
        =>args= (chan 1)
        =args=> (chan 1)]
    (test-async
      (go (>! =>args= args-in)
          ((=>args=GIS=args=> *g*) =>args= =args=>)
          (is (= (<! =args=>)
                 {:vintage "2017",
                  :geoHierarchy {:state "51", :county "*"}}))
          (close! =>args=)
          (close! =args=>)))))


(deftest I-<wms=I=-test
  (let [args-in {:vintage     "2017",
                 :geoHierarchy {:state {:lat 38.8816, :lng -77.0910}, :county "*"}}
        args-na {:vintage     "1997"
                 :geoHierarchy {:county {:lat 22.2222, :lng -66.6666}}}
        =args=> (chan 1)]
    (test-async
      (go ((I-<wms=I= *g*) args-in =args=>)
          (is (= (<! =args=>)
                 {:vintage "2017",
                  :geoHierarchy {:state "51", :county "*"}}))
          ((I-<wms=I= *g*) args-na =args=>)
          (is (= (<! =args=>)
                 "No FIPS (Census geocodes) found for given arguments"))
          (close! =args=>)))))

(deftest censusWMS-test
  (let [args-in (clj->js {:vintage     "2017",
                          :geoHierarchy {:state {:lat 38.8816, :lng -77.0910}, :county "*"}}
                         :keywordize-keys true)
        args-na {:vintage     "1997"
                 :geoHierarchy {:county {:lat 22.2222, :lng -66.6666}}}
        $r$ (atom "")
        tcb (fn [E O] (if-let [err E]
                        (reset! $r$ err)
                        (reset! $r$ O)))]
    (test-async
      (go ((censusWMS *g*) args-in tcb)
          (<! (timeout 1000))
          (is (= @$r$
                 {:vintage "2017",
                  :geoHierarchy {:state "51", :county "*"}}))
          ((censusWMS *g*) args-na tcb)
          (<! (timeout 1000))
          (is (= @$r$
                 "No FIPS (Census geocodes) found for given arguments"))))))

(run-tests)
