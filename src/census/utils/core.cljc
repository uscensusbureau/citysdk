(ns census.utils.core
  (:require
   #? (:cljs [cljs.core          :refer [js->clj, clj->js]])
   #? (:cljs [cljs.reader        :refer [read-string]]
       :clj  [clojure.edn        :refer [read-string]])
   #? (:cljs [cljs.core.async    :refer [put! take!]
              :refer-macros [go alt!]]
       :clj  [clojure.core.async :refer [alt! go put! take!]])
   #? (:clj  [ajax.core          :refer [GET]])
   [clojure.walk                 :refer [keywordize-keys]]
   [cuerdas.core                 :as s]
   ["isomorphic-unfetch$default" :as fetch]))

(def URL-STATS "https://api.census.gov/data/")
(def URL-WMS "https://tigerweb.geo.census.gov/arcgis/rest/services/")
;(def URL-GEOJSON "https://raw.githubusercontent.com/uscensusbureau/citysdk/master/v2/GeoJSON")
(def URL-GEOJSON "https://ddbc5tjh37x38.cloudfront.net")

(def URL-GEOKEYMAP "https://ddbc5tjh37x38.cloudfront.net/index.edn")
;(def URL-GEOKEYMAP "https://raw.githubusercontent.com/uscensusbureau/citysdk/master/v2/src/configs/geojson/index.edn")
;https://cdn.staticaly.com/gh/uscensusbureau/citysdk/master/v2/src/configs/geojson/index.edn



;(prn cors-proxy)

(defn str->number [s]
  #?(:clj  (read-string s)
     :cljs (js/Number s)))

(def vec-type
  #?(:cljs cljs.core/PersistentVector
     :clj clojure.lang.PersistentVector))

(def amap-type
  #?(:cljs cljs.core/PersistentArrayMap
     :clj clojure.lang.PersistentArrayMap))

(def err-type
  #?(:cljs js/Error
     :clj Exception))

(defn error [e]
  #?(:cljs (js/Error. e)
     :clj (Exception e)))

;(def MAP-NODES
;  "From [specter's help page](https://github.com/nathanmarz/specter/wiki/Using-Specter-Recursively#recursively-navigate-to-every-map-in-a-map-of-maps)"
;  (recursive-path [] p (if-path map? (continue-then-stay MAP-VALS p))))


(defn map-rename-keys
  "
  Applies a function over the keys in a provided map
  "
  [f m]
  (reduce-kv (fn [m k v]
               (assoc m (f k) v)) {} m))

(defn update-map [m f]
  (reduce-kv (fn [m k v]
               (assoc m k (f v))) {} m))

(defn map-over-keys
  "
  Applies a function to all values of a provided map
  "
  [f m]
  (reduce-kv (fn [m k v]
               (assoc m k (f v))) {} m))

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

(def isNode #? (:cljs (not (exists? js/fetch))
                :clj false))

(def isServer
  #?(:cljs isNode
     :clj true))

;;(prn js/process.versions.node)

(def cors-proxy
  "URL proxy string prereq if not node"
  (cond isServer ""
        :else "https://oggmitpm5y54hh6o6dp7ilp2vu0rejkm.lambda-url.us-east-1.on.aws/"))


#?(:clj (defn $GET$
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
          ([format log-name $url$ $res$ $err$] ($GET$ format log-name $url$ $res$ $err$ nil))
          ([format log-name $url$ $res$ $err$ ?cors]
           (fn
             ([=url= =res= =err=] (($GET$ format log-name $url$ $res$ $err$ ?cors) =url= =res= =err= nil))
             ([=url= =res= =err= ?silent] ; <- Allow silencing of logging
              (take!
               =url=
               (fn [url]
                 (cond
                    ;; short circuit if there's an error in the pipeline
                   (and (= url @$url$) (seq @$err$))
                   (let [err @$err$]
                     (do (prn (str "Unsuccessful `" log-name "` request."))
                         (prn (str err))
                         (put! =err= err)
                         (reset! $err$ {}))) ; <- if internets have failed, allow retry
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
                                  (fn [{:keys [status status-text failure response original-text]}]
                                    (do (prn (str "Response: " response
                                                  " STATUS: " status
                                                  " URL: " url))
                                        (reset! $url$ url)
                                        (->> (reset! $err$
                                                     (str "Response: " response
                                                          " STATUS: " status
                                                   ;" Text: " status-text
                                                          " URL: " url))
                                                   ;" Failure: " failure))
                                             (put! =err=))))
                                  :headers {"X-Requested-With" "XMLHttpRequest"}} ; TODO
                             CORS-URL (if (nil? ?cors)
                                        (str cors-proxy url)
                                        url)]
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
                             (GET CORS-URL json))
                           :edn
                           (let [edn
                                 (merge cfg {:handler
                                             (fn [res]
                                               (do (reset! $err$ {})
                                                   (reset! $url$ url)
                                                   (->> (reset! $res$ (read-string res))
                                                        (put! =res=))))})]
                             (GET CORS-URL edn))
                           :raw
                           (let [raw
                                 (merge cfg {:response-format :raw
                                             :handler
                                             (fn [res]
                                               (do (reset! $err$ {})
                                                   (reset! $url$ url)
                                                   (->> (reset! $res$ res)
                                                        (put! =res=))))})]
                             (GET CORS-URL raw)))))))))))))



#_#?(:cljs
     (def polyfetch
       "
     provides cross-platform fetch impl (Browser API + node polyfill) depending
     on context
     "
       (cond
         isNode node-fetch
         :else js/fetch)))

#?(:cljs
   (defn $GET$
     "
     Takes 5/6 initial inputs:
     1) the response format desired
     2) An error message name
     3-5) three atoms for the: URL, data response and or error
     6) optional: flag to skip CORS proxy even if on browser
  
     Returns a function, which takes three/four more inputs:
     1) takes a =url= channel
     2) takes a =response= channel.
     3) takes an =err= channel (for propogation/coordination)
     4) optional: allow silencing of logging
      
     Once first created (with format and err-log-msg) the following channel fns
     enclosed within local state provided by the input atoms, which stores the last
     url sent in, the last response put out and any prior errors.
     If url passed in = the last url (cached in an `atom`), the
     function pumps a cached response (`atom`) instead of - in the case the
     url argument =/= last url - calling a cljs-ajax `GET` request.
     Any new payloads received by `GET` will replace the last response `atom` via
     `reset!` *and* be put into the out-bound =response= chan.
     "
     ([format log-name $url$ $res$ $err$] ($GET$ format log-name $url$ $res$ $err$ nil))
     ([format log-name $url$ $res$ $err$ ?cors]
      (fn
        ([=url= =res= =err=] (($GET$ format log-name $url$ $res$ $err$ ?cors) =url= =res= =err= nil))
        ([=url= =res= =err= ?silent]
         (take! =url=
                (fn [url]
                  (cond
                    ; short circuit if there's an error in the pipeline
                    (and (= url @$url$) (seq @$err$))
                    (let [err @$err$]
                      (prn (str "Unsuccessful `" log-name "` request."))
                      (prn (str err))
                      (put! =err= err)
                      (reset! $err$ {})) ; <- if internets have failed, allow retry
                    (and (= url @$url$) (empty? @$err$))
                    (do (when (nil? ?silent)
                          (prn (str "Getting " log-name " data from cache:"))
                          (prn url))
                        (put! =res= @$res$))
                    :else
                    (do (when (nil? ?silent)
                          (prn (str "Getting " log-name " data from source:"))
                          (prn url))
                        (let [error-handler (fn [err]
                                              (prn (str "Error: " err))
                                              (reset! $url$ url)
                                              (->> (reset! $err$ (str "Error: " err))
                                                   (put! =err=)))
                              CORS-URL (if (nil? ?cors)
                                         (str cors-proxy url)
                                         url)]
                          (case format
                            :json
                            (-> (fetch CORS-URL #js {:method "GET"
                                                     :headers #js {"Content-Type" "application/json"
                                                                   "Accept" "application/json"}})
                                (.then #(.json %))
                                ;;(.then #(prn %))
                                (.then #(js->clj % :keywordize-keys true))
                                (.then (fn [clj]
                                         (reset! $err$ {})
                                         (reset! $url$ url)
                                         (->> (reset! $res$ clj)
                                              (put! =res=))))
                                (.catch #(error-handler %)))
                            :edn
                            (-> (fetch CORS-URL #js {:method "GET"
                                                     :headers #js {"Content-Type" "text/plain"
                                                                   "Accept" "text/plain"}})
                                (.then #(.text %))
                                (.then #(read-string %))
                                (.then (fn [edn]
                                         (reset! $err$ {})
                                         (reset! $url$ url)
                                         (->> (reset! $res$ edn)
                                              (put! =res=))))
                                (.catch #(error-handler %)))
                            :raw
                            (-> (fetch CORS-URL #js {:method "GET"
                                                     :headers #js {"Content-Type" "text/plain"
                                                                   "Accept" "text/plain"}})
                                (.then #(.text %))
                                (.then (fn [raw]
                                         (reset! $err$ {})
                                         (reset! $url$ url)
                                         (->> (reset! $res$ raw)
                                              (put! =res=))))
                                (.catch #(error-handler %))))))))))))))


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

#? (:cljs
    (defn ->args
      "
      Converts js arguments (JSON) into a Clojure map, used internally to handle 
      functionality of this library.
      "
      [args]
      (if (= (type args) amap-type)
        (let [{:keys [vintage]} args]
          #_(setval :vintage (str vintage) args)
          (merge args {:vintage (str vintage)}))
        (let [{geoHierarchy "geoHierarchy" vintage "vintage" :as clj-args} (js->clj args)]
           ;(do (prn (str "geoHierarchy??: " geoHierarchy))
          (if (not (nil? geoHierarchy))
            (->> (merge clj-args
                        {"geoHierarchy" (map-rename-keys #(strs->keys %) geoHierarchy)
                         "vintage" (str vintage)})
                 (keywordize-keys))
            (->> (merge clj-args
                        {"vintage" (str vintage)})
                 (keywordize-keys)))))))

#? (:cljs
    (defn args->
      "Converts Clojure arguments to JavaScript (for external use)"
      [{:keys [geoHierarchy] :as args}]
      (let [geoKeys (map-rename-keys #(keys->strs (name %)) geoHierarchy)]
        (clj->js (merge args {:geoHierarchy geoKeys})))))



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

  Example of transducer seed with contract required for this wrapper:

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
  Maps a provided function to a specific index of a provided collection.
  "
  [f target coll]
  (reduce-kv
   (fn [m k v] (if (= k target)
                 (conj m (f v))
                 (conj m v)))
   [] coll))

;
;(defn map-target-idcs
;  "
;  Maps a provided function over a given vector of indeces of a provided
;  collection.
;  "
;  [f targets coll]
;  (transform [INDEXED-VALS (selected? FIRST (set targets)) LAST] f coll))


(defn map-idcs-range
  "
  Maps a provided function over a given range of indeces (vector of beginning
  to end) of a provided collection.
  "
  [f [r-start r-end] coll]
  #_(transform [INDEXED-VALS (selected? FIRST (set (range r-start r-end))) LAST] f coll)
  (let [span (range r-start r-end)]
    (reduce-kv
     (fn [m k v] (if (some #(= k %) span)
                   (conj m (f v))
                   (conj m v)))
     [] coll)))



(defn filter-nil-tails [coll] (filter #(not (= nil (last %))) coll))