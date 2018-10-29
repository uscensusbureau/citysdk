(ns discovery.core
  (:require
    [cljs.core.async :as <|]
    [defun.core :refer-macros [defun]]
    [cuerdas.core :as s]
    [utils.core :as ut]
    [test.core :as ts :refer [stats-key]]
    [datascript.core :as d]
    [datascript.db :as db]
    [discovery.index :as di]))


(def test-index-str
  "https://api.census.gov/data/2013/pep/subcty?get=NAME,STNAME,CTYNAME,POP&for=place:08000&in=state:09&in=county:001&in=county subdivision:08070&DATE=6")


(defn digest-one-index
  "
  splits a full URL into five parts and returns it as a working `args` example:
  1) vintage
  2) sourcePath
  3) values
  4) geographies
  5) predicates
  "
  {:test #(assert (= {:vintage 2013,
                      :values ["NAME" "STNAME" "CTYNAME" "POP"],
                      :sourcePath ["pep" "subcty"],
                      :geoHierarchy {:place "08000",
                                     :state "09",
                                     :county "001",
                                     :county-subdivision "08070"},
                      :predicates {:DATE "6"}}
                     (digest-one-index test-index-str)))}
  [url-str]
  (let [todo                   (s/strip-prefix url-str "https://api.census.gov/data/")
        [pI pII]               (s/split todo #"\?get=")
        [vintage & sourcePath] (s/split pI #"/")
        [pIII & pIV]           (s/split pII #"&")
        [& values]             (s/split pIII #",")
        [& ?geos]              (map #(s/split % #"=") pIV)]
    (loop [args {:vintage      (s/parse-number vintage)
                 :values       (vec values)
                 :sourcePath   (vec sourcePath)}
           geos ?geos]
      (if (empty? geos)
          args
          (let [[i ii] (first geos)
                [k val-]  (s/split ii #":")
                key-   (keyword (ut/strs->keys k))] ; convert strings to edn keys
            (if (or (= "in" i) (= "for" i))
                (recur (merge-with into args {:geoHierarchy {key- val-}}) (rest geos))
                (recur (merge-with into args {:predicates {(keyword i) ii}}) (rest geos))))))))

(test digest-one-index)

(digest-one-index test-index-str)

(comment
  {:vintage 2013,
   :values ["NAME" "STNAME" "CTYNAME" "POP"],
   :sourcePath ["pep" "subcty"],
   :geoHierarchy {:place "08000",
                  :state "09",
                  :county "001",
                  :county-subdivision "08070"},
   :predicates {:DATE "6"}})

(defn pull-geos
  "
  Takes a single string and pulls out all the geographies within it
  "
  [string]
  ())

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
  An example of a string input
  "https://api.census.gov/data/2013/pep/subcty?get=NAME,STNAME,CTYNAME,POP&for=place:08000&in=state:09&in=county:001&in=county subdivision:08070&DATE=6"
  Step one:
  Run through each example string and pull out each of the geography components, `conj`ing them into a set as
  - Schema
    - geography = `:db.unique/value` or `:db.unique/identity`
    {:geography      {:db/unique :db.unique/identity}
     :geographies    {:db/valueType :db.type/ref
                      :db/cardinality :db.cardinality/many}
     :resolution     {:db/unique :db.unique/identity}
     :geoResolution  {:db/valueType :db.type/ref
                      :db/cardinality :db.cardinality/many}
     :vintage        {:db/valueType :db.type/long}

     :db/unique :db.unique/identity}
    {:db/id -1
     :example/geography :county}
  - Database
  {:db/id -1
   :example/geoHierarchy [:example/geography :county]
   :example/variables}
  The import data shape I need
  [{:db/id -1                                      ; each unique geography is id'ed
    :geo :first}
   {:db/id -2
    :geo :second}
   {:db/id -3                                      ; each resolution is id'ed
    :resolution "500k"}
   {:db/id -6                                      ; each example is an entity
    :vintage 2016
    :geoHierarchy {:first "first" :second "second"}
    :geos [-1 -2]                                  ; queryable geos by :key "?"
    :values ["first" "second"]                     ; not queryable
    :predicates {:key "val"}                       ; not queryable
    :geoResolutions [-3]                           ; queryable by :geoResolution "?"
    :sourcePath ["acs" "acs5"]}])                  ; exact match required

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




