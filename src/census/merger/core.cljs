(ns census.merger.core
  (:require
    [cljs.core.async      :refer [>! <! chan promise-chan close!]
                          :refer-macros [go]]
    [ajax.core            :refer [GET POST]]
    [net.cgrand.xforms    :as x]
    [census.geoAPI.core   :refer [IO-pp->census-GeoJSON]]
    [census.statsAPI.core :refer [IO-pp->census-stats]]
    [census.utils.core    :refer [URL-GEOKEYMAP $geoKeyMap$ xf<< educt<< throw-err err-type
                                  js->args I=O<<=IO= IO-cache-GET-edn map-over-keys]]
    [test.fixtures.core   :refer [*g*]]))

(comment
;; NOTE: If you need to increase memory of Node in Shadow... Eval in REPL:
  (shadow.cljs.devtools.api/node-repl {:node-args ["--max-old-space-size=8192"]})
;; or in Node: node --max-old-space-size=4096

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


; ,d88~~\   d8               d8
; 8888    _d88__   /~~~8e  _d88__  d88~\
; `Y88b    888         88b  888   C888
;  `Y88b,  888    e88~-888  888    Y88b
;    8888  888   C888  888  888     888D
; \__88P'  "88_/  "88_-888  "88_/ \_88P
;
;


(defn geoid<-stat
  "
  Takes an integer argument denoting the number of stat vars the user requested.
  Returns a function of one item (from the Census API response
  collection) to a new map with a hierarchy that will enable deep-merging of
  the stats with a GeoJSON `feature`s `:properties` map.
  "
  [vars#]
  (fn [input]
    {(apply str (vals (take-last (- (count input) vars#) input))) {:properties input}}))

;; Examples ==============================

(eduction  (map (geoid<-stat 3))
           ;conj
           [{:B01001_001E                                494981,
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

; =>
; [{"12040" {:properties {:B01001_001E 494981,
;                        :NAME "State Senate District 40 (2016), Florida",
;                        :B00001_001E 29661,
;                        :state "12",
;                        :state-legislative-district-_upper-chamber_ "040"}}}
; {"12036" {:properties {:B01001_001E 492259,
;                        :NAME "State Senate District 36 (2016), Florida",
;                        :B00001_001E 29475,
;                        :state "12",
;                        :state-legislative-district-_upper-chamber_ "036"}}}
; {"12035" {:properties {:B01001_001E 493899,
;                        :NAME "State Senate District 35 (2016), Florida",
;                        :B00001_001E 25615,
;                        :state "12",
;                        :state-legislative-district-_upper-chamber_ "035"}}}]
;; =======================================



;  e88~~\
; d888      e88~~8e   e88~-_   d88~\
; 8888 __  d888  88b d888   i C888
; 8888   | 8888__888 8888   |  Y88b
; Y888   | Y888    , Y888   '   888D
;  "88__/   "88___/   "88_-~  \_88P
;

(defn get-geoid?s
  "
  Takes the request argument and pulls out a vector of the component identifiers
  from the geoKeyMap, which is used to construct the UID for the GeoJSON. Used
  in deep-merging with statistics.
  "
  [$g$]
  (fn [{:keys [geoHierarchy vintage]}]
    (let [[& ids] (get-in $g$ [(key (last geoHierarchy)) (keyword vintage) :id<-json])]
      ids)))

;; Examples ==============================

((get-geoid?s *g*) {:vintage      "2010"
                    :sourcePath   ["acs" "acs5"]
                    ;:geoHierarchy {:state "12" :state-legislative-district-_upper-chamber_ "*"}
                    :geoHierarchy {:county "*"} ;; @ 30 seconds
                    ;:geoHierarchy {:zip-code-tabulation-area "*"} ; # 1 min - 3 min for completion
                    :geoResolution "500k"
                    :values       ["B01001_001E" "NAME"]
                    :predicates   {:B00001_001E "0:30000"}})

; =>
; (:STATE :COUNTY)
;; =======================================

(defn geoid<-feature
  "
  Takes the component ids from with the GeoJSON and a single feature to
  generate a :GEOID if not available within the GeoJSON.
  "
  [ids]
  (fn [input]
    {(apply str (map (:properties input) ids)) input})) ;  from @cgrand
    ;{(reduce str (map #(get-in m [:properties %]) ids)) m}) ;  uses @ 1kb per

;; Examples ==============================

((geoid<-feature '(:STATE :COUNTY))
 {:type "Feature",
  :properties
        {:STATEFP  "01",
         :GEOID    "01005",
         :STATE "123"
         :COUNTY "456"}
  :geometry
        {:type "Polygon",
         :coordinates
               [[[-85.748032 31.619181]
                 [-85.729832 31.632373]]]}})

; => {"123456" {:type "Feature",
;           :properties {:STATEFP "01",
;                        :GEOID "01005",
;                        :STATE "123",
;                        :COUNTY "456"},
;           :geometry {:type "Polygon",
;                      :coordinates [[[-85.748032 31.619181]
;                                     [-85.729832 31.632373]]]}}}

(eduction   (map (geoid<-feature
                    ((get-geoid?s *g*)
                     {:vintage      "2010"
                      :sourcePath   ["acs" "acs5"]
                      ;:geoHierarchy {:state "12" :state-legislative-district-_upper-chamber_ "*"}
                      :geoHierarchy {:county "*"} ;; @ 30 seconds
                      ;:geoHierarchy {:zip-code-tabulation-area "*"} ; # 1 min - 3 min for completion
                      :geoResolution "500k"
                      :values       ["B01001_001E" "NAME"]
                      :predicates   {:B00001_001E "0:30000"}}))) ;; add `:predicates` and count them for `vars#`
             ;conj
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

; =>
; [{"123456" {:type "Feature",
;            :properties {:STATEFP "01",
;                         :GEOID "01005",
;                         :STATE "123",
;                         :COUNTY "456"},
;            :geometry {:type "Polygon",
;                       :coordinates [[[-85.748032 31.619181]
;                                      [-85.729832 31.632373]]]}}}
; {"7891011" {:type "Feature",
;             :properties {:STATEFP "01",
;                          :GEOID "01005",
;                          :STATE "789",
;                          :COUNTY "1011"},
;             :geometry {:type "Polygon",
;                        :coordinates [[[-85.748032 31.619181]
;                                       [-85.729832 31.632373]]]}}}]


;==========================================


(defn xf-e?->features+geoids
  [ids]
  (comp
    (map throw-err)
    (mapcat :features)
    (map (geoid<-feature ids))
    (x/into [])))

;; Examples =================================

(eduction  (xf-e?->features+geoids `(:STATE :COUNTY))
           ;conj
           [{:type "FeatureCollection"
             :features [{:type "Feature",
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
                                        [-85.729832 31.632373]]]}}]}])

; =>
; [[{"123456" {:type "Feature",
;             :properties {:STATEFP "01",
;                          :GEOID "01005",
;                          :STATE "123",
;                          :COUNTY "456"},
;             :geometry {:type "Polygon",
;                        :coordinates [[[-85.748032 31.619181]
;                                       [-85.729832 31.632373]]]}}}
;  {"7891011" {:type "Feature",
;              :properties {:STATEFP "01",
;                           :GEOID "01005",
;                           :STATE "789",
;                           :COUNTY "1011"},
;              :geometry {:type "Polygon",
;                         :coordinates [[[-85.748032 31.619181]
;                                        [-85.729832 31.632373]]]}}}]]

;==========================================


(defn xf-e?->stats+geoids
  [vars#]
  (comp
    (map throw-err)
    (map (geoid<-stat vars#))
    (x/into [])))

; Examples

(eduction  (xf-e?->stats+geoids 3)
           ;conj
           [{:B01001_001E                                494981,
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

; =>
; [[{"12040" {:properties {:B01001_001E 494981,
;                         :NAME "State Senate District 40 (2016), Florida",
;                         :B00001_001E 29661,
;                         :state "12",
;                         :state-legislative-district-_upper-chamber_ "040"}}}
;  {"12036" {:properties {:B01001_001E 492259,
;                         :NAME "State Senate District 36 (2016), Florida",
;                         :B00001_001E 29475,
;                         :state "12",
;                         :state-legislative-district-_upper-chamber_ "036"}}}
;  {"12035" {:properties {:B01001_001E 493899,
;                         :NAME "State Senate District 35 (2016), Florida",
;                         :B00001_001E 25615,
;                         :state "12",
;                         :state-legislative-district-_upper-chamber_ "035"}}}]]
;==========================================


#_(defn deep-merge-with
    "
    Recursively merges two maps together along matching key paths. Implements
    `clojure/core.merge-with`.

    [stolen](https://gist.github.com/danielpcox/c70a8aa2c36766200a95#gistcomment-2711849)
    "
    [& maps]
    (apply merge-with
           (fn [& args]
             (prn "Inside deep-merge-with:")
             (js/console.log (js/process.memoryUsage))
             (if (every? map? args)
               (apply deep-merge-with args)
               (last args)))
           maps))

; heapUsed: 162236048, -
; heapUsed: 162244864, = @ 8kb per pass



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
  (x/into {} (x/by-key keys (x/into [])) coll))


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


(defn deep-merge-with
  "
  From @cgrand: Recursively merges two maps together along matching key paths.
  "
  [a b]
  (if (map? a)
    (into a (x/for [[k v] b] [k (deep-merge-with (a k) v)]))
    b))

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
  [s-key g-key]
  (xf<<
    (fn [rf result item]
      ;(prn "Inside xf<-merged->filter:")
      ;(js/console.log (js/process.memoryUsage))
      (let [[_ v] (first item)]
        (if (or (nil? (get-in v [:properties s-key]))
                (nil? (get-in v [:properties g-key])))
          (rf result)
          (rf result v))))))
;(completing
;  (fn [item]
;    (let [[_ v] (first item)]
;      (if (or (nil? (get-in v [:properties s-key]))
;              (nil? (get-in v [:properties g-key])))
;        nil
;        v)))))


; Examples ================================================

(eduction (xf-remove-unmerged :GEOID :B00001_001E)
          [{"12040" {:type "Feature",
                     :properties {:STATEFP "01",
                                  :COUNTY "456",
                                  :STATE "123",
                                  :state "12",
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
    (fn [rf result [_ [v1 v2]]]
      (rf result (deep-merge-with v1 v2)))))

; Examples ================================================

(eduction  xf-deep-merge-with

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
  [s-key g-key]
  (comp xf-deep-merge-with
        (xf-remove-unmerged s-key g-key)))


; Examples ================================================

(eduction  (xf-merge-filter :B00001_001E :GEOID)
           ;conj
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


(defn HO<-xf-merge-filter
  "
  Higher Order Function to be used in concert with `core.async/map`, which takes
  three Clojure keywords and returns a function, which takes two
  input maps and deep-merges them into one based on common keys,
  and then filters them to return only those map-items that contain an
  identifying key from each source map. Used to remove unmerged items.
  "
  [s-key g-key]
  (fn [stats-coll geo-coll]
    (prn "Inside merge-geo+stats:")
    (js/console.log (js/process.memoryUsage))
    ((xf-merge-filter s-key g-key) stats-coll geo-coll)))

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

(eduction    (HO<-xf-merge-filter :NAME :GEOID)
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
  (let [=GKM= (chan 1)]
    ((I=O<<=IO= (IO-cache-GET-edn $geoKeyMap$)) URL-GEOKEYMAP =GKM=)
    (go (let [args       (<! =I=)
              $g$        (<! =GKM=)
              ids        ((get-geoid?s $g$) args)
              vars#      (+ (count (get args :values))
                            (count (get args :predicates)))
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
            (go (let [merged ((HO<-xf-merge-filter s-key g-key) ; core.async version of `map`
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

(let [args {:vintage       "2016"
            :geoHierarchy  {:state "01" :state-legislative-district-_upper-chamber_ "*"}
            :sourcePath    ["acs" "acs5"]
            :geoResolution "500k"
            :values        ["B01001_001E"]}]
  (go (let [=I= (chan 1)
            =O= (chan 1)]
        (>! =I= args)
        (IO-geo+stats =I= =O=)
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

