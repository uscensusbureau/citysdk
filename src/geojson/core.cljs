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
            [defun.core :refer-macros [defun]]
            ["dotenv" :as env]
            ["node-dir" :as dir]
            ["fs" :as fs]
            ["path" :as path]))


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
   :consolidated-cities                                         {:2000 "cc"
                                                                 :2010 "170"
                                                                 :2013 "concity"
                                                                 :2014 "concity"
                                                                 :2015 "concity"
                                                                 :2016 "concity"
                                                                 :2017 "concity"}
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
   :combined-new-england-city-and-town-area                     {:2016 "cnecta"
                                                                 :2017 "cnecta"}
   :urban-area                                                  {:2013 "ua"
                                                                 :2014 "ua"
                                                                 :2015 "ua"
                                                                 :2016 "ua"
                                                                 :2017 "ua"
                                                                 :2012 "uac"
                                                                 :1990 "ua"
                                                                 :2000 "ua"}
   :congressional-district                                      {:103  "cd"
                                                                 :104  "cd"
                                                                 :105  "cd"
                                                                 :106  "cd"
                                                                 :107  "cd"
                                                                 :108  "cd"
                                                                 :109  "cd"
                                                                 :110  "cd"
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

(defn vinter
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
    (s/split string #"_|\.")                                     ;; => ["st01" "d90" "shp" "zip"]
    (map #(re-seq #"[a-z]+|[0-9]+" %))                           ;; => (("st" "01") ("d" "90") ("shp") ("zip"))
    (map (fn [y] (remove #(= "d" %) y)))                         ;; => (("st" "01") ("90") ("shp") ("zip"))
    (map-indexed #(if (zero? (mod (inc %1) 2 )) (vinter %2) %2)) ;; only apply function to the 2nd item (vintage)
    (map #(vec %))))                                             ;; => (["st" "01"] ["1990"] ["shp"] ["zip"])

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

(defn scopeHandler
  [[vin sco lev res mes :as all]]
  (if-not (= "" (keyFinder vin lev))
    (if (or (= sco "99") (= sco "us"))
      (apply str (interpose "/" [(apply str res mes) vin (apply str (keyFinder vin lev) ".json")]))
      (apply str (interpose "/" [(apply str res mes) vin sco (apply str (keyFinder vin lev) ".json")])))
    nil))

;; TODO: use this to resolve inconsistencies in file location (e.g., `zipcodes`) across vintages?

(defun fileDirector
  ([[lev sco] [vin] _     _]                                  (scopeHandler [vin sco lev "500" "k"]))
  ([_         [vin] [sco] ["outline"]  [res mes] _]           (scopeHandler [vin sco "outline" res mes]))
  ([_         [vin] [sco] ["uac" "10"] [res mes] _]           (scopeHandler [vin sco "uac" res mes]))
  ([_         [vin] [sco] [lev]        _         [res mes] _] (scopeHandler [vin sco lev res mes]))
  ([_         [vin] [sco] [lev]        [res mes] _]           (scopeHandler [vin sco lev res mes]))
  ([_         [vin] [sco] [lev]        [res mes] _]           (scopeHandler [vin sco lev res mes]))
  ([_         _     [sco] [lev "113"]  [res mes] _]           (scopeHandler ["2012" sco lev res mes]))
  ([& anything-else]                                          nil))

(defn geoFileTrans
  [string]
  (if-let [answer (->> (geoIDPartitioner string) (apply fileDirector))]
    answer
    nil)) ;; use the `nil` here to trigger the fs to skip this file
    ;(str (first (s/split string #"\.")) ".json"))) ;; just naively convert the filename to .json in flat folder


;(.isDirectory (fs/statSync "public"))

;(defn walkFilesSync
;  [drive]
;  (if (= true (.isDirectory (fs/statSync drive)))
;    (.map (fs/readdirSync drive) #(recur (path/join drive %)))
;    drive))

(dir/paths
  "C:\\Users\\Surface\\Downloads"
  true
  ;#(js/console.log %2)
  (fn [raw]
    (->>
      (js/JSON.stringify raw)
      ;(js/console.log))))
      (fs/writeFile ".\\test\\test5.json" % "utf8" (fn [] (js/console.log "file saved"))))))



(geoFileTrans "tb99_d00_shp.zip")
;; => nil

(geoFileTrans "zt01_d00_shp.zip")
;; => "500k/2000/01/zip-code-tabulation-area.json"

(geoFileTrans "cm_sa_96_shp.zip")
;; => nil

(geoFileTrans "tb99_d00_shp.zip")
;; => nil

(geoFileTrans "zt01_d00_shp.zip")
;; => "500k/2000/01/zip-code-tabulation-area.json"

(geoFileTrans "cm_sa_96_shp.zip")
;; => nil

(geoFileTrans "cmsa_96_shp.zip")
;; => nil

(geoFileTrans "cb99_03a_shp.zip")
;; => nil

(geoFileTrans "cb_2014_us_county_within_cd114_500k.zip")
;; => nil

(geoFileTrans "cb_rd13_us_cd113_500k.zip")
;; => "500k/2012/congressional-district.json"

(geoFileTrans "st01_d90_shp.zip")
;; => "500k/1990/01/state.json"

(geoFileTrans "rg99_d00_shp.zip")
;; => "500k/2000/region.json"

(geoFileTrans "gz_2010_us_outline_500k.zip")
;; => "500k/2010/nation.json"

(geoFileTrans "cb_2012_us_uac10_500k.zip")
;; => "500k/2012/urban-area.json"

(geoFileTrans "gz_2010_us_330_m1_500k.zip")
;; => "500k/2010/combined-statistical-area.json"

(geoFileTrans "gz_2010_01_970_00_500k.zip")
;; => "500k/2010/01/school-district-'unified'.json"

(geoFileTrans "cb_2014_us_nation_5m.zip")
;; => "5m/2014/nation.json"

(geoFileTrans "cb_2014_us_region_500k.zip")
;; => "500k/2014/region.json"

(geoFileTrans "cb_2014_01_tract_500k.zip")
;; => "500k/2014/01/tract.json"

(geoFileTrans "cd36_103_shp.zip")
;; => "500k/103/36/congressional-district.json"

(geoFileTrans "cb_rd13_us_cd113_500k.zip")
;; => "500k/2012/congressional-district.json"





