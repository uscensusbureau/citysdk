(ns geoAPI.core
  (:require [cljs.core.async
             :as async
             :refer [chan put! take! >! <! pipe timeout close! alts! pipeline-async]]
            [cljs.core.async :refer-macros [go go-loop alt!]]
            [ajax.core :as http :refer [GET POST]]
            [oops.core :as obj]
            [traversy.lens :as lens]
            [clojure.string :as s]
            [cljs.pprint :refer [pprint]]
            ["dotenv" :as env]
            [clojure.repl :refer [source]]))

(defn get->put!->port
  [url port]
  (let [args {:response-format :json
              :handler         (fn [r] (put! port r))
              :error-handler   #(prn (str "ERROR: " %))
              :keywords?       true}]
    (do (GET url args) port)))


(defn geo-url-builder
  "Composes a URL to call raw GeoJSON files hosted on Github"
  [{:keys [vintage geoHierarchy]}]
  (let [for (last geoHierarchy)]
    (if-let [{:keys [state]} geoHierarchy]
      (do (pprint state)
          (pprint for))
      (pprint for))))

(comment
  (s/replace-first
    (s/replace
      (str
        "https://api.census.gov/data/"
        (str vintage)
        (s/join (map #(str "/" %) sourcePath))
        "?get=" (s/join "," values)
        (if (some? predicates)
          (str "&" (str (s/join "&" (map #(kv-pair->str % "=") predicates))))
          "")
        (if (= 1 (count geoHierarchy))
          (str "&for=" (kv-pair->str (first geoHierarchy) ":"))
          (str "&in=" (s/join "%20" (map #(kv-pair->str % ":") (butlast geoHierarchy)))
               "&for=" (kv-pair->str (last geoHierarchy) ":")))
        "&key=" statsKey)
      #"-|'|!" {"-" "%20" "'" ")" "!" "/"})
    #"[)]" "("))

(geo-url-builder {:vintage      "2016"
                  :sourcePath   ["acs" "acs5"]
                  :geoHierarchy {:state "01"
                                 :county "*"}
                  :values       ["B01001_001E"]})
                  ; :statsKey     stats-key})
(geo-url-builder {:vintage      "2016"
                  :sourcePath   ["acs" "acs5"]
                  :geoHierarchy {:county "*"}
                  :values       ["B01001_001E"]})

(geo-url-builder {:vintage      "2016"
                  :sourcePath   ["acs" "acs5"]
                  :geoHierarchy {:state "01"
                                 :county "001"
                                 :tract "*"}
                  :values       ["B01001_001E"]})
