(ns census.merger.core
  (:require
    [cljs.core.async :refer [>! <! chan promise-chan close! pipeline put!
                             to-chan take!]
     :refer-macros [go alt! go-loop]
     :as <|]
    [ajax.core :refer [GET POST]]
    [net.cgrand.xforms :as x]
    [census.geoAPI.core :refer [pre-cfg-Census-GeoCLJ
                                GEOIDS<-$g$<-args]]
    [census.statsAPI.core :refer [pre-cfg-Census-Stats]]
    [census.utils.core :refer [URL-GEOKEYMAP $geoKeyMap$ xf<< educt<<
                               throw-err err-type ->args map-over-keys
                               amap-type $GET$]]))

(def GROUPED-LIST
  {'("12040") [{"12040" {:type       "Feature",
                         :properties {:STATEFP "01",
                                      :GEOID   "01005",
                                      :STATE   "123",
                                      :COUNTY  "456"},
                         :geometry   {:type        "Polygon",
                                      :coordinates [[[-85.748032 31.619181]
                                                     [-85.729832 31.632373]]]}}}
               {"12040" {:properties {:B01001_001E                                494981,
                                      :NAME                                       "State Senate District 40 (2016), Florida",
                                      :B00001_001E                                29661,
                                      :state                                      "12",
                                      :state-legislative-district-_upper-chamber_ "040"}}}],
   '("12035") [{"12035" {:type       "Feature",
                         :properties {:STATEFP "01",
                                      :GEOID   "01005",
                                      :STATE   "789",
                                      :COUNTY  "1011"},
                         :geometry   {:type        "Polygon",
                                      :coordinates [[[-85.748032 31.619181]
                                                     [-85.729832 31.632373]]]}}}
               {"12035" {:properties {:B01001_001E                                493899,
                                      :NAME                                       "State Senate District 35 (2016), Florida",
                                      :B00001_001E                                25615,
                                      :state                                      "12",
                                      :state-legislative-district-_upper-chamber_ "035"}}}],
   '("12036") [{"12036" {:properties {:B01001_001E                                492259,
                                      :NAME                                       "State Senate District 36 (2016), Florida",
                                      :B00001_001E                                29475,
                                      :state                                      "12",
                                      :state-legislative-district-_upper-chamber_ "036"}}}]})
(defn deep-merge-with
  [& maps]
  (apply merge-with
         (fn [& args]
           (if (every? map? args)
             (apply deep-merge-with args)
             (last args)))
         maps))

; Examples ================================================

(def xf-deep-merge (x/for [[_ pairs] %] (apply deep-merge-with pairs)))

(transduce xf-deep-merge
             conj
             GROUPED-LIST)


; Y88b         /   ,88~-_   888~-_   888  /   ,d88~~\
;  Y88b       /   d888   \  888   \  888 /    8888
;   Y88b  e  /   88888    | 888    | 888/\    `Y88b
;    Y88bd8b/    88888    | 888   /  888  \    `Y88b,
;     Y88Y8Y      Y888   /  888_-~   888   \     8888
;      Y  Y        `88_-~   888 ~-_  888    \ \__88P'

; =>
(def MERGED-LIST
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
; =========================================================


(defn xf-remove-unmerged
  "
  Transducer, which takes 2->3 keys that serve to filter a merged list of two
  maps to return a function, which returns a list of only those maps which have
  a key from both maps. The presence of both keys within the map signifies that
  the maps have merged. This ensures the returned list contains only the overlap
  between the two, i.e., excluding non-merged maps.
  "
  [[& IDS]]
  (xf<<
    (fn [rf acc this]
      (let [[[_ v]] (x/into [] this)]
        (if (not-any? nil? (map #(get-in v [:properties %]) IDS))
          (rf acc v)
          (rf acc))))))

(transduce (xf-remove-unmerged [:GEOID :B01001_001E])
           conj
           MERGED-LIST)

(def FILTERED-LIST
  [{:type "Feature",
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
               :coordinates [[[-85.748032 31.619181] [-85.729832 31.632373]]]}}
   {:type "Feature",
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
               :coordinates [[[-85.748032 31.619181] [-85.729832 31.632373]]]}}])

; =========================================================

;; from @CGrand


#_(defn deep-merge-with
    "
  From @cgrand: Recursively merges two maps together along matching key paths.
  "
    [a b]
    (if (map? a)
      (into a (x/for [[k v] b] [k (deep-merge-with (a k) v)]))
      b))


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


;(#(go (>! =O= {:type "FeatureCollection"
;               :features %}))))))


;      e    e                             /
;     d8b  d8b      e88~~8e  888-~\ e88~88e  e88~~8e  888-~\
;    d888bdY88b    d888  88b 888    888 888 d888  88b 888
;   / Y88Y Y888b   8888__888 888    "88_88" 8888__888 888
;  /   YY   Y888b  Y888    , 888     /      Y888    , 888
; /          Y888b  "88___/  888    Cb       "88___/  888
;                                    Y8""8D

(defn group-by-keys
  "
  Implementation of `group-by` (produces a map) via @cgrand's `xforms`
  See 'Usage': https://github.com/cgrand/xforms#usage
  "
  [coll]
  (into {} (x/by-key keys (x/into [])) coll))


(def UNMERGED-LIST
  {'("4400420") [
                 {"4400420" {:properties {:B01001_001E 14611, :B01001_001M 40, :state "44", :school-district-_secondary_ "00420"}}}
                 {"4400420" {:type "Feature", :geometry {:bbox [-71.79764920214579 41.7245691839672 -71.575107 41.934098], :type "Polygon", :coordinates [[[-71.79764920214579 41.92855554217849] [-71.796522 41.928537999999996] [-71.741975 41.929979] [-71.722467 41.930490999999996] [-71.70913999999999 41.930824] [-71.700519 41.931042999999995] [-71.68197599999999 41.931354999999996] [-71.67849 41.931543] [-71.66675 41.931664] [-71.663134 41.931697] [-71.639304 41.932279] [-71.629311 41.932272999999995] [-71.613315 41.932589] [-71.590108 41.934098] [-71.587508 41.920998] [-71.58770799999999 41.920398] [-71.58250000000001 41.89496] [-71.580294 41.884626] [-71.57985 41.882132999999996] [-71.579815 41.881954] [-71.577534 41.871891] [-71.57609599999999 41.863509] [-71.575107 41.858599] [-71.60494899999999 41.857799] [-71.613108 41.857599] [-71.622309 41.857198] [-71.626662 41.857558] [-71.67680399999999 41.856677] [-71.69103199999999 41.856553] [-71.689076 41.844879] [-71.688705 41.843365] [-71.6855 41.825379999999996] [-71.685311 41.823617000000006] [-71.679749 41.792595999999996] [-71.679504 41.791202999999996] [-71.678029 41.782551999999995] [-71.675898 41.770385999999995] [-71.675894 41.770362] [-71.67363 41.757647999999996] [-71.670802 41.739695] [-71.667802 41.727482] [-71.700584 41.726731] [-71.720162 41.726298] [-71.754031 41.725553] [-71.754346 41.725606] [-71.7896715648333 41.7245691839672] [-71.789678 41.724734] [-71.79105925492189 41.770182676218795] [-71.791062 41.770272999999996] [-71.79125806357601 41.774496473912] [-71.7926269448023 41.8039840221115] [-71.79265663505639 41.804623590236304] [-71.792767 41.807001] [-71.79278599999999 41.80867] [-71.794161 41.840140999999996] [-71.794161 41.841100999999995] [-71.7944823560536 41.8491578858595] [-71.7946917826635 41.854408530038015] [-71.7966877946775 41.904451592213896] [-71.79715894256209 41.9162639874898] [-71.79764920214579 41.92855554217849]]]}, :properties {:STATEFP "44", :SCSDLEA "00420", :AFFGEOID "9600000US4400420", :GEOID "4400420", :NAME "Foster-Glocester Regional School District", :LSAD "00", :ALAND 271895236, :AWATER 9727071}}}],
   '("4499999") [
                 {"4499999" {:properties {:B01001_001E 1039880, :B01001_001M 40, :state "44", :school-district-_secondary_ "99999"}}}]})



(transduce (xf-remove-unmerged [:B01001_001E :GEOID])
           conj
           [{"4400420" {:properties {:school-district-_secondary_ "00420", :STATEFP "44", :LSAD "00", :B01001_001M 40, :AFFGEOID "9600000US4400420", :state "44", :GEOID "4400420", :AWATER 9727071, :B01001_001E 14611, :SCSDLEA "00420", :NAME "Foster-Glocester Regional School District", :ALAND 271895236}, :type "Feature", :geometry {:bbox [-71.79764920214579 41.7245691839672 -71.575107 41.934098], :type "Polygon", :coordinates [[[-71.79764920214579 41.92855554217849] [-71.796522 41.928537999999996] [-71.741975 41.929979] [-71.722467 41.930490999999996] [-71.70913999999999 41.930824] [-71.700519 41.931042999999995] [-71.68197599999999 41.931354999999996] [-71.67849 41.931543] [-71.66675 41.931664] [-71.663134 41.931697] [-71.639304 41.932279] [-71.629311 41.932272999999995] [-71.613315 41.932589] [-71.590108 41.934098] [-71.587508 41.920998] [-71.58770799999999 41.920398] [-71.58250000000001 41.89496] [-71.580294 41.884626] [-71.57985 41.882132999999996] [-71.579815 41.881954] [-71.577534 41.871891] [-71.57609599999999 41.863509] [-71.575107 41.858599] [-71.60494899999999 41.857799] [-71.613108 41.857599] [-71.622309 41.857198] [-71.626662 41.857558] [-71.67680399999999 41.856677] [-71.69103199999999 41.856553] [-71.689076 41.844879] [-71.688705 41.843365] [-71.6855 41.825379999999996] [-71.685311 41.823617000000006] [-71.679749 41.792595999999996] [-71.679504 41.791202999999996] [-71.678029 41.782551999999995] [-71.675898 41.770385999999995] [-71.675894 41.770362] [-71.67363 41.757647999999996] [-71.670802 41.739695] [-71.667802 41.727482] [-71.700584 41.726731] [-71.720162 41.726298] [-71.754031 41.725553] [-71.754346 41.725606] [-71.7896715648333 41.7245691839672] [-71.789678 41.724734] [-71.79105925492189 41.770182676218795] [-71.791062 41.770272999999996] [-71.79125806357601 41.774496473912] [-71.7926269448023 41.8039840221115] [-71.79265663505639 41.804623590236304] [-71.792767 41.807001] [-71.79278599999999 41.80867] [-71.794161 41.840140999999996] [-71.794161 41.841100999999995] [-71.7944823560536 41.8491578858595] [-71.7946917826635 41.854408530038015] [-71.7966877946775 41.904451592213896] [-71.79715894256209 41.9162639874898] [-71.79764920214579 41.92855554217849]]]}}}
            {"4499999" {:properties {:B01001_001E 1039880, :B01001_001M 40, :state "44", :school-district-_secondary_ "99999"}}}])


(defn xf-group->merge->filter
  [[& IDS]]
  (comp xf-deep-merge
        (xf-remove-unmerged IDS)))

(transduce (xf-group->merge->filter [:B00001_001E :GEOID])
           conj
           GROUPED-LIST)


(def $GET$-geoKeyMap ($GET$ :edn "Unsuccessful fetch for geoKeyMap (configuration)"))

(defn merge-spooler
  [=args= cfgs $g$]
  (fn [=O= =E=]
    (go (let [=cfg= (chan 1)]
          (prn "In merge-spooler")
          (loop [todo cfgs
                 [cfg ?$g$] (first cfgs)
                 acc (transient [])]
            (if (nil? (first todo))
              (do (prn "putting persistent! in merge-spooler")
                  (>! =O= (group-by-keys (reduce concat (persistent! acc))))
                  (close! =cfg=))
              (do (if ?$g$
                    ((cfg $g$) =args= =cfg=)
                    (cfg =args= =cfg=))
                  (if-let [{:keys [url xform getter]} (<! =cfg=)]
                    (let [=xform= (chan 1 xform)
                          =err= (chan 1 (map throw-err))]
                      (prn "Inside if-let of merge-spooler loop!")
                      (getter (to-chan [url]) =xform= =err=)
                      (alt! =xform= ([data] (do (prn "inside alt! =xform=")
                                                (close! =xform=)
                                                (close! =err=)
                                                (recur (rest todo)
                                                       (second todo)
                                                       (conj! acc data))))
                            =err= ([err] (do (close! =xform=)
                                             (close! =err=)
                                             (prn "Error during merge...")
                                             (>! =E= err)))))
                    (>! =E= cfg)))))))))

(let [=GKM= (promise-chan)
      args-2 {:sourcePath    ["acs" "acs5"]
              :vintage       "2016"
              :geoHierarchy  {:state "44" :school-district-_secondary_ "*"}
              :geoResolution "500k"
              :values        ["B01001_001E" "B01001_001M"]}
      args   {:sourcePath    ["acs" "acs5"]
              :vintage       "2016"
              :geoHierarchy  {:state "*"}
              :geoResolution "500k"
              :values        ["B01001_001E" "B01001_001M"]}]
  ($GET$-geoKeyMap (to-chan [URL-GEOKEYMAP]) =GKM=)
  (go (let [$g$ (<! =GKM=)
            ids (GEOIDS<-$g$<-args $g$ args)
            s-key (keyword (first (get args :values)))
            g-key (first ids)
            =args= (promise-chan)
            =O= (chan 1 (educt<< (xf-group->merge->filter [s-key g-key])))
            =E= (chan 1)]
        (prn (str "s-key: " s-key " g-key: " g-key))
        (>! =args= args)
        ((merge-spooler =args= [pre-cfg-Census-Stats pre-cfg-Census-GeoCLJ] $g$) =O= =E=)
        (alt! =O= ([data] (prn data))
              =E= ([err] (prn "Error! " (str err))))
        (close! =args=)
        (close! =O=)
        (close! =E=))))


;; FIXME

; Example ========================================


;; =======================================

(comment
  (let [=GKM= (chan 1)]
    ((I=O<<=IO= (IO-cache-GET-edn $geoKeyMap$)) URL-GEOKEYMAP =GKM=)
    (go (let [args (<! =I=)
              $g$ (<! =GKM=)
              ids ((get-geoid?s $g$) args)
              ;vars#      (+ (count (get args :values))
              ;              (count (get args :predicates)))
              s-key (keyword (first (get args :values)))
              g-key (first ids)
              =args= (promise-chan)
              =features= (chan 1 (xf-e?->features+geoids ids))
              =stats= (chan 1 (xf-e?->stats+geoids vars#))]
          ; changed due to: https://github.com/clojure/core.async/blob/master/src/main/clojure/cljs/core/async.cljs#L700

          ; Notes (1)
          (>! =args= args)
          (IO-pp->census-GeoJSON =args= =features=)         ; Notes (2)
          (if-let [features (<! =features=)]
            (go (let [merged ((HO<-xf-merge-filter (first filter-keys) (last filter-keys)) ; s-key g-key) ; core.async version of `map`
                               features
                               (<! =stats=))]
                  (prn "Inside IO-geo+stats:")
                  (js/console.log (js/process.memoryUsage))
                  (IO-pp->census-stats =args= =stats=)
                  ; Notes (2)
                  (>! =O= {:type     "FeatureCollection"
                           :features merged})
                  (prn "Done with merger in IO-geo+stats:")
                  (js/console.log (js/process.memoryUsage))
                  (close! =features=)
                  (close! =stats=)                          ; Notes (3)
                  (close! =args=)                           ; Notes (4)
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
  {:1 "GD: how long it took to realize I didn't have to explicitly pipe the channels in here! `async/map` does that. Initially used `pipeline-async`"
   :2 "Initially, used `pipeline-async` here as well - MOAR pipline-async! - however, internally, the `IO-...` functions use `pipeline-async` and wrapping a pipeline inside another creates an infinite loop :("
   :3 "`async/map closes merged automatically when either input chan (=stats= or =features=) is closed"
   :4 "pipline-async (used internally by `IO-...` functions) closes the to (=O=) channels (=stats= & =features=) upon closing this"})

