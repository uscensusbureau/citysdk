(ns census.merger.core
  (:require
    [cljs.core.async       :refer [>! <! chan promise-chan close! pipeline put!
                                   to-chan take!]
                           :refer-macros [go alt! go-loop]]
    [cuerdas.core          :refer-macros [istr]
                           :as s]
    [net.cgrand.xforms     :as x]
    [census.utils.core     :refer [URL-GEOKEYMAP xf<< educt<<
                                   throw-err err-type ->args map-over-keys
                                   amap-type $GET$]]))

(comment
  ;; NOTE: If you need to increase memory of Node in Shadow... Eval in REPL:
  (shadow.cljs.devtools.api/node-repl {:node-args ["--max-old-space-size=4096"]}))
  ;; or in Node: node --max-old-space-size=4096

;(defn deep-merge-with-seq
;  [& maps]
;  (apply merge-with
;         (fn [& args]
;           (if (every? map? args)
;             (apply deep-merge-with-seq args)
;             (last args)))
;         maps))

; Examples ================================================

;(def xf-deep-merge-seq (x/for [[_ maps] %] (apply deep-merge-with-seq maps)))
;
;(defn xf-remove-unmerged
;  "
;  Transducer, which takes 2->3 keys that serve to filter a merged list of two
;  maps to return a function, which returns a list of only those maps which have
;  a key from both maps. The presence of both keys within the map signifies that
;  the maps have merged. This ensures the returned list contains only the overlap
;  between the two, i.e., excluding non-merged maps.
;  "
;  [IDS]
;  (xf<<
;    (fn [rf acc this]
;      (let [[[_ v]] (x/into [] this)]
;        (if (not-any? nil? (map #(get-in v [:properties %]) IDS))
;          (rf acc v)
;          (rf acc))))))


;; From MFikes
;
;(deftype Transfer [^:mutable v]
;  IDeref
;  (-deref [o]
;    (let [r v]
;      (set! v nil)
;      r)))
;
;(defn map'
;  [f transfer]
;  (lazy-seq
;    (when-let [s (seq @transfer)]
;      (cons (f (first s))
;            (map' f (Transfer.
;                      (rest s)))))))



;      e    e                             /
;     d8b  d8b      e88~~8e  888-~\ e88~88e  e88~~8e  888-~\
;    d888bdY88b    d888  88b 888    888 888 d888  88b 888
;   / Y88Y Y888b   8888__888 888    "88_88" 8888__888 888
;  /   YY   Y888b  Y888    , 888     /      Y888    , 888
; /          Y888b  "88___/  888    Cb       "88___/  888
;                                    Y8""8D


;
;(defn group-by-keys
;  "
;  Implementation of `group-by` (produces a map) via @cgrand's `xforms`
;  See 'Usage': https://github.com/cgrand/xforms#usage
;  "
;  [coll]
;  (into {} (x/by-key keys (x/into [])) coll))
;
;
;(defn xf-merge->filter
;  [IDS]
;  (comp xf-deep-merge-seq
;        (xf-remove-unmerged IDS)))
        ;(map clj->js)
        ;(map js/JSON.stringify)))


;  888~~  888 Y88b    /      e    e      888~~
;  888___ 888  Y88b  /      d8b  d8b     888___
;  888    888   Y88b/      d888bdY88b    888
;  888    888   /Y88b     / Y88Y Y888b   888
;  888    888  /  Y88b   /   YY   Y888b  888
;  888    888 /    Y88b /          Y888b 888___


;; from @CGrand


;(defn deep-merge-with-c
;  "
;  From @cgrand: Recursively merges two maps together along matching key paths.
;  "
;  [a b]
;  (if (map? a)
;    (into a (x/for [[k v] b] [k (deep-merge-with-2 (a k) v)]))
;    b))

(defn deep-merge-a-coll
  [maps]
  (apply merge-with
         (fn [& args]
           (if (every? map? args)
             (deep-merge-a-coll args)
             (last args)))
         maps))

;(defn group-and-merge
;  "
;  From @cgrand
;  "
;  [coll1 coll2]
;  (let [coll1-by-key (into {} (for [x coll1] [(keys x) x]))
;        coll2-by-key (into {} (for [x coll2] [(keys x) x]))]
;    (vals (deep-merge-with coll1-by-key coll2-by-key))))


(defn remove-unmerged
  "
  Transducer, which takes 2->3 keys that serve to filter a merged list of two
  maps to return a function, which returns a list of only those maps which have
  a key from both maps. The presence of both keys within the map signifies that
  the maps have merged. This ensures the returned list contains only the overlap
  between the two, i.e., excluding non-merged maps.
  "
  [IDS]
  (fn [m]
    (let [[[_ v]] (x/into [] m)]
      (if (not-any? nil? (map (get v :properties) IDS))
        v))))


(defn xf<-Grands->JS
  [IDS]
  (comp (x/into [])
        (map deep-merge-a-coll)
        (map (remove-unmerged IDS))
        (map clj->js)))


(defn xf-Grands-M->JSON
  "
  Implementation of `group-by` (produces a map) via @cgrand's `xforms`
  See 'Usage': https://github.com/cgrand/xforms#usage
  "
  [IDS]
  (comp (x/by-key keys (xf<-Grands->JS IDS))
        (remove   (fn [[_ v]] (nil? v)))
        (map      #(get % 1))
        (map      js/JSON.stringify)))

(defn I=OE-M-spooler
  [$g$ =arg= cfgs]
  (fn [=O= =E=]
    (let [=args= (promise-chan)]
      (go (>! =args= (<! =arg=))
          (let [=cfg= (chan 1)
                $ids$ (atom [])]
            (loop [todo cfgs
                   [cfg ?=$g$] (first cfgs)
                   acc (transient [])]
              (if (nil? (first todo))
                (do (prn "Working on it ...")
                    (>! =O=
                        (as-> (persistent! acc) coll
                              (reduce concat coll)
                              (eduction (xf-Grands-M->JSON @$ids$) coll)
                              (s/join "," coll)
                              (istr "{\"type\":\"FeatureCollection\",\"features\":[~{coll}]}")))
                    (close! =cfg=)
                    (close! =args=))
                (do (if ?=$g$
                        ((cfg $g$) =args= =cfg=)
                        (cfg =args= =cfg=))
                    (let [{:keys [getter url xform filter-id]} (<! =cfg=)]
                      (if getter
                        (let [=xform= (chan 1 xform)
                              =err=   (chan 1 (map throw-err))]
                          (swap! $ids$ conj filter-id)
                          (getter (to-chan [url]) =xform= =err=)
                          (alt! =xform= ([data] (do (close! =xform=)
                                                    (close! =err=)
                                                    (recur (rest todo)
                                                           (second todo)
                                                           (conj! acc data))))
                                =err=    ([err] (do (close! =xform=)
                                                    (close! =err=)
                                                    (>! =E= err))))))
                      (do (>! =E= cfg)
                          (close! =cfg=)
                          (close! =O=)
                          (close! =args=) ; Close up shop...
                          (close! =E=)))))))))))



