(ns census.utils.core
  (:require
    [cljs.core.async     :refer [chan >! <! take! put! close! promise-chan
                                 onto-chan to-chan]
                         :refer-macros [go go-loop alt!]]
    [ajax.core           :refer [GET POST]]
    [cljs-promises.async :refer [pair-port value-port]]
    [cuerdas.core        :as s]
    [oops.core           :refer [oget oset!]]
    [cljs.reader         :refer [read-string]]
    [linked.core         :as -=-]
    [com.rpl.specter     :refer [MAP-VALS MAP-KEYS INDEXED-VALS FIRST LAST
                                 if-path continue-then-stay selected?]
                         :refer-macros [select transform traverse setval recursive-path]]))

(def $geoKeyMap$ (atom {}))

(def URL-STATS "https://api.census.gov/data/")
(def URL-WMS "https://tigerweb.geo.census.gov/arcgis/rest/services/")
(def URL-GEOJSON "https://raw.githubusercontent.com/loganpowell/census-geojson/master/GeoJSON")
(def URL-GEOKEYMAP "https://raw.githubusercontent.com/loganpowell/census-geojson/master/src/configs/geojson/index.edn")

;FIXME === !!! ===
(def base-url-database "TODO?")

(def vec-type cljs.core/PersistentVector)

(def amap-type cljs.core/PersistentArrayMap)

(def err-type js/Error)

(defn error [e] (js/Error. e))

(def MAP-NODES
  "From [specter's help page](https://github.com/nathanmarz/specter/wiki/Using-Specter-Recursively#recursively-navigate-to-every-map-in-a-map-of-maps)"
  (recursive-path [] p (if-path map? (continue-then-stay MAP-VALS p))))

(defn deep-reverse-MAP-NODES
  "Recursively reverses the order of the key/value _pairs_ inside a map"
  [m]
  (transform MAP-NODES #(into {} (reverse %)) m))

(defn deep-linked-map
  "
  Recursively converts any map into a `linked` map (preserves insertion order)
  TODO - Testing:
  [core.async](https://github.com/clojure/core.async/blob/master/src/test/cljs/cljs/core/async/tests.cljs)
  "
  [m]
  (transform MAP-NODES #(into (-=-/map) (vec %)) m))

(defn map-rename-keys
  "
  Applies a function over the keys in a provided map
  "
  [f m]
  (transform MAP-KEYS f m))

(defn map-over-keys
  "
  Applies a function to all values of a provided map
  "
  [f m]
  (transform MAP-VALS f m))

(defn keys->strs
  "
  Translates Clojure (edn) key-forms of geographic identifyers into strings,
  which are valid as parameters of a Census Data API URL construction.
  "
  [s]
  (s/replace s #"-_|_|!|-"
             {"-_" " (" "_" ")" "!" "/" "-" " "}))

(defn strs->keys
  "
  Translates strings valid as parameters of a Census Data API URL construction
  to Clojure (edn) key-forms of geographic identifyers. Also valid URL components
  of the raw.github directory structure.
  "
  [s]
  (s/replace s #" \(|\)|/| "
             {" (" "-_" ")" "_" "/" "!" " " "-"}))

; Examples =======================================

;(defn =IO<-js-<3-fn
;  [<3-fn]
;  (fn [=I= =O=]
;    (go (let [[val err] (<! (cpa/pair-port (<3-fn (<! =I=))))]
;                (if (= val nil)
;                    (>! =O= err)
;                    (>! =O= (js->clj val)))))))


#_(defn test-promise
    [?happy?]
    (js/Promise. (fn [resolve reject]
                   (let [answer "This promise was "])
                   (if (= ?happy? "happy")
                       (resolve (str answer "resolved!"))
                       (reject  (js/Error. (str answer "rejected :(")))))))


#_(-> (test-promise "happy")
      (.then (fn [fulfilled] (prn fulfilled))))

#_(-> (test-promise "poop")
      (.then (fn [fulfilled] (prn fulfilled)))
      (.catch (fn [error]    (prn error))))



#_(let [=O= (chan 1 (map throw-err))]
    (go ((js-I=O<<=IO= (=IO<-js-<3-fn test-promise)) "happy" =O=)
        (prn (<! =O=))
        (close! =O=)))

; ==================================================


(defn throw-err
  "
  Throws an error... meant to be used in transducer `comp`osed with another
  transducer or as `(map u/throw-error)`.
  "
  [x]
  (if (instance? err-type x)
    (throw x)
    x))

(defn $GET$
  "
  Takes two initial inputs: the response format desired and an error message,
  which is logged in console for debugging. Takes three channel inputs
  1: takes a =url= channel
  2: takes a =response= channel.
  3: takes an =err= channel (for propogation/coordination)
  Once first created (with format and err-log-msg) the following channel fns
  are wrapped with some local state that stores the last url sent in, the last
  response put out and any prior errors.
  If url passed in === the last url (cached in an `atom`), the
  function pumps a cached response (`atom`) instead of - in the case the
  url argument =/= last url - calling a cljs-ajax `GET` request.
  Any new payloads received by `GET` will replace the last response `atom` via
  `reset!` *and* be put into the out-bound =response= chan.
  "
  [format err-log-msg]
  (let [$url$ (atom "")
        $res$ (atom [])
        $err$ (atom {})]
    (fn
      ([=url= =res=] (($GET$ format err-log-msg) =url= =res= (chan 1 (map throw-err))))
      ([=url= =res= =err=]
       (take!
         =url=
         (fn [url]
           (cond
             (and (= url @$url$)
                  (not (empty? @$err$)))
             (do (prn err-log-msg)
                 (put! =err= @$err$)
                 (reset! $err$ {})) ; <- if internets have failed, allow retry
             (and (= url @$url$)
                  (empty? @$err$))
             (do (prn "$GET$ data from cache:")
                 (prn url)
                 (put! =res= @$res$))
             :else
             (do (prn "$GET$ data from source:")
                 (prn (str url))
                 (let [cfg {:error-handler
                            (fn [{:keys [status status-text]}]
                              (do (prn err-log-msg)
                                  (reset! $url$ url)
                                  (put! =res= {})
                                  (->> (reset! $err$
                                         (str "ERROR status: " status
                                              " " status-text
                                              " for URL " url
                                              " ... output empty `{}`"))
                                       (put! =err=))))}]
                   (if (= format :json)
                     (let [json
                           (merge cfg {:response-format :json
                                       :keywords?       true
                                       :handler
                                       (fn [res]
                                         (do (reset! $err$ {})
                                             (reset! $url$ url)
                                             (->> (reset! $res$ res)
                                                  (put! =res=))))})]
                       (GET url json))
                     (let [edn
                           (merge cfg {:handler
                                       (fn [res]
                                         (do (reset! $err$ {})
                                             (reset! $url$ url)
                                             (->> (reset! $res$ (read-string res))
                                                  (put! =res=))))})]
                       (GET url edn))))))))))))


(def $GET$-json ($GET$ :json "Invalid JSON request..."))

(def $GET$-edn  ($GET$ :edn  "Invalid EDN request..."))

(defn I-<I=
  "
  Takes a function which accepts three `chan`s [=I= =O= =E=] and converts it to a
   fn with a synchronous input (f I) . If buffer provided, passes that to the
   internal `chan` (replaces =I=).
   If buffer and transducer provided, passes those accordingly.
   "
  [f I =I= =O= =E=]
  (go (>! =I= I)
      (f =I= =O= =E=)))


(defn cb-<O?=
  "
  Can only be used as the last wrapper as the callback. Function can't be
  be coordinated with any other channel (go blocks don't interpret nested
  anonymous functions (the callback)).

  Takes a function (f =O=) that pumps output into a channel and converts it to a
  fn with a callback API (f cb). If buffer provided, passes that to the internal
  `chan`. If buffer and transducer provided, passes those in accordingly.

  Closes =O= and =E= chans on completion
  "
  [f cb =I= =O= =E=]
  (go (f =I= =O= =E=)
      (alt! =O= ([O] (do (cb nil O)))
            =E= ([E] (do (cb E nil))))))

(defn ->args
  [args]
  (if (= (type args) amap-type)
    (let [{:keys [vintage]} args]
      (setval :vintage (str vintage) args))
    (let [geoCljs (js->clj (oget args "geoHierarchy"))
          vintage (oget args "vintage")
          geoKeys (map-rename-keys strs->keys geoCljs)]
      (do (oset! args "vintage"      (clj->js (str vintage)))
          (oset! args "geoHierarchy" (clj->js geoKeys))
          ;(prn (str "args from args-digester: " (js->clj args :keywordize-keys true)))
          (js->clj args :keywordize-keys true)))))

;; Examples ==============================
(comment
  (->args ts/test-js-args-1)
  (->args ts/test-js-args-2)
  (->args ts/test-args-6))

#_(->args test.core/test-js-args-2)
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
    (clj->js (setval :geoHierarchy geoKeys args))))



(defn xf<<
  "
  Transducifier wrapper, which takes the seed of a transducer (essential
  operation) with a standardized `xf acc this` contract and wraps it in the
  necessary boilerplate to correctly function as a stateless transducer.

  Example of tranducer seed with contract required for this wrapper:

  (defn xf-seed-form
    [rf acc this]
  "
  [f]
  (fn [rf]
    (fn
      ([] (rf))
      ([acc] (rf acc))
      ([acc this] (f rf acc this)))))

;; Tested: working

(defn xf!<<
  "
  Stateful transducifier wrapper, which takes the seed of a transducer (essential
  operation) with a standardized `xf acc this` contract and wraps it in the
  necessary boilerplate to correctly function as a _stateful_ transducer.

  Only avails a single state container: `state`

  Example of tranducer seed with contract required for this wrapper:

  (defn xf!-seed-form
    [state xf acc this]
      (let [prev @state]
        (if (nil? prev)
            (do (vreset! state (vec (map keyword item)))
              nil)
            (xf acc (zipmap prev (vec item))))))
  "
  [f]
  (fn [rf]
    (let [state (volatile! nil)]
      (fn
        ([] (rf))
        ([acc] (rf acc))
        ([acc this] (f state rf acc this))))))

;; Tested 1: working


(defn educt<<
  "
  Transducer, which wraps a transducer to provide the right level of contract
  for a core.async chan through which data is not an item, but a collection.
  I.e., treating the collection as a single transducible item.

  Uses eduction.
  "
  [xfn]
  (fn [rf]
    (fn
      ([] (rf))
      ([acc] (rf acc))
      ([acc coll]
       (rf acc (eduction xfn coll))))))


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

