(ns geoAPI.core
  (:require
    [cljs.core.async
     :refer [chan put! take! >! <! close! pipeline-async pipeline]
     :refer-macros [go]]
    [clojure.string :as s]
    [cljs.pprint :refer [pprint]]
    [defun.core :refer-macros [defun]]
    [geojson.core
     :refer [geo+config->mkdirp->fsW!]]
    [utils.core
     :refer [throw-err strs->keys keys->strs map-idcs-range map-over-keys
             I=O<<=IO= Icb<<=IO= IO-ajax-GET-json xfxf<< xf!<< xf<<
             json-geo-args?->clj-keys]]
    [geojson.index :refer [geoKeyMap]]))

;; NOTE: If you need to increase memory of Node in Shadow... Eval in REPL:
(comment
  (shadow.cljs.devtools.api/node-repl {:node-args ["--max-old-space-size=8192"]}))

(def base-url "https://raw.githubusercontent.com/loganpowell/census-geojson/master/GeoJSON")

(defn geo-error
  [res vin lev]
  (let [e {:level         (str "No GeoJSON found for " (name lev) " at this scope")
           :in_vintage    vin
           :at_resolution res}]
    (if-let [vins (get-in geoKeyMap [lev])]
      (-> (assoc e
            :guidance          "...:vintage {...:scope [...resolution]} sets available for this geography:"
            :scopes_by_vintage (map-over-keys #(get-in % [:scopes]) vins))
          js/Error.)
      (-> (assoc e
            :guidance          (str "No sets available for " (name lev) ".")
            :all_geographies   (map key geoKeyMap))
          js/Error.))))

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
     (cond
       (and st? STr?)                  (geo-url-builder res vin lev st) ;asks for state, state available
       (and us? USr?)                  (geo-url-builder res vin lev)    ;asks for us, us available
       (and (and st? USr?) (not STr?)) (geo-url-builder res vin lev)    ;asks for state, state unavailable, us available
       :else                           (geo-error res vin lev)))))

(defn lg-warn->geo
  ([res vin lev USr]        (lg-warn->geo res vin lev USr nil nil))
  ([res vin lev USr STr]    (lg-warn->geo res vin lev USr STr nil))
  ([res vin lev USr STr st]
   (let [strs
         ["Warning, you are about to make a large GeoJSON request."
          "This may take some time -> consider local data caching."
          "The response may also cause VM heap capacity overflow."
          "Node heap may be increased via `--max-old-space-size=`"]]
     (do (doseq [s strs] (prn s))
         (geo-scoper res vin lev USr STr st)))))

(defun geo-pattern-matcher
  "
  Takes a pattern of maps and triggers the URL builder accordingly
  "
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
  (geo-url-composer
    {:vintage       "2000"
     :sourcePath    ["acs" "acs5"]
     :geoHierarchy  {:state "01"
                     :county "*"}
     :geoResolution "500k"
     :values        ["B01001_001E"]})
                    ; :statsKey      stats-key})
  (geo-url-composer
    {:vintage       "2016"
     :sourcePath    ["acs" "acs5"]
     :geoHierarchy  {:county "*"}
     :geoResolution "500k"
     :values        ["B01001_001E"]})

  (geo-url-composer
    {:vintage       "2016"
     :sourcePath    ["acs" "acs5"]
     :geoHierarchy  {:state "01"
                     :county "001"
                     :tract "*"}
     :geoResolution "500k"
     :values        ["B01001_001E"]})

  (geo-url-composer
    {:vintage       "2016"
     :sourcePath    ["acs" "acs5"]
     :geoHierarchy  {:state "01"
                     :county "001"
                     :someting-non-existant "*"}
     :geoResolution "500k"
     :values        ["B01001_001E"]})

  (geo-url-composer
    {:vintage       "2016"
     :sourcePath    ["acs" "acs5"]
     :geoHierarchy  {:state "*"
                     :tract "*"}
     :geoResolution "500k"
     :values        ["B01001_001E"]})
  (geo-url-composer
    {:vintage       "2016"
     :sourcePath    ["acs" "acs5"]
     :geoHierarchy  {:state "*"
                     :zip-code-tabulation-area "*"}
     :geoResolution "500k"
     :values        ["B01001_001E"]}))
;; ===============================================

(defn IO-pp->census-GeoJSON
  "
  Internal function for calling the Census API using a Clojure Map and getting
  stats returned as a clojure map.
  "
  [=I= =O=]
  (go (let [I     (<! =I=)
            args  (json-geo-args?->clj-keys I)
            url   (geo-url-composer args)
            =url= (chan 1)]
        (prn url)
        (>! =url= url)
        ; IO-ajax-GET closes the =res= chan; pipeline-async closes the =url= when =res= is closed
        (pipeline-async 1 =O= (I=O<<=IO= IO-ajax-GET-json) =url=)
        (close! =url=))))
        ; =O= chan is closed by the consumer; pipeline closes the =res= when =O= is closed

;; Examples ==============================

#_(let [=I= (chan 1)
        =O= (chan 1 (map throw-err))]
    (go (>! =I= {:vintage      "2016"
                 :sourcePath   ["acs" "acs5"]
                 :geoHierarchy {:state "12" :state-legislative-district-_upper-chamber_ "*"}
                 ;:geoHierarchy {:county "*"} ;; @ 30 seconds
                 ;:geoHierarchy {:zip-code-tabulation-area "*"} ; # 1 min - 3 min for completion
                 :geoResolution "500k"
                 :values       ["B01001_001E" "NAME"]
                 :predicates   {:B00001_001E "0:30000"}})
        (IO-pp->census-GeoJSON =I= =O=)
        ;(if (= (type (<! =O=)) cljs.core/List) ;; TODO: use this kind of functionality in merger/core to dispatch the geoJSON request only if response valid from stats API...
        ;  (pprint "GOOD TO GO")
        ;  (pprint "brrrr.... "))
        (prn (<! =O=))
        (close! =I=)
        (close! =O=)))
;; =======================================


(defn getCensusGeoJSON
  "
  Library function, which takes a JSON object as input, constructs a call to get
  Github raw file and returns GeoJSON.
  "
  ([args cb] (getCensusGeoJSON args cb false))
  ([args cb url?]
   (if url?
     ((Icb<<=IO= IO-pp->census-GeoJSON) args
       #(cb #js {:url      url
                 :response (js/JSON.stringify (clj->js %))}))
     ((Icb<<=IO= IO-pp->census-GeoJSON) args
       #(cb (js/JSON.stringify (clj->js %)))))))


;; Examples  ========================================

#_(getCensusGeoJSON #js {"vintage"       "2016"
                         "sourcePath"    #js ["acs" "acs5"]
                         "geoHierarchy"  #js {"state" "12" "state legislative district (upper chamber)" "*"}
                         ;"geoHierarchy"  #js {"county" "*"} ; @1 min
                         ;"geoHierarchy"  #js {"zip code tabulation area" "*"} ; @1 min - @3 min with js/JSON.stringify
                         "geoResolution" "500k"
                         "values"        #js ["B01001_001E" "NAME"]
                         "predicates"    #js {"B00001_001E" "0:30000"}}
                    #(geo+config->mkdirp->fsW!
                       {:directory "./src/json/"
                        :filepath "./src/json/legislative-only.json"
                        :json %}))
                  ;#(js/console.log %))
                  ;true)
;; ===================================================
