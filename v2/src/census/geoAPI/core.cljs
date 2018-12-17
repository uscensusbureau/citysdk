(ns census.geoAPI.core
  (:require
    [cljs.core.async    :refer [chan close! to-chan onto-chan take! put!
                                promise-chan pipeline pipe]]
    [cuerdas.core       :refer [join]]
    [defun.core         :refer-macros [defun]]
    [census.utils.core  :refer [URL-GEOKEYMAP URL-GEOJSON
                                xf<< educt<< transduct<< =O?>-cb $GET$
                                map-over-keys keys->strs error throw-err
                                err-type amap-type ->args]]))

(defn G-err
  "Tries to log a useful error given a user's invalid input. Returns an empty string"
  [$g$ res vin lev]
  (let [e-gen
        [(str "No GeoJSON found for: '" (keys->strs (name lev)) "'")
         (str "at this scope in vintage: " vin)
         (str "at resolution: " res)]]
    (if-let [vins (get-in $g$ [lev])]
      (let [e-try
            [(str "For '" (keys->strs (name lev)) "' try of of the following:")
             (str "=== :us = nation-level '" (name lev) "' geoResolutions ===")
             (str "=== :st = state-levels '" (name lev) "' geoResolutions ===")]]
        (do (doseq [e e-gen] (prn e))
            (doseq [t e-try] (prn t))
            (doseq [s (vec (map-over-keys #(get-in % [:scopes]) vins))] (prn s))
            ""))
      (let [e-NA "=== available geoHierarchy levels ==="]
        (do (doseq [e e-gen] (prn e))
            (prn e-NA)
            (doseq [s (vec (map #(keys->strs (name (key %))) $g$))] (prn s))
            "")))))


(defn G-pattern->url
  "Composes a URL to call raw GeoJSON files hosted on Github"
  ([res vin lev] (G-pattern->url res vin lev nil))
  ([res vin lev st]
   (if (nil? st)
     (str (join "/" [URL-GEOJSON res vin (name lev)]) ".json")
     (str (join "/" [URL-GEOJSON res vin st (name lev)]) ".json"))))

(defn scope
  "Consumes the patterner's pattern and configures GeoJSON URL to use the proper
  state scoping, if applicable."
  ([$g$ res vin lev USr]     (scope $g$ res vin lev USr nil))
  ([$g$ res vin lev USr STr] (scope $g$ res vin lev USr STr nil))
  ([$g$ res vin lev USr STr st]
   (let [STr? (not (nil? (some #(= res %) STr)))
         USr? (not (nil? (some #(= res %) USr)))
         st?  (not (nil? st))
         us?  (nil? st)]
     (cond
       (and st? STr?) (G-pattern->url res vin lev st) ;asks for state, state available
       (and us? USr?) (G-pattern->url res vin lev)    ;asks for us, us available
       (and (and st? USr?) (not STr?)) (G-pattern->url res vin lev)    ;asks for state, state unavailable, us available
       :else (G-err $g$ res vin lev)))))

(defn big-G
  "logs a warning that the request being made is large."
  ([$g$ res vin lev USr]     (big-G $g$ res vin lev USr nil))
  ([$g$ res vin lev USr STr] (big-G $g$ res vin lev USr STr nil))
  ([$g$ res vin lev USr STr st]
   (let [strs
         ["Warning, you are about to make a large GeoJSON request."
          "This may take some time -> consider local data caching."
          "The response may also cause VM heap capacity overflow."
          "On Node - for ZCTAs - Use `--max-old-space-size=4096"]]
     (do (doseq [s strs] (prn s))
         (scope $g$ res vin lev USr STr st)))))

(defun G-patterner
  "Takes a pattern of maps and triggers the URL builder accordingly."
  ([$g$ ["500k" vin nil [:zip-code-tabulation-area _] {:us USr :st nil }]] (big-G $g$ "500k" vin :zip-code-tabulation-area USr))
  ([$g$ [(res :guard #(not (= "500k" %))) vin _ [:zip-code-tabulation-area _] _ ]] (G-err $g$ res vin :zip-code-tabulation-area))
  ([$g$ [res    vin nil [:county _]                   {:us USr :st nil }]] (big-G $g$ res vin :county USr))
  ([$g$ [res    vin _   [lev _  ]                     nil               ]] (G-err $g$ res vin lev))
  ([$g$ [res    vin nil [lev _  ]                     {:us nil :st _   }]] (G-err $g$ res vin lev))
  ([$g$ [res    vin "*" [lev _  ]                     {:us nil :st _   }]] (G-err $g$ res vin lev))
  ([$g$ [res    vin nil [lev _  ]                     {:us USr :st _   }]] (scope $g$ res vin lev USr))
  ([$g$ [res    vin "*" [lev _  ]                     {:us USr :st _   }]] (scope $g$ res vin lev USr))
  ([$g$ [res    vin _   [lev _  ]                     {:us USr :st nil }]] (scope $g$ res vin lev USr))
  ([$g$ [res    vin st  [lev _  ]                     {:us USr :st STr }]] (scope $g$ res vin lev USr STr st))
  ([$g$ & anthing-else ]                                                   ""))


(defn G-pattern-cfg
  "Creates a configuration for URL construction based on user input and geoKeyMap
  configuration file (EDN)."
  [$g$ {:keys [vintage geoResolution] {:keys [state] :as geoHierarchy} :geoHierarchy}]
  (let [level     (last geoHierarchy)
        geoScopes (get-in $g$ [(key level) (keyword vintage) :scopes])
        pattern   [geoResolution vintage state level geoScopes]]
    pattern))

(defn C-G-pattern->url
  [$g$ args]
  (->> (G-pattern-cfg $g$ args)
       (G-patterner $g$)))

(def $url$ (atom ""))
(def $res$ (atom []))
(def $err$ (atom {}))

(def $GET$-C-GeoJSON ($GET$ :raw "Census GeoJSON" $url$ $res$ $err$))

(defn IOE-C-GeoJSON
  "Internal function for calling Github cartography 'API' for GeoJSON"
  [$g$]
  (fn [=I= =O= =E=]
    (take! =I=
      (fn [args]
        (let [url (C-G-pattern->url $g$ args)
              =str= (chan 1 (map js/JSON.parse))]
          (if (= "" url)
              (put! =E= "Invalid GeoJSON request. Please check arguments against requirements.")
              (do ($GET$-C-GeoJSON (to-chan [url]) =str= =E=)
                  (pipe =str= =O=))))))))



;      e            888                       d8
;     d8b      e88~\888   /~~~8e  888-~88e  _d88__  e88~~8e  888-~\  d88~\
;    /Y88b    d888  888       88b 888  888b  888   d888  88b 888    C888
;   /  Y88b   8888  888  e88~-888 888  8888  888   8888__888 888     Y88b
;  /____Y88b  Y888  888 C888  888 888  888P  888   Y888    , 888      888D
; /      Y88b  "88_/888  "88_-888 888-_88"   '88_/  "88___/  888    \_88P
;                                 888
;



(defn GEOIDS<-$g$+args
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
  (let [GEOIDS (GEOIDS<-$g$+args $g$ args)]
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

(def $url-3$ (atom ""))
(def $res-3$ (atom []))
(def $err-3$ (atom {}))

(def $GET$-C-GeoCLJ ($GET$ :json "Census GeoJSON (for merge)" $url-3$ $res-3$ $err-3$))


(defn =cfg=C-GeoCLJ
  "
  Internal function for calling Github cartography 'API' for GeoJSON
  "
  [$g$]
  (fn [=args= =cfg=]
    (take! =args=
      (fn [args]
        (let [url   (C-G-pattern->url        $g$ args)
              xform (xf-mergeable<-GeoCLJS   $g$ args)
              g-key (first (GEOIDS<-$g$+args $g$ args))]
          (if (= "" url)
              (put! =cfg= "Invalid GeoJSON request. Please check arguments against requirements.")
              (put! =cfg= {:url       url
                           :xform     xform
                           :getter    $GET$-C-GeoCLJ
                           :filter-id g-key})))))))

(def cfg>cfg=C-GeoCLJ [=cfg=C-GeoCLJ true])
