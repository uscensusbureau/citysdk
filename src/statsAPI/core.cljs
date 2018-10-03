(ns statsAPI.core
  (:require [cljs.core.async
             :refer [chan
                     take!
                     >!
                     <!
                     close!
                     pipeline-async]
             :refer-macros [go]]
            [ajax.core :refer [GET POST]]
            [oops.core :as obj]
            [cuerdas.core :as s]
            [cljs.pprint :refer [pprint]]
            ["dotenv" :as env]
            [utils.core
             :refer [throw-err
                     strs->keys
                     keys->strs
                     map-idcs-range
                     json-args->clj-keys
                     =IO=>I=O=
                     IO-ajax-GET-json
                     xfxf<<
                     xf!<<
                     xf<<]]))

(def stats-key (obj/oget (env/load) ["parsed" "Census_Key_Pro"]))

(defn kv-pair->str [[k v] separator]
  (s/join separator [(name k) (str v)]))

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
       (keys->strs
         (if (= 1 (count geoHierarchy))
             (str "&for=" (kv-pair->str (first geoHierarchy) ":"))
             (str "&in=" (s/join "%20" (map #(kv-pair->str % ":")
                                            (butlast geoHierarchy)))
                  "&for=" (kv-pair->str (last geoHierarchy) ":"))))
       "&key=" statsKey))

;; Examples ==============================

#_(stats-url-builder {:vintage      "2016"
                      :sourcePath   ["acs" "acs5"]
                      :geoHierarchy {:state "01" :county "073" :tract "000100"}
                      :values       ["B01001_001E" "B01001_001M"]
                      :statsKey     stats-key})               ;; input your key

; => https://api.census.gov/data/2016/acs/acs5?get=B01001_001E,B01001_001M&in=state:01%20county:073&for=tract:000100&key=6980d91653a1f78acd456d9187ed28e23ea5d4e3

#_(stats-url-builder {:vintage      "2016"
                      :sourcePath   ["acs" "acs5"]
                      :geoHierarchy {:state "12" :state-legislative-district-_upper-chamber_ "*"}
                      :values       ["B01001_001E" "NAME"]
                      :predicates   {:B00001_001E "0:30000"}
                      :statsKey     stats-key})

; => https://api.census.gov/data/2016/acs/acs5?get=B01001_001E,NAME&B00001_001E=0:30000&in=state:12&for=state legislative district (upper chamber):*&key=6980d91653a1f78acd456d9187ed28e23ea5d4e3


;; A stateful transducer is needed to change the behavior based on which item in the collection we are "on".

#_(clj->js {:vintage      "2016"
            :sourcePath   ["acs" "acs5"]
            :geoHierarchy {:state "12" :state-legislative-district-_upper-chamber' "*"}
            :values       ["B01001_001E" "NAME"]
            :predicates   {:B00001_001E "0:30000"}
            :statsKey     stats-key})

#_(js->clj {:vintage      "2016"
            :sourcePath   ["acs" "acs5"]
            :geoHierarchy {:state "12" :state-legislative-district-_upper-chamber' "*"}
            :values       ["B01001_001E" "NAME"]
            :predicates   {:B00001_001E "0:30000"}
            :statsKey     stats-key})
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
  ([{:keys [values predicates]}] (xf!-csv-response->JSON [{:keys [values predicates]} nil]))
  ([{:keys [values predicates]} keywords?]
   (let [parse-range [0 (+ (count values) (count predicates))]]
     (xf!<< (fn [state xf result input]
              (let [prev @state]
                (if (nil? prev)
                    (if (= keywords? :keywords)
                        (do (vreset! state (mapv strs->keys input)) nil)
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

#_(transduce
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

(defn xfxf!-res-w-err-handler
  [args keywords?]
  (comp
    (map throw-err)
    (xfxf<< (xf!-csv-response->JSON args keywords?) conj)))

(defn getCensusStats
  "
  Library function, which takes a JSON object as input, constructs a call to the
  Census API and returns the data as _standard JSON_ (rather than the default
  csv-like format from the naked API).
  "
  ([json-args cb] (getCensusStats json-args cb nil))
  ([json-args cb keywords?]
   (let [args  (json-args->clj-keys json-args :geoHierarchy)
         url   (stats-url-builder args)
         =res= (chan 1 (xfxf!-res-w-err-handler args keywords?))]
     (pprint (str url))
     (do ((=IO=>I=O= IO-ajax-GET-json) url =res=)
         (if (= keywords? :keywords)
           (take! =res= cb)
           (take! =res= #(cb (js/JSON.stringify (clj->js %)))))))))


;; Examples ==============================

#_(getCensusStats #js {"vintage"     "2016"
                       "sourcePath"   #js ["acs" "acs5"]
                       "geoHierarchy" #js {"state" "12" "state legislative district (upper chamber)" "*"}
                       "values"       #js ["B01001_001E" "NAME"]
                       "predicates"   #js {"B00001_001E" "0:30000"}
                       "statsKey"     stats-key}
                  (fn [r] (js/console.log r)))
;pprint)
;:keywords)

;; =======================================


(defn IO-census-stats
  "
  Internal function for calling the Census API using a Clojure Map and getting
  stats returned as a clojure map.
  "
  [=I= =O=]
  (go (let [args  (<! =I=)
            url   (stats-url-builder args)
            =url= (chan 1)
            =res= (chan 1 (xfxf!-res-w-err-handler args :keywords))]
        (pprint (str url))
        (>! =url= url)
        ; IO-ajax-GET closes the =res= chan; pipeline-async closes the =url= when =res= is closed
        (pipeline-async 1 =res= (=IO=>I=O= IO-ajax-GET-json) =url=)
        ; =O= chan is closed by the consumer; pipeline closes the =res= when =O= is closed
        (>! =O= (<! =res=)))))

;; Examples ==============================

#_(let [=I= (chan 1)
        =O= (chan 1)]
    (go (>! =I= {:vintage      "2016"
                 :sourcePath   ["acs" "acs5"]
                 :geoHierarchy {:state "12" :state-legislative-district-_upper-chamber_ "*"}
                 :values       ["B01001_001E" "NAME"]
                 :predicates   {:B00001_001E "0:30000"}
                 :statsKey     stats-key})
        (IO-census-stats =I= =O=)
        ;(if (= (type (<! =O=)) cljs.core/List) ;; TODO: use this kind of functionality in merger/core to dispatch the geoJSON request only if response valid from stats API...
        ;  (pprint "GOOD TO GO")
        ;  (pprint "brrrr.... "))
        (pprint (<! =O=))
        (close! =I=)
        (close! =O=)))

;; =======================================
