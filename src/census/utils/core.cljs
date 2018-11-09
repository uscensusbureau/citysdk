(ns census.utils.core
  (:require
    [cljs.core.async :as <|]
    [ajax.core :refer [GET POST]]
    [cljs-promises.async :as cpa :refer [pair-port] :refer-macros [<?]]
    [cuerdas.core :as s]
    [com.rpl.specter :as sp]
    [cljs.pprint :refer [pprint]]
    [linked.core :as linked]
    [oops.core :as ob]
    [cljs.reader :as r]
    ["fs" :as fs]
    ["dotenv" :as env]))


(def stats-key (ob/oget (env/load) ["parsed" "Census_Key_Pro"]))

(def $geoKeyMap$ (atom {}))

(def base-url-stats "https://api.census.gov/data/")
(def base-url-wms "https://tigerweb.geo.census.gov/arcgis/rest/services/")
(def base-url-geojson "https://raw.githubusercontent.com/loganpowell/census-geojson/master/GeoJSON")
;(def base-url-geoKeyMap "https://raw.githubusercontent.com/loganpowell/census-geojson/master/src/census/geojson/index.edn")
(def base-url-geoKeyMap "https://raw.githubusercontent.com/loganpowell/census-geojson/master/src/census/geojson/index.edn")

(def base-url-database "...")

(defn read-edn [path]
  (r/read-string (str (fs/readFileSync path))))

(def vec-type cljs.core/PersistentVector)

(def amap-type cljs.core/PersistentArrayMap)

(def err-type js/Error)

(defn error
  [e]
  (js/Error. e))

(def MAP-NODES
  "From [specter's help page](https://github.com/nathanmarz/specter/wiki/Using-Specter-Recursively#recursively-navigate-to-every-map-in-a-map-of-maps)"
  (sp/recursive-path [] p (sp/if-path map? (sp/continue-then-stay sp/MAP-VALS p))))

(defn deep-reverse-map
  "Recursively reverses the order of the key/value _pairs_ inside a map"
  {:test
   #(is (= (deep-reverse-map {:i 7 :c {:e {:h 6 :g 5 :f 4} :d 3} :a {:b 2}})
           {:a {:b 2} :c {:d 3 :e {:f 4 :g 5 :h 6}} :i 7}))}
  [m]
  (sp/transform MAP-NODES
               #(into {} (reverse %))
               m))

;(test deep-reverse-map)

(defn deep-linked-map
  "
  Recursively converts any map into a `linked` map (preserves insertion order)
  TODO - Testing:
  [core.async](https://github.com/clojure/core.async/blob/master/src/test/cljs/cljs/core/async/tests.cljs)
  "
  [m]
  (sp/transform MAP-NODES
               #(into (linked/map) (vec %))
               m))

; Examples =============================================

; Note, inside a go-block, it seems that any map literals are immediately
; changed into `hash-map`, so the only way to preserve an `array-map` is to
; `let` bind the args into a variable before invoking the go-block

#_(let [mp1 {:vintage      "2016"
             :sourcePath   ["acs" "acs5"]
             :geoHierarchy {:state "12" :county "*"}
             :values       ["B01001_001E" "NAME"]
             :predicates   {:B00001_001E "0:30000"}
             :statsKey     "test key"}]
    (go (let [=I= (promise-chan (map deep-linked-map))]
          (>! =I= mp1)
          (prn (str "mp1:"))
          (prn mp1)
          (prn (str "<! =I=:"))
          (prn (<! =I=)))))

; =======================================================


(defn map-rename-keys
  "
  Applies a function over the keys in a provided map
  "
  [f m]
  (sp/transform sp/MAP-KEYS f m))

;(map-rename-keys name {:a "c" :b "d"})
;=> {"a" "c", "b" "d"}

(defn map-over-keys
  "
  Applies a function to all values of a provided map
  "
  [f m]
  (sp/transform sp/MAP-VALS f m))

;(map-over-keys inc {:a 1 :b 2 :c 3})
;=> {:a 2, :b 3, :c 4}

(defn keys->strs
  "
  Translates Clojure (edn) key-forms of geographic identifyers into strings,
  which are valid as parameters of a Census Data API URL construction.
  "
  {:test #(assert
            (= (keys->strs
                 (name :american-indian-area!alaska-native-area-_reservation-or-statistical-entity-only_-_or-part_))
               "american indian area/alaska native area (reservation or statistical entity only) (or part)"))}
  [s]
  (s/replace s #"-_|_|!|-"
             {"-_" " (" "_" ")" "!" "/" "-" " "}))


#_(keys->strs (name :state))

(defn strs->keys
  "
  Translates strings valid as parameters of a Census Data API URL construction
  to Clojure (edn) key-forms of geographic identifyers. Also valid URL components
  of the raw.github directory structure.
  "
  {:test #(assert
            (= (keyword
                 (strs->keys "american indian area/alaska native area (reservation or statistical entity only) (or part)"))
               :american-indian-area!alaska-native-area-_reservation-or-statistical-entity-only_-_or-part_))}
  [s]
  (s/replace s #" \(|\)|/| "
             {" (" "-_" ")" "_" "/" "!" " " "-"}))

#_(name "string")
;; Examples ==============================
;
;(keys->strs "american-indian-area!alaska-native-area-_reservation-or-statistical-entity-only_-_or-part_!or-something-else"
; => "american indian area/alaska native area (reservation or statistical entity only) (or part)/or something else")
;
;(strs->keys "american indian area/alaska native area (reservation or statistical entity only) (or part)/or something else")
;=> "american-indian-area!alaska-native-area-_reservation-or-statistical-entity-only_-_or-part_!or-something-else"
;
;(mapv strs->keys ["B01001_001E","NAME","B00001_001E","state","state legislative district (upper chamber)"]
; => ["B01001_001E"]
; "NAME"
; "B00001_001E"
; "state"
; "state-legislative-district-_upper-chamber_")
;
;; Help from [Stack Overflow](https://stackoverflow.com/questions/37734468/constructing-a-map-on-anonymous-function-in-clojure)
;; =======================================


(defn IO-ajax-GET-json
  "
  I/O (chans) API which takes a URL from an input port (=I=), makes a `cljs-ajax`
  GET request to the provided URL and puts the response in the output (=O=) port.
  "
  [=URL= =RES=]
  (let [args {:response-format :json
              :handler
              (fn [r] (<|/go (<|/>! =RES= r) (<|/close! =RES=)))
              :error-handler
              (fn [e] (<|/go (<|/>! =RES= (error (get-in e [:parse-error :original-text]))) (<|/close! =RES=)))
              :keywords?       true}]
    (<|/go (GET (<|/<! =URL=) args))))

; MORE OPTIONS: https://github.com/JulianBirch/cljs-ajax#getpostput


(defn IO-cache-GET-edn
  "
  Takes an atom as a one-time cachable value and returns a function that accepts
  I/O ports as with IO-ajax-GET.  On first remote GET, the atom is hydrated via
  an actual HTTP request. On following calls, the atom is dereferenced to provide
  the response. Only useful for a single value that doesn't need to change during
  a runtime.
  "
  [cache]
  (fn [=URL= =RES=]
      (if (empty? @cache)
          (let [args {:handler
                      (fn [r] (<|/go (<|/>! =RES= (r/read-string r))
                                     (reset! cache (r/read-string r))
                                     (<|/close! =RES=)))
                      :error-handler
                      (fn [e] (<|/go (<|/>! =RES= (error (get-in e [:parse-error :original-text])))
                                     (<|/close! =RES=)))}]
               (<|/go (GET (<|/<! =URL=) args)))
          (<|/go (<|/>! =RES= @cache) (<|/close! =RES=)))))

;    ~~~888~~~   ,88~-_   888~-_     ,88~-_
;       888     d888   \  888   \   d888   \
;       888    88888    | 888    | 88888    |
;       888    88888    | 888    | 88888    |
;       888     Y888   /  888   /   Y888   /
;       888      `88_-~   888_-~     `88_-~


#_(let [=O= (<|/chan 1)
        =I= (<|/chan 1)]
    (<|/go (<|/>! =I= base-url-geoKeyMap)
           ((IO-cache-GET-edn $geoKeyMap$) =I= =O=)
           (prn (<|/<! =O=))
           (<|/close! =I=)
           (<|/close! =O=)))



(defn js->args
  [args]
  (if (= (type args) amap-type)
    (let [{:keys [vintage]} args]
      (sp/setval :vintage (str vintage) args))
    (let [geoCljs (js->clj (ob/oget args "geoHierarchy"))
          vintage (ob/oget args "vintage")
          geoKeys (map-rename-keys strs->keys geoCljs)]
      (do (ob/oset! args "vintage"      (clj->js (str vintage)))
          (ob/oset! args "geoHierarchy" (clj->js geoKeys))
          ;(prn (str "args from args-digester: " (js->clj args :keywordize-keys true)))
          (js->clj args :keywordize-keys true)))))

;; Examples ==============================
(comment
  (js->args ts/test-js-args-1)
  (js->args ts/test-js-args-2)
  (js->args ts/test-args-6))

#_(js->args test.core/test-js-args-2)
;; =>
;;{:vintage "2016",
;; :sourcePath ["acs" "acs5"],
;; :geoHierarchy {:state "12", :state-legislative-district-_upper-chamber_ "*"},
;; :values ["B01001_001E" "NAME"],
;; :predicates {:B00001_001E "0:30000"},
;; :statsKey "6980d91653a1f78acd456d9187ed28e23ea5d4e3"}
;; =======================================


(defn args->js
  [{:keys [geoHierarchy] :as args}]
  (let [geoKeys (map-rename-keys #(keys->strs (name %)) geoHierarchy)]
    (prn (clj->js geoKeys))
    (clj->js (sp/setval :geoHierarchy geoKeys args))))

#_(args->js  {:vintage "2010",
              :values ["H001001" "NAME"],
              :sourcePath ["dec" "cd113"],
              :geoHierarchy {:american-indian-area!alaska-native-area-_reservation-or-statistical-entity-only_-_or-part_ "R",
                             :state "01",
                             :county-subdivision "93"
                             :congressional-district "01",
                             :american-indian-area!alaska-native-area!hawaiian-home-land-_or-part_ "2865"}})

(defn throw-err
  "
  Throws an error... meant to be used in transducer `comp`osed with another
  transducer or as `(map u/throw-error)`.
  "
  [x]
  (if (instance? err-type x)
    (throw x)
    x))

(defn I=O<<=IO=
  "
  Adapter, which wraps asynchronous I/O ports input to provide a synchronous
  input.

  This is good for kicking off async functions, but also is the required
  signature/contract for `pipeline-async`.
  "
  [f]                            ; takes an async I/O function
  (fn [I =O=]             ; returns a function with a sync input / `chan` output
    (let [=I= (<|/chan 1)]       ; create internal `chan`
      (<|/go (<|/>! =I= I)       ; put sync `I` into `=I=`
             (f =I= =O=)  ; call the wrapped function with the newly created `=I=`
             (<|/close! =I=))))) ; close the port to flush out values

;; Tested: working

(defn args+cb<<=IO=
  "
  Adapter, which wraps asynchronous I/O ports input to provide a synchronous
  input and expose the output to a callback and converts any #js args to proper
  cljs syntax (with keyword translation)

  This is good for touch & go asynchronous functions, which do not require
  'enduring relationships' or concerted application between other async
  functions (e.g., exposing asynchronous functions as a library).
  "
  [f]                                           ; takes an async I/O function
  (fn [I cb ?state]                             ; returns a function with sync input  / callback for output
    (let [=I=  (<|/chan 1)                      ; create two internal `chan`s for i/o
          =O=  (<|/chan 1 (map throw-err))
          args (js->args I)]                    ; converts any #js types to cljs with proper keys
      (<|/go (<|/>! =I= args)
             (f =I= =O= ?state)                 ; apply the async I/O function with the internal `chan`s
             (<|/take! =O= #(do (cb %)          ; use async `take!` to allow lambdas/closures
                                (<|/close! =I=) ; close the ports to flush the values
                                (<|/close! =O=)))))))

;; Tested: working
;
;(defn js-I=O<<=IO=
;  "
;  Adapter, which wraps asynchronous I/O ports input to provide a synchronous
;  input, which converts values from =I= channel to js arguments. Created
;  initially for async js library (e.g., `workerpool`) interop.
;  "
;  [f]                            ; takes an async I/O function
;  (fn [I =O= ?state]             ; returns a function with a sync input / `chan` output
;    (let [=I= (<|/chan 1)
;          js-args (clj->js I)]       ; create internal `chan`
;      (<|/go (<|/>! =I= js-args)       ; put sync `I` into `=I=`
;             (f =I= =O= ?state)  ; call the wrapped function with the newly created `=I=`
;             (<|/close! =I=))))) ; close the port to flush out values
;
;(defn =IO<-js-<3-fn
;  [<3-fn]
;  (fn [=I= =O=]
;    (<|/go (let [[val err] (<|/<! (cpa/pair-port (<3-fn (<|/<! =I=))))]
;                (if (= val nil)
;                    (<|/>! =O= err)
;                    (<|/>! =O= (js->clj val)))))))

; Examples =======================================

#_(defn test-promise
    [?happy?]
    (js/Promise. (fn [resolve reject]
                     (let [answer "This promise was "]
                          (if (= ?happy? "happy")
                              (resolve (str answer "resolved!"))
                              (reject  (js/Error. (str answer "rejected :("))))))))


#_(-> (test-promise "happy")
      (.then (fn [fulfilled] (prn fulfilled))))

#_(-> (test-promise "poop")
      (.then (fn [fulfilled] (js/console.log fulfilled)))
      (.catch (fn [error]    (js/console.log error))))



#_(let [=O= (<|/chan 1 (map throw-err))]
    (<|/go ((js-I=O<<=IO= (=IO<-js-<3-fn test-promise)) "happy" =O=)
           (prn (<|/<! =O=))
           (<|/close! =O=)))

; ==================================================

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

;; Tested: working

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
        ((I=O<<=IO= IO-ajax-GET-json) url =O=)
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
  (sp/transform [sp/INDEXED-VALS (sp/selected? sp/FIRST (set targets)) sp/LAST] f coll))

; Example ===============================

#_(map-target-idcs inc [0 1 2] [1 2 3 4 5])
; => [2 3 4 4 5]

; Also works:
;(sp/transform (multi-path 1 3 5) inc [0 1 2 3 4 5 6])
; => [0 2 2 4 4 6 6]
; =======================================

(defn map-idcs-range
  "
  Maps a provided function over a given range of indeces (vector of beginning
  to end) of a provided collection.
  "
  [f [r-start r-end] coll]
  (sp/transform [sp/INDEXED-VALS (sp/selected? sp/FIRST (set (range r-start r-end))) sp/LAST] f coll))

; Example ===============================

;; also works: (sp/transform (multi-path 1 3 5) inc [0 1 2 3 4 5 6])
;=> [0 2 2 4 4 6 6]


;(map-idcs-range inc [0 2] [1 2 3 4 5])
;=> [2 3 3 4 5]
; =======================================

