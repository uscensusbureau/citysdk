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
            [merger.core :as merger])
  (:use [clojure.repl :only (source)]))

(def stats-key (obj/oget (env/load) ["parsed" "Census_Key_Pro"]))

;; EXAMPLE:
(merger/stats-url-builder {:vintage      "2016"
                           :sourcePath   ["acs" "acs5"]
                           :geoHierarchy {:state "01" :county "073" :tract "000100"}
                           :variables    ["B01001_001E" "B01001_001M"]
                           :statsKey     stats-key})

;http://www2.census.gov/geo/tiger/GENZ2010/gz_2010_us_outline_500k.zip