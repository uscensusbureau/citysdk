(ns census.statsAPI.core
  (:require
    [cljs.core.async    :refer [>! <! chan promise-chan close! take! to-chan
                                pipeline-async timeout put!]
                        :refer-macros [go alt!]]
    [cuerdas.core       :refer [join numeric? parse-number]]
    [net.cgrand.xforms  :as x]
    ;[census.wmsAPI.core :refer [Icb<-wms-args<<=IO=]]
    [census.utils.core  :refer [$GET$ I-<I= =O?>-cb xf!<< educt<< xf<<
                                amap-type vec-type throw-err map-idcs-range
                                keys->strs ->args strs->keys
                                URL-WMS URL-STATS]]))

(defn kv-pair->str [[k v] separator]
  (join separator [(name k) (str v)]))

(defn stats-url-builder
  "Composes a URL to call Census' statistics API"
  [{:keys [vintage sourcePath geoHierarchy values predicates statsKey]}]
  (str URL-STATS
       (str vintage)
       (join (map #(str "/" %) sourcePath))
       "?get="
       (if (some? values)
           (join "," values)
           "")
       (if (some? predicates)
           (str "&" (str (join "&" (map #(kv-pair->str % "=") predicates))))
           "")
       (keys->strs
         (if (= 1 (count geoHierarchy))
             (str "&for=" (kv-pair->str (first geoHierarchy) ":"))
             (str "&in="  (join "%20" (map #(kv-pair->str % ":") (butlast geoHierarchy)))
                  "&for=" (kv-pair->str (last geoHierarchy) ":"))))
       (if (not (nil? statsKey))
           (str "&key=" statsKey))))


(defn parse-if-number
  "
  Conditionally translates a string into an integer or float if so coercible.
  If not, returns the original string.
  "
  [s]
  (if (numeric? s)
      (parse-number s)
      s))

(defn xf!-csv->clj
  "
  Stateful transducer, which stores the first item as a list of a keys to apply
  (via `zipmap`) to the rest of the items in a collection. Serves to turn the
  Census API response into a more conventional JSON format.

  If provided `:keywords` as an argument, will return a map with Clojure keys.
  Otherwise, will return map keys as strings.
  "
  [{:keys [values predicates]}]
  (let [parse-range [0 (+ (count values) (count predicates))]]
    (xf!<<
      (fn [state rf acc this]
        (let [prev @state]
          (if (nil? prev)
              (do (vreset! state (mapv strs->keys this))
                  nil)
              (rf acc
                  (zipmap (mapv keyword @state)
                          (map-idcs-range parse-if-number
                                          parse-range
                                          this)))))))))

(defn xf-stats->js
  [args]
  (comp
    (xf!-csv->clj args)
    (map #(clj->js % :keywordize-keys true))))


(def $GET$-census-stats ($GET$ :json "Unsuccessful Census stats request... "))

(defn IOE->census-stats
  "
  Internal function for calling the Census API using a Clojure Map. Returns stats
  from Census API unaltered.
  "
  [=I= =O= =E=]
  (go (let [args  (<! =I=)
            url   (stats-url-builder args)]
        ($GET$-census-stats (to-chan [url]) =O= =E=))))

(defn censusStatsJSON
  "
  Solo function to just get Census stats back as conventional JSON instead of
  csv-like output of 'raw' Census API. Not to be coordinated with other functions.

  Note on channels: (cb-<O?=) closes =O= and =E= on completing the callback
  "
  [I cb]
  (let [args (->args I)
        =O= (chan 1 (comp (educt<< (xf-stats->js args))
                          (map to-array)
                          (map js/JSON.stringify)))
        =E= (chan 1 (map throw-err))]
    (go (=O?>-cb IOE->census-stats cb (to-chan [args]) =O= =E=))))


;      e            888                       d8
;     d8b      e88~\888   /~~~8e  888-~88e  _d88__  e88~~8e  888-~\  d88~\
;    /Y88b    d888  888       88b 888  888b  888   d888  88b 888    C888
;   /  Y88b   8888  888  e88~-888 888  8888  888   8888__888 888     Y88b
;  /____Y88b  Y888  888 C888  888 888  888P  888   Y888    , 888      888D
; /      Y88b  "88_/888  "88_-888 888-_88"   '88_/  "88___/  888    \_88P
;                                 888


(defn xf-geoid+<-stat
  "
  Takes an integer argument denoting the number of stat vars the user requested.
  Returns a function of one item (from the Census API response
  collection) to a new map with a hierarchy that will enable deep-merging of
  the stats with a GeoJSON `feature`s `:properties` map.
  "
  [vars#]
  (xf<< (fn [rf acc this]
          (rf acc {(apply str (vals (take-last (- (count this) vars#) this)))
                   {:properties this}}))))

;; Examples ==============================

(defn xf-stats-mergeable
  [args vars#]
  (comp
    (xf!-csv->clj args)
    (xf-geoid+<-stat vars#)))
    ;(map concat)))


(defn cfg-Census-Stats
  "
  Internal function for calling Github cartography 'API' for GeoJSON
  "
  [=args= =cfg=]
  (take! =args=
         (fn [args]
           (let [vars# (+ (count (get args :values))
                          (count (get args :predicates)))
                 url   (stats-url-builder args)
                 xform (educt<< (xf-stats-mergeable args vars#))]


             (if (= "" url)
               (put! =cfg= "Invalid GeoJSON request. Please check arguments against requirements.")
               (do (prn "putting -> =cfg= inside cfg-Census-GeoCLJ")
                   (put! =cfg= {:url    url
                                :xform  xform
                                :getter $GET$-census-stats})))))))


(def pre-cfg-Census-Stats [cfg-Census-Stats false])

  ; ($GET$-census-GeoCLJ (to-chan [url]) =O= =E=)))))))


#_(let [args {:vintage      "2016"
              :sourcePath   ["acs" "acs5"]
              :geoHierarchy {:county "*"}
              :values       ["B01001_001E" "B01001_001M"]}
        =I= (chan 1)
        =O= (chan 1)
        =E= (chan 1)]
    (go
        (>! =I= args)
        (-<IO-pp-census-stats>- =I= =O= =E=)
        (alt! =O= ([O] (prn O))
              =E= ([E] (prn (str "Error: " E))))
        (close! =I=)
        (close! =O=)
        (close! =E=)))

;; Examples ==============================

#_(let [=I= (chan 1)
        =O= (chan 1)
        args {:vintage      "2016"
              :sourcePath   ["acs" "acs5"]
              :geoHierarchy {:state "44" :school-district-_secondary_ "*"}
              :values       ["B01001_001E" "NAME"]}]
    (go (>! =I= args)
        ;(IO-pp->census-stats =I= =O=)
        (-<IO-pp-census-stats>- =I= =O=)
        (cljs.pprint/pprint (<! =O=))
        (close! =I=)
        (close! =O=)))

; =>
; ({"4400420" {:properties {:B01001_001E 14611, :NAME "Foster-Glocester Regional School District, Rhode Island", :state "44", :school-district-_secondary_ "00420"}}} {"4499999" {:properties {:B01001_001E 1039880, :NAME "Remainder of Rhode Island, Rhode Island", :state "44", :school-district-_secondary_ "99999"}}})

;; =======================================

[{"4400420"
  {:type "Feature", :geometry {:bbox [-71.79764920214579 41.7245691839672 -71.575107 41.934098], :type "Polygon", :coordinates [[[-71.79764920214579 41.92855554217849] [-71.796522 41.928537999999996] [-71.741975 41.929979] [-71.722467 41.930490999999996] [-71.70913999999999 41.930824] [-71.700519 41.931042999999995] [-71.68197599999999 41.931354999999996] [-71.67849 41.931543] [-71.66675 41.931664] [-71.663134 41.931697] [-71.639304 41.932279] [-71.629311 41.932272999999995] [-71.613315 41.932589] [-71.590108 41.934098] [-71.587508 41.920998] [-71.58770799999999 41.920398] [-71.58250000000001 41.89496] [-71.580294 41.884626] [-71.57985 41.882132999999996] [-71.579815 41.881954] [-71.577534 41.871891] [-71.57609599999999 41.863509] [-71.575107 41.858599] [-71.60494899999999 41.857799] [-71.613108 41.857599] [-71.622309 41.857198] [-71.626662 41.857558] [-71.67680399999999 41.856677] [-71.69103199999999 41.856553] [-71.689076 41.844879] [-71.688705 41.843365] [-71.6855 41.825379999999996] [-71.685311 41.823617000000006] [-71.679749 41.792595999999996] [-71.679504 41.791202999999996] [-71.678029 41.782551999999995] [-71.675898 41.770385999999995] [-71.675894 41.770362] [-71.67363 41.757647999999996] [-71.670802 41.739695] [-71.667802 41.727482] [-71.700584 41.726731] [-71.720162 41.726298] [-71.754031 41.725553] [-71.754346 41.725606] [-71.7896715648333 41.7245691839672] [-71.789678 41.724734] [-71.79105925492189 41.770182676218795] [-71.791062 41.770272999999996] [-71.79125806357601 41.774496473912] [-71.7926269448023 41.8039840221115] [-71.79265663505639 41.804623590236304] [-71.792767 41.807001] [-71.79278599999999 41.80867] [-71.794161 41.840140999999996] [-71.794161 41.841100999999995] [-71.7944823560536 41.8491578858595] [-71.7946917826635 41.854408530038015] [-71.7966877946775 41.904451592213896] [-71.79715894256209 41.9162639874898] [-71.79764920214579 41.92855554217849]]]},
   :properties
     {:STATEFP "44", :SCSDLEA "00420", :AFFGEOID "9600000US4400420", :GEOID "4400420", :NAME "Foster-Glocester Regional School District", :LSAD "00", :ALAND 271895236, :AWATER 9727071}}}
 ({"4400420"
   {:properties
    {:B01001_001E 14611, :B01001_001M 40, :state "44", :school-district-_secondary_ "00420"}}}
  {"4499999"
   {:properties
    {:B01001_001E 1039880, :B01001_001M 40, :state "44", :school-district-_secondary_ "99999"}}})]
