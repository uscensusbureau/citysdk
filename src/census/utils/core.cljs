(ns census.utils.core
  (:require
    [cljs.core.async     :refer [chan >! <! take! put! close! promise-chan
                                 onto-chan to-chan]
                         :refer-macros [go go-loop alt!]]
    [ajax.core           :refer [GET POST]]
    ;[cljs-promises.async :refer [pair-port value-port]]
    [cuerdas.core        :as s]
    [oops.core           :refer [oget oset!]]
    [cljs.reader         :refer [read-string]]
    ;[linked.core         :as -=-]
    [com.rpl.specter     :refer [MAP-VALS MAP-KEYS INDEXED-VALS FIRST LAST
                                 if-path continue-then-stay selected?]
                         :refer-macros [select transform traverse setval recursive-path]]))

(def URL-STATS "https://api.census.gov/data/")
(def URL-WMS "https://tigerweb.geo.census.gov/arcgis/rest/services/")
(def URL-GEOJSON "https://raw.githubusercontent.com/uscensusbureau/citysdk/master/v2/GeoJSON")
(def URL-GEOKEYMAP "https://raw.githubusercontent.com/uscensusbureau/citysdk/master/v2/src/configs/geojson/index.edn")

;TODO
(def base-url-database "...")

(def vec-type cljs.core/PersistentVector)
(def amap-type cljs.core/PersistentArrayMap)
(def err-type js/Error)
(defn error [e] (js/Error. e))

;(def MAP-NODES
;  "From [specter's help page](https://github.com/nathanmarz/specter/wiki/Using-Specter-Recursively#recursively-navigate-to-every-map-in-a-map-of-maps)"
;  (recursive-path [] p (if-path map? (continue-then-stay MAP-VALS p))))


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
  Takes five initial inputs:
  1) the response format desired
  2) An error message name
  3) three atoms for the: URL, data response and or error
  Returns a function, which takes three/four more inputs:
  1) takes a =url= channel
  2) takes a =response= channel.
  3) takes an =err= channel (for propogation/coordination)
  Once first created (with format and err-log-msg) the following channel fns
  enclosed within local state provided by the input atoms, which stores the last
  url sent in, the last response put out and any prior errors.
  If url passed in = the last url (cached in an `atom`), the
  function pumps a cached response (`atom`) instead of - in the case the
  url argument =/= last url - calling a cljs-ajax `GET` request.
  Any new payloads received by `GET` will replace the last response `atom` via
  `reset!` *and* be put into the out-bound =response= chan.
  "
  [format log-name $url$ $res$ $err$]
  (fn
    ([=url= =res= =err=] (($GET$ format log-name $url$ $res$ $err$) =url= =res= =err= nil))
    ([=url= =res= =err= ?silent] ; <- Allow silencing of logging
     (take!
       =url=
       (fn [url]
         (cond
           (and (= url @$url$) (not (empty? @$err$)))
           (do (prn (str "Unsuccessful: " log-name " request."))
               (put! =err= @$err$)
               (reset! $err$ {})) ; <- if internets have failed, allow retry
           (and (= url @$url$) (empty? @$err$))
           (do (when (nil? ?silent)
                     (do (prn (str "Getting " log-name " data from cache:"))
                         (prn url)))
               (put! =res= @$res$))
           :else
           (do (when (nil? ?silent)
                     (do (prn (str "Getting " log-name " data from source:"))
                         (prn url)))
               (let [cfg {:error-handler
                          (fn [{:keys [status status-text]}]
                            (do (prn (str "Unsuccessful: " log-name " request"))
                                (reset! $url$ url)
                                (->> (reset! $err$
                                             (str "STATUS: " status
                                                  " " status-text
                                                  " for: " url))
                                     (put! =err=))))}]
                 (case format
                   :json
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
                   :edn
                   (let [edn
                         (merge cfg {:handler
                                     (fn [res]
                                       (do (reset! $err$ {})
                                           (reset! $url$ url)
                                           (->> (reset! $res$ (read-string res))
                                                (put! =res=))))})]
                     (GET url edn))
                   :raw
                   (let [raw
                         (merge cfg {:handler
                                     (fn [res]
                                       (do (reset! $err$ {})
                                           (reset! $url$ url)
                                           (->> (reset! $res$ res)
                                                (put! =res=))))})]
                     (GET url raw)))))))))))


(defn =O?>-cb
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
      (alt! =O= ([O] (cb nil O))
            =E= ([E] (cb E nil)))))

(defn ->args
  "Converts js arguments (JSON) into a Clojure map, used internally to handle
  functionality of this library."
  [args]
  (if (= (type args) amap-type)
    (let [{:keys [vintage]} args]
      (setval :vintage (str vintage) args))
    (let [geoCljs (js->clj (oget args "geoHierarchy"))
          vintage (oget args "vintage")
          geoKeys (map-rename-keys strs->keys geoCljs)]
      (do (oset! args "vintage"      (clj->js (str vintage)))
          (oset! args "geoHierarchy" (clj->js geoKeys))
          (js->clj args :keywordize-keys true)))))


(defn args->js
  "Converts Clojure map-based arguments to JSON based arguments (for external
  use)"
  [{:keys [geoHierarchy] :as args}]
  (let [geoKeys (map-rename-keys #(keys->strs (name %)) geoHierarchy)]
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



(defn transduct<<
  "
  Transducer, which wraps a transducer to provide the right level of contract
  for a core.async chan through which data is not an item, but a collection.
  I.e., treating the collection as a single transducible item.

  Uses transduce.
  "
  [xfn]
  (fn [rf]
    (fn
      ([] (rf))
      ([acc] (rf acc))
      ([acc coll]
       (rf acc (transduce xfn conj coll))))))


(defn map-target
  "
  Maps a provided function to a specific index + 1 of a provided collection.
  "
  [f target coll]
  (map-indexed
    #(if (zero? (mod (inc %1) target)) (f %2) %2)
    coll))


(defn map-target-idcs
  "
  Maps a provided function over a given vector of indeces of a provided
  collection.
  "
  [f targets coll]
  (transform [INDEXED-VALS (selected? FIRST (set targets)) LAST] f coll))


(defn map-idcs-range
  "
  Maps a provided function over a given range of indeces (vector of beginning
  to end) of a provided collection.
  "
  [f [r-start r-end] coll]
  (transform [INDEXED-VALS (selected? FIRST (set (range r-start r-end))) LAST] f coll))
