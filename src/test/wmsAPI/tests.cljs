(ns test.wmsAPI.tests
  (:require
    [cljs.core.async    :refer [chan promise-chan close! >! <! pipeline]
                        :refer-macros [go]]
    [cljs.test          :refer-macros [async deftest is testing run-tests]]
    [test.fixtures.core :refer [*g* test-async Icb<==IO=fixture]
                        :as ts]
    [census.wmsAPI.core :refer [geoKey->wms-config
                                lookup-id->match?
                                search-id->match?
                                wms-url-builder
                                configed-map
                                try-census-wms
                                wms-engage?
                                IO-census-wms
                                Icb<-wms-args<<=IO=]]))

(deftest geoKey->wms-config-test
  (is (= (geoKey->wms-config *g* ts/args-ok-wms-only)
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
  (is (= (wms-url-builder *g* ts/args-ok-wms-only)
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
    (test-async ; NTS: test-async needs to enclose the `go` directly
      (go (try-census-wms *g* ts/args-ok-wms-only 0 =O=)
          (let [res (<! =O=)]
            (is (= res
                  {:STATE {:state "12"}}))
            (try-census-wms *g* ts/args-ok-wms-only 0 =O=)
            (is (identical? (<! =O=)
                            res))
            (close! =O=))))))

(let [=O= (promise-chan)]
  ;(test-async ; NTS: test-async needs to enclose the `go` directly
    (go (try-census-wms *g* ts/args-ok-wms-only 0 =O=)
        (prn (<! =O=))
        (close! =O=)))

(deftest wms-engage?-test
  (is (and (= (wms-engage? {:geoHierarchy {:county {:lat 1 :lng -7} :tract "*"}})
              true)
           (= (wms-engage? {:geoHierarchy {:county "01" :tract "*"}})
              false))))


(deftest IO-census-wms-test
  (let [args-in {:vintage     "2017",
                 :geoHierarchy {:state {:lat 38.8816, :lng -77.0910}, :county "*"}}
        =args-in=  (chan 1)
        =args-out= (promise-chan)]
    (test-async
      (go (>! =args-in= args-in)
          ((IO-census-wms *g*) =args-in= =args-out=)
          (is (= (<! =args-out=)
                 {:vintage "2017",
                  :geoHierarchy {:state "51", :county "*"}}))
          (close! =args-in=)
          (close! =args-out=)))))


(deftest Icb<-wms-args<<=IO=-test
  (let [args-in {:vintage     "2017",
                 :geoHierarchy {:state {:lat 38.8816, :lng -77.0910}, :county "*"}}]
    (test-async
      (go ((Icb<-wms-args<<=IO= Icb<==IO=fixture)
           args-in
           (fn [args-out]
             (is (= args-out
                    {:vintage "2017",
                     :geoHierarchy {:state "51", :county "*"}}))))))))

(run-tests)
