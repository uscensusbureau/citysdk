(ns census.geoAPI.core
  (:require
    [cljs.core.async :as <|]
    [clojure.string :as s]
    [defun.core :refer-macros [defun]]
    [census.geojson.core :refer [geo+config->mkdirp->fsW!]]
    [census.wmsAPI.core :as wms]
    [census.utils.core :as ut :refer [$geoKeyMap$]]
    [census.test.core :as ts]))


;; NOTE: If you need to increase memory of Node in Shadow... Eval in REPL:
(comment
  (shadow.cljs.devtools.api/node-repl {:node-args ["--max-old-space-size=8192"]}))


(defn geo-error
  [geoK res vin lev]
  (let [e [(str "No GeoJSON found for " (name lev) " at this scope")
           (str "in vintage: " vin)
           (str "at resolution: " res)]]
    (if-let [vins (get-in geoK [lev])]
      (-> (conj e
            "Note: You may be getting this error due to trying to make a nation-wide (`:us`) call a geography that's only available at the `:st` (state) level"
            (str "For " (str lev) " try one of the following `{:<vintage> {:<scopes> ...`")
            [(ut/map-over-keys #(get-in % [:scopes]) vins)])
          ut/error)
      (-> (conj e
            (str "Sorry, there is no GeoJSON for " (name lev) " available.")
            "Try one of these instead: "
            (vec (map #(ut/keys->strs (name (key %))) geoK)))
          ut/error))))

(defn geo-url-builder
  "Composes a URL to call raw GeoJSON files hosted on Github"
  ([res vin lev] (geo-url-builder res vin lev nil))
  ([res vin lev st]
   (if (nil? st)
     (str (s/join "/" [ut/base-url-geojson res vin (name lev)]) ".json")
     (str (s/join "/" [ut/base-url-geojson res vin st (name lev)]) ".json"))))

(defn geo-scoper
  ([geoK res vin lev USr]     (geo-scoper geoK res vin lev USr nil nil))
  ([geoK res vin lev USr STr] (geo-scoper geoK res vin lev USr STr nil))
  ([geoK res vin lev USr STr st]
   (let [STr? (not (nil? (some #(= res %) STr)))
         USr? (not (nil? (some #(= res %) USr)))
         st?  (not (nil? st))
         us?  (nil? st)]
     (cond
       (and st? STr?)                  (geo-url-builder res vin lev st) ;asks for state, state available
       (and us? USr?)                  (geo-url-builder res vin lev)    ;asks for us, us available
       (and (and st? USr?) (not STr?)) (geo-url-builder res vin lev)    ;asks for state, state unavailable, us available
       :else                           (geo-error geoK res vin lev)))))

(defn lg-warn->geo
  ([geoK res vin lev USr]     (lg-warn->geo geoK res vin lev USr nil nil))
  ([geoK res vin lev USr STr] (lg-warn->geo geoK res vin lev USr STr nil))
  ([geoK res vin lev USr STr st]
   (let [strs
         ["Warning, you are about to make a large GeoJSON request."
          "This may take some time -> consider local data caching."
          "The response may also cause VM heap capacity overflow."
          "Node heap may be increased via `--max-old-space-size=`"]]
     (do (doseq [s strs] (prn s))
         (geo-scoper geoK res vin lev USr STr st)))))

(defun geo-pattern-matcher
  "
  Takes a pattern of maps and triggers the URL builder accordingly
  "
  ([_    [nil    _   _   _                            _]]                  "") ; no request for GeoJSON
  ([geoK ["500k" vin _   [:zip-code-tabulation-area _]{:us USr :st nil }]] (lg-warn->geo geoK "500k" vin :zip-code-tabulation-area USr)) ; big!
  ([geoK ["500k" vin _   [:county _]                  {:us USr :st nil }]] (lg-warn->geo geoK "500k" vin :county USr)) ; big!
  ([geoK [res    vin _   [lev _  ]                    nil               ]] (geo-error    geoK res    vin lev))     ; no valid geography
  ([geoK [res    vin nil [lev _  ]                    {:us nil :st _   }]] (geo-error    geoK res    vin lev))     ; tries US, only states
  ([geoK [res    vin "*" [lev _  ]                    {:us nil :st _   }]] (geo-error    geoK res    vin lev))     ; tries US, only states
  ([geoK [res    vin nil [lev _  ]                    {:us USr :st _   }]] (geo-scoper   geoK res    vin lev USr)) ; tries to get all US
  ([geoK [res    vin "*" [lev _  ]                    {:us USr :st _   }]] (geo-scoper   geoK res    vin lev USr)) ; tries to get all US
  ([geoK [res    vin _   [lev _  ]                    {:us USr :st nil }]] (geo-scoper   geoK res    vin lev USr)) ; no states, try :us
  ([geoK [res    vin st  [lev _  ]                    {:us USr :st STr }]] (geo-scoper   geoK res    vin lev USr STr st))) ; try state

(defn geo-pattern-maker
  [geoK
   {:keys [vintage geoResolution]
    {:keys [state] :as geoHierarchy} :geoHierarchy}]
  (let [level     (last geoHierarchy)
        geoScopes (get-in geoK [(key level) (keyword vintage) :scopes])
        pattern   [geoResolution vintage state level geoScopes]]
    pattern))

(defn geo-url-composer
  [geoK args]
  (->> (geo-pattern-maker geoK args)
       (geo-pattern-matcher geoK)))

(defn IO-pp->census-GeoJSON
  "
  Internal function for calling the Census API using a Clojure Map and getting
  stats returned as a clojure map.
  "
  [=I= =O=]
  (let [=geo= (<|/chan 1)
        =url= (<|/chan 1)]
    ((ut/I=O<<=IO= (ut/IO-cache-GET-edn $geoKeyMap$)) ut/base-url-geoKeyMap =geo=)
    (<|/go (let [args  (<|/<! =I=)
                 geoK  (<|/<! =geo=)
                 url   (geo-url-composer geoK args)]
             (prn url)
             ;(prn geoK)
             (<|/>! =url= url)
             ; IO-ajax-GET closes the =res= chan; pipeline-async closes the =url= when =res= is closed
             (<|/pipeline-async 1 =O= (ut/I=O<<=IO= ut/IO-ajax-GET-json) =url=)
             (<|/close! =geo=)
             (<|/close! =url=)))))
               ; =O= chan is closed by the consumer; pipeline closes the =res= when =O= is closed



;; Examples ==============================



#_(prn ts/test-args-5)

#_(let [=I= (<|/chan 1)
        =O= (<|/chan 1 (map ut/throw-err))]
    (<|/go (<|/>! =I= ts/test-args-6)
           (IO-pp->census-GeoJSON =I= =O=)
           (prn (<|/<! =O=))
           (<|/close! =I=)
           (<|/close! =O=)))

;; =======================================


(defn getCensusGeoJSON
  "
  Library function, which takes a JSON object as input, constructs a call to get
  Github raw file and returns GeoJSON.
  "
  ([args cb] (getCensusGeoJSON args cb false))
  ([args cb url?]
   (if url?
     ((wms/Icb<-wms-args<<=IO= IO-pp->census-GeoJSON) args
       #(cb #js {:url      (geo-url-composer {} args)
                 :response (js/JSON.stringify (clj->js %))}))
     ((wms/Icb<-wms-args<<=IO= IO-pp->census-GeoJSON) args
       #(cb (js/JSON.stringify (clj->js %)))))))


;; Examples  ========================================

#_(getCensusGeoJSON
    ;ts/census.test-js-args-1
    ts/test-js-args-2
    ;ts/census.test-args-2
    #_#(geo+config->mkdirp->fsW!
         {:directory "./src/json/"
          :filepath "./src/json/legislative-only.json"
          :json %})
    ;#(prn %))
    #(js/console.log %))
  ;true)
;; ===================================================

; TODO Fix Icb+args<<=IO= function. The census.test-args are working but not census.test-js-args