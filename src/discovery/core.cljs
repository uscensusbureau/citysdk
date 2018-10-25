(ns discovery.core
  (:require
    [cljs.core.async :as <|]
    [defun.core :refer-macros [defun]]
    [cuerdas.core :as s]
    [utils.core :as ut]
    [test.core :as ts :refer [stats-key]]
    [discovery.index :as di]))


(def test-index-str
  "https://api.census.gov/data/2013/pep/subcty?get=NAME,STNAME,CTYNAME,POP&for=place:08000&in=state:09&in=county:001&in=county subdivision:08070&DATE=6")

(defn digest-one-index
  [url-str]
  (-> url-str
      (s/strip-prefix "https://api.census.gov/data/")
      (s/split #"\?get=")))

(let [[vin+srcPath vals+for+ins] (digest-one-index test-index-str)]
  (let [[& vin+srcPath-parts] (s/split  vin+srcPath "/")
        [& vals+for+ins-parts] (s/split vals+for+ins "&")
        [vals & rest] (map #(s/split % #"=|,") vals+for+ins-parts)
        args {:values vals}
        geoH {:geoHierarcy {}}
        pred {:predicates {}}
        vins {:vintage (first vin+srcPath-parts)}]
        ;srcP {:sourePath [(rest vin+srcPath-parts)]}]
    (conj {} args geoH pred vins))) ; srcP)))
    ;(-> (map #(if (= "for") (first %))))))
    ;(js/console.log (clj->js args))))
    ;[(vec vin+srcPath-parts)
    ; (vec vals+for+ins-parts)]))

(comment
  Pseudo:
  1 create a defun that deploys this function on "?" args to one or more parameters
  2 like the wmsAPI, all this does is take args and return args - filled in with examples
  3 Create a map for this use (batch process ?)
  example inputs and outputs

  {:vintage "?",
   :sourcePath "?",
   :geoHierachy "?",
   :geoResolution "?",
   :predicates "?",
   :values "?"}
  => search space
  [{:vintage 1998,
    :geoHierachy {:state "01", :county "001"},
    :sourcePath ["acs" "acs5"],
    :geoResolution "500k",
    :predicates {:B00001_001E "0:1000000"},
    :values ["NAME"]}
   {...}
   ...] vector of maps sourced from "api.census.gov/data.json")

; Searchable vector of maps: how to store all the results so that any part can be queried the same way?


; 888~-_               d8             ,d88~~\                ,e,             d8    _-~88e
; 888   \    /~~~8e  _d88__   /~~~8e  8888     e88~~\ 888-~\  "  888-~88e  _d88__ /   88"
; 888    |       88b  888         88b `Y88b   d888    888    888 888  888b  888   `   8P
; 888    |  e88~-888  888    e88~-888  `Y88b, 8888    888    888 888  8888  888       `
; 888   /  C888  888  888   C888  888    8888 Y888    888    888 888  888P  888     d88b
; 888_-~    "88_-888  "88_/  "88_-888 \__88P'  "88__/ 888    888 888-_88"   "88_/   Y88P
;                                                                888


[{:vintage 2016,
  :geoHierachy {:state "01", :county "001"},
  :sourcePath ["acs" "acs5"],
  :geoResolution "500k",
  :predicates {:B00001_001E "0:1000000"},
  :values ["NAME"]}
 {:vintage 2016,
  :geoHierachy {:state "01", :county "001"},
  :sourcePath ["acs" "acs5"],
  :geoResolution "500k",
  :predicates {:B00001_001E "0:1000000"},
  :values ["NAME"]}
 {:vintage 2016,
  :geoHierachy {:state "01", :county "001"},
  :sourcePath ["acs" "acs5"],
  :geoResolution "500k",
  :predicates {:B00001_001E "0:1000000"},
  :values ["NAME"]}
 {:vintage 2016,
  :geoHierachy {:state "01", :county "001"},
  :sourcePath ["acs" "acs5"],
  :geoResolution "500k",
  :predicates {:B00001_001E "0:1000000"},
  :values ["NAME"]}]




