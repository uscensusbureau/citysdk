(ns utils.core
  (:require [cljs.core.async
             :refer [chan
                     put!
                     take!
                     >!
                     <!
                     close!]]
            [cljs.core.async :refer-macros [go]]
            [ajax.core :refer [GET POST]]
            [cuerdas.core :as s]
            [com.rpl.specter
             :refer [transform
                     multi-path
                     INDEXED-VALS
                     MAP-KEYS
                     MAP-VALS
                     selected?
                     FIRST
                     LAST
                     ALL]]
            [cljs.pprint :refer [pprint]]
            [oops.core :as obj]))

(defn throw-err
  "
  Throws an error... meant to be used in transducer `comp`osed with another
  transducer or as `(map u/throw-error)`.
  "
  [x]
  (if (instance? js/Error x)
    (throw x)
    x))

(defn =IO=>I=O=
  "
  Adapter, which wraps asynchronous I/O ports input to provide a synchronous
  input.

  This is good for kicking off async functions, but also is the required
  signature/contract for `pipeline-async`.
  "
  [f]                       ; takes an async I/O function
  (fn [I =O=]               ; returns a function with a sync input / `chan` output
    (let [=I= (chan 1)]     ; create internal `chan`
      (go (>! =I= I)        ; put sync `I` into `=I=`
          (f =I= =O=)       ; call the wrapped function with the newly created `=I=`
          (close! =I=)))))  ; close the port to flush out values
;; Tested 1: working

(defn =IO=>Icb
  "
  Adapter, which wraps asynchronous I/O ports input to provide a synchronous
  input and expose the output to a callback. Note the async `take!` operation on
  the `=O=` port, which will stall if >1024 are pending (not enough puts to the
  chan). This is necessary as `go` blocks will not correctly evaluate a callback
  with an internal anonymous function/closure (`(fn ...)`).

  This is good for touch & go asynchronous functions, which do not require
  'enduring relationships' or concerted application between other async
  functions (e.g., exposing asynchronous functions as a library).
  "
  [f]                                  ; takes an async I/O function
  (fn [I cb]                           ; returns a function with sync input  / callback for output
    (let [=I= (chan 1)                 ; create two internal `chan`s for i/o
          =O= (chan 1)]
      (do (go (>! =I= I)               ; put the sync `I` into `=I=`
              (f =I= =O=))             ; apply the async I/O function with the internal `chan`s
          (take! =O= cb)               ; use callback function on the value taken from the `o-ch`
          (close! =I=)                 ; close the ports to flush the values
          (close! =O=)))))
;; Untested

(defn xf<<
  "
  Transducifier wrapper, which takes the seed of a transducer (essential
  operation) with a standardized `xf result input` contract and wraps it in the
  necessary boilerplate to correctly function as a stateless transducer.

  Example of tranducer seed with contract required for this wrapper:

  (defn xf-seed-form
    [xf result input]
    (xf result {(keyword (get-in input [:properties :GEOID])) input}))
  "
  [f]
  (fn [rf]
    (fn
      ([] (rf))
      ([result] (rf result))
      ([result input] (f rf result input)))))
;; Tested 1: working

(defn xf!<<
  "
  Stateful transducifier wrapper, which takes the seed of a transducer (essential
  operation) with a standardized `xf result input` contract and wraps it in the
  necessary boilerplate to correctly function as a _stateful_ transducer.

  Only avails a single state container: `state`

  Example of tranducer seed with contract required for this wrapper:

  (defn xf!-seed-form
    [state xf result input]
      (let [prev @state]
        (if (nil? prev)
            (do (vreset! state (vec (map keyword item)))
              nil)
            (xf result (zipmap prev (vec item))))))
  "
  [f]
  (fn [rf]
    (let [state (volatile! nil)]
      (fn
        ([] (rf))
        ([result] (rf result))
        ([result input] (f state rf result input))))))
;; Tested 1: working


(defn xfxf<<
  "
  Transducer, which wraps a transducer to provide the right level of contract
  for a core.async chan through which data is not an item, but a collection.
  I.e., treating the collection as a single transducible item.
  "
  [xfn rf-]
  (fn [rf]
    (fn
      ([] (rf))
      ([result] (rf result))
      ([result item]
       (rf result (transduce xfn rf- item))))))
;; Tested 1: working

;; Examples ==============================

#_(let [url "https://api.census.gov/data/2016/acs/acs5?get=B01001_001E,NAME&B00001_001E=0:30000&in=state:12&for=state legislative district (upper chamber):*&key=6980d91653a1f78acd456d9187ed28e23ea5d4e3"
        =O= (chan 1)
        =I= (chan 1)]
    (go (>! =I= url)
        ((=IO=>I=O= IO-ajax-GET-json) url =O=)
        (pprint (<! =O=))))
;=>
; [["B01001_001E"
;   "NAME"
;   "B00001_001E"
;   "state"
;   "state legislative district (upper chamber)"]
;  ["486727"
;   "State Senate District 4 (2016), Florida"
;   "28800"
;   "12"
;   "004"]])
;; =======================================

(defn map-target
  "
  Maps a provided function to a specific index + 1 of a provided collection.
  "
  [f target coll]
  (map-indexed
    #(if (zero? (mod (inc %1) target)) (f %2) %2)
    coll))

; Example ===============================

;(map-target inc 2 [1 2 3 4 5])
; => (1 3 3 5 5)
; =======================================

(defn map-target-idcs
  "
  Maps a provided function over a given vector of indeces of a provided
  collection.
  "
  [f targets coll]
  (transform [INDEXED-VALS (selected? FIRST (set targets)) LAST] f coll))

; Example ===============================

#_(map-target-idcs inc [0 1 2] [1 2 3 4 5])
; => [2 3 4 4 5]

; Also works:
;(transform (multi-path 1 3 5) inc [0 1 2 3 4 5 6])
; => [0 2 2 4 4 6 6]
; =======================================

(defn map-idcs-range
  "
  Maps a provided function over a given range of indeces (vector of beginning
  to end) of a provided collection.
  "
  [f [r-start r-end] coll]
  (transform [INDEXED-VALS (selected? FIRST (set (range r-start r-end))) LAST] f coll))

; Example ===============================

;; also works: (transform (multi-path 1 3 5) inc [0 1 2 3 4 5 6])
;=> [0 2 2 4 4 6 6]


;(map-idcs-range inc [0 2] [1 2 3 4 5])
;=> [2 3 3 4 5]
; =======================================


(defn map-rename-keys
  "
  Applies a function over the keys in a provided map
  "
  [f m]
  (transform MAP-KEYS f m))

;(map-rename-keys name {:a "c" :b "d"})
;=> {"a" "c", "b" "d"}

(defn map-over-keys
  "
  Applies a function to all values of a provided map
  "
  [f m]
  (transform MAP-VALS f m))

;(map-over-keys inc {:a 1 :b 2 :c 3})
;=> {:a 2, :b 3, :c 4}

(defn keys->strs
  [s]
  (s/replace
    s
    #"-_|_|!|-"
    {"-_" " (" "_" ")" "!" "/" "-" " "}))

(defn strs->keys
  [s]
  (s/replace
    s
    #" \(|\)|/| "
    {" (" "-_" ")" "_" "/" "!" " " "-"}))

;; Examples ==============================

;(keys->strs "american-indian-area!alaska-native-area-_reservation-or-statistical-entity-only_-_or-part_!or-something-else")
; => "american indian area/alaska native area (reservation or statistical entity only) (or part)/or something else"

;(strs->keys "american indian area/alaska native area (reservation or statistical entity only) (or part)/or something else")
;=> "american-indian-area!alaska-native-area-_reservation-or-statistical-entity-only_-_or-part_!or-something-else"

;(mapv strs->keys ["B01001_001E","NAME","B00001_001E","state","state legislative district (upper chamber)"])
; => ["B01001_001E"
; "NAME"
; "B00001_001E"
; "state"
; "state-legislative-district-_upper-chamber_"]

;; Help from [Stack Overflow](https://stackoverflow.com/questions/37734468/constructing-a-map-on-anonymous-function-in-clojure)
;; =======================================

(defn json-args->clj-keys
  [json key]
  (let [geoJS (obj/oget json (name key))
        geoCljs (js->clj geoJS)
        geoKeys (map-rename-keys strs->keys geoCljs)]
    (obj/oset! json key (clj->js geoKeys))
    (js->clj json :keywordize-keys true)))

;; Examples ==============================
;
;#_(json-args->clj-keys #js {"vintage"      "2016"
;                            "sourcePath"   #js ["acs" "acs5"]
;                            "geoHierarchy" #js {"state" "12" "state legislative-district (upper chamber)" "*"}
;                            "values"       #js ["B01001_001E" "NAME"]
;                            "predicates"   #js {"B00001_001E" "0:30000"}
;                            "statsKey"     stats-key}
;                       :geoHierarchy)
;
;; =>
;;{:vintage "2016",
;; :sourcePath ["acs" "acs5"],
;; :geoHierarchy {:state "12", :state-legislative-district-_upper-chamber_ "*"},
;; :values ["B01001_001E" "NAME"],
;; :predicates {:B00001_001E "0:30000"},
;; :statsKey "6980d91653a1f78acd456d9187ed28e23ea5d4e3"}
;; =======================================

(defn IO-ajax-GET-json
  "
  I/O (chans) API which takes a URL from an input port (=I=), makes a `cljs-ajax`
  GET request to the provided URL and puts the response in the output (=O=) port.
  "
  [=URL= =RES=]
  (let [args {:response-format :json
              :handler         (fn [r] (go (>! =RES= r) (close! =RES=)))
              :error-handler   (fn [e] (go (>! =RES= (js/Error. (get-in e [:parse-error :original-text]))) (close! =RES=)))
              :keywords? true}]
    (go (GET (<! =URL=) args))))

; MORE OPTIONS: https://github.com/JulianBirch/cljs-ajax#getpostput

; Example ===============================

#_(let [=URL= (chan 1)
        =RES= (chan 1)]
    (go (>! =URL= "https://api.census.gov/data/2016/acs/acs5/geography.json")
        (IO-ajax-GET-json =URL= =RES=)
        (pprint (<! =RES=))))
; =>
;{:fips
; [{:name "us", :geoLevelDisplay "010", :referenceDate "2015-01-01"}
;  {:name "region", :geoLevelDisplay "020", :referenceDate "2015-01-01"}
;  {:name "division",
;   :geoLevelDisplay "030",
;   :referenceDate "2015-01-01"}
;  {:name "state", :geoLevelDisplay "040", :referenceDate "2015-01-01"}
;  {:name "county",
;   :geoLevelDisplay "050",
;   :referenceDate "2015-01-01",
;   :requires ["state"],
;   :wildcard ["state"],
;   :optionalWithWCFor "state"}...]}
; =======================================

