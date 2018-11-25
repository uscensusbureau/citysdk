(ns census.geoAPI.core
  (:require
    [cljs.core.async    :refer [>! <! chan close! to-chan]
                        :refer-macros [go alt!]]
    [cuerdas.core       :refer [join]]
    [defun.core         :refer-macros [defun]]
    ;[net.cgrand.xforms  :as x]
    ;[census.wmsAPI.core :refer [Icb<-wms-args<<=IO=]]
    [census.utils.core  :refer [$geoKeyMap$ URL-GEOKEYMAP URL-GEOJSON
                                xf<< educt<< I-<I= =O?>-cb $GET$
                                map-over-keys keys->strs error throw-err err-type]]))
    ;[test.fixtures.core   :refer [*g*]]))



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
            [(map-over-keys #(get-in % [:scopes]) vins)]))
      (-> (conj e
            (str "Sorry, there is no GeoJSON for " (name lev) " available.")
            "Try one of these instead: "
            (vec (map #(keys->strs (name (key %)))
                      $g$)))))))


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
          "Node heap may be increased via `--max-old-space-size=`"]]
     (do (doseq [s strs] (prn s))
         (geo-scoper $g$ res vin lev USr STr st)))))

(defun geo-pattern-matcher
  "
  Takes a pattern of maps and triggers the URL builder accordingly
  "
  ([$g$ ["500k"         vin _   [:zip-code-tabulation-area _] {:us USr :st nil }]] (lg-warn->geo $g$ "500k" vin :zip-code-tabulation-area USr)) ; big!
  ([$g$ [(res :guard #(not (= "500k" %))) vin _ [:zip-code-tabulation-area _] _ ]] (geo-error    $g$ res vin :zip-code-tabulation-area)) ; no other than 500k
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

(def $GET$-census-GeoJSON
  ($GET$ :json "Unsuccessful Census GeoJSON request"))

(defn IOE-census-GeoJSON
  "
  Internal function for calling Github cartography 'API' for GeoJSON
  "
  [$g$]
  (fn [=I= =O= =E=]
    (go (let [args  (<! =I=)
              url   (geo-url-composer $g$ args)]
          (if (= "" url)
              (>! =E= "Invalid GeoJSON request. Please check arguments against requirements.")
              ($GET$-census-GeoJSON (to-chan [url]) =O= =E=))))))



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



(defn ids<-$g$<-args
  "
  Takes the request argument and pulls out a vector of the component identifiers
  from the geoKeyMap, which is used to construct the UID for the GeoJSON. Used
  in deep-merging with statistics.
  "
  [$g$]
  (fn [{:keys [geoHierarchy vintage]}]
    (let [[& ids] (get-in $g$ [(key (last geoHierarchy)) (keyword vintage) :id<-json])]
      ids)))

(defn geoid<-feature
  "
  Takes the component ids from with the GeoJSON and a single feature to
  generate a :GEOID if not available within the GeoJSON.
  "
  [GEOIDS<-JSON] ;; <- Note: These args come in as a '() list...
  (xf<< (fn [rf acc this]
          (rf acc {(apply str (map (:properties this) GEOIDS<-JSON)) this})))) ;  from @cgrand



(defn xf-features<-geoids
  [ids]
  (comp
    (mapcat :features)
    (geoid<-feature ids)))
    ;(x/into [])))



(defn -<IO-pp-census-geos>-
  [$g$]
  (fn [=I= =O= =E=]
    (go (let [args       (<! =I=)
              ids        ((ids<-$g$<-args $g$) args)
              =features= (chan 1 (xf-features<-geoids ids))]
          (prn args)
          (prn ids)
          ((IOE-census-GeoJSON $g$) (to-chan [args]) =features= =E=)
          (alt! =features= ([O] (>! =O= O))
                =E=        ([E] (>! =E= E)))
          (close! =features=)))))
