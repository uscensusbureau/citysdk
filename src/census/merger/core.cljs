(ns census.merger.core
  (:require
    [cljs.core.async :as <|]
    [ajax.core :refer [GET POST]]
    [cljs.pprint :refer [pprint]]
    [clojure.repl :refer [source]]
    [census.test.core :as ts]
    [census.utils.core :as ut :refer [stats-key $geoKeyMap$]]
    [census.geoAPI.core :refer [IO-pp->census-GeoJSON]]
    [census.statsAPI.core :refer [IO-pp->census-stats]]
    [census.geojson.core :refer [geo+config->mkdirp->fsW!]]))

(comment
;; NOTE: If you need to increase memory of Node in Shadow... Eval in REPL:
  (shadow.cljs.devtools.api/node-repl {:node-args ["--max-old-space-size=8192"]})

  (lookup-id->match? :CONCITY [{:2017 {:lev<-file "concity",
                                       :scopes {:us nil, :st ["500k"]},
                                       :wms {:layers ["24"], :lookup [:STATE :CONCITY]},
                                       :id<-json [:GEOID]},
                                :2016 {:lev<-file "concity",
                                       :scopes {:us nil, :st ["500k"]},
                                       :wms {:layers ["24"], :lookup [:STATE :CONCITY]},
                                       :id<-json [:GEOID]}}
                               :consolidated-cities
                               {:2014 {:wms {:layers ["24"], :lookup [:BLOOP]},
                                       :id<-json [:GEOID]},
                                :2016 {:wms {:layers ["24"], :lookup [:BLOOP]},
                                       :id<-json [:GEOID]}}
                               :something-else])

  (seq (map-invert {:consolidated-cities
                    {
                     :2017 {:lev<-file "concity"  :scopes {:us nil                 :st ["500k"] } :wms {:layers ["24"] :lookup [:STATE :CONCITY]} :id<-json [:GEOID]}  ; "2148003"
                     :2016 {:lev<-file "concity"  :scopes {:us nil                 :st ["500k"] } :wms {:layers ["24"] :lookup [:STATE :CONCITY]} :id<-json [:GEOID]}  ; "2148003"
                     :2015 {:lev<-file "concity"  :scopes {:us nil                 :st ["500k"] } :wms {:layers ["24"] :lookup [:STATE :CONCITY]} :id<-json [:GEOID]}  ; "2148003"
                     :2014 {:lev<-file "concity"  :scopes {:us nil                 :st ["500k"] } :wms {:layers ["24"] :lookup [:STATE :CONCITY]} :id<-json [:GEOID]}  ; "2148003"
                     :2013 {:lev<-file "concity"  :scopes {:us nil                 :st ["500k"] } :wms {:layers ["24"] :lookup [:STATE :CONCITY]} :id<-json [:GEOID]}  ; "2148003"
                     :2010 {:lev<-file "170"      :scopes {:us nil                 :st ["500k"] } :wms {:layers ["32"] :lookup [:STATE :CONCITY]} :id<-json [:STATE :CONCIT]} ; "47", "52004"
                     :2000 {:lev<-file "cc"       :scopes {:us [           "500k"] :st nil      } :wms {:layers ["22"] :lookup [:STATE :CONCITY]} :id<-json [:STATE :CONCITFP]}}}))) ; "30", "11390")


(defn xf<-stats+geoids
  "
  Higher-order transducer (to enable transduction of a list conveyed via `chan`).
  Takes an integer argument denoting the number of stat vars the user requested.
  The transducer is used to transform each item from the Census API response
  collection into a new map with a hierarchy that will enable deep-merging of
  the stats with a GeoJSON `feature`s `:properties` map.
  "
  [vars#]
  (ut/xf<< (fn [rf result input]
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
  [geoK {:keys [geoHierarchy vintage]}]
  (let [[& ids] (get-in geoK [(key (last geoHierarchy)) (keyword vintage) :id<-json])]
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
  (ut/xf<<
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

(defn deep-merge-with
  "
  Recursively merges two maps together along matching key paths. Implements
  `clojure/core.merge-with`.

  [stolen](https://gist.github.com/danielpcox/c70a8aa2c36766200a95#gistcomment-2711849)
  "
  [& maps]
  (apply merge-with
         (fn [& args]
           (if (every? map? args)
             (apply deep-merge-with args)
             (last args)))
         maps))


(defn xf<-merged->filter
  "
  Transducer, which takes 2->3 keys that serve to filter a merged list of two
  maps to return a function, which returns a list of only those maps which have
  a key from both maps. The presence of both keys within the map signifies that
  the maps have merged. This ensures the returned list contains only the overlap
  between the two, i.e., excluding non-merged maps.
  "
  [s-key1 s-key2 g-key]
  (ut/xf<<
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
  three Clojure keywords and returns a function, which takes two
  input maps and deep-merges them into one based on common keys,
  and then filters them to return only those map-items that contain an
  identifying key from each source map. Used to remove unmerged items.
  "
  [s-key1 s-key2 g-key]
  (fn [stats-coll geo-coll]
    (->>
      (for [[_ pairs] (group-by keys (concat stats-coll geo-coll))]
        (apply deep-merge-with pairs))
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
    (map ut/throw-err)
    (map #(get % :features))
    (ut/xfxf<< (xf<-features+geoids ids) conj)))

(defn xfxf-e?->stats+geoids
  [vars#]
  (comp
    (map ut/throw-err)
    (ut/xfxf<< (xf<-stats+geoids vars#) conj)))





(defn IO-geo+stats
  "
  Takes an arg map to configure a call the Census' statistics API as well as a
  matching GeoJSON file. The match is based on `vintage` and `geoHierarchy` of
  the arg map. The calls are spun up (simultaneously) into parallel `core.async`
  processes for speed. Both calls return their results via a `core.async`
  channel (`chan`) - for later census.merger - via `put!`. The results from the Census
  stats `chan` are passed into a local `chan` to store the state.  A
  `deep-merge` into the local `chan` combines the stats results with the GeoJSON
  values. Note that the GeoJSON results can be a superset of the Census stats'
  results. Thus, superfluous GeoJSON values are filtered out via a `remove`
  operation on the collection in the local `chan`.
  "
  [=I= =O=]
  (let [=geo= (<|/chan 1)]
    ((ut/I=O<<=IO= (ut/IO-cache-GET-edn $geoKeyMap$)) ut/base-url-geoKeyMap =geo=)
    (<|/go (let [I          (<|/<! =I=)
                 geoK       (<|/<! =geo=)
                 args       (ut/js->args I)
                 ids        (get-geoid?s geoK args)
                 vars#      (+ (count (get args :values))
                               (count (get args :predicates)))
                 s-key1     (keyword (first (get args :values)))
                 s-key2     (first (keys (get args :predicates)))
                 g-key      (first ids)
                 =args=     (<|/promise-chan)
                 =stats=    (<|/chan 1 (xfxf-e?->stats+geoids vars#))
                 =features= (<|/chan 1 (xfxf-e?->features+geoids ids))
                 =merged=   (<|/map  (merge-geo+stats s-key1 s-key2 g-key)
                                     [=stats= =features=]
                                     1)]                     ; Notes (1)
             ;(prn args)
             (<|/>! =args= args)
             (IO-pp->census-stats =args= =stats=)           ; Notes (2)
             (IO-pp->census-GeoJSON =args= =features=)      ; Notes (2)
             (<|/>! =O= {:type "FeatureCollection"
                         :features (<|/<! =merged=)})                   ; Notes (3)
             (<|/close! =args=)                             ; Notes (4)
             (prn "working on it....")))))

;; Example =========================================

#_(let [args ts/test-args-6]
    (<|/go (let [=I= (<|/chan 1)
                 =O= (<|/chan 1)]
             (<|/>! =I= args)
             (IO-geo+stats =I= =O=)
             (js/console.log
               (js/JSON.stringify
                 (js-obj "type" "FeatureCollection"
                         "features" (clj->js (<|/<! =O=)))))
             ;(pprint (<! =O=))
             (js/console.log "Done!")
             (<|/close! =I=)
             (<|/close! =O=))))

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
   :3 "`async/map closes =merged= automatically when either input chan (=stats= or =features=) is closed"
   :4 "pipline-async (used internally by `IO-...` functions) closes the to (=O=) channels (=stats= & =features=) upon closing this"})

