(ns merger.core
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
            [clojure.repl :refer [source]]
            [geoAPI.core :as geo]))

(def stats-key (obj/oget (env/load) ["parsed" "Census_Key_Pro"]))

(defn get-json->put!
  [base-url keywords?]
  (let [=resp= (chan)
        args (merge
               {:response-format :json
                :handler         #(put! =resp= %)
                :error-handler   #(prn (str "ERROR: " %))}
               (when-let [keywords? {:keywords? keywords?}]
                 keywords?))]
    (do
      (GET base-url args)
      =resp=)))

;; Now that we're using `core.async`, we'll have to move our success-handler out of `cljs-ajax` in order  for the response that is put into the channel to be handled once it is taken out. Observe:

(defn kv-pair->str [[k v] separator]
  (s/join separator [(name k) (str v)]))

(defn stats-url-builder
  "Composes a URL to call Census' statistics API"
  [{:keys [vintage sourcePath geoHierarchy values predicates statsKey]}]
  (str "https://api.census.gov/data/"
       (str vintage)
       (s/join (map #(str "/" %) sourcePath))
       "?get=" (s/join "," values)
       (if (some? predicates)
         (str "&" (str (s/join "&" (map #(kv-pair->str % "=") predicates))))
         "")
       (s/replace
         (if (= 1 (count geoHierarchy))
           (str "&for=" (kv-pair->str (first geoHierarchy) ":"))
           (str "&in=" (s/join "%20" (map #(kv-pair->str % ":") (butlast geoHierarchy)))
                "&for=" (kv-pair->str (last geoHierarchy) ":")))
         #"-|_|'|!"
         {"-" "%20" "_" "(" "'" ")" "!" "/"})
       "&key=" statsKey))


(stats-url-builder {:vintage      "2016"
                    :sourcePath   ["acs" "acs5"]
                    :geoHierarchy {:state "01" :county "073" :tract "000100"}
                    :values       ["B01001_001E" "B01001_001M"]
                    :predicates   {:test "0:11000"}
                    :statsKey     stats-key})               ;; input your key
;=> "https://api.census.gov/data/2016/acs/acs5?get=&in=state:01%20county:073&for=tract:000100&key=6980d91653a1f78acd456d9187ed28e23ea5d4e3"

(defn zipmap-1st [rows key]
  (if (= :keywords key)
    (map (partial zipmap (vec (map keyword (first rows)))) (rest rows))
    (map (partial zipmap (first rows)) (rest rows))))

;; Help from [Stack Overflow](https://stackoverflow.com/questions/37734468/constructing-a-map-on-anonymous-function-in-clojure)

; ~~~888~~~                                        888
;    888    888-~\   /~~~8e  888-~88e  d88~\  e88~\888 888  888  e88~~\  e88~~8e  888-~\  d88~\
;    888    888          88b 888  888 C888   d888  888 888  888 d888    d888  88b 888    C888
;    888    888     e88~-888 888  888  Y88b  8888  888 888  888 8888    8888__888 888     Y88b
;    888    888    C888  888 888  888   888D Y888  888 888  888 Y888    Y888    , 888      888D
;    888    888     "88_-888 888  888 \_88P   "88_/888 "88_-888  "88__/  '88___/  888    \_88P
;
;

; ===============================

;; A stateful transducer is needed to change the behavior based on which item in the collection we are "on".
(defn xf-zipmap-1st
  "
  Stateful transducer, which stores the first item as a list of a keys to apply
  (via `zipmap`) to the rest of the items in a collection. Serves to turn the
  Census API response into a more conventional JSON format.
  "
  [rf]
  (let [prep (volatile! nil)]
    (fn
      ([] (rf))
      ([result] (rf result))
      ([result item]
       (let [prev @prep]
         (if (nil? prev)
           (do (vreset! prep (vec (map keyword item)))
               nil)
           (rf result (zipmap prev (vec item)))))))))

;; If you want to pass an argument into your transducer, wrap it in another function, which takes the arg and returns a transducer containing it.
(defn xf-geo+stat
  "
  A function, which returns a transducer after being passed an integer argument
  denoting the number of values the user requested. The transducer is used to
  transform each item from the Census API response collection into a new map with
  a hierarchy that will enable deep-merging of the stats with a GeoJSON
  `feature`s `:properties` map.
  "
  [vars#]
  (fn [rf]
    (fn
      ([] (rf))
      ([result] (rf result))
      ([result item]
       (rf result {(keyword (reduce str (vals (take-last (- (count item) vars#) item))))
                   {:properties item}})))))

;; `xf-zipmap-1st` is a transducer, which means we can use it sans `()`s, while `xf-geo+stat` RETURNS a transducer, which requires us to wrap the function in `()`s to return that internal transducer.
(defn xf-1-stat->map [vars#]
  (comp
    xf-zipmap-1st
    (xf-geo+stat vars#)))

(defn get->put!->port
  [url port]
  (let [args {:response-format :json
              :handler         (fn [r]
                                 (put! port r))
              :error-handler   #(prn (str "ERROR: " %))
              :keywords?       true}]
    (do (GET url args) port)))

;; When working with `core.async` it's important to understand what you expect the shape of your data flowing into your channels will look like. In the case below, a single request using `cljs-ajax` will return a list of results, so we deal with this list after it is retrieved rather than as part of the `chan` establishment. When we plan on using transducers as a way to treat a stream or flow of individual items as a collection **over time** via a channel, we can do so by adding such a transducer to the `chan` directly (e.g.: `let [port (chan 1 (xform-each-item))]`

(defn xf-stats->map
  "
  A higher order transducer function, which returns a transducer after being
  passed an integer argument denoting the number of values the user requested.
  The transducer is used to transform *the entire* Census API response
  collection into a new map, which will enable deep-merging of the stats with a
  GeoJSON `feature`s `:properties` map. Designed as a `core.async` channel
  transducer.
  "
  [vars#]
  (fn [rf]
    (fn
      ([] (rf))
      ([result] (rf result))
      ([result item]
       (rf result (transduce (xf-1-stat->map vars#) conj item))))))

(defn xf-geo+feature
  "
  A function, which returns a transducer after being passed an integer argument
  denoting the number of values the user requested. The transducer is used to
  transform each item withing a GeoJSON FeatureCollection into a new map with a
  hierarchy that will enable deep-merging of the stats with a stat map.
  "
  [rf]
  (fn
    ([] (rf))
    ([result] (rf result))
    ([result item]
     (rf result {(keyword (get-in item [:properties :GEOID])) item}))))

(defn xf-features->map
  "
  This is a transducer, which uses a transducer to operate over a list, which is
  returned as a single response from an HTTP request. This transducer is meant
  to be used in concert with a `core.async` channel.
  "
  [rf]
  (fn
    ([] (rf))
    ([result] (rf result))
    ([result item]
     (rf result (transduce xf-geo+feature conj item)))))



;; Deep Merge function [stolen](https://gist.github.com/danielpcox/c70a8aa2c36766200a95)
(defn deep-merge
  "
  Recursively merges two maps together along matching key paths. Implements
  `clojure/core.merge-with`.
  "
  [v & vs]
  (letfn [(rec-merge [v1 v2]
            (if (and (map? v1) (map? v2))
              (merge-with deep-merge v1 v2)
              v2))]
    (if (some identity vs)
      (reduce #(rec-merge %1 %2) v vs)
      v)))

;; map destructuring courtesy [Arthur Ulfeldt](https://stackoverflow.com/a/12505774)
(defn merge-xfilter
  "
  Takes two keys that serve to filter a merged list of two maps, which returns a
  list of only those maps which have both keys. Each key identifies of the
  merged maps. This ensures the returned list contains only the overlap
  between the two, i.e., excluding non-merged maps.
  "
  [var1 var2]
  (fn [rf]
    (fn
      ([] (rf))
      ([result] (rf result))
      ([result item]
       (let [[k v] (first item)]
         (if (or (nil? (get-in v [:properties var1]))
                 (nil? (get-in v [:properties var2])))
           (rf result)
           (rf result v)))))))

; ===============================
; TODO: combine merge-xfilter clj->js and js/JSON.stringify into a single transducer (comp)
; ===============================

(defn merge-geo+stats
  "
  Higher Order Function, which takes two vars and returns another function,
  which does a collection-level transformation, which takes two input
  map-collections, merges them and then filters them to return only those
  map-items, which contain an identifying key from each source map.
  "
  [var1 var2]
  (fn [stats-map geo-map]
    (->>
      (for [[_ pairs] (group-by keys (concat stats-map geo-map))]
        (apply deep-merge pairs))
      (transduce (merge-xfilter var1 var2) conj)
      (clj->js)
      (js/JSON.stringify))))


(defn get-features->put!->port
  [url port]
  (let [args {:response-format :json
              :handler         (fn [r] (put! port (get r :features)))
              :error-handler   #(prn (str "ERROR: " %))
              :keywords?       true}]
    (do (GET url args) port)))


;    ~~~888~~~   ,88~-_   888~-_     ,88~-_
;       888     d888   \  888   \   d888   \
;       888    88888    | 888    | 88888    |
;       888    88888    | 888    | 88888    |
;       888     Y888   /  888   /   Y888   /
;       888      `88_-~   888_-~     `88_-~


(defn transducified [f]
  "
  A function that takes a standard function (taking a single argument) and
  augments it with the structure of a transducer function.
  "
  (fn [rf]
    (fn
      ([] (rf))
      ([acc] (rf acc))
      ([acc val] (rf acc (f val))))))

(defn feature-collector
  "
  Takes a directory, filepath and some GeoJSON and composes it into a map with
  cooresponding keys.
  "
  [vec-]
  (js-obj "type" "FeatureCollection" "features" vec-))


(defn x-feature-collector
  "
  Turns the geojson-config function into a transducer.
  "
  [vec-]
  (transducified (feature-collector vec-)))


;    ~~~888~~~   ,88~-_   888~-_     ,88~-_
;       888     d888   \  888   \   d888   \
;       888    88888    | 888    | 88888    |
;       888    88888    | 888    | 88888    |
;       888     Y888   /  888   /   Y888   /
;       888      `88_-~   888_-~     `88_-~






(defn merge-geo-stats->map
  "
  Takes an arg map to configure a call the Census' statistics API as well as a
  matching GeoJSON file. The match is based on `vintage` and `geoHierarchy` of
  the arg map. The calls are spun up (simultaneously) into parallel `core.async`
  processes for speed. Both calls return their results via a `core.async`
  channel (`chan`) - for later merger - via `put!`. The results from the Census
  stats `chan` are passed into a local `chan` to store the state.  A
  `deep-merge` into the local `chan` combines the stats results with the GeoJSON
  values. Note that the GeoJSON results can be a superset of the Census stats'
  results. Thus, superfluous GeoJSON values are filtered out via a `remove`
  operation on the collection in the local `chan`.
  "
  [args]
  (let [stats-call (stats-url-builder args)
        vars# (count (get args :values))
        =features= (chan 1 xf-features->map #(pprint "features fail! " %))
        =stats= (chan 1 (xf-stats->map vars#) #(pprint "stats fail! " %))
        =merged= (async/map (merge-geo+stats (keyword (first (get args :values))) :GEOID) [=stats= =features=])]
    (go (get-features->put!->port (geo/geo-url-builder args) =features=)
        (pipeline-async 1 =merged= identity =features=))
    (go (get->put!->port stats-call =stats=)
        (pipeline-async 1 =merged= identity =stats=)
        (<! =merged=)
        (js/console.log "done!")
        (close! =features=)
        (close! =stats=)
        (close! =merged=))))

(merge-geo-stats->map {:vintage      "2016"
                       :sourcePath   ["acs" "acs5"]
                       :geoHierarchy {:state "01" ; TODO: function to find out the `:scopes` for `for` and use `:us` if not available at `:state`
                                      :county "*"}
                       :geoResolution "500k"
                       :values       ["B01001_001E"]
                       :statsKey     stats-key})
                       ;; add `:predicates` and count them for `vars#`})

(pprint (merge-geo-stats->map {:vintage      "2016"
                               :sourcePath   ["acs" "acs5"]
                               :geoHierarchy {:county "*"}
                               :geoResolution "500k"
                               :values       ["B01001_001E"]
                               :statsKey     stats-key}))

(geo/geo-url-builder {:vintage       "2016"
                      :sourcePath    ["acs" "acs5"]
                      :geoHierarchy  {:state "01"
                                      :county "*"}
                      :geoResolution "500k"
                      :values        ["B01001_001E"]})
; :statsKey      stats-key})
(geo/geo-url-builder {:vintage       "2016"
                      :sourcePath    ["acs" "acs5"]
                      :geoHierarchy  {:county "*"}
                      :geoResolution "500k"
                      :values        ["B01001_001E"]})

(geo/geo-url-builder {:vintage       "2016"
                      :sourcePath    ["acs" "acs5"]
                      :geoHierarchy  {:state "01"
                                      :county "001"
                                      :tract "*"}
                      :geoResolution "500k"
                      :values        ["B01001_001E"]})