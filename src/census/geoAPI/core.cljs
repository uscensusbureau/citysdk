(ns census.geoAPI.core
  (:require
    [cljs.core.async    :refer [>! <! chan close! to-chan pipeline onto-chan
                                take! put!]
                        :refer-macros [go alt!]]
    [cuerdas.core       :refer [join]
                        :refer-macros [istr]]
    [defun.core         :refer-macros [defun]]
    [census.utils.core  :refer [$geoKeyMap$ URL-GEOKEYMAP URL-GEOJSON
                                xf<< educt<< transduct<< =O?>-cb $GET$
                                map-over-keys keys->strs error throw-err
                                err-type amap-type]]))

(defn geo-error
  [$g$ res vin lev]
  (let [e-gen
        [(str "No GeoJSON found for: '" (keys->strs (name lev)) "'")
         (str "at this scope in vintage: " vin)
         (str "at resolution: " res)]]
    (if-let [vins (get-in $g$ [lev])]
      (let [e-try
            [(str "For '" (keys->strs (name lev)) "' try of of the following:")
             (str "=== :us = nation-level '" (name lev) "' geoResolution ===")
             (str "=== :st = state-levels '" (name lev) "' geoResolution ===")]]
        (do (doseq [e e-gen] (prn e))
            (doseq [t e-try] (prn t))
            (doseq [s (vec (map-over-keys #(get-in % [:scopes]) vins))] (prn s))
            ""))
      (let [e-NA "=== available geoHierarchy levels ==="]
        (do (doseq [e e-gen] (prn e))
            (prn e-NA)
            (doseq [s (vec (map #(keys->strs (name (key %))) $g$))] (prn s))
            "")))))


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

; FIXME: Can we do without this?
(defn lg-warn->geo
  ([$g$ res vin lev USr]     (lg-warn->geo $g$ res vin lev USr nil nil))
  ([$g$ res vin lev USr STr] (lg-warn->geo $g$ res vin lev USr STr nil))
  ([$g$ res vin lev USr STr st]
   (let [strs
         ["Warning, you are about to make a large GeoJSON request."
          "This may take some time -> consider local data caching."
          "The response may also cause VM heap capacity overflow."
          "Node heap may be increased via `--max-old-space-size=`"
          "For all ZCTAs: Use `--max-old-space-size=4096"]]
     (do (doseq [s strs] (prn s))
         (geo-scoper $g$ res vin lev USr STr st)))))

(defun geo-pattern-matcher
  "
  Takes a pattern of maps and triggers the URL builder accordingly
  "
  ([$g$ ["500k"         vin _   [:zip-code-tabulation-area _] {:us USr :st nil }]] (lg-warn->geo $g$ "500k" vin :zip-code-tabulation-area USr)) ; big!
  ([$g$ [(res :guard #(not (= "500k" %))) vin _ [:zip-code-tabulation-area _] _ ]] (geo-error    $g$ res vin :zip-code-tabulation-area)) ; only 500k
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

(def $GET$-census-GeoJSON-str
  ($GET$ :raw "Unsuccessful Census GeoJSON request"))

(defn IOE-census-GeoJSON-str
  "
  Internal function for calling Github cartography 'API' for GeoJSON
  "
  [$g$]
  (fn [=I= =O= =E=]
    (take! =I=
      (fn [args]
        (let [url (geo-url-composer $g$ args)]
          (if (= "" url)
            (put! =E= "Invalid GeoJSON request. Please check arguments against requirements.")
            ($GET$-census-GeoJSON-str (to-chan [url]) =O= =E=)))))))



#_(defn getCensusGeoJSON
    "
    Library function, which takes a JSON object as input, constructs a call to get
    Github raw file and returns GeoJSON.
    "
    ([args cb] (getCensusGeoJSON args cb false))
    ([args cb url?]
     (if url?
       ((Icb<-wms-args<<=IO= IOE-census-GeoJSON) args
         #(cb #js {:url      (geo-url-composer {} args)
                   :response (js/JSON.stringify (clj->js %))}))
       ((Icb<-wms-args<<=IO= IOE-census-GeoJSON) args
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



(defn GEOIDS<-$g$<-args
  "
  Takes the request argument and pulls out a vector of the component identifiers
  from the geoKeyMap, which is used to construct the UID for the GeoJSON. Used
  in deep-merging with statistics.
  "
  [$g$ {:keys [geoHierarchy vintage]}]
  (let [[& GEOIDS] (get-in $g$ [(key (last geoHierarchy)) (keyword vintage) :id<-json])]
    GEOIDS)) ;; <- Note: These args are returned as a '() list...

(defn xf-mergeable-features
  "
  Takes the component GEOIDS from with the GeoJSON and a single feature to
  generate a :GEOID if not available within the GeoJSON.
  "
  [$g$ args]
  (let [GEOIDS (GEOIDS<-$g$<-args $g$ args)]
    (xf<< (fn [rf acc this]
            (rf acc {(apply str (map (:properties this) GEOIDS))
                     this})))))


(defn xf-mergeable<-GeoCLJS
  "
  Transducer, which reshapes a GeoJSON 'FeatureCollection' into a shape that's
  mergable with other data. Shape = [{'GEOID' {:properties & kvs {& kvs }}}}]
  "
  [$g$ args]
  (comp
    (map #(get % :features)) ; turns a single map into a collection
    (educt<< (xf-mergeable-features $g$ args))))


(def $GET$-census-GeoCLJ
  ($GET$ :json "Unsuccessful Census GeoJSON (for merge) request"))


(defn cfg-Census-GeoCLJ
  "
  Internal function for calling Github cartography 'API' for GeoJSON
  "
  [$g$]
  (fn [=args= =cfg=]
    (take! =args=
      (fn [args]
        (let [url   (geo-url-composer $g$ args)
              xform (xf-mergeable<-GeoCLJS $g$ args)
              g-key (first (GEOIDS<-$g$<-args $g$ args))]
          (if (= "" url)
              (put! =cfg= "Invalid GeoJSON request. Please check arguments against requirements.")
              (put! =cfg= {:url       url
                           :xform     xform
                           :getter    $GET$-census-GeoCLJ
                           :filter-id g-key})))))))

(def pre-cfg-Census-GeoCLJ [cfg-Census-GeoCLJ true])
