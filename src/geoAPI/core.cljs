(ns geoAPI.core
  (:require [cljs.core.async
             :as async
             :refer [chan put! take! >! <! pipe timeout close! alts! pipeline-async]]
            [cljs.core.async :refer-macros [go go-loop alt!]]
            [ajax.core :as http :refer [GET POST]]
            [oops.core :as obj]
            [clojure.string :as s]
            [cljs.pprint :refer [pprint]]
            ["dotenv" :as env]
            [clojure.repl :refer [source]]
            [utils.core :as u]
            ;[com.rpl.specter :refer [transform multi-path INDEXED-VALS selected? FIRST LAST ALL]]
            [defun.core :refer-macros [defun]]
            [geojson.index :refer [geoKeyMap]]))

(def base-url "https://raw.githubusercontent.com/loganpowell/census-geojson/master/GeoJSON")


(defn geo-pattern-maker
  [{:keys [vintage geoResolution geoHierarchy]}]
  (let [[for _] (last geoHierarchy)
        {:keys [state]} geoHierarchy
        geoScopes (get-in geoKeyMap [(key (last geoHierarchy)) (keyword vintage) :scopes])
        pattern [{:vintage vintage} {:res geoResolution}{:state state} {:for for} geoScopes]]
    pattern))

(defn geo-url-builder1
  "Composes a URL to call raw GeoJSON files hosted on Github"
  [{:keys [vintage geoResolution geoHierarchy]}]
  (let [[for _] (last geoHierarchy)
        {:keys [state]} geoHierarchy
        geoScopes (get-in geoKeyMap [(key (last geoHierarchy)) (keyword vintage) :scopes])]
    (if (or (or (= state "*") (= state nil)) (= (get geoScopes 1) nil))
      (str (s/join "/" [base-url geoResolution vintage (name for)]) ".json")
      (str (s/join "/" [base-url geoResolution vintage state (name for)]) ".json"))))


(defn geo-error
  [vin lev res]
  (js/console.log (str "No GeoJSON found for: " lev
                       " in this vintage for at resolution: " res
                       " Available vintages and resolutions for this geography: "
                       (get-in geoKeyMap [lev (keyword vin) :scopes]))))

(defn geo-url-builder
  [vin res lev USr STr & st]
  (let [state->st-match (and (not (= (first st) nil)) (not (= (some #(= res) STr) nil)))
        state->us-match (and (not (= (first st) nil)) (not (= (some #(= res) USr) nil)))
        us->us-match    (and (= (first st) nil)       (not (= (some #(= res) USr) nil)))])
  (geo-error vin lev res)
  (pprint (str "res: " res " st: " (first st) " lev: " lev " USr: " USr " STr: " STr)))

(defun geo-pattern-matcher
  "
  Takes a pattern of maps and triggers the URL builder accordingly
  "
  ([[{:vintage vin} {:res nil} _            _          _                                  ]] nil)                                  ; no need for GeoJSON
  ([[{:vintage vin} {:res res} {:state st } {:for lev} nil                                ]] (geo-error vin lev res))                  ; "no GeoJSON for this vintage + geography"
  ([[{:vintage vin} {:res res} {:state st } {:for lev} {:us [& USr], :state [nil nil nil]}]] (geo-url-builder vin res lev USr STr))    ; try national res match
  ([[{:vintage vin} {:res res} {:state nil} {:for lev} {:us [& USr], :state [& STr      ]}]] (geo-url-builder vin res lev USr STr))    ; try national res match
  ([[{:vintage vin} {:res res} {:state "*"} {:for lev} {:us [& USr], :state [& STr      ]}]] (geo-url-builder vin res lev USr STr))    ; try national res match
  ([[{:vintage vin} {:res res} {:state st } {:for lev} {:us [& USr], :state [& STr      ]}]] (geo-url-builder vin res lev USr STr st))) ; try state res match



(let [args (geo-pattern-maker {:vintage       "2016"
                               :sourcePath    ["acs" "acs5"]
                               :geoHierarchy  {:county "*"}
                               :geoResolution "5m"
                               :values        ["B01001_001E"]})]
  (geo-pattern-matcher args))

(let [args (geo-pattern-maker  {:vintage       "2016"
                                :sourcePath    ["acs" "acs5"]
                                :geoHierarchy  {:state "01"
                                                :county "001"
                                                :someting-non-existant "*"}
                                :geoResolution "500k"
                                :values        ["B01001_001E"]})]
  (geo-pattern-matcher args))


;; Psedo
; create a map/index for :sourcePath -> vintage manipulation (e.g., CBP: [20)

;; Examples ====================================

(geo-pattern-maker {:vintage       "2016"
                    :sourcePath    ["acs" "acs5"]
                    :geoHierarchy  {:state "01"
                                    :county "*"}
                    :geoResolution "500k"
                    :values        ["B01001_001E"]})
                  ; :statsKey      stats-key})
(geo-pattern-maker {:vintage       "2016"
                    :sourcePath    ["acs" "acs5"]
                    :geoHierarchy  {:county "*"}
                    :geoResolution "500k"
                    :values        ["B01001_001E"]})

(geo-pattern-maker {:vintage       "2016"
                    :sourcePath    ["acs" "acs5"]
                    :geoHierarchy  {:state "01"
                                    :county "001"
                                    :tract "*"}
                    :geoResolution "500k"
                    :values        ["B01001_001E"]})

(geo-pattern-maker {:vintage       "2016"
                    :sourcePath    ["acs" "acs5"]
                    :geoHierarchy  {:state "01"
                                    :county "001"
                                    :someting-non-existant "*"}
                    :geoResolution "500k"
                    :values        ["B01001_001E"]})
;; ===============================================