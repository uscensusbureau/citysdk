(ns configs.promised.core
  (:refer-clojure :exclude [resolve]))

(defn- cast-as-array
  [coll]
  (if (or (array? coll)
          (not (reduceable? coll)))
    coll
    (into-array coll)))

;; the ES6 API:

(defn promise
  [resolver]
  (js/Promise. resolver))

(defn resolve
  [x]
  (.resolve js/Promise x))

(defn reject
  [x]
  (.reject js/Promise x))

(defn all
  [coll]
  (.all js/Promise (cast-as-array coll)))

(defn race
  [coll]
  (.race js/Promise (cast-as-array coll)))

(defn then
  ([promise on-fulfilled]
   (.then promise on-fulfilled))
  ([promise on-fulfilled on-rejected]
   (.then promise on-fulfilled on-rejected)))

(defn catch
  [promise on-rejected]
  (.catch promise on-rejected))

;; extras!

(defn timeout
  [ms]
  (promise (fn [resolve _]
             (js/setTimeout resolve ms))))