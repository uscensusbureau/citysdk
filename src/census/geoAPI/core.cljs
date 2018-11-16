(ns census.geoAPI.core
  (:require
    [cljs.core.async    :refer [>! <! chan close! pipeline-async]
                        :refer-macros [go]]
    [cuerdas.core       :refer [join]]
    [defun.core         :refer-macros [defun]]
    [net.cgrand.xforms  :as x]
    [census.wmsAPI.core :refer [Icb<-wms-args<<=IO=]]
    [census.utils.core  :refer [$geoKeyMap$ URL-GEOKEYMAP URL-GEOJSON
                                xf<< educt<<
                                map-over-keys keys->strs error throw-err err-type
                                IO-cache-GET-edn I=O<<=IO= IO-ajax-GET-json]]
    [test.fixtures.core   :refer [*g*]]))



;; NOTE: If you need to increase memory of Node in Shadow... Eval in REPL:
(comment
  (shadow.cljs.devtools.api/node-repl {:node-args ["--max-old-space-size=8192"]}))


(defn geo-error
  [$g$ res vin lev]
  (let [e [(str "No GeoJSON found for " (name lev) " at this scope")
           (str "in vintage: " vin)
           (str "at resolution: " res)]]
    (if-let [vins (get-in $g$ [lev])]
      (-> (conj e
            (str "For " (str lev) " try one of the following `{:<vintage> {:<scopes> ...`")
            [(map-over-keys #(get-in % [:scopes]) vins)])
          error)
      (-> (conj e
            (str "Sorry, there is no GeoJSON for " (name lev) " available.")
            "Try one of these instead: "
            (vec (map #(keys->strs (name (key %))) $g$)))
          error))))

(defn geo-url-builder
  "Composes a URL to call raw GeoJSON files hosted on Github"
  ([res vin lev] (geo-url-builder res vin lev nil))
  ([res vin lev st]
   (if (nil? st)
     (str (join "/" [URL-GEOJSON res vin (name lev)]) ".json")
     (str (join "/" [URL-GEOJSON res vin st (name lev)]) ".json"))))

(defn geo-scoper
  ([$g$ res vin lev USr]     (geo-scoper $g$ res vin lev USr nil nil))
  ([$g$ res vin lev USr STr] (geo-scoper $g$ res vin lev USr STr nil))
  ([$g$ res vin lev USr STr st]
   (let [STr? (not (nil? (some #(= res %) STr)))
         USr? (not (nil? (some #(= res %) USr)))
         st?  (not (nil? st))
         us?  (nil? st)]
     (cond
       (and st? STr?)                  (geo-url-builder res vin lev st) ;asks for state, state available
       (and us? USr?)                  (geo-url-builder res vin lev)    ;asks for us, us available
       (and (and st? USr?) (not STr?)) (geo-url-builder res vin lev)    ;asks for state, state unavailable, us available
       :else                           (geo-error $g$ res vin lev)))))

(defn lg-warn->geo
  ([$g$ res vin lev USr]     (lg-warn->geo $g$ res vin lev USr nil nil))
  ([$g$ res vin lev USr STr] (lg-warn->geo $g$ res vin lev USr STr nil))
  ([$g$ res vin lev USr STr st]
   (let [strs
         ["Warning, you are about to make a large GeoJSON request."
          "This may take some time -> consider local data caching."
          "The response may also cause VM heap capacity overflow."
          "Node heap may be increased via `--max-old-space-size=`"]]
     (do (doseq [s strs] (prn s))
         (geo-scoper $g$ res vin lev USr STr st)))))

(defun geo-pattern-matcher
  "
  Takes a pattern of maps and triggers the URL builder accordingly
  "
  ([$g$ ["500k"         vin _   [:zip-code-tabulation-area _] {:us USr :st nil }]] (lg-warn->geo $g$ "500k" vin :zip-code-tabulation-area USr)) ; big!
  ([$g$ [(res :guard #(not (= "500k" %))) vin _ [:zip-code-tabulation-area _] _ ]] (geo-error $g$ res vin :zip-code-tabulation-area)) ; no other than 500k
  ([$g$ [res            vin _   [:county _]                   {:us USr :st nil }]] (lg-warn->geo $g$ res vin :county USr)) ; big!
  ([$g$ [res            vin _   [lev _  ]                     nil               ]] (geo-error    $g$ res vin lev))     ; no valid geography
  ([$g$ [res            vin nil [lev _  ]                     {:us nil :st _   }]] (geo-error    $g$ res vin lev))     ; tries US, only states
  ([$g$ [res            vin "*" [lev _  ]                     {:us nil :st _   }]] (geo-error    $g$ res vin lev))     ; tries US, only states
  ([$g$ [res            vin nil [lev _  ]                     {:us USr :st _   }]] (geo-scoper   $g$ res vin lev USr)) ; tries to get all US
  ([$g$ [res            vin "*" [lev _  ]                     {:us USr :st _   }]] (geo-scoper   $g$ res vin lev USr)) ; tries to get all US
  ([$g$ [res            vin _   [lev _  ]                     {:us USr :st nil }]] (geo-scoper   $g$ res vin lev USr)) ; no states, try :us
  ([$g$ [res            vin st  [lev _  ]                     {:us USr :st STr }]] (geo-scoper   $g$ res vin lev USr STr st)) ; try state
  ([$g$ & anthing-else ]                                                           ""))

(defn geo-pattern-maker
  [$g$ {:keys [vintage geoResolution] {:keys [state] :as geoHierarchy} :geoHierarchy}]
  (let [level     (last geoHierarchy)
        geoScopes (get-in $g$ [(key level) (keyword vintage) :scopes])
        pattern   [geoResolution vintage state level geoScopes]]
    pattern))

(defn geo-url-composer
  [$g$ args]
  (->> (geo-pattern-maker $g$ args)
       (geo-pattern-matcher $g$)))

(defn IO-pp->census-GeoJSON
  "
  Internal function for calling the Census API using a Clojure Map and getting
  stats returned as a clojure map.
  "
  [$g$]
  (fn [=I= =O=]
      (go (let [args  (<! =I=)
                =url= (chan 1)
                url   (geo-url-composer $g$ args)]
            (prn url)
            (if (= "" url)
                (do (>! =O= "Invalid GeoJSON request. Please check arguments against requirements.")
                    (close! =url=))
                (do (prn "Inside IO-pp->census-GeoJSON:")
                    (js/console.log (js/process.memoryUsage))
                    (>! =url= url)
                    ; IO-ajax-GET closes the =res= chan; pipeline-async closes the =url= when =res= is closed
                    (pipeline-async 1 =O= (I=O<<=IO= IO-ajax-GET-json) =url=)
                    (close! =url=)))))))
                    ; =O= chan is closed by the consumer; pipeline closes the =res= when =O= is closed



;; Examples ==============================

#_(prn ts/test-args-5)

#_(let [=I= (chan 1)
        =O= (chan 1 (map throw-err))]
    (go (>! =I= {:vintage       "2000"
                 :geoHierarchy  {:state "01" :state-legislative-district-_upper-chamber_ "*"}
                 :sourcePath    ["acs" "acs5"]
                 :geoResolution "500k"
                 :values        ["B01001_001E"]})
        (IO-pp->census-GeoJSON =I= =O=)
        (prn (<! =O=))
        (close! =I=)
        (close! =O=)))

;; =======================================

#_(defn getCensusGeoJSON
    "
    Library function, which takes a JSON object as input, constructs a call to get
    Github raw file and returns GeoJSON.
    "
    ([args cb] (getCensusGeoJSON args cb false))
    ([args cb url?]
     (if url?
       ((Icb<-wms-args<<=IO= IO-pp->census-GeoJSON) args
         #(cb #js {:url      (geo-url-composer {} args)
                   :response (js/JSON.stringify (clj->js %))}))
       ((Icb<-wms-args<<=IO= IO-pp->census-GeoJSON) args
         #(cb (js/JSON.stringify (clj->js %)))))))


;; Examples  ========================================

#_(getCensusGeoJSON
    ;ts/census.test-js-args-1
    ts/test-js-args-2
    ;ts/census.test-args-2
    #_#(configs.utils.fixtures/config->mkdirp->fsW!
         {:directory "./src/json/"
          :filepath "./src/json/legislative-only.json"
          :json %})
    ;#(prn %))
    #(js/console.log %))
  ;true)
;; ===================================================


;      e            888                       d8
;     d8b      e88~\888   /~~~8e  888-~88e  _d88__  e88~~8e  888-~\  d88~\
;    /Y88b    d888  888       88b 888  888b  888   d888  88b 888    C888
;   /  Y88b   8888  888  e88~-888 888  8888  888   8888__888 888     Y88b
;  /____Y88b  Y888  888 C888  888 888  888P  888   Y888    , 888      888D
; /      Y88b  "88_/888  "88_-888 888-_88"   '88_/  "88___/  888    \_88P
;                                 888
;



(defn ids<-$g$<<args
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

#_((ids<-$g$<<args *g*) {:vintage       "2010"
                         :sourcePath    ["acs" "acs5"]
                         ;:geoHierarchy {:state "12" :state-legislative-district-_upper-chamber_ "*"}
                         :geoHierarchy  {:county "*"} ;; @ 30 seconds
                         ;:geoHierarchy {:zip-code-tabulation-area "*"} ; # 1 min - 3 min for completion
                         :geoResolution "500k"
                         :values        ["B01001_001E" "NAME"]
                         :predicates    {:B00001_001E "0:30000"}})

; =>
; (:STATE :COUNTY)
;; =======================================

(defn geoid<-feature
  "
  Takes the component ids from with the GeoJSON and a single feature to
  generate a :GEOID if not available within the GeoJSON.
  "
  [ids]
  (xf<< (fn [rf acc this]
          (rf acc {(apply str (map (:properties this) ids)) this})))) ;  from @cgrand
;{(reduce str (map #(get-in m [:properties %]) ids)) m}) ;  uses @ 1kb per

;; Examples ==============================

#_(eduction (geoid<-feature '(:STATE :COUNTY))
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
                             [-85.729832 31.632373]]]}}])

; => {"123456" {:type "Feature",
;           :properties {:STATEFP "01",
;                        :GEOID "01005",
;                        :STATE "123",
;                        :COUNTY "456"},
;           :geometry {:type "Polygon",
;                      :coordinates [[[-85.748032 31.619181]
;                                     [-85.729832 31.632373]]]}}}

#_(eduction   (map (geoid<-feature
                     ((ids<-$g$<<args *g*)
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


(defn educt<-features+geoids
  [ids]
  (comp
    (map #(get % :features))
    (educt<< (geoid<-feature ids))))
             ;(x/into [])))

;; Examples =================================

#_(eduction  (educt<-features+geoids `(:STATE :COUNTY))
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

;==========================================



(defn -<IO-pp->census-GeoJSON>-
  [$g$]
  (fn [=I= =O=]
    (go (let [args       (<! =I=)
              =args=     (chan 1)
              ids        ((ids<-$g$<<args $g$) args)
              =features= (chan 1 (educt<-features+geoids ids))]
          (>! =args= args)
          (prn args)
          (prn ids)
          (pipeline-async 1 =features= (I=O<<=IO= (IO-pp->census-GeoJSON $g$)) =args=)
          (>! =O= (<! =features=))
          (close! =args=)
          (close! =features=)))))

;; Examples ==============================

#_(prn ts/test-args-5)

(let [=I= (chan 1)
      =O= (chan 1 (map throw-err))
      =GKM= (chan 1)
      args {:vintage      "2016"
            :sourcePath   ["acs" "acs5"]
            :geoHierarchy {:state "44" :school-district-_secondary_ "*"}
            :values       ["B01001_001E" "NAME"]
            :geoResolution "500k"}]
  ((I=O<<=IO= (IO-cache-GET-edn $geoKeyMap$)) URL-GEOKEYMAP =GKM=)
  (go (let [$g$ (<! =GKM=)]
        (>! =I= args)
        (close! =GKM=)
        ;((IO-pp->census-GeoJSON $g$) =I= =O=)
        ((-<IO-pp->census-GeoJSON>- $g$) =I= =O=)
        (prn (<! =O=))
        (prn "Done with -<IO-pp->census-GeoJSON>-:")
        (js/console.log (js/process.memoryUsage))
        (close! =I=)
        (close! =O=))))

; =>
; ({"4400420" {:type "Feature", :geometry {:bbox [-71.79764920214579 41.7245691839672 -71.575107 41.934098], :type "Polygon", :coordinates [[[-71.79764920214579 41.92855554217849] [-71.796522 41.928537999999996] [-71.741975 41.929979] [-71.722467 41.930490999999996] [-71.70913999999999 41.930824] [-71.700519 41.931042999999995] [-71.68197599999999 41.931354999999996] [-71.67849 41.931543] [-71.66675 41.931664] [-71.663134 41.931697] [-71.639304 41.932279] [-71.629311 41.932272999999995] [-71.613315 41.932589] [-71.590108 41.934098] [-71.587508 41.920998] [-71.58770799999999 41.920398] [-71.58250000000001 41.89496] [-71.580294 41.884626] [-71.57985 41.882132999999996] [-71.579815 41.881954] [-71.577534 41.871891] [-71.57609599999999 41.863509] [-71.575107 41.858599] [-71.60494899999999 41.857799] [-71.613108 41.857599] [-71.622309 41.857198] [-71.626662 41.857558] [-71.67680399999999 41.856677] [-71.69103199999999 41.856553] [-71.689076 41.844879] [-71.688705 41.843365] [-71.6855 41.825379999999996] [-71.685311 41.823617000000006] [-71.679749 41.792595999999996] [-71.679504 41.791202999999996] [-71.678029 41.782551999999995] [-71.675898 41.770385999999995] [-71.675894 41.770362] [-71.67363 41.757647999999996] [-71.670802 41.739695] [-71.667802 41.727482] [-71.700584 41.726731] [-71.720162 41.726298] [-71.754031 41.725553] [-71.754346 41.725606] [-71.7896715648333 41.7245691839672] [-71.789678 41.724734] [-71.79105925492189 41.770182676218795] [-71.791062 41.770272999999996] [-71.79125806357601 41.774496473912] [-71.7926269448023 41.8039840221115] [-71.79265663505639 41.804623590236304] [-71.792767 41.807001] [-71.79278599999999 41.80867] [-71.794161 41.840140999999996] [-71.794161 41.841100999999995] [-71.7944823560536 41.8491578858595] [-71.7946917826635 41.854408530038015] [-71.7966877946775 41.904451592213896] [-71.79715894256209 41.9162639874898] [-71.79764920214579 41.92855554217849]]]}, :properties {:STATEFP "44", :SCSDLEA "00420", :AFFGEOID "9600000US4400420", :GEOID "4400420", :NAME "Foster-Glocester Regional School District", :LSAD "00", :ALAND 271895236, :AWATER 9727071}}})

; "Inside IO-pp->census-GeoJSON:"
;{ rss: 74190848,
;  heapTotal: 51838976,
;  heapUsed: 47867872,
;  external: 58196 }

; "Done with -<IO-pp->census-GeoJSON>-:"
;{ rss: 134819840,
;  heapTotal: 111394816,
;  heapUsed: 76246040,
;  external: 116537 }
;; =======================================