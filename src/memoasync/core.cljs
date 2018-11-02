; Port of https://github.com/burbma/cljs-cache

(ns memoasync.core
  (:require [cljs.core.async :as <|]
            [cljs.cache :as c])) ; https://github.com/burbma/cljs-cache

(defn- update-cache [cache key value]
  (if (c/has? cache key)
    (c/hit cache key)
    (c/miss cache key value)))

(defn memo [cache f]
  (let [cache (atom cache)]
    (with-meta
      (fn [& params]
        (<|/go
          (when-let [res (or (c/lookup @cache params)
                             (<|/<! (apply f params)))]
            (swap! cache update-cache params res)
            res)))
      {::cache cache})))

(defn- make-memo-fn [memo-factory]
  (fn [f & opts]
    (memo (apply memo-factory {} opts) f)))

(def fresh (make-memo-fn c/lru-cache-factory))   ; Least-recently-used (LRUCache)
(def timed (make-memo-fn c/ttl-cache-factory))   ; Time-to-live (TTLCache)
(def cache (make-memo-fn c/basic-cache-factory)) ; Naive cache (BasicCache) only contains one value

(comment
  (def cached-f (fresh non-cached-f :threshold 128)))
  ;Memoizes non-cached-f backed by a LRU cache containing at most 128 items.)