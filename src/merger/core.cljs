(ns merger.core
  (:require [cljs.core.async
             :refer [chan put! take! >! <! pipe timeout close! alts! pipeline pipeline-async promise-chan]
             :as async
             :refer-macros [go go-loop alt!]]
            [ajax.core :refer [GET POST]]
            [cljs.pprint :refer [pprint]]
            [clojure.repl :refer [source]]
            [geoAPI.core :refer [IO-census-GeoJSON]]
            [geojson.index :refer [geoKeyMap]]
            [statsAPI.core
             :refer [IO-census-stats
                     stats-key]]
            [utils.core
             :refer [throw-err
                     strs->keys
                     keys->strs
                     map-idcs-range
                     json-args->clj-keys
                     =IO=>I=O=
                     IO-ajax-GET-json
                     xfxf<<
                     xf!<<
                     xf<<]]))

;; If you want to pass an argument into your transducer, wrap it in another function, which takes the arg and returns a transducer containing it.
(defn xf<-stats+geoids
  "
  Higher-order transducer (to enable transduction of a list conveyed via `chan`).
  Takes an integer argument denoting the number of stat vars the user requested.
  The transducer is used to transform each item from the Census API response
  collection into a new map with a hierarchy that will enable deep-merging of
  the stats with a GeoJSON `feature`s `:properties` map.
  "
  [vars#]
  (xf<< (fn [rf result input]
          (rf result {(keyword (reduce str (vals (take-last (- (count input) vars#) input))))
                      {:properties input}}))))

;; Examples ==============================

#_(transduce (xf<-stats+geoids 3) conj [{:B01001_001E                                494981,
                                         :NAME                                       "State Senate District 40 (2016), Florida",
                                         :B00001_001E                                29661,
                                         :state                                      "12",
                                         :state-legislative-district-_upper-chamber_ "040"}
                                        {:B01001_001E                                492259,
                                         :NAME                                       "State Senate District 36 (2016), Florida",
                                         :B00001_001E                                29475,
                                         :state                                      "12",
                                         :state-legislative-district-_upper-chamber_ "036"}
                                        {:B01001_001E                                493899,
                                         :NAME                                       "State Senate District 35 (2016), Florida",
                                         :B00001_001E                                25615,
                                         :state                                      "12",
                                         :state-legislative-district-_upper-chamber_ "035"}])
;; =======================================

(defn get-geoid?s
  "
  Takes the request argument and pulls out a vector of the component identifiers
  from the geoKeyMap, which is used to construct the UID for the GeoJSON. Used
  in deep-merging with statistics.
  "
  [{:keys [geoHierarchy vintage]}]
  (let [[& ids] (get-in geoKeyMap [(key (last geoHierarchy)) (keyword vintage) :id<-json])]
    ids))

(defn geoid<-feature
  "
  Takes the component ids from with the GeoJSON and a single feature to
  generate a :GEOID if not available within the GeoJSON.
  "
  [ids m]
  (keyword (reduce str (map #(get-in m [:properties %]) ids))))


;; Examples ==============================

#_(-> (get-geoid?s {:vintage      "2010"
                    :sourcePath   ["acs" "acs5"]
                    ;:geoHierarchy {:state "12" :state-legislative-district-_upper-chamber_ "*"}
                    :geoHierarchy {:county "*"} ;; @ 30 seconds
                    ;:geoHierarchy {:zip-code-tabulation-area "*"} ; # 1 min - 3 min for completion
                    :geoResolution "500k"
                    :values       ["B01001_001E" "NAME"]
                    :predicates   {:B00001_001E "0:30000"} ;; add `:predicates` and count them for `vars#`
                    :statsKey     stats-key})
      (geoid<-feature {:type "Feature",
                       :properties
                             {:STATEFP  "01",
                              :GEOID    "01005",
                              :STATE "123"
                              :COUNTY "456"}
                       :geometry
                             {:type "Polygon",
                              :coordinates
                                    [[[-85.748032 31.619181]
                                      [-85.729832 31.632373]]]}}))

; => :123456
;; =======================================

(defn xf<-features+geoids
  "
  A function, which returns a transducer after being passed a. The transducer is used to
  transform each item withing a GeoJSON FeatureCollection into a new map with a
  hierarchy that will enable deep-merging of the stats with a stat map.
  "
  [ids]
  (xf<<
    (fn [rf result input]
      (rf result {(geoid<-feature ids input) input})))) ;


;; Examples ==============================

#_(transduce (xf<-features+geoids
               (get-geoid?s {:vintage      "2010"
                             :sourcePath   ["acs" "acs5"]
                             ;:geoHierarchy {:state "12" :state-legislative-district-_upper-chamber_ "*"}
                             :geoHierarchy {:county "*"} ;; @ 30 seconds
                             ;:geoHierarchy {:zip-code-tabulation-area "*"} ; # 1 min - 3 min for completion
                             :geoResolution "500k"
                             :values       ["B01001_001E" "NAME"]
                             :predicates   {:B00001_001E "0:30000"} ;; add `:predicates` and count them for `vars#`
                             :statsKey     stats-key}))
             conj
             [{:type "Feature",
               :properties
                     {:STATEFP  "01",
                      :GEOID    "01005",
                      :STATE "123"
                      :COUNTY "456"}
               :geometry
                     {:type "Polygon",
                      :coordinates
                            [[[-85.748032 31.619181]
                              [-85.729832 31.632373]]]}}
              {:type "Feature",
               :properties
                     {:STATEFP  "01",
                      :GEOID    "01005",
                      :STATE "789"
                      :COUNTY "1011"}
               :geometry
                     {:type "Polygon",
                      :coordinates
                            [[[-85.748032 31.619181]
                              [-85.729832 31.632373]]]}}])
;==========================================

;; Deep Merge function [stolen](https://gist.github.com/danielpcox/c70a8aa2c36766200a95)
(defn deep-merge
  "
  Recursively merges two maps together along matching key paths. Implements
  `clojure/core.merge-with`.
  "
  [v & vs]
  (letfn [(rec-merge [v1 v2]
            (if (and (map? v1) (map? v2))
              (merge-with deep-merge v1 v2)
              v2))]
    (if (some identity vs)
      (reduce #(rec-merge %1 %2) v vs)
      v)))

;; map destructuring courtesy [Arthur Ulfeldt](https://stackoverflow.com/a/12505774)

(defn xf<-merged->filter
  "
  Transducer, which takes 2->3 keys that serve to filter a merged list of two
  maps to return a function, which returns a list of only those maps which have
  a key from both maps. The presence of both keys within the map signifies that
  the maps have merged. This ensures the returned list contains only the overlap
  between the two, i.e., excluding non-merged maps.
  "
  [s-key1 s-key2 g-key]
  (xf<<
    (fn [rf result item]
     (let [[_ v] (first item)]
       (if (or (and (nil? (get-in v [:properties s-key1]))
                    (nil? (get-in v [:properties s-key2])))
               (nil? (get-in v [:properties g-key])))
         (rf result)
         (rf result v))))))

; ===============================
; TODO: combine merge-xfilter clj->js and js/JSON.stringify into a single transducer (comp)
; ===============================

(defn merge-geo+stats
  "
  Higher Order Function to be used in concert with `core.async/map`, which takes
  two variables (two Clojure keywords) and returns a function, which takes two
  input maps and deep-merges them into one based on common key paths,
  and then filters them to return only those map-items that contain an
  identifying key from each source map. Used to remove unmerged items.
  "
  [s-key1 s-key2 g-key]
  (fn [stats-coll geo-coll]
    (->>
      (for [[_ pairs] (group-by keys (concat stats-coll geo-coll))]
        (apply deep-merge pairs))
      (transduce (xf<-merged->filter s-key1 s-key2 g-key) conj))))
      ;(clj->js)
      ;(js/JSON.stringify))))



;; Examples =================================

#_((merge-geo+stats :NAME nil :GEOID)
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
                    :state-legislative-district-_upper-chamber_ "035"}}}])
;==========================================


(defn xfxf-e?->features+geoids
  [ids]
  (comp
    (map throw-err)
    (map #(get % :features))
    (xfxf<< (xf<-features+geoids ids) conj)))

(defn xfxf-e?->stats+geoids
  [vars#]
  (comp
    (map throw-err)
    (xfxf<< (xf<-stats+geoids vars#) conj)))


(defn IO-geo+stats
  "
  Takes an arg map to configure a call the Census' statistics API as well as a
  matching GeoJSON file. The match is based on `vintage` and `geoHierarchy` of
  the arg map. The calls are spun up (simultaneously) into parallel `core.async`
  processes for speed. Both calls return their results via a `core.async`
  channel (`chan`) - for later merger - via `put!`. The results from the Census
  stats `chan` are passed into a local `chan` to store the state.  A
  `deep-merge` into the local `chan` combines the stats results with the GeoJSON
  values. Note that the GeoJSON results can be a superset of the Census stats'
  results. Thus, superfluous GeoJSON values are filtered out via a `remove`
  operation on the collection in the local `chan`.
  "
  [=I= =O=]
  (go (let [args       (<! =I=)
            ids        (get-geoid?s args)
            vars#      (+ (count (get args :values)) (count (get args :predicates)))
            =args=     (promise-chan)
            =stats=    (chan 1 (xfxf-e?->stats+geoids vars#))
            =features= (chan 1 (xfxf-e?->features+geoids ids))
            s-key1     (keyword (first (get args :values)))
            s-key2     (keyword (first (get args :predicates)))
            g-key      (first ids)
            =merged=   (async/map (merge-geo+stats s-key1 s-key2 g-key) [=stats= =features=])] ; GD: how long it took to realize I didn't have to explicitly pipe the channels in here!
        (>! =args= args)
        (prn s-key1)
        (prn s-key2)
        (prn g-key)
        (pipeline-async 1 =stats=    (=IO=>I=O= IO-census-stats)   =args=)
        (pipeline-async 1 =features= (=IO=>I=O= IO-census-GeoJSON) =args=)
        (>! =O= (<! =merged=))
        (close! =args=)
        (close! =stats=)
        (close! =features=)
        (close! =merged=)
        (js/console.log "done!"))))

;; Example =========================================

#_(go (let [=I= (chan 1)
            =O= (chan 1)]
        (>! =I= {:vintage       "2016"
                 :sourcePath    ["acs" "acs5"]
                 :geoHierarchy  {:state "12" :state-legislative-district-_upper-chamber_ "*"}
                 ;:geoHierarchy {:county "*"} ;; @ 30 seconds
                 ;:geoHierarchy {:zip-code-tabulation-area "*"} ; # 1 min - 3 min for completion
                 :geoResolution "500k"
                 :values        ["B01001_001E" "NAME"]
                 :predicates    {:B00001_001E "0:30000"} ;; add `:predicates` and count them for `vars#`
                 :statsKey      stats-key})
        (IO-geo+stats =I= =O=)
        (pprint (<! =O=))
        (close! =I=)
        (close! =O=)))

;===================================================

;    ~~~888~~~   ,88~-_   888~-_     ,88~-_
;       888     d888   \  888   \   d888   \
;       888    88888    | 888    | 88888    |
;       888    88888    | 888    | 88888    |
;       888     Y888   /  888   /   Y888   /
;       888      `88_-~   888_-~     `88_-~

;; TODO: add (clj->js {:type "FeatureCollection" :features features}) as a transducer?

;; Examples ==============================

#_(let [=I= (chan 1)
        =O= (chan 1)]
    (go (>! =I= {:vintage      "2016"
                 :sourcePath   ["acs" "acs5"]
                 :geoHierarchy {:state "12" :state-legislative-district-_upper-chamber_ "*"}
                 :values       ["B01001_001E" "NAME"]
                 :predicates   {:B00001_001E "0:30000"}
                 :statsKey     stats-key})
        (IO-census-stats =I= =O=)
        ;; TODO handle bad requests...
        ;(if (= (type (<! =O=)) cljs.core/List) ;
        ;  (pprint "GOOD TO GO")
        ;  (pprint "brrrr.... "))
        (pprint (<! =O=))
        (close! =I=)
        (close! =O=)))

#_(type (quote ({:B01001_001E 494981,
                 :NAME "State Senate District 40 (2016), Florida",
                 :B00001_001E 29661,
                 :state "12",
                 :state-legislative-district-_upper-chamber_ "040"
                 {:B01001_001E 492259,
                  :NAME "State Senate District 36 (2016), Florida",
                  :B00001_001E 29475,
                  :state "12",
                  :state-legislative-district-_upper-chamber_ "036"}})))

;; =======================================