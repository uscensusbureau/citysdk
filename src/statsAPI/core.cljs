(ns statsAPI.core
  (:require [cljs.core.async
             :as async
             :refer [chan put! take! >! <! pipe timeout close! alts! pipeline-async]]
            [cljs.core.async :refer-macros [go go-loop alt!]]
            [ajax.core :refer [GET POST]]
            [oops.core :as obj]
            [cuerdas.core :as s]
            [cljs.pprint :refer [pprint]]
            ["dotenv" :as env]
            [geoAPI.core :as geo]
            [utils.core :refer [=IO=>I=O= xf<< xf!<< xfxf<< map-target map-target-idcs map-idcs-range map-rename-keys IO-ajax-GET-json]]))

(def stats-key (obj/oget (env/load) ["parsed" "Census_Key_Pro"]))

;; Now that we're using `core.async`, we'll have to move our success-handler out of `cljs-ajax` in order  for the response that is put into the channel to be handled once it is taken out. Observe:


(defn kv-pair->str [[k v] separator]
  (s/join separator [(name k) (str v)]))

(declare keys->str)

(defn stats-url-builder
  "Composes a URL to call Census' statistics API"
  [{:keys [vintage sourcePath geoHierarchy values predicates statsKey]}]
  (str "https://api.census.gov/data/"
       (str vintage)
       (s/join (map #(str "/" %)
                    sourcePath))
       "?get="
       (s/join "," values)
       (if (some? predicates)
           (str "&" (str (s/join "&" (map #(kv-pair->str % "=") predicates))))
           "")
       (keys->str
         (if (= 1 (count geoHierarchy))
             (str "&for=" (kv-pair->str (first geoHierarchy) ":"))
             (str "&in=" (s/join "%20" (map #(kv-pair->str % ":")
                                            (butlast geoHierarchy)))
                  "&for=" (kv-pair->str (last geoHierarchy) ":"))))
       "&key=" statsKey))

;; Examples ==============================

(stats-url-builder {:vintage      "2016"
                    :sourcePath   ["acs" "acs5"]
                    :geoHierarchy {:state "01" :county "073" :tract "000100"}
                    :values       ["B01001_001E" "B01001_001M"]
                    :statsKey     stats-key})               ;; input your key

; => https://api.census.gov/data/2016/acs/acs5?get=B01001_001E,B01001_001M&in=state:01%20county:073&for=tract:000100&key=6980d91653a1f78acd456d9187ed28e23ea5d4e3

(stats-url-builder {:vintage      "2016"
                    :sourcePath   ["acs" "acs5"]
                    :geoHierarchy {:state "12" :state-legislative-district-_upper-chamber_ "*"}
                    :values       ["B01001_001E" "NAME"]
                    :predicates   {:B00001_001E "0:30000"}
                    :statsKey     stats-key})

; => https://api.census.gov/data/2016/acs/acs5?get=B01001_001E,NAME&B00001_001E=0:30000&in=state:12&for=state legislative district (upper chamber):*&key=6980d91653a1f78acd456d9187ed28e23ea5d4e3
;; =======================================

; TODO: Will need this function when pulling discovery, the geography name keys

(defn keys->str
  [s]
  (s/replace
    s
    #"-_|_|!|-"
    {"-_" " (" "_" ")" "!" "/" "-" " "}))

(defn str->key
  [s]
  (s/replace
    s
    #" \(|\)|/| "
    {" (" "-_" ")" "_" "/" "!" " " "-"}))

;; Examples ==============================

;(keys->str "american-indian-area!alaska-native-area-_reservation-or-statistical-entity-only_-_or-part_!or-something-else")
; => "american indian area/alaska native area (reservation or statistical entity only) (or part)/or something else"

;(str->key "american indian area/alaska native area (reservation or statistical entity only) (or part)/or something else")
;=> "american-indian-area!alaska-native-area-_reservation-or-statistical-entity-only_-_or-part_!or-something-else"

;(mapv str->key ["B01001_001E","NAME","B00001_001E","state","state legislative district (upper chamber)"])
; => ["B01001_001E"
; "NAME"
; "B00001_001E"
; "state"
; "state-legislative-district-_upper-chamber_"]

;; Help from [Stack Overflow](https://stackoverflow.com/questions/37734468/constructing-a-map-on-anonymous-function-in-clojure)

;; =======================================

;; A stateful transducer is needed to change the behavior based on which item in the collection we are "on".

(clj->js {:vintage      "2016"
          :sourcePath   ["acs" "acs5"]
          :geoHierarchy {:state "12" :state-legislative-district-_upper-chamber' "*"}
          :values       ["B01001_001E" "NAME"]
          :predicates   {:B00001_001E "0:30000"}
          :statsKey     stats-key})

(js->clj {:vintage      "2016"
          :sourcePath   ["acs" "acs5"]
          :geoHierarchy {:state "12" :state-legislative-district-_upper-chamber' "*"}
          :values       ["B01001_001E" "NAME"]
          :predicates   {:B00001_001E "0:30000"}
          :statsKey     stats-key})

(defn json-args->clj-keys
  [json key]
  (let [geoJS (obj/oget json (name key))
        geoCljs (js->clj geoJS)
        geoKeys (map-rename-keys str->key geoCljs)]
    (obj/oset! json key (clj->js geoKeys))
    (js->clj json :keywordize-keys true)))

;; Examples ==============================

#_(json-args->clj-keys #js {"vintage"      "2016"
                            "sourcePath"   #js ["acs" "acs5"]
                            "geoHierarchy" #js {"state" "12" "state legislative-district (upper chamber)" "*"}
                            "values"       #js ["B01001_001E" "NAME"]
                            "predicates"   #js {"B00001_001E" "0:30000"}
                            "statsKey"     stats-key}
                       :geoHierarchy)

; =>
;{:vintage "2016",
; :sourcePath ["acs" "acs5"],
; :geoHierarchy {:state "12", :state-legislative-district-_upper-chamber_ "*"},
; :values ["B01001_001E" "NAME"],
; :predicates {:B00001_001E "0:30000"},
; :statsKey "6980d91653a1f78acd456d9187ed28e23ea5d4e3"}
;; =======================================

; ~~~888~~~                                        888
;    888    888-~\   /~~~8e  888-~88e  d88~\  e88~\888 888  888  e88~~\  e88~~8e  888-~\  d88~\
;    888    888          88b 888  888 C888   d888  888 888  888 d888    d888  88b 888    C888
;    888    888     e88~-888 888  888  Y88b  8888  888 888  888 8888    8888__888 888     Y88b
;    888    888    C888  888 888  888   888D Y888  888 888  888 Y888    Y888    , 888      888D
;    888    888     "88_-888 888  888 \_88P   "88_/888 "88_-888  "88__/  '88___/  888    \_88P


(defn parse-if-number
  [s]
  (if (s/numeric? s)
    (s/parse-number s)
    s))

(defn xf!-csv-response->JSON
  "
  Stateful transducer, which stores the first item as a list of a keys to apply
  (via `zipmap`) to the rest of the items in a collection. Serves to turn the
  Census API response into a more conventional JSON format.

  If provided `:keywords` as an argument, will return a map with Clojure keys.
  Otherwise, will return map keys as strings.
  "
  ([{:keys [values predicates]}] xf!-csv-response->JSON values predicates nil)
  ([{:keys [values predicates]} keywords?]
   (let [parse-range [0 (+ (count values) (count predicates))]]
     (xf!<< (fn [state xf result input]
              (let [prev @state]
                (if (nil? prev)
                    (if (= keywords? :keywords)
                        (do (vreset! state (mapv str->key input)) nil)
                        (do (vreset! state input) nil))
                    (if (= keywords? :keywords)
                        (xf result
                            (zipmap (vec (map keyword @state))
                                    (map-idcs-range parse-if-number
                                                    parse-range
                                                    input)))
                        (xf result
                            (zipmap @state
                                    (map-idcs-range parse-if-number
                                                    parse-range
                                                    input)))))))))))

;; Examples ==============================

(transduce
  (xf!-csv-response->JSON
    {:vintage      "2016"
     :sourcePath   ["acs" "acs5"]
     :geoHierarchy {:state "12" :state-legislative-district-_upper-chamber' "*"}
     :values       ["B01001_001E" "NAME"]
     :predicates   {:B00001_001E "0:30000"}
     :statsKey     stats-key}
    :keywords)
  conj
  [["B01001_001E","NAME","B00001_001E","state","state legislative district (upper chamber)"],
   ["486727","State Senate District 4 (2016), Florida","28800","12","004"],
   ["491350","State Senate District 6 (2016), Florida","29938","12","006"],
   ["491042","State Senate District 9 (2016), Florida","29631","12","009"]])


; with :keywords =>
#_({:B01001_001E "491042",
    :NAME "State Senate District 9 (2016), Florida",
    :B00001_001E "29631",
    :state "12",
    :state-legislative-district-_upper-chamber_ "009"}...)

; without :keywords =>
#_({:B01001_001E 491042,
    :NAME "State Senate District 9 (2016), Florida",
    :B00001_001E 29631,
    :state "12",
    :state-legislative-district-_upper-chamber_ "009"}...)

#_(js/JSON.stringify
    (clj->js
      (transduce
        (xf!-csv-response->JSON
          {:vintage      "2016"
           :sourcePath   ["acs" "acs5"]
           :geoHierarchy {:state "12" :state-legislative-district-_upper-chamber' "*"}
           :values       ["B01001_001E" "NAME"]
           :predicates   {:B00001_001E "0:30000"}
           :statsKey     stats-key})
        conj
        [["B01001_001E","NAME","B00001_001E","state","state legislative district (upper chamber)"],
         ["486727","State Senate District 4 (2016), Florida","28800","12","004"],
         ["491350","State Senate District 6 (2016), Florida","29938","12","006"],
         ["491042","State Senate District 9 (2016), Florida","29631","12","009"]])))

; with/out :keywords (doesn't matter for JSON) =>
;[{"B01001_001E":491042,"NAME":"State Senate District 9 (2016), Florida","B00001_001E":29631,"state":"12","state legislative district (upper chamber)":"009"},...]
;; =======================================


(defn get-census-JSON
  "
  Library function, which takes a JSON object as input, constructs a call to the
  Census API and returns the data as _standard JSON_ (rather than the default
  csv-like format from the naked API).
  "
  ([json-args cb] (get-census-JSON json-args cb nil))
  ([json-args cb keywords?]
   (let [args  (json-args->clj-keys json-args :geoHierarchy)
         url   (stats-url-builder args)
         =res= (chan 1 (xfxf<< (xf!-csv-response->JSON args keywords?) conj))]
     (pprint (str url))
     (go ((=IO=>I=O= IO-ajax-GET-json) url =res=)
         (if (= keywords? :keywords)
             (take! =res= cb)
             (take! =res= #(cb (js/JSON.stringify (clj->js %)))))))))

;; Examples ==============================

(get-census-JSON #js {"vintage"      "2016"
                      "sourcePath"   #js ["acs" "acs5"]
                      "geoHierarchy" #js {"state" "12" "state legislative-district (upper chamber)" "*"}
                      "values"       #js ["B01001_001E" "NAME"]
                      "predicates"   #js {"B00001_001E" "0:30000"}
                      "statsKey"     stats-key}
                 pprint)
                 ;:keywords)
; =>
;[{"B01001_001E" 494981,
;  "NAME" "State Senate District 40 (2016), Florida",
;  "B00001_001E" 29661,
;  "state" "12",
;  "state legislative district (upper chamber)" "040"}
; {"B01001_001E" 492259,
;  "NAME" "State Senate District 36 (2016), Florida",
;  "B00001_001E" 29475,
;  "state" "12",
;  "state legislative district (upper chamber)" "036"}]
;; =======================================

(count {"B00001_001E" "0:30000" "B00001_002E" "0:30000"})