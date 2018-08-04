(ns geojson.core
  (:require [cljs.core.async
             :as async
             :refer [chan put! take! >! <! pipe timeout close! alts! pipeline-async]]
            [cljs.core.async :refer-macros [go go-loop alt!]]
            [ajax.core :as http :refer [GET POST]]
            [cognitect.transit :as t]
            [oops.core :as obj]
            [clojure.string :as s]
            [cljs.pprint :refer [pprint]]
            ["dotenv" :as env]
            ["fs" :as fs]
            [merger.core :as merger]
            [clojure.repl :refer [source]]))

(def stats-key (obj/oget (env/load) ["parsed" "Census_Key_Pro"]))

;; EXAMPLE:
(merger/stats-url-builder {:vintage      "2016"
                           :sourcePath   ["acs" "acs5"]
                           :geoHierarchy {:state "01" :county "073" :tract "000100"}
                           :variables    ["B01001_001E" "B01001_001M"]
                           :statsKey     stats-key})

;http://www2.census.gov/geo/tiger/GENZ2010/gz_2010_us_outline_500k.zip


; 1990 pattern:

(s/split "st01_d90_shp.zip" #"_|\.")
;; => ["st01" "d90" "shp" "zip"]
(s/split "st01_d90_shp" #"_")
;; => ["st01" "d90" "shp"]

(map #(vec %) ["st01" "d90" "shp" "zip"])
;; => (["s" "t" "0" "1"] ["d" "9" "0"] ["s" "h" "p"] ["z" "i" "p"])

;; Better way:
(map #(vec %) (map #(re-seq #"[a-z]+|[0-9]+" %)  ["st01" "d90" "shp" "zip"]))
;; => (["st" "01"] ["d" "90"] ["shp"] ["zip"])

(comment
  ; Clojure
  (Integer/parseInt "123")
  ; ClojureScript
  (js/parseInt "123"))

;; All together now

(defn geoIDPartitioner
  [string]
  (->>
    (s/split string #"_|\.") ;; => ["st01" "d90" "shp" "zip"]
    (map #(re-seq #"[a-z]+|[0-9]+" %)) ;; => (("st" "01") ("d" "90") ("shp") ("zip"))
    (map (fn [y] (remove #(= "d" %) y))) ;; => (("st" "01") ("90") ("shp") ("zip"))
    (map #(vec %)))) ;; => (["st" "01"] ["90"] ["shp"] ["zip"])

;; 1990
(geoIDPartitioner "st01_d90_shp.zip")
;; => (["st" "01"] ["90"] ["shp"] ["zip"])

;; 2000
(geoIDPartitioner "rg99_d00_shp.zip")
;; => (["rg" "99"] ["00"] ["shp"] ["zip"])

;; Pattern
;; [[level state-fips/"99"] [vintage] _ _]

;; 2010
(geoIDPartitioner "gz_2010_us_outline_500k.zip")
;; form 1 =>  (["gz"] ["2010"] [state-fips/"us"] ["outline"] ["500" "k"] ["zip"])

;; Pattern
;; [_ [vintage] ["us"] _ _ _]

(geoIDPartitioner "cb_2012_us_uac10_500k.zip")
;; form 2 =>  (["cb"] ["2012"] [state-fips/"us"] ["uac" "10"] ["500" "k"] ["zip"])

;; Pattern
;; [_ ["2012"] ["us"] [level _] _ _]

(geoIDPartitioner "gz_2010_us_330_m1_500k.zip")
;; form 3 =>  (["gz"] ["2010"] [state-fips/"us"] ["330"] ["m" "1"] ["500" "k"] ["zip"])

;; Pattern
;; [_ [vintage] ["us"] [summary-level] _ _ _]

(geoIDPartitioner "gz_2010_01_970_00_500k.zip")
;; form 4 =>  (["gz"] ["2010"] [state-fips/"us"] ["970"] ["00"] ["500" "k"] ["zip"])

;; Pattern
;; [_ [vintage] [fips] [summary-level] _ _ _]


;; 2013 - 2017
(geoIDPartitioner "cb_2014_us_nation_5m.zip")
;; form 1 =>  (["cb"] ["2014"] ["us"] ["nation"] ["5" "m"] ["zip"])
(geoIDPartitioner "cb_2014_us_region_500k.zip")
;; form 2 =>  (["cb"] ["2014"] ["us"] ["region"] ["500" "k"] ["zip"])
(geoIDPartitioner "cb_2014_01_tract_500k.zip")
;; form 3 =>  (["cb"] ["2014"] ["01"] ["tract"] ["500" "k"] ["zip"])

;; Pattern
;; [_ [vintage] [state-fips/"us"] [level] _ _]

