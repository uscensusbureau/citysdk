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

((ids<-$g$<<args *g*) {:vintage       "2010"
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

(eduction (geoid<-feature '(:STATE :COUNTY))
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

(eduction   (map (geoid<-feature
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


(defn xf-features+geoids
  [ids]
  (comp
    (map #(get % :features))
    (educt<< (geoid<-feature ids))))
             ;(x/into [])))

;; Examples =================================

(eduction  (xf-features+geoids `(:STATE :COUNTY))
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


;; Examples ==============================


(defn -<IO-pp->census-GeoJSON>-
  [$g$]
  (fn [=I= =O=]
    (go (let [args       (<! =I=)
              =args=     (chan 1)
              ids        ((ids<-$g$<<args $g$) args)
              =features= (chan 1 (xf-features+geoids ids))]
          (>! =args= args)
          (prn args)
          (prn ids)
          (pipeline-async 1 =features= (I=O<<=IO= (IO-pp->census-GeoJSON $g$)) =args=)
          (>! =O= (<! =features=))
          (close! =args=)
          (close! =features=)))))

#_(prn ts/test-args-5)

(let [=I= (chan 1)
      =O= (chan 1 (map throw-err))
      =GKM= (chan 1)]
  ((I=O<<=IO= (IO-cache-GET-edn $geoKeyMap$)) URL-GEOKEYMAP =GKM=)
  (go (let [$g$ (<! =GKM=)]
        (>! =I= {:vintage       "2000"
                 :geoHierarchy  {:state "01" :state-legislative-district-_upper-chamber_ "*"}
                 :sourcePath    ["acs" "acs5"]
                 :geoResolution "500k"
                 :values        ["B01001_001E"]})
        (close! =GKM=)
        ;((IO-pp->census-GeoJSON $g$) =I= =O=)
        ((-<IO-pp->census-GeoJSON>- $g$) =I= =O=)
        (prn (<! =O=))
        (prn "Done with -<IO-pp->census-GeoJSON>-:")
        (js/console.log (js/process.memoryUsage))
        (close! =I=)
        (close! =O=))))

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