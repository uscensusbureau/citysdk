(ns census.statsAPI.core
  (:require
    [cljs.core.async    :refer [>! <! chan promise-chan close! take! pipeline-async]
                        :refer-macros [go]]
    [cuerdas.core       :refer [join numeric? parse-number]]
    [census.wmsAPI.core :refer [Icb<-wms-args<<=IO=]]
    [census.utils.core  :refer [I=O<<=IO= IO-ajax-GET-json xf!<< xfxf<<
                                amap-type vec-type throw-err map-idcs-range
                                keys->strs js->args strs->keys
                                URL-WMS URL-STATS]]))

(defn kv-pair->str [[k v] separator]
  (join separator [(name k) (str v)]))

(defn stats-url-builder
  "Composes a URL to call Census' statistics API"
  [{:keys [vintage sourcePath geoHierarchy values predicates statsKey]}]
  (str URL-STATS
       (str vintage)
       (join (map #(str "/" %) sourcePath))
       "?get="
       (if (some? values)
           (join "," values)
           "")
       (if (some? predicates)
           (str "&" (str (join "&" (map #(kv-pair->str % "=") predicates))))
           "")
       (keys->strs
         (if (= 1 (count geoHierarchy))
             (str "&for=" (kv-pair->str (first geoHierarchy) ":"))
             (str "&in="  (join "%20" (map #(kv-pair->str % ":") (butlast geoHierarchy)))
                  "&for=" (kv-pair->str (last geoHierarchy) ":"))))
       (if (not (nil? statsKey))
           (str "&key=" statsKey))))


(defn parse-if-number
  "
  Conditionally translates a string into an integer or float if so coercible.
  If not, returns the original string.
  "
  [s]
  (if (numeric? s)
      (parse-number s)
      s))

(defn xf!-csv-response->JSON
  "
  Stateful transducer, which stores the first item as a list of a keys to apply
  (via `zipmap`) to the rest of the items in a collection. Serves to turn the
  Census API response into a more conventional JSON format.

  If provided `:keywords` as an argument, will return a map with Clojure keys.
  Otherwise, will return map keys as strings.
  "
  ([args] (xf!-csv-response->JSON args nil))
  ([{:keys [values predicates]} ?keywords]
   (let [parse-range [0 (+ (count values) (count predicates))]]
     (xf!<<
       (fn [state rf result input]
         (let [prev @state]
           (if (nil? prev)
               (if (= ?keywords :keywords)
                   (do (vreset! state (mapv strs->keys input)) nil)
                   (do (vreset! state input) nil))
               (if (= ?keywords :keywords)
                   (rf result
                       (zipmap (vec (map keyword @state))
                               (map-idcs-range parse-if-number
                                               parse-range
                                               input)))
                   (rf result
                       (zipmap @state
                               (map-idcs-range parse-if-number
                                               parse-range
                                               input)))))))))))

(defn xfxf!-e?->csv->JSON
  "
  Stateful transducer composed of an error-throwing function with a xf wrapper,
  which allows the xf!-csv-response->JSON transducer to operate on a collection
  passed to a `chan`.
  "
  [args ?keywords]
  (comp
    (map throw-err)
    (xfxf<< (xf!-csv-response->JSON args ?keywords) conj)))


(defn IO-pp->census-stats
  "
  Internal function for calling the Census API using a Clojure Map and getting
  stats returned as a clojure map.

  Note: Inside `go` blocks, any map literals `{}` are converted into hash-maps.
  Make sure to bind the args in a wrapping `(let [args ...(go` rather than from
  within a shared `go` context.
  "
  [=I= =O=]
  (go (let [args  (<! =I=)
            url   (stats-url-builder args)
            =url= (chan 1)
            =res= (chan 1 (xfxf!-e?->csv->JSON args :keywords))]
        (prn url)
        (>! =url= url)
        ; IO-ajax-GET closes the =res= chan; pipeline-async closes the =url= when =res= is closed
        (pipeline-async 1 =res= (I=O<<=IO= IO-ajax-GET-json) =url=)
        ; =O= chan is closed by the consumer; pipeline closes the =res= when =O= is closed
        (>! =O= (<! =res=))
        (close! =url=)
        (close! =res=))))


;; Examples ==============================
(let [=I= (chan 1)
      =O= (chan 1)
      args {:vintage      "2016"
            :sourcePath   ["acs" "acs5"]
            :geoHierarchy {:state "01" :county "073" :tract "000100"}
            :values       ["B01001_001E" "B01001_001M"]}]
  (go (>! =I= args)
      (IO-pp->census-stats =I= =O=)
      (prn (<! =O=))
      (close! =I=)
      (close! =O=)))

;; =======================================
