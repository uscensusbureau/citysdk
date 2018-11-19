(ns census.merger.core
  (:require
    [cljs.core.async      :refer [>! <! chan promise-chan close! pipeline put!]
                          :refer-macros [go]
                          :as <|]
    [ajax.core            :refer [GET POST]]
    [net.cgrand.xforms    :as x]
    ;[census.geoAPI.core   :refer [IO-pp->census-GeoJSON]]
    ;[census.statsAPI.core :refer [IO-pp->census-stats -<IO-pp->census-stats>-]]
    [census.utils.core    :refer [URL-GEOKEYMAP $geoKeyMap$ xf<< educt<< throw-err err-type
                                  js->args I=O<<=IO= IO-cache-GET-edn map-over-keys]]))
    ;[test.fixtures.core   :refer [*g*]]))





;      e    e                             /
;     d8b  d8b      e88~~8e  888-~\ e88~88e  e88~~8e  888-~\
;    d888bdY88b    d888  88b 888    888 888 d888  88b 888
;   / Y88Y Y888b   8888__888 888    "88_88" 8888__888 888
;  /   YY   Y888b  Y888    , 888     /      Y888    , 888
; /          Y888b  "88___/  888    Cb       "88___/  888
;                                    Y8""8D
;
;


(defn group-by-keys
  "
  Implementation of `group-by` (produces a map) via @cgrand's `xforms`
  See 'Usage': https://github.com/cgrand/xforms#usage
  "
  [coll]
  (into {} (x/by-key keys (x/into [])) coll))


; Examples ================================================
(group-by-keys
  (concat
    [{"12040" {:type "Feature",
               :properties {:STATEFP "01",
                            :GEOID "01005",
                            :STATE "123",
                            :COUNTY "456"},
               :geometry {:type "Polygon",
                          :coordinates [[[-85.748032 31.619181]
                                         [-85.729832 31.632373]]]}}}
     {"12035" {:type "Feature",
               :properties {:STATEFP "01",
                            :GEOID "01005",
                            :STATE "789",
                            :COUNTY "1011"},
               :geometry {:type "Polygon",
                          :coordinates [[[-85.748032 31.619181]
                                         [-85.729832 31.632373]]]}}}]

    [{"12040" {:properties {:B01001_001E 494981,
                            :NAME "State Senate District 40 (2016), Florida",
                            :B00001_001E 29661,
                            :state "12",
                            :state-legislative-district-_upper-chamber_ "040"}}}
     {"12036" {:properties {:B01001_001E 492259,
                            :NAME "State Senate District 36 (2016), Florida",
                            :B00001_001E 29475,
                            :state "12",
                            :state-legislative-district-_upper-chamber_ "036"}}}
     {"12035" {:properties {:B01001_001E 493899,
                            :NAME "State Senate District 35 (2016), Florida",
                            :B00001_001E 25615,
                            :state "12",
                            :state-legislative-district-_upper-chamber_ "035"}}}]))

; =>
; {("12040") [{"12040" {:type "Feature",
;                      :properties {:STATEFP "01",
;                                   :GEOID "01005",
;                                   :STATE "123",
;                                   :COUNTY "456"},
;                      :geometry {:type "Polygon",
;                                 :coordinates [[[-85.748032 31.619181]
;                                                [-85.729832 31.632373]]]}}}
;            {"12040" {:properties {:B01001_001E 494981,
;                                   :NAME "State Senate District 40 (2016), Florida",
;                                   :B00001_001E 29661,
;                                   :state "12",
;                                   :state-legislative-district-_upper-chamber_ "040"}}}],
; ("12035") [{"12035" {:type "Feature",
;                      :properties {:STATEFP "01",
;                                   :GEOID "01005",
;                                   :STATE "789",
;                                   :COUNTY "1011"},
;                      :geometry {:type "Polygon",
;                                 :coordinates [[[-85.748032 31.619181]
;                                                [-85.729832 31.632373]]]}}}
;            {"12035" {:properties {:B01001_001E 493899,
;                                   :NAME "State Senate District 35 (2016), Florida",
;                                   :B00001_001E 25615,
;                                   :state "12",
;                                   :state-legislative-district-_upper-chamber_ "035"}}}],
; ("12036") [{"12036" {:properties {:B01001_001E 492259,
;                                   :NAME "State Senate District 36 (2016), Florida",
;                                   :B00001_001E 29475,
;                                   :state "12",
;                                   :state-legislative-district-_upper-chamber_ "036"}}}]}


; =========================================================


#_(defn deep-merge-with
    "
  From @cgrand: Recursively merges two maps together along matching key paths.
  "
    [a b]
    (if (map? a)
      (into a (x/for [[k v] b] [k (deep-merge-with (a k) v)]))
      b))

(defn deep-merge-with
  [& maps]
  (apply merge-with
         (fn [& args]
           (if (every? map? args)
             (apply deep-merge-with args)
             (last args)))
         maps))

; Examples ================================================
(x/for [[_ pairs]
        {'("12040") [{"12040" {:type "Feature",
                               :properties {:STATEFP "01",
                                            :GEOID "01005",
                                            :STATE "123",
                                            :COUNTY "456"},
                               :geometry {:type "Polygon",
                                          :coordinates [[[-85.748032 31.619181]
                                                         [-85.729832 31.632373]]]}}}
                     {"12040" {:properties {:B01001_001E 494981,
                                            :NAME "State Senate District 40 (2016), Florida",
                                            :B00001_001E 29661,
                                            :state "12",
                                            :state-legislative-district-_upper-chamber_ "040"}}}],
         '("12035") [{"12035" {:type "Feature",
                               :properties {:STATEFP "01",
                                            :GEOID "01005",
                                            :STATE "789",
                                            :COUNTY "1011"},
                               :geometry {:type "Polygon",
                                          :coordinates [[[-85.748032 31.619181]
                                                         [-85.729832 31.632373]]]}}}
                     {"12035" {:properties {:B01001_001E 493899,
                                            :NAME "State Senate District 35 (2016), Florida",
                                            :B00001_001E 25615,
                                            :state "12",
                                            :state-legislative-district-_upper-chamber_ "035"}}}],
         '("12036") [{"12036" {:properties {:B01001_001E 492259,
                                            :NAME "State Senate District 36 (2016), Florida",
                                            :B00001_001E 29475,
                                            :state "12",
                                            :state-legislative-district-_upper-chamber_ "036"}}}]}]
       (apply deep-merge-with pairs))


; =>
; ({"12040" {:type "Feature",
;           :properties {:STATEFP "01",
;                        :COUNTY "456",
;                        :STATE "123",
;                        :state "12",
;                        :GEOID "01005",
;                        :B01001_001E 494981,
;                        :state-legislative-district-_upper-chamber_ "040",
;                        :B00001_001E 29661,
;                        :NAME "State Senate District 40 (2016), Florida"},
;           :geometry {:type "Polygon",
;                      :coordinates [[[-85.748032 31.619181]
;                                     [-85.729832 31.632373]]]}}}
; {"12035" {:type "Feature",
;           :properties {:STATEFP "01",
;                        :COUNTY "1011",
;                        :STATE "789",
;                        :state "12",
;                        :GEOID "01005",
;                        :B01001_001E 493899,
;                        :state-legislative-district-_upper-chamber_ "035",
;                        :B00001_001E 25615,
;                        :NAME "State Senate District 35 (2016), Florida"},
;           :geometry {:type "Polygon",
;                      :coordinates [[[-85.748032 31.619181]
;                                     [-85.729832 31.632373]]]}}}
; {"12036" {:properties {:B01001_001E 492259,
;                        :NAME "State Senate District 36 (2016), Florida",
;                        :B00001_001E 29475,
;                        :state "12",
;                        :state-legislative-district-_upper-chamber_ "036"}}})
; =========================================================


(defn xf-remove-unmerged
  "
  Transducer, which takes 2->3 keys that serve to filter a merged list of two
  maps to return a function, which returns a list of only those maps which have
  a key from both maps. The presence of both keys within the map signifies that
  the maps have merged. This ensures the returned list contains only the overlap
  between the two, i.e., excluding non-merged maps.
  "
  ([[& filter-keys]]
   (xf<<
     (fn [rf acc this]
       (let [[[_ v]] (x/into [] this)]
         (if (not-any? nil? (eduction (map #(get-in v [:properties %]) filter-keys)))
           (rf acc v)
           (rf acc)))))))


#_(x/into [] {"12040" {:type "Feature",
                       :properties {:STATEFP "01",
                                    :COUNTY "456",
                                    :STATE "123",
                                    :state "12",
                                    :extra "key",
                                    :GEOID "01005",
                                    :B01001_001E 494981,
                                    :state-legislative-district-_upper-chamber_ "040",
                                    :B00001_001E 29661,
                                    :NAME "State Senate District 40 (2016), Florida"},
                       :geometry {:type "Polygon",
                                  :coordinates [[[-85.748032 31.619181]
                                                 [-85.729832 31.632373]]]}}})
; Examples ================================================

#_(eduction (xf-remove-unmerged [:COUNTY :B00001_001E :extra])
            [{"12040" {:type "Feature",
                       :properties {:STATEFP "01",
                                    :COUNTY "456",
                                    :STATE "123",
                                    :state "12",
                                    :extra "key",
                                    :GEOID "01005",
                                    :B01001_001E 494981,
                                    :state-legislative-district-_upper-chamber_ "040",
                                    :B00001_001E 29661,
                                    :NAME "State Senate District 40 (2016), Florida"},
                       :geometry {:type "Polygon",
                                  :coordinates [[[-85.748032 31.619181]
                                                 [-85.729832 31.632373]]]}}}
             {"12035" {:type "Feature",
                       :properties {:STATEFP "01",
                                    :COUNTY "1011",
                                    :STATE "789",
                                    :state "12",
                                    :GEOID "01005",
                                    :B01001_001E 493899,
                                    :state-legislative-district-_upper-chamber_ "035",
                                    :B00001_001E 25615,
                                    :NAME "State Senate District 35 (2016), Florida"},
                       :geometry {:type "Polygon",
                                  :coordinates [[[-85.748032 31.619181]
                                                 [-85.729832 31.632373]]]}}}
             {"12036" {:properties {:B01001_001E 492259,
                                    :NAME "State Senate District 36 (2016), Florida",
                                    :B00001_001E 29475,
                                    :state "12",
                                    :state-legislative-district-_upper-chamber_ "036"}}}])

; [{:type "Feature",
;  :properties {:STATEFP "01",
;               :COUNTY "456",
;               :STATE "123",
;               :state "12",
;               :GEOID "01005",
;               :B01001_001E 494981,
;               :state-legislative-district-_upper-chamber_ "040",
;               :B00001_001E 29661,
;               :NAME "State Senate District 40 (2016), Florida"},
;  :geometry {:type "Polygon",
;             :coordinates [[[-85.748032 31.619181] [-85.729832 31.632373]]]}}
; {:type "Feature",
;  :properties {:STATEFP "01",
;               :COUNTY "1011",
;               :STATE "789",
;               :state "12",
;               :GEOID "01005",
;               :B01001_001E 493899,
;               :state-legislative-district-_upper-chamber_ "035",
;               :B00001_001E 25615,
;               :NAME "State Senate District 35 (2016), Florida"},
;  :geometry {:type "Polygon",
;             :coordinates [[[-85.748032 31.619181] [-85.729832 31.632373]]]}}]

; "Inside xf<-merged->filter:" <- starts within `merge-geo+stats`
;  heapTotal: 193249280,
;  heapUsed: 162183976,
;  heapTotal: 193249280,
;  heapUsed: 162196776, = @ 13kb per pass

; =========================================================

;; from CGrand


#_(defn group-and-merge
    "
  From @cgrand
  "
    [coll1 coll2]
    (let [coll1-by-key (into {} (for [x coll1] [(keys x) x]))
          coll2-by-key (into {} (for [x coll2] [(keys x) x]))]
      (vals (deep-merge-with coll1-by-key coll2-by-key))))


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

(def xf-deep-merge-with
  (xf<<
    (fn [rf acc [_ {:as this}]]
      (rf acc (apply deep-merge-with this)))))

;(eduction (xf<< (fn [rf acc [_ {:as this}]] (rf acc (apply deep-merge-with this)))))


; Examples ================================================

#_(eduction  xf-deep-merge-with

             {'("12040") [{"12040" {:type "Feature",
                                    :properties {:STATEFP "01",
                                                 :GEOID "01005",
                                                 :STATE "123",
                                                 :COUNTY "456"},
                                    :geometry {:type "Polygon",
                                               :coordinates [[[-85.748032 31.619181]
                                                              [-85.729832 31.632373]]]}}}
                          {"12040" {:properties {:B01001_001E 494981,
                                                 :NAME "State Senate District 40 (2016), Florida",
                                                 :B00001_001E 29661,
                                                 :state "12",
                                                 :state-legislative-district-_upper-chamber_ "040"}}}],
              '("12035") [{"12035" {:type "Feature",
                                    :properties {:STATEFP "01",
                                                 :GEOID "01005",
                                                 :STATE "789",
                                                 :COUNTY "1011"},
                                    :geometry {:type "Polygon",
                                               :coordinates [[[-85.748032 31.619181]
                                                              [-85.729832 31.632373]]]}}}
                          {"12035" {:properties {:B01001_001E 493899,
                                                 :NAME "State Senate District 35 (2016), Florida",
                                                 :B00001_001E 25615,
                                                 :state "12",
                                                 :state-legislative-district-_upper-chamber_ "035"}}}],
              '("12036") [{"12036" {:properties {:B01001_001E 492259,
                                                 :NAME "State Senate District 36 (2016), Florida",
                                                 :B00001_001E 29475,
                                                 :state "12",
                                                 :state-legislative-district-_upper-chamber_ "036"}}}]})

; =>
; [{"12040" {:type "Feature",
;           :properties {:STATEFP "01",
;                        :COUNTY "456",
;                        :STATE "123",
;                        :state "12",
;                        :GEOID "01005",
;                        :B01001_001E 494981,
;                        :state-legislative-district-_upper-chamber_ "040",
;                        :B00001_001E 29661,
;                        :NAME "State Senate District 40 (2016), Florida"},
;           :geometry {:type "Polygon",
;                      :coordinates [[[-85.748032 31.619181]
;                                     [-85.729832 31.632373]]]}}}
; {"12035" {:type "Feature",
;           :properties {:STATEFP "01",
;                        :COUNTY "1011",
;                        :STATE "789",
;                        :state "12",
;                        :GEOID "01005",
;                        :B01001_001E 493899,
;                        :state-legislative-district-_upper-chamber_ "035",
;                        :B00001_001E 25615,
;                        :NAME "State Senate District 35 (2016), Florida"},
;           :geometry {:type "Polygon",
;                      :coordinates [[[-85.748032 31.619181]
;                                     [-85.729832 31.632373]]]}}}
; {"12036" {:properties {:B01001_001E 492259,
;                        :NAME "State Senate District 36 (2016), Florida",
;                        :B00001_001E 29475,
;                        :state "12",
;                        :state-legislative-district-_upper-chamber_ "036"}}}]
; =========================================================


(defn xf-merge-filter
  [[& filter-keys]]
  (comp xf-deep-merge-with
        (xf-remove-unmerged filter-keys)))


; Examples ================================================

;(eduction  (xf-merge-filter->FeatureCollection [:B00001_001E :GEOID :extra]))
         ;conj
(->> (concat [{"12040" {:type "Feature",
                        :properties {:STATEFP "01",
                                     :GEOID "01005",
                                     :STATE "123",
                                     :COUNTY "456"},
                        :geometry {:type "Polygon",
                                   :coordinates [[[-85.748032 31.619181]
                                                  [-85.729832 31.632373]]]}}}
              {"12035" {:type "Feature",
                        :properties {:STATEFP "01",
                                     :GEOID "01005",
                                     :STATE "789",
                                     :COUNTY "1011"},
                        :geometry {:type "Polygon",
                                   :coordinates [[[-85.748032 31.619181]
                                                  [-85.729832 31.632373]]]}}}]

             [{"12040" {:properties {:B01001_001E 494981,
                                     :NAME "State Senate District 40 (2016), Florida",
                                     :B00001_001E 29661,
                                     :state "12",
                                     :state-legislative-district-_upper-chamber_ "040"}}}
              {"12036" {:properties {:B01001_001E 492259,
                                     :NAME "State Senate District 36 (2016), Florida",
                                     :B00001_001E 29475,
                                     :state "12",
                                     :state-legislative-district-_upper-chamber_ "036"}}}
              {"12035" {:properties {:B01001_001E 493899,
                                     :NAME "State Senate District 35 (2016), Florida",
                                     :B00001_001E 25615,
                                     :state "12",
                                     :state-legislative-district-_upper-chamber_ "035"}}}])
     ; concat turns two collections into one
     group-by-keys
     ;(group-by-keys)
     ;; group-by-keys needs access to the whole collection
     (eduction (xf-merge-filter [:GEOID :NAME])))
     ;(eduction (xf<< (fn [rf acc [_ {:as this}]] (rf acc (apply deep-merge-with this))))))
     ;(eduction (xf-merge-filter->FeatureCollection [:GEOID :NAME])))

; [{:type "Feature",
;  :properties {:STATEFP "01",
;               :COUNTY "456",
;               :STATE "123",
;               :state "12",
;               :GEOID "01005",
;               :B01001_001E 494981,
;               :state-legislative-district-_upper-chamber_ "040",
;               :B00001_001E 29661,
;               :NAME "State Senate District 40 (2016), Florida"},
;  :geometry {:type "Polygon",
;             :coordinates [[[-85.748032 31.619181] [-85.729832 31.632373]]]}}
; {:type "Feature",
;  :properties {:STATEFP "01",
;               :COUNTY "1011",
;               :STATE "789",
;               :state "12",
;               :GEOID "01005",
;               :B01001_001E 493899,
;               :state-legislative-district-_upper-chamber_ "035",
;               :B00001_001E 25615,
;               :NAME "State Senate District 35 (2016), Florida"},
;  :geometry {:type "Polygon",
;             :coordinates [[[-85.748032 31.619181] [-85.729832 31.632373]]]}}]
; =========================================================

;
;(defn HO<-xf-merge-filter
;  "
;  Higher Order Function to be used in concert with `core.async/map`, which takes
;  three Clojure keywords and returns a function, which takes two
;  input maps and deep-merges them into one based on common keys,
;  and then filters them to return only those map-items that contain an
;  identifying key from each source map. Used to remove unmerged items.
;  "
;  [& filter-keys]
;  (fn [stats-coll geo-coll]
;    (prn "Inside merge-geo+stats:")
;    (js/console.log (js/process.memoryUsage))
;    ((xf-merge-filter s-key g-key) stats-coll geo-coll)))

;(x/into []))))

;(defn merge-geo+stats
;  "
;  Higher Order Function to be used in concert with `core.async/map`, which takes
;  three Clojure keywords and returns a function, which takes two
;  input maps and deep-merges them into one based on common keys,
;  and then filters them to return only those map-items that contain an
;  identifying key from each source map. Used to remove unmerged items.
;  "
;  [s-key  g-key]
;  (fn [stats-coll geo-coll]
;      (prn "Inside merge-geo+stats:")
;      (js/console.log (js/process.memoryUsage))
;      (->>
;        ;(group-by keys (concat stats-coll geo-coll))
;        (into {} (x/by-key keys (x/into [])) (concat stats-coll geo-coll))
;        ;(Transfer.)
;        ;(map' (fn [[_ [v1 v2]]] (comp (xf<-merged->filter s-key  g-key) (deep-merge-with v1 v2))))
;        (transduce (xf-merge-n-filter s-key  g-key) conj))))

; "Inside xf<-stats+geoids:"
;  heapTotal: 193249280,
;  heapUsed: 158103104,
;  external: 116745 }
;"Inside merge-geo+stats:"
;  heapTotal: 193249280, <- start
;  heapUsed: 158116600,

#_(defn merge-geo+stats
    "
  Higher Order Function to be used in concert with `core.async/map`, which takes
  three Clojure keywords and returns a function, which takes two
  input maps and deep-merges them into one based on common keys,
  and then filters them to return only those map-items that contain an
  identifying key from each source map. Used to remove unmerged items.
  "
    [s-key  g-key]
    (fn [stats-coll geo-coll]
      (->>
        (group-and-merge stats-coll geo-coll)
        ;(for [[_ pairs] (group-by keys (concat stats-coll geo-coll))]
        ;  (apply deep-merge-with pairs))
        (transduce (xf-remove-unmerged s-key g-key) conj))))



;; Examples =================================

#_(eduction    (HO<-xf-merge-filter :NAME :GEOID)
             ;conj
             (group-by-keys
               (concat
                 [{:12040 {:type "Feature",
                           :properties
                                 {:STATEFP "01",
                                  :GEOID "01005",
                                  :STATE "123",
                                  :COUNTY "456"},
                           :geometry
                                 {:type "Polygon",
                                  :coordinates [[[-85.748032 31.619181]
                                                 [-85.729832 31.632373]]]}}}
                  {:12035 {:type "Feature",
                           :properties
                                 {:STATEFP "01",
                                  :GEOID "01005",
                                  :STATE "789",
                                  :COUNTY "1011"},
                           :geometry
                                 {:type "Polygon",
                                  :coordinates [[[-85.748032 31.619181]
                                                 [-85.729832 31.632373]]]}}}]
                 [{:12040 {:properties
                           {:B01001_001E 494981,
                            :NAME "State Senate District 40 (2016), Florida",
                            :B00001_001E 29661,
                            :state "12",
                            :state-legislative-district-_upper-chamber_ "040"}}}
                  {:12036 {:properties
                           {:B01001_001E 492259,
                            :NAME "State Senate District 36 (2016), Florida",
                            :B00001_001E 29475,
                            :state "12",
                            :state-legislative-district-_upper-chamber_ "036"}}}
                  {:12035 {:properties
                           {:B01001_001E 493899,
                            :NAME "State Senate District 35 (2016), Florida",
                            :B00001_001E 25615,
                            :state "12",
                            :state-legislative-district-_upper-chamber_ "035"}}}])))
;==========================================


(defn IO-merge
  "
  Takes an arg map to configure a call the Census' statistics API as well as a
  matching GeoJSON file. The match is based on `vintage` and `geoHierarchy` of
  the arg map. The calls are spun up (simultaneously) into parallel `core.async`
  processes for speed. Both calls return their results via a `core.async`
  channel (`chan`) - for later census.merger - via `put!`. The results from the
  Census
  stats `chan` are passed into a local `chan` to store the state.  A
  `deep-merge` into the local `chan` combines the stats results with the GeoJSON
  values. Note that the GeoJSON results can be a superset of the Census stats'
  results. Thus, superfluous GeoJSON values are filtered out via a `remove`
  "
  [[& filter-keys]]
  (fn [[& inputs] =O=]
    (->> (apply concat inputs)
         (group-by-keys)
         (into [] (xf-merge-filter filter-keys))
         (assoc {:type "FeatureCollection"} :features))))
         ;(put! =O=))))
         ;(eduction (xf-merge-filter filter-keys))
         ;(#(go (>! =O= {:type "FeatureCollection"
         ;               :features %}))))))

;; FIXME

; C:\Users\Surface\Projects\clojure\cljs\census-geojson\.shadow-cljs\builds\node-repl\dev\out\cljs-runtime\cljs\core.cljs:312
;  (let [ty (type obj)
;  ^
;Error: No protocol method ITransientCollection.-conj! defined for type null:
;    at Object.cljs$core$missing_protocol [as missing_protocol] (C:\Users\Surface\Projects\clojure\cljs\census-geojson\.shadow-cljs\builds\node-repl\dev\out\cljs-runtime\cljs\core.cljs:312:3)
;    at Object.cljs$core$_conj_BANG_ [as _conj_BANG_] (C:\Users\Surface\Projects\clojure\cljs\census-geojson\.shadow-cljs\builds\node-repl\dev\out\cljs-runtime\cljs\core.cljs:786:1)
;    at Function.cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2 (C:\Users\Surface\Projects\clojure\cljs\census-geojson\.shadow-cljs\builds\node-repl\dev\out\cljs-runtime\cljs\core.cljs:3793:1)
;    at Function.G__14554__2 [as cljs$core$IFn$_invoke$arity$2] (C:\Users\Surface\Projects\clojure\cljs\census-geojson\.shadow-cljs\builds\node-repl\dev\out\cljs-runtime\net\cgrand\xforms.cljc:171:7)
;    at Function.G__11753__2
;The REPL worker has stopped.

; Example ========================================

(let [=O=        (chan 1)
      features
      '(
         {"01005" {:type "Feature", :geometry {:bbox [-87.95181699999999 33.253484 -86.953616 34.211647], :type "Polygon", :coordinates [[[-87.951785 33.91993] [-87.926196 33.919618] [-87.921454 33.919542] [-87.94939699999999 33.769908] [-87.95181699999999 33.858906999999995] [-87.951785 33.91993]]]}, :properties {:STATEFP "01", :LSAD "LU", :LSY "2016", :SLDUST "005", :AFFGEOID "610U500US01005", :GEOID "01005", :AWATER 145834431, :NAME "5", :ALAND 6840348927}}}
        {"01024" {:type "Feature", :geometry {:bbox [-88.473227 31.697951902948795 -87.45707800000001 33.415568], :type "Polygon", :coordinates [[[-88.473227 31.893856] [-88.468879 31.930262]  [-88.471214 31.851384999999997] [-88.472642 31.875152999999997] [-88.473227 31.893856]]]}, :properties {:STATEFP "01", :LSAD "LU", :LSY "2016", :SLDUST "024", :AFFGEOID "610U500US01024", :GEOID "01024", :AWATER 139823284, :NAME "24", :ALAND 9960246621}}}
        {"01007" {:type "Feature", :geometry {:bbox [-86.65103099999999 34.62715800000001 -86.407681 34.9917405111499], :type "Polygon", :coordinates [[[-86.65103099999999 34.77151500000001] [-86.64435999999999 34.771505999999995] [-86.632905 34.771415999999995] [-86.631608 34.7714] [-86.621123 34.771324] [-86.65103099999999 34.77151500000001]]]}, :properties {:STATEFP "01", :LSAD "LU", :LSY "2016", :SLDUST "007", :AFFGEOID "610U500US01007", :GEOID "01007", :AWATER 2763071, :NAME "7", :ALAND 508764837}}}
        {"01018" {:type "Feature", :geometry {:bbox [-87.06575199999999 33.246007 -86.69438799999999 33.572006], :type "Polygon", :coordinates [[[-87.06575199999999 33.26763] [-87.064842 33.268857] [-87.063431]]]}}})

      stats
      '(
         {"01001" {:properties {:B01001_001E 139179, :state "01", :state-legislative-district-_upper-chamber_ "001"}}}
         {"01005" {:properties {:B01001_001E 133243, :state "01", :state-legislative-district-_upper-chamber_ "005"}}}
         {"01006" {:properties {:B01001_001E 137291, :state "01", :state-legislative-district-_upper-chamber_ "006"}}}
         {"01007" {:properties {:B01001_001E 141053, :state "01", :state-legislative-district-_upper-chamber_ "007"}}}
         {"01008" {:properties {:B01001_001E 140026, :state "01", :state-legislative-district-_upper-chamber_ "008"}}}
         {"01009" {:properties {:B01001_001E 139951, :state "01", :state-legislative-district-_upper-chamber_ "009"}}}
         {"01024" {:properties {:B01001_001E 138832, :state "01", :state-legislative-district-_upper-chamber_ "024"}}}
         {"01025" {:properties {:B01001_001E 137584, :state "01", :state-legislative-district-_upper-chamber_ "025"}}}
         {"01026" {:properties {:B01001_001E 132574, :state "01", :state-legislative-district-_upper-chamber_ "026"}}}
         {"01034" {:properties {:B01001_001E 135926, :state "01", :state-legislative-district-_upper-chamber_ "034"}}}
         {"01035" {:properties {:B01001_001E 136856, :state "01", :state-legislative-district-_upper-chamber_ "035"}}})]
  (go (((IO-merge [:NAME :GEOID]) [features stats])))) ;=O=)
      ;(prn (<! =O=))
      ;(close! =O=)))
      ;(prn (<! =O=)))  ;FIXME -> Just putting the final take at the bottom of the operations fixed this... just move the `close`s below and see.

; =>
#_({:properties
      {:STATEFP "01", :LSAD "LU", :LSY "2016", :SLDUST "007", :AFFGEOID "610U500US01007", :state "01", :GEOID "01007", :AWATER 2763071, :B01001_001E 141053, :state-legislative-district-_upper-chamber_ "007", :NAME "7", :ALAND 508764837},
    :type     "Feature",
    :geometry {:bbox [-86.65103099999999 34.62715800000001 -86.407681 34.9917405111499],
               :type "Polygon",
               :coordinates [[[-86.65103099999999 34.77151500000001] [-86.64435999999999 34.771505999999995] [-86.632905 34.771415999999995] [-86.631608 34.7714] [-86.621123 34.771324] [-86.65103099999999 34.77151500000001]]]}
    {:properties
       {:STATEFP "01", :LSAD "LU", :LSY "2016", :SLDUST "024", :AFFGEOID "610U500US01024", :state "01", :GEOID "01024", :AWATER 139823284, :B01001_001E 138832, :state-legislative-district-_upper-chamber_ "024", :NAME "24", :ALAND 9960246621},
     :type "Feature",
     :geometry {:bbox [-88.473227 31.697951902948795 -87.45707800000001 33.415568],
                :type "Polygon",
                :coordinates [[[-88.473227 31.893856] [-88.468879 31.930262] [-88.471214 31.851384999999997] [-88.472642 31.875152999999997] [-88.473227 31.893856]]]}}
    {:properties
       {:STATEFP "01", :LSAD "LU", :LSY "2016", :SLDUST "005", :AFFGEOID "610U500US01005", :state "01", :GEOID "01005", :AWATER 145834431, :B01001_001E 133243, :state-legislative-district-_upper-chamber_ "005", :NAME "5", :ALAND 6840348927},
     :type "Feature",
     :geometry {:bbox [-87.95181699999999 33.253484 -86.953616 34.211647],
                :type "Polygon",
                :coordinates [[[-87.951785 33.91993] [-87.926196 33.919618] [-87.921454 33.919542] [-87.94939699999999 33.769908] [-87.95181699999999 33.858906999999995] [-87.951785 33.91993]]]}}})

;; =======================================

(comment
    (let [=GKM= (chan 1)]
      ((I=O<<=IO= (IO-cache-GET-edn $geoKeyMap$)) URL-GEOKEYMAP =GKM=)
      (go (let [args       (<! =I=)
                $g$        (<! =GKM=)
                ids        ((get-geoid?s $g$) args)
                ;vars#      (+ (count (get args :values))
                ;              (count (get args :predicates)))
                s-key      (keyword (first (get args :values)))
                g-key      (first ids)
                =args=     (promise-chan)
                =features= (chan 1 (xf-e?->features+geoids ids))
                =stats=    (chan 1 (xf-e?->stats+geoids vars#))]
                ; changed due to: https://github.com/clojure/core.async/blob/master/src/main/clojure/cljs/core/async.cljs#L700

                                                 ; Notes (1)
            (>! =args= args)
            (IO-pp->census-GeoJSON =args= =features=)      ; Notes (2)
            (if-let [features (<! =features=)]
              (go (let [merged ((HO<-xf-merge-filter (first filter-keys) (last filter-keys)); s-key g-key) ; core.async version of `map`
                                features
                                (<! =stats=))]
                    (prn "Inside IO-geo+stats:")
                    (js/console.log (js/process.memoryUsage))
                    (IO-pp->census-stats =args= =stats=)
                    ; Notes (2)
                    (>! =O= {:type "FeatureCollection"
                             :features merged})
                    (prn "Done with merger in IO-geo+stats:")
                    (js/console.log (js/process.memoryUsage))
                    (close! =features=)
                    (close! =stats=); Notes (3)
                    (close! =args=)                                ; Notes (4)
                    (prn "working on it....")))
              (go (close! =features=)
                  (close! =args=)
                  (close! =stats=)
                  (close! =GKM=)))))))


; "Inside IO-geo+stats:"
;  heapTotal: 184336384,
;  heapUsed: 154981752,
;"https://api.census.gov/data/2016/acs/acs5?get=B25001_001E&in=state:42%20county:003&for=tract:*&key=6980d91653a1f78acd456d9187ed28e23ea5d4e3"

; "Inside xf<-merged->filter:" <- starts within `merge-geo+stats`
;  heapTotal: 193249280,
;  heapUsed: 162183976,
;  heapTotal: 193249280,
;  heapUsed: 162196776, = @ 13kb per pass

; "Inside deep-merge-with:"
;  heapTotal: 200589312,
;  heapUsed: 170726320,
; "Inside deep-merge-with:"
;  heapTotal: 200589312,
;  heapUsed: 170735184,
; "Inside xf<-merged->filter:"
;  heapTotal: 200589312,
;  heapUsed: 170748752,
; ...
; "Inside xf<-merged->filter:"
;  heapTotal: 200589312,
;  heapUsed: 170867248,
; "Done with merger in IO-geo+stats:"
;  heapTotal: 200589312,
;  heapUsed: 170881656, == subtotal: @ 8.7mb
;            154981752 === TOTAL:    @16.1mb

;; Example =========================================

#_(let [args {:vintage       "2016"
              :geoHierarchy  {:state "01" :state-legislative-district-_upper-chamber_ "*"}
              :sourcePath    ["acs" "acs5"]
              :geoResolution "500k"
              :values        ["B01001_001E"]}]
    (go (let [=I= (chan 1)
              =O= (chan 1)]
          (>! =I= args)
          (IO-merge =I= =O=)
          (js/console.log
            (js/JSON.stringify
              (js-obj "type" "FeatureCollection"
                      "features" (clj->js (<! =O=)))))
          ;(pprint (<! =O=))
          (js/console.log "Done!")
          (close! =I=)
          (close! =O=))))

;; ==================================================


;   888b    |            d8
;   |Y88b   |  e88~-_  _d88__  e88~~8e   d88~\
;   | Y88b  | d888   i  888   d888  88b C888
;   |  Y88b | 8888   |  888   8888__888  Y88b
;   |   Y88b| Y888   '  888   Y888    ,   888D
;   |    Y888  `88_-~   '88_/  '88___/  \_88P

(comment
  {:1   "GD: how long it took to realize I didn't have to explicitly pipe the channels in here! `async/map` does that. Initially used `pipeline-async`"
   :2 "Initially, used `pipeline-async` here as well - MOAR pipline-async! - however, internally, the `IO-...` functions use `pipeline-async` and wrapping a pipeline inside another creates an infinite loop :("
   :3 "`async/map closes merged automatically when either input chan (=stats= or =features=) is closed"
   :4 "pipline-async (used internally by `IO-...` functions) closes the to (=O=) channels (=stats= & =features=) upon closing this"})

