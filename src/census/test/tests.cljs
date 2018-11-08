(ns census.test.tests
  (:require [cljs.test :refer-macros [deftest is testing run-tests]]
            [cljs.core.async      :as <|]
            [census.wmsAPI.core   :as wms]
            [census.statsAPI.core :as sts]
            [census.geoAPI.core   :as geo]
            [census.merger.core   :as s+g]
            [census.test.core     :as ts :refer [*g*]]))

(deftest test-try-census-wms
  (let [=O= (<|/promise-chan)]
    (<|/go (wms/try-census-wms *g* ts/args-ok-wms-only 0 =O=)
           (prn (<|/<! =O=))
           (ts/test-async
             (<|/go (is (= (<|/<! =O=)
                           {:STATE {:state "12"}}))
                    (<|/close! =O=))))))

(deftest test-IO-census-wms
  (let [args {:vintage     "2017",
              :geoHierarchy {:state {:lat 38.8816, :lng -77.0910}, :county "*"}}
        =args-in=  (<|/chan 1)
        =args-out= (<|/promise-chan)]
    (ts/test-async
      (<|/go (<|/>! =args-in= args)
             (wms/IO-census-wms =args-in= =args-out=)
             (prn (<|/<! =args-out=))
             (is (= (<|/<! =args-out=)
                    {:vintage "2017",
                     :geoHierarchy {:state "51", :county "*"}}))
             (<|/close! =args-in=)
             (<|/close! =args-out=)))))

; TODO setup tests with wms/Icb<-wms-args<<=IO=
;(deftest test-Icb<-wms-args<<=IO=
; (let [args ts/args-ok-wms-only]
;   (Icb<-wms-args<<=IO= args)))

(test test-try-census-wms)

(test test-IO-census-wms)

(enable-console-print!)

(run-tests)