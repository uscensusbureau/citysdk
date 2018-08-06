(ns geojson.core
  (:require [cljs.core.async
             :as async
             :refer [chan put! take! >! <! pipe timeout close! alts! pipeline-async]]
            [cljs.core.async :refer-macros [go go-loop alt!]]
            [ajax.core :as http :refer [GET POST]]
            [cognitect.transit :as t]
            [oops.core :as obj]
            [clojure.string :as s]
            [clojure.set :refer [map-invert]]
            [cljs.pprint :refer [pprint]]
            [defun.core :refer [defun]]
            ["dotenv" :as env]
            ["fs" :as fs]))


(def geoKeyMap
  {:nation                                                      {:2010 "outline"
                                                                 :2013 "nation"
                                                                 :2014 "nation"
                                                                 :2015 "nation"
                                                                 :2016 "nation"
                                                                 :2017 "nation"}
   :region                                                      {:2013 "region"
                                                                 :2014 "region"
                                                                 :2015 "region"
                                                                 :2016 "region"
                                                                 :2017 "region"
                                                                 :2010 "020"
                                                                 :2000 "rg"}
   :division                                                    {:2013 "division"
                                                                 :2014 "division"
                                                                 :2015 "division"
                                                                 :2016 "division"
                                                                 :2017 "division"
                                                                 :2010 "030"
                                                                 :2000 "dv"}
   :state                                                       {:2013 "state"
                                                                 :2014 "state"
                                                                 :2015 "state"
                                                                 :2016 "state"
                                                                 :2017 "state"
                                                                 :2010 "040"
                                                                 :1990 "st"
                                                                 :2000 "st"}
   :county                                                      {:2013 "county"
                                                                 :2014 "county"
                                                                 :2015 "county"
                                                                 :2016 "county"
                                                                 :2017 "county"
                                                                 :2010 "050"
                                                                 :1990 "co"
                                                                 :2000 "co"}
   :county-subdivision                                          {:2013 "cousub"
                                                                 :2014 "cousub"
                                                                 :2015 "cousub"
                                                                 :2016 "cousub"
                                                                 :2017 "cousub"
                                                                 :2010 "060"
                                                                 :1990 "cs"
                                                                 :2000 "cs"}
   :tract                                                       {:2013 "tract"
                                                                 :2014 "tract"
                                                                 :2015 "tract"
                                                                 :2016 "tract"
                                                                 :2017 "tract"
                                                                 :2010 "140"
                                                                 :1990 "tr"
                                                                 :2000 "tr"}
   :place                                                       {:2013 "place"
                                                                 :2014 "place"
                                                                 :2015 "place"
                                                                 :2016 "place"
                                                                 :2017 "place"
                                                                 :2010 "160"
                                                                 :1990 "pl"
                                                                 :2000 "pl"}
   :alaska-native-regional-corporation                          {:2013 "anrc"
                                                                 :2014 "anrc"
                                                                 :2015 "anrc"
                                                                 :2016 "anrc"
                                                                 :2017 "anrc"
                                                                 :2010 "230"
                                                                 :1990 "an"
                                                                 :2000 "an"}
   :american-indian-area!alaska-native-area!hawaiian-home-land  {:2013 "aiannh"
                                                                 :2014 "aiannh"
                                                                 :2015 "aiannh"
                                                                 :2016 "aiannh"
                                                                 :2017 "aiannh"
                                                                 :2010 "250"
                                                                 :1990 "ir"
                                                                 :2000 "na"}
   :metropolitan-statistical-area!micropolitan-statistical-area {:2013 "cbsa"
                                                                 :2014 "cbsa"
                                                                 :2015 "cbsa"
                                                                 :2016 "cbsa"
                                                                 :2017 "cbsa"
                                                                 :2010 "310"
                                                                 :1990 "ma"}
   :combined-statistical-area                                   {:2013 "csa"
                                                                 :2014 "csa"
                                                                 :2015 "csa"
                                                                 :2016 "csa"
                                                                 :2017 "csa"
                                                                 :2010 "330"}
   :new-england-city-and-town-area                              {:2013 "necta"
                                                                 :2014 "necta"
                                                                 :2015 "necta"
                                                                 :2016 "necta"
                                                                 :2017 "necta"
                                                                 :2010 "350"}
   :urban-area                                                  {:2013 "ua"
                                                                 :2014 "ua"
                                                                 :2015 "ua"
                                                                 :2016 "ua"
                                                                 :2017 "ua"
                                                                 :2012 "uac"
                                                                 :1990 "ua"
                                                                 :2000 "ua"}
   :congressional-district                                      {:2012 "cd"
                                                                 :2013 "cd"
                                                                 :2014 "cd"
                                                                 :2015 "cd"
                                                                 :2016 "cd"
                                                                 :2017 "cd"
                                                                 :2012 "cd"
                                                                 :2010 "500"}
   :school-district-'elementary'                                {:2016 "elsd"
                                                                 :2017 "elsd"
                                                                 :2000 "se"}
   :school-district-'secondary'                                 {:2016 "scsd"
                                                                 :2017 "scsd"
                                                                 :2000 "ss"}
   :school-district-'unified'                                   {:2016 "unsd"
                                                                 :2017 "unsd"
                                                                 :2010 "970"
                                                                 :2000 "sn"}
   :block-group                                                 {:2013 "bg"
                                                                 :2014 "bg"
                                                                 :2015 "bg"
                                                                 :2016 "bg"
                                                                 :2017 "bg"
                                                                 :2010 "150"
                                                                 :1990 "bg"
                                                                 :2000 "bg"}
   :public-use-microdata-area                                   {:2013 "puma"
                                                                 :2014 "puma"
                                                                 :2015 "puma"
                                                                 :2016 "puma"
                                                                 :2017 "puma"}
   :zip-code-tabulation-area                                    {:2013 "zcta"
                                                                 :2014 "zcta"
                                                                 :2015 "zcta"
                                                                 :2016 "zcta"
                                                                 :2017 "zcta"
                                                                 :2010 "860"
                                                                 :2000 "zt"} ;; AKA (in API): zipcode
   :state-legislative-district-'upper-chamber'                  {:2013 "sldu"
                                                                 :2014 "sldu"
                                                                 :2015 "sldu"
                                                                 :2016 "sldu"
                                                                 :2017 "sldu"
                                                                 :2012 "sldu"
                                                                 :2010 "610"
                                                                 :2000 "su"}
   :state-legislative-district-'lower-chamber'                  {:2013 "sldl"
                                                                 :2014 "sldl"
                                                                 :2015 "sldl"
                                                                 :2016 "sldl"
                                                                 :2017 "sldl"
                                                                 :2012 "sldl"
                                                                 :2010 "620"
                                                                 :2000 "sl"}})


(s/split "st01_d90_shp.zip" #"_|\.")
;; => ["st01" "d90" "shp" "zip"]
(s/split "st01_d90_shp" #"_")
;; => ["st01" "d90" "shp"]
;; Better way:
(map #(vec %) (map #(re-seq #"[a-z]+|[0-9]+" %) ["st01" "d90" "shp" "zip"]))
;; => (["st" "01"] ["d" "90"] ["shp"] ["zip"])

(comment
  ; Clojure
  (Integer/parseInt "123")
  ; ClojureScript
  (js/parseInt "123"))

;; All together now

(defn translateInts
  [vec]
  (map
    (fn [v]
      (if (false? (js/Number.isNaN (js/parseInt v 10)))
        (js/parseInt v 10)
        v))
    vec))
(map #(translateInts %) [["gz"] ["2010"] ["us"] ["970"] ["00"] ["500" "k"] ["zip"]])

(defn verboseVintner
  [vec]
  (map
    (fn [v]
      (cond
        (= "90" v) "1990"
        (= "00" v) "2000"
        :else v))
    vec))

(defn geoIDPartitioner
  [string]
  (->>
    (s/split string #"_|\.")                                ;; => ["st01" "d90" "shp" "zip"]
    (map #(re-seq #"[a-z]+|[0-9]+" %))                      ;; => (("st" "01") ("d" "90") ("shp") ("zip"))
    (map (fn [y] (remove #(= "d" %) y)))                    ;; => (("st" "01") ("90") ("shp") ("zip"))
    ;(map #(translateInts %)) ;; => not worth it (("st" 1) (90) ("shp") ("zip"))
    (map #(verboseVintner %))
    (map #(vec %))))                                        ;; => (["st" "01"] ["90"] ["shp"] ["zip"])

(str (name :01))

(geoIDPartitioner "st01_d90_shp.zip")
;; => (["st" "01"] ["1990"] ["shp"] ["zip"])
(geoIDPartitioner "rg99_d00_shp.zip")
;; => (["rg" "99"] ["2000"] ["shp"] ["zip"])
(geoIDPartitioner "gz_2010_us_outline_500k.zip")
;; => (["gz"] ["2010"] ["us"] ["outline"] ["500" "k"] ["zip"])
(geoIDPartitioner "cb_2012_us_uac10_500k.zip")
;; => (["cb"] ["2012"] ["us"] ["uac" "10"] ["500" "k"] ["zip"])
(geoIDPartitioner "gz_2010_us_330_m1_500k.zip")
;; => (["gz"] ["2010"] ["us"] ["330"] ["m" "1"] ["500" "k"] ["zip"])
(geoIDPartitioner "gz_2010_01_970_00_500k.zip")
;; => (["gz"] ["2010"] ["01"] ["970"] ["2000"] ["500" "k"] ["zip"])
(geoIDPartitioner "cb_2014_us_nation_5m.zip")
;; => (["cb"] ["2014"] ["us"] ["nation"] ["5" "m"] ["zip"])
(geoIDPartitioner "cb_2014_us_region_500k.zip")
;; => (["cb"] ["2014"] ["us"] ["region"] ["500" "k"] ["zip"])
(geoIDPartitioner "cb_2014_01_tract_500k.zip")
;; => (["cb"] ["2014"] ["01"] ["tract"] ["500" "k"] ["zip"])
(geoIDPartitioner "cb_rd13_us_cd113_500k.zip")
;; => (["cb"] ["rd" "13"] ["us"] ["cd" "113"] ["500" "k"] ["zip"])

(defn find1Key
  [vintage level [k v]]
  (if-let [[k2 v2] (find k (keyword vintage))]
    (if (= v2 level)
      (name v)
      nil)
    nil))

(defn keyFinder
  [vintage level]
  (apply str (remove nil? (map #(find1Key vintage level %) (seq (map-invert geoKeyMap))))))

(keyFinder "2010" "970")
;; => ("state-legislative-district-'lower-chamber'")


(defn scopeHandler
  [vintage scope level res resMes]
  (if (or (= scope "99") (= scope "us"))
    (apply str (interpose "/" [(apply str res resMes), vintage, (keyFinder vintage level)]))
    (apply str (interpose "/" [(apply str res resMes), vintage, scope, (keyFinder vintage level)]))))

(defun fileDirector
  ([[level scope] [vintage] _        _]                                        (scopeHandler vintage scope level "500" "k"))
  ([_             [vintage] [scope] ["outline"]   [res resMes] _]              (scopeHandler vintage scope "outline" res resMes))
  ([_             [vintage] [scope] ["uac" "10"]  [res resMes] _]              (scopeHandler vintage scope "uac" res resMes))
  ([_             [vintage] [scope] [level]       _            [res resMes] _] (scopeHandler vintage scope level res resMes))
  ([_             [vintage] [scope] [level]       [res resMes] _]              (scopeHandler vintage scope level res resMes))
  ([_             [vintage] [scope] [level]       [res resMes] _]              (scopeHandler vintage scope level res resMes))
  ([_             _         [scope] [level "113"] [res resMes] _]              (scopeHandler "2012" scope level res resMes)))


(apply fileDirector [["cb"] ["rd" "13"] ["us"] ["cd" "113"] ["500" "k"] ["zip"]])

(defn geoFileTrans
  [s]
  (->>
    (geoIDPartitioner s)
    (apply fileDirector)))

(geoFileTrans "cb_rd13_us_cd113_500k.zip")
;; => "500k/2012/congressional-district"
(geoFileTrans "st01_d90_shp.zip")
;; => "500k/1990/01/state"
(geoFileTrans "rg99_d00_shp.zip")
;; => "500k/2000/region"
(geoFileTrans "gz_2010_us_outline_500k.zip")
;; => "500k/2010/nation"
(geoFileTrans "cb_2012_us_uac10_500k.zip")
;; => "500k/2012/urban-area"
(geoFileTrans "gz_2010_us_330_m1_500k.zip")
;; => "500k/2010/combined-statistical-area"
(geoFileTrans "gz_2010_01_970_00_500k.zip")
;; => "500k/2010/01/school-district-'unified'"
(geoFileTrans "cb_2014_us_nation_5m.zip")
;; => "5m/2014/nation"
(geoFileTrans "cb_2014_us_region_500k.zip")
;; => "500k/2014/region"
(geoFileTrans "cb_2014_01_tract_500k.zip")
;; => "500k/2014/01/tract"
(geoFileTrans "cb_rd13_us_cd113_500k.zip")
;; => "500k/2012/congressional-district"


;; `if-let`: if the value of condition is truthy, then that value is assigned to the definition, and "then" is evaluated.
;; Otherwise the value is NOT assigned to the definition, and "else" is evaluated.
;; In Clojure, anything that isn't either `false` or `nil` is "truthy".


