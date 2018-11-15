(ns census.geoAPI.core
  (:require
    [cljs.core.async    :refer [>! <! chan close! pipeline-async]
                        :refer-macros [go]]
    [cuerdas.core       :refer [join]]
    [defun.core         :refer-macros [defun]]
    [census.wmsAPI.core :refer [Icb<-wms-args<<=IO=]]
    [census.utils.core  :refer [$geoKeyMap$ URL-GEOKEYMAP URL-GEOJSON
                                map-over-keys keys->strs error throw-err err-type
                                IO-cache-GET-edn I=O<<=IO= IO-ajax-GET-json]]))



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
  ([$g$ ["500k" vin _   [:zip-code-tabulation-area _] {:us USr :st nil }]]         (lg-warn->geo $g$ "500k" vin :zip-code-tabulation-area USr)) ; big!
  ([$g$ [(res :guard #(not (= "500k" %))) vin _ [:zip-code-tabulation-area _] _ ]] (geo-error $g$ res vin :zip-code-tabulation-area)) ; no other than 500k
  ([$g$ [res    vin _   [:county _]                   {:us USr :st nil }]]         (lg-warn->geo $g$ res vin :county USr)) ; big!
  ([$g$ [res    vin _   [lev _  ]                     nil               ]]         (geo-error    $g$ res vin lev))     ; no valid geography
  ([$g$ [res    vin nil [lev _  ]                     {:us nil :st _   }]]         (geo-error    $g$ res vin lev))     ; tries US, only states
  ([$g$ [res    vin "*" [lev _  ]                     {:us nil :st _   }]]         (geo-error    $g$ res vin lev))     ; tries US, only states
  ([$g$ [res    vin nil [lev _  ]                     {:us USr :st _   }]]         (geo-scoper   $g$ res vin lev USr)) ; tries to get all US
  ([$g$ [res    vin "*" [lev _  ]                     {:us USr :st _   }]]         (geo-scoper   $g$ res vin lev USr)) ; tries to get all US
  ([$g$ [res    vin _   [lev _  ]                     {:us USr :st nil }]]         (geo-scoper   $g$ res vin lev USr)) ; no states, try :us
  ([$g$ [res    vin st  [lev _  ]                     {:us USr :st STr }]]         (geo-scoper   $g$ res vin lev USr STr st)) ; try state
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
  [=I= =O=]
  (let [=GKM= (chan 1)
        =url= (chan 1)]
    ((I=O<<=IO= (IO-cache-GET-edn $geoKeyMap$)) URL-GEOKEYMAP =GKM=)
    (go (let [args (<! =I=)
              $g$  (<! =GKM=)
              url  (geo-url-composer $g$ args)]
          (prn url)
          (if (= "" url)
              (do (>! =O= "Invalid GeoJSON request. Please check arguments against requirements.")
                  (close! =GKM=)
                  (close! =url=))
              (do (prn "Inside IO-pp->census-GeoJSON:")
                  (js/console.log (js/process.memoryUsage))
                  (>! =url= url)
                  ; IO-ajax-GET closes the =res= chan; pipeline-async closes the =url= when =res= is closed
                  (pipeline-async 1 =O= (I=O<<=IO= IO-ajax-GET-json) =url=)
                  (close! =GKM=)
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


(comment (defn getCensusGeoJSON
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
                #(cb (js/JSON.stringify (clj->js %))))))))


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

; TODO Fix Icb+args<<=IO= function. The census.test-args are working but not census.test-js-args