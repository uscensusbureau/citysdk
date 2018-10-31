(ns geoAPI.core
  (:require
    [cljs.core.async :as <|]
    [clojure.string :as s]
    [defun.core :refer-macros [defun]]
    [geojson.core :refer [geo+config->mkdirp->fsW!]]
    [geojson.index :refer [geoKeyMap]]
    [wmsAPI.core :as wms]
    [utils.core :as ut]
    [test.core :as ts]
    [cljs.reader :as r]
    [ajax.core :refer [GET POST]]))


;; NOTE: If you need to increase memory of Node in Shadow... Eval in REPL:
(comment
  (shadow.cljs.devtools.api/node-repl {:node-args ["--max-old-space-size=8192"]}))


(defn geo-error
  [res vin lev] ; FIXME add geoKeyMap as argument --------------------------------------------------------------------------
  (let [e {:level         (str "No GeoJSON found for " (name lev) " at this scope")
           :in_vintage    vin
           :at_resolution res}]
    (if-let [vins (get-in geoKeyMap [lev])]
      (-> (assoc e
            :guidance          "...:vintage {...:scope [...resolution]} sets available for this geography:"
            :scopes_by_vintage (ut/map-over-keys #(get-in % [:scopes]) vins))
          ut/error)
      (-> (assoc e
            :guidance          (str "No sets available for " (name lev) ".")
            :all_geographies   (map key geoKeyMap))
          ut/error))))

(defn geo-url-builder
  "Composes a URL to call raw GeoJSON files hosted on Github"
  ([res vin lev] (geo-url-builder res vin lev nil))
  ([res vin lev st]
   (if (nil? st)
     (str (s/join "/" [ut/base-url-geojson res vin (name lev)]) ".json")
     (str (s/join "/" [ut/base-url-geojson res vin st (name lev)]) ".json"))))

(defn geo-scoper
  ([res vin lev USr]     (geo-scoper res vin lev USr nil nil))
  ([res vin lev USr STr] (geo-scoper res vin lev USr STr nil))
  ([res vin lev USr STr st] ; FIXME add geoKeyMap as argument --------------------------------------------------------------------------
   (let [STr? (not (nil? (some #(= res %) STr)))
         USr? (not (nil? (some #(= res %) USr)))
         st?  (not (nil? st))
         us?  (nil? st)]
     (cond
       (and st? STr?)                  (geo-url-builder res vin lev st) ;asks for state, state available
       (and us? USr?)                  (geo-url-builder res vin lev)    ;asks for us, us available
       (and (and st? USr?) (not STr?)) (geo-url-builder res vin lev)    ;asks for state, state unavailable, us available
       :else                           (geo-error res vin lev))))) ; FIXME add geoKeyMap as argument --------

(defn lg-warn->geo
  ([res vin lev USr]     (lg-warn->geo res vin lev USr nil nil))
  ([res vin lev USr STr] (lg-warn->geo res vin lev USr STr nil))
  ([res vin lev USr STr st]
   (let [strs
         ["Warning, you are about to make a large GeoJSON request."
          "This may take some time -> consider local data caching."
          "The response may also cause VM heap capacity overflow."
          "Node heap may be increased via `--max-old-space-size=`"]]
     (do (doseq [s strs] (prn s))
         (geo-scoper res vin lev USr STr st))))) ; FIXME add geoKeyMap as argument ------------------

(defun geo-pattern-matcher
  "
  Takes a pattern of maps and triggers the URL builder accordingly
  " ; FIXME add geoKeyMap as argument --------------------------------------------------------------------------
  ([[nil    _   _   _                            _]]                  "") ; no request for GeoJSON
  ([["500k" vin _   [:zip-code-tabulation-area _]{:us USr :st nil }]] (lg-warn->geo "500k" vin :zip-code-tabulation-area USr)) ; big!
  ([["500k" vin _   [:county _]                  {:us USr :st nil }]] (lg-warn->geo "500k" vin :county USr)) ; big!
  ([[res    vin _   [lev _  ]                    nil               ]] (geo-error res vin lev))             ; no valid geography
  ([[res    vin nil [lev _  ]                    {:us nil :st _   }]] (geo-error res vin lev))             ; tries US, only states
  ([[res    vin "*" [lev _  ]                    {:us nil :st _   }]] (geo-error res vin lev))             ; tries US, only states
  ([[res    vin nil [lev _  ]                    {:us USr :st _   }]] (geo-scoper res vin lev USr))        ; tries to get all US
  ([[res    vin "*" [lev _  ]                    {:us USr :st _   }]] (geo-scoper res vin lev USr))        ; tries to get all US
  ([[res    vin _   [lev _  ]                    {:us USr :st nil }]] (geo-scoper res vin lev USr))        ; no states, try :us
  ([[res    vin st  [lev _  ]                    {:us USr :st STr }]] (geo-scoper res vin lev USr STr st))); try state

(defn geo-pattern-maker
  [{:keys [vintage geoResolution]
    {:keys [state] :as geoHierarchy} :geoHierarchy}] ; FIXME add geoKeyMap as argument -----------------
  (let [level     (last geoHierarchy)
        geoScopes (get-in geoKeyMap [(key level) (keyword vintage) :scopes])
        pattern   [geoResolution vintage state level geoScopes]]
    pattern))

(defn geo-url-composer
  [args] ; FIXME add geoKeyMap as argument --------------------------------------------------------------------------
  (-> (geo-pattern-maker args) geo-pattern-matcher))

(defn IO-pp->census-GeoJSON
  "
  Internal function for calling the Census API using a Clojure Map and getting
  stats returned as a clojure map.
  "
  [=I= =O=]
  (<|/go (let [args  (<|/<! =I=)
               url   (geo-url-composer args)
               =url= (<|/chan 1)]
           (prn url)
           (<|/>! =url= url)
           ; IO-ajax-GET closes the =res= chan; pipeline-async closes the =url= when =res= is closed
           (<|/pipeline-async 1 =O= (ut/I=O<<=IO= ut/IO-ajax-GET-json) =url=)
           (<|/close! =url=))))
        ; =O= chan is closed by the consumer; pipeline closes the =res= when =O= is closed

(defn IO-ajax-GET-edn
  "
  I/O (chans) API which takes a URL from an input port (=I=), makes a `cljs-ajax`
  GET request to the provided URL and puts the response in the output (=O=) port.
  "
  [=URL= =RES=]
  (let [args {:handler         (fn [r] (<|/go (<|/>! =RES= r) (<|/close! =RES=)))
              :error-handler   (fn [e] (<|/go (<|/>! =RES= (ut/error (get-in e [:parse-error :original-text]))) (<|/close! =RES=)))
              :keywords?       true}]
    (<|/go (GET (<|/<! =URL=) args))))


(let [I (<|/chan 1)
      O (<|/chan 1)]
  (<|/go (<|/>! I "https://raw.githubusercontent.com/loganpowell/census-geojson/master/src/geojson/index.edn")
         (IO-ajax-GET-edn I O)
         (prn (get-in (r/read-string (<|/<! O)) [:county]))))
;; Examples ==============================

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
     ((wms/Icb<-args<<=IO= IO-pp->census-GeoJSON) args
       #(cb #js {:url      (geo-url-composer args)
                 :response (js/JSON.stringify (clj->js %))}))
     ((wms/Icb<-args<<=IO= IO-pp->census-GeoJSON) args
       #(cb (js/JSON.stringify (clj->js %)))))))


;; Examples  ========================================

#_(getCensusGeoJSON
    ;ts/test-js-args-1
    ts/test-js-args-2
    ;ts/test-args-2
    #_#(geo+config->mkdirp->fsW!
         {:directory "./src/json/"
          :filepath "./src/json/legislative-only.json"
          :json %})
    ;#(prn %))
    #(js/console.log %))
  ;true)
;; ===================================================

; TODO Fix Icb+args<<=IO= function. The test-args are working but not test-js-args