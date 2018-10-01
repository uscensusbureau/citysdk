(ns geoAPI.core
  (:require [cljs.core.async
             :as async
             :refer [chan put! take! >! <! pipe timeout close! alts! pipeline-async pipeline]]
            [cljs.core.async :refer-macros [go go-loop alt!]]
            [ajax.core :as http :refer [GET POST]]
            [oops.core :as obj]
            [clojure.string :as s]
            [cljs.pprint :refer [pprint]]
            ["dotenv" :as env]
            [clojure.repl :refer [source]]
            [defun.core :refer-macros [defun]]
            [utils.core :refer [strs->keys keys->strs map-idcs-range map-over-keys json-args->clj-keys =IO=>I=O= IO-ajax-GET-json xfxf<< xf!<<]]
            [geojson.index :refer [geoKeyMap]]))

;; NOTE: If you need to increase memory of Node in Shadow... Eval in REPL:
;; (shadow.cljs.devtools.api/node-repl {:node-args ["--max-old-space-size=8192"]})

(def base-url "https://raw.githubusercontent.com/loganpowell/census-geojson/master/GeoJSON")

(defn geo-error
  [res vin lev]
  (let [strs [(str "No GeoJSON found for " (name lev) "s at this scope")
              (str "in vintage: " vin)
              (str "at resolution: " res)
              (str "...:vintage {...:scope [...resolution]} sets available for this geography:")
              (if-let [vins (get-in geoKeyMap [lev])]
                (map-over-keys #(get-in % [:scopes]) vins)
                (str "No sets available for " (name lev)))]]
    strs))


(defn geo-url-builder
  "Composes a URL to call raw GeoJSON files hosted on Github"
  ([res vin lev] (geo-url-builder res vin lev nil))
  ([res vin lev st]
   (if (nil? st)
     (str (s/join "/" [base-url res vin (name lev)]) ".json")
     (str (s/join "/" [base-url res vin st (name lev)]) ".json"))))

(defn geo-scoper
  ([res vin lev USr]     (geo-scoper res vin lev USr nil nil))
  ([res vin lev USr STr] (geo-scoper res vin lev USr STr nil))
  ([res vin lev USr STr st]
   (let [STr? (not (nil? (some #(= res %) STr)))
         USr? (not (nil? (some #(= res %) USr)))
         st?  (not (nil? st))
         us?  (nil? st)]
     ;(prn (str "vin: " vin " res: " res " lev: " lev " USr: " USr " STr: " STr " st: " st)))))
     (cond
       (and st? STr?)                  (geo-url-builder res vin lev st) ;asks for state, state available
       (and us? USr?)                  (geo-url-builder res vin lev)    ;asks for us, us available
       (and (and st? USr?) (not STr?)) (geo-url-builder res vin lev)    ;asks for state, state unavailable, us available
       :else                           (geo-error res vin lev)))))

(defn lg-warn->geo
  ([res vin lev USr]      (lg-warn->geo res vin lev USr nil nil))
  ([res vin lev USr STr]  (lg-warn->geo res vin lev USr STr nil))
  ([res vin lev USr STr st]
   (let [strs ["Warning, you are about to make a large/very large GeoJSON request."
               "Expect the request to take some time and consider local caching."
               "This request may also cause default VM heap capacity to overflow."
               "Heap capacity may be increase via `--max-old-space-size=`."]]
     (do (prn strs)
         (geo-scoper res vin lev USr STr st)))))

(defun geo-pattern-matcher
  "
  Takes a pattern of maps and triggers the URL builder accordingly
  "
  ([[nil _   _   _         _                    ]] "")                                  ; no request for GeoJSON
  ([["500k" vin (_ :guard #(or (nil? %) (= "*" %))) [:zip-code-tabulation-area _]{:us USr :state nil }]] (lg-warn->geo "500k" vin :zip-code-tabulation-area USr nil st)) ; big request!
  ([["500k" vin (_ :guard #(or (nil? %) (= "*" %))) [:county _]                  {:us USr :state nil }]] (lg-warn->geo "500k" vin :county USr nil st)) ; big request!
  ([[res vin _   [lev _  ] nil                  ]] (geo-error res vin lev))             ; no valid geography
  ([[res vin _   [lev _  ] {:us USr :state nil }]] (geo-scoper res vin lev USr))        ; no state resolutions available, try :us
  ([[res vin nil [lev "*"] {:us USr :state _   }]] (geo-scoper res vin lev USr))        ; tries to get geo for all us
  ([[res vin "*" [lev "*"] {:us USr :state _   }]] (geo-scoper res vin lev USr))        ; tries to get geo for all us
  ([[res vin st  [lev _  ] {:us USr :state STr }]] (geo-scoper res vin lev USr STr st)) ; tries to get geo for a specific state
  ([[res vin nil [lev _  ] {:us nil :state _   }]] (geo-error res vin lev))             ; trying to get US level, when only state is available
  ([[res vin "*" [lev _  ] {:us nil :state _   }]] (geo-error res vin lev)))            ; trying to get US level, when only state is available

(defn geo-pattern-maker
  [{:keys [vintage geoResolution geoHierarchy]}]
  (let [level (last geoHierarchy)
        {:keys [state]} geoHierarchy
        geoScopes (get-in geoKeyMap [(key level) (keyword vintage) :scopes])
        pattern [geoResolution vintage state level geoScopes]]
    pattern))

(defn geo-url-composer
  [args]
  (-> (geo-pattern-maker args) geo-pattern-matcher))

;; Psedo
; create a map/index for :sourcePath -> vintage manipulation (e.g., CBP: [20)

;; Examples ====================================
(comment
  (geo-url-composer {:vintage       "2016"
                     :sourcePath    ["acs" "acs5"]
                     :geoHierarchy  {:state "01"
                                     :county "*"}
                     :geoResolution "500k"
                     :values        ["B01001_001E"]})
                    ; :statsKey      stats-key})
  (geo-url-composer {:vintage       "2016"
                     :sourcePath    ["acs" "acs5"]
                     :geoHierarchy  {:county "*"}
                     :geoResolution "500k"
                     :values        ["B01001_001E"]})

  (geo-url-composer {:vintage       "2016"
                     :sourcePath    ["acs" "acs5"]
                     :geoHierarchy  {:state "01"
                                     :county "001"
                                     :tract "*"}
                     :geoResolution "500k"
                     :values        ["B01001_001E"]})

  (geo-url-composer {:vintage       "2016"
                     :sourcePath    ["acs" "acs5"]
                     :geoHierarchy  {:state "01"
                                     :county "001"
                                     :someting-non-existant "*"}
                     :geoResolution "500k"
                     :values        ["B01001_001E"]})

  (geo-url-composer {:vintage       "2016"
                     :sourcePath    ["acs" "acs5"]
                     :geoHierarchy  {:state "*"
                                     :tract "*"}
                     :geoResolution "500k"
                     :values        ["B01001_001E"]})
  (geo-url-composer {:vintage       "2016"
                     :sourcePath    ["acs" "acs5"]
                     :geoHierarchy  {:state "*"
                                     :zip-code-tabulation-area "*"}
                     :geoResolution "500k"
                     :values        ["B01001_001E"]}))

;; ===============================================

(defn getCensusGeoJSON
  "
  Library function, which takes a JSON object as input, constructs a call to get
  Github raw file and returns GeoJSON.
  "
  ([json-args cb]
   (let [args  (json-args->clj-keys json-args :geoHierarchy)
         url   (geo-url-composer args)
         =res= (chan 1)]
     (pprint args)
     (pprint (str url))
     (do ((=IO=>I=O= IO-ajax-GET-json) url =res=)
         (take! =res= #(cb (clj->js %)))))))

;; Examples  ========================================

(getCensusGeoJSON #js {"vintage"       "2016"
                       "sourcePath"    #js ["acs" "acs5"]
                       ;"geoHierarchy"  #js {"state" "12" "state legislative-district (upper chamber)" "*"}
                       "geoHierarchy"  #js {"zip code tabulation area" "*"} ; @1 min - @3 min with js/JSON.stringify
                       "geoResolution" "500k"
                       "values"        #js ["B01001_001E" "NAME"]
                       "predicates"    #js {"B00001_001E" "0:30000"}}
               #(js/console.log (js/JSON.stringify %)))

;; ===================================================

(defn IO-census-GeoJSON
  "
  Internal function for calling the Census API using a Clojure Map and getting
  stats returned as a clojure map.
  "
  [=I= =O=]
  (go (let [args  (<! =I=)
            url   (geo-url-composer args)
            =url= (chan 1)]
        (pprint (str url))
        (>! =url= url)
        ; IO-ajax-GET closes the =res= chan; pipeline-async closes the =url= when =res= is closed
        (pipeline-async 1 =O= (=IO=>I=O= IO-ajax-GET-json) =url=))))
        ; =O= chan is closed by the consumer; pipeline closes the =res= when =O= is closed

;; Examples ==============================

(let [=I= (chan 1)
      =O= (chan 1)]
  (go (>! =I= {:vintage      "2016"
               :sourcePath   ["acs" "acs5"]
               ;:geoHierarchy {:state "12" :state-legislative-district-_upper-chamber_ "*"}
               ;:geoHierarchy {:county "*"} ;; @ 30 seconds
               :geoHierarchy {:zip-code-tabulation-area "*"} ; # 1 min - 3 min for completion
               :geoResolution "500k"
               :values       ["B01001_001E" "NAME"]
               :predicates   {:B00001_001E "0:30000"}})
      (IO-census-GeoJSON =I= =O=)
      ;(if (= (type (<! =O=)) cljs.core/List) ;; TODO: use this kind of functionality in merger/core to dispatch the geoJSON request only if response valid from stats API...
      ;  (pprint "GOOD TO GO")
      ;  (pprint "brrrr.... "))
      (prn (<! =O=))
      (close! =I=)
      (close! =O=)))

;; =======================================

