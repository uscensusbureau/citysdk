(ns census.statsAPI.core
  (:require
    [cljs.core.async    :refer [>! <! chan promise-chan close! take! pipeline-async]
                        :refer-macros [go]]
    [cuerdas.core       :refer [join numeric? parse-number]]
    [net.cgrand.xforms  :as x]
    [census.wmsAPI.core :refer [Icb<-wms-args<<=IO=]]
    [census.utils.core  :refer [I=O<<=IO= IO-ajax-GET-json xf!<< educt<< xf<<
                                amap-type vec-type throw-err map-idcs-range
                                keys->strs js->args strs->keys
                                URL-WMS URL-STATS]]))

(defn kv-pair->str [[k v] separator]
  (join separator [(name k) (str v)]))

(defn stats-url-builder
  "Composes a URL to call Census' statistics API"
  [{:keys [vintage sourcePath geoHierarchy values predicates statsKey]}]
  (str URL-STATS
       (str vintage)
       (join (map #(str "/" %) sourcePath))
       "?get="
       (if (some? values)
           (join "," values)
           "")
       (if (some? predicates)
           (str "&" (str (join "&" (map #(kv-pair->str % "=") predicates))))
           "")
       (keys->strs
         (if (= 1 (count geoHierarchy))
             (str "&for=" (kv-pair->str (first geoHierarchy) ":"))
             (str "&in="  (join "%20" (map #(kv-pair->str % ":") (butlast geoHierarchy)))
                  "&for=" (kv-pair->str (last geoHierarchy) ":"))))
       (if (not (nil? statsKey))
           (str "&key=" statsKey))))


(defn parse-if-number
  "
  Conditionally translates a string into an integer or float if so coercible.
  If not, returns the original string.
  "
  [s]
  (if (numeric? s)
      (parse-number s)
      s))

(defn xf!-csv-response->JSON
  "
  Stateful transducer, which stores the first item as a list of a keys to apply
  (via `zipmap`) to the rest of the items in a collection. Serves to turn the
  Census API response into a more conventional JSON format.

  If provided `:keywords` as an argument, will return a map with Clojure keys.
  Otherwise, will return map keys as strings.
  "
  ;([args] (xf!-csv-response->JSON args nil))
  [{:keys [values predicates]}] ;?keywords]
  (let [parse-range [0 (+ (count values) (count predicates))]]
    (xf!<<
      (fn [state rf acc this]
        (let [prev @state]
          (if (nil? prev)
            ;(if (= ?keywords :keywords)
              (vreset! state (mapv strs->keys this))
              ;(do (vreset! state this) nil)
            ;(if (= ?keywords :keywords)
              (rf acc
                  (zipmap (mapv keyword @state)
                          (map-idcs-range parse-if-number
                                          parse-range
                                          this)))))))))
              ;(rf acc
              ;    (zipmap @state
              ;            (map-idcs-range parse-if-number
              ;                            parse-range
              ;                            this)))))))))))


; Examples ===========================================

#_(eduction (xf!-csv-response->JSON
              {:values ["B01001_001E" "NAME" "B00001_001E"]})
              ;:keywords)
             ;conj
            [["B01001_001E","NAME","B00001_001E","state","state legislative district (upper chamber)"],
             ["486727","State Senate District 4 (2016), Florida","28800","12","004"],
             ["491350","State Senate District 6 (2016), Florida","29938","12","006"],
             ["494981","State Senate District 40 (2016), Florida","29661","12","040"]])

; =>

; ({"B01001_001E" 486727,
;  "NAME" "State Senate District 4 (2016), Florida",
;  "B00001_001E" 28800,
;  "state" "12",
;  "state legislative district (upper chamber)" "004"}
; {"B01001_001E" 491350,
;  "NAME" "State Senate District 6 (2016), Florida",
;  "B00001_001E" 29938,
;  "state" "12",
;  "state legislative district (upper chamber)" "006"}
; {"B01001_001E" 494981,
;  "NAME" "State Senate District 40 (2016), Florida",
;  "B00001_001E" 29661,
;  "state" "12",
;  "state legislative district (upper chamber)" "040"})




; ====================================================

; Examples ===========================================


#_(transduce (educt<< (xf!-csv-response->JSON {:values ["B01001_001E" "NAME" "B00001_001E"]}))
             conj
             ; (wrapped in an extra collection [] for testing)
             [[["B01001_001E","NAME","B00001_001E","state","state legislative district (upper chamber)"],
               ["486727","State Senate District 4 (2016), Florida","28800","12","004"],
               ["491350","State Senate District 6 (2016), Florida","29938","12","006"],
               ["494981","State Senate District 40 (2016), Florida","29661","12","040"]]])

; =>
; [({:B01001_001E 486727,
;   :NAME "State Senate District 4 (2016), Florida",
;   :B00001_001E 28800,
;   :state "12",
;   :state-legislative-district-_upper-chamber_ "004"}
;  {:B01001_001E 491350,
;   :NAME "State Senate District 6 (2016), Florida",
;   :B00001_001E 29938,
;   :state "12",
;   :state-legislative-district-_upper-chamber_ "006"}
;  {:B01001_001E 494981,
;   :NAME "State Senate District 40 (2016), Florida",
;   :B00001_001E 29661,
;   :state "12",
;   :state-legislative-district-_upper-chamber_ "040"})]

; ====================================================

(defn IO-pp->census-stats
  "
  Internal function for calling the Census API using a Clojure Map and getting
  stats returned as a clojure map.

  Note: Inside `go` blocks, any map literals `{}` are converted into hash-maps.
  Make sure to bind the args in a wrapping `(let [args ...(go` rather than from
  within a shared `go` context.
  "
  [=I= =O=]
  (go (let [args  (<! =I=)
            url   (stats-url-builder args)
            =url= (chan 1)
            =res= (chan 1 (educt<< (xf!-csv-response->JSON args)))]
        (prn url)
        (>! =url= url)
        ; IO-ajax-GET closes the =res= chan; pipeline-async closes the =url= when =res= is closed
        (pipeline-async 4 =res= (I=O<<=IO= IO-ajax-GET-json) =url= false)
        ;(close! =url=)
        ; =O= chan is closed by the consumer; pipeline closes the =res= when =O= is closed
        ;(prn (<! =res=))
        (close! =url=)
        (>! =O= (<! =res=))
        (close! =res=))))


;      e            888                       d8
;     d8b      e88~\888   /~~~8e  888-~88e  _d88__  e88~~8e  888-~\  d88~\
;    /Y88b    d888  888       88b 888  888b  888   d888  88b 888    C888
;   /  Y88b   8888  888  e88~-888 888  8888  888   8888__888 888     Y88b
;  /____Y88b  Y888  888 C888  888 888  888P  888   Y888    , 888      888D
; /      Y88b  "88_/888  "88_-888 888-_88"   '88_/  "88___/  888    \_88P
;                                 888
;

(defn geoid<-stat
  "
  Takes an integer argument denoting the number of stat vars the user requested.
  Returns a function of one item (from the Census API response
  collection) to a new map with a hierarchy that will enable deep-merging of
  the stats with a GeoJSON `feature`s `:properties` map.
  "
  [vars#]
  (xf<< (fn [rf acc this]
          (rf acc {(apply str (vals (take-last (- (count this) vars#) this)))
                   {:properties this}}))))

;; Examples ==============================

#_(eduction  (geoid<-stat 3)
             ;conj
             '({:B01001_001E 55049, :B01001_001M -555555555, :state "01", :county "001"}
               {:B01001_001E 199510, :B01001_001M -555555555, :state "01", :county "003"}
               {:B01001_001E 26614, :B01001_001M -555555555, :state "01", :county "005"}
               {:B01001_001E 22572, :B01001_001M -555555555, :state "01", :county "007"}
               {:B01001_001E 57704, :B01001_001M -555555555, :state "01", :county "009"}))

; =>
; [{"12040" {:properties {:B01001_001E 494981,
;                        :NAME "State Senate District 40 (2016), Florida",
;                        :B00001_001E 29661,
;                        :state "12",
;                        :state-legislative-district-_upper-chamber_ "040"}}}
; {"12036" {:properties {:B01001_001E 492259,
;                        :NAME "State Senate District 36 (2016), Florida",
;                        :B00001_001E 29475,
;                        :state "12",
;                        :state-legislative-district-_upper-chamber_ "036"}}}
; {"12035" {:properties {:B01001_001E 493899,
;                        :NAME "State Senate District 35 (2016), Florida",
;                        :B00001_001E 25615,
;                        :state "12",
;                        :state-legislative-district-_upper-chamber_ "035"}}}]


(defn -<IO-pp-census-stats>-
  [=I= =O=]
  (go (let [args    (<! =I=)
            vars#   (+ (count (get args :values))
                       (count (get args :predicates)))
            =args=  (chan 1)
            =stats= (chan 1 (educt<< (geoid<-stat vars#)))]
        (>! =args= args)
        (pipeline-async 1 =stats= (I=O<<=IO= IO-pp->census-stats) =args= false)
        ;(IO-pp->census-stats =args= =stats=)
        (>! =O= (<! =stats=))
        (close! =args=)
        (close! =stats=))))



;; Examples ==============================

#_(let [=I= (chan 1)
        =O= (chan 1)
        args {:vintage      "2016"
              :sourcePath   ["acs" "acs5"]
              :geoHierarchy {:state "44" :school-district-_secondary_ "*"}
              :values       ["B01001_001E" "NAME"]}]
    (go (>! =I= args)
        ;(IO-pp->census-stats =I= =O=)
        (-<IO-pp-census-stats>- =I= =O=)
        (cljs.pprint/pprint (<! =O=))
        (close! =I=)
        (close! =O=)))

; =>
; ({"4400420" {:properties {:B01001_001E 14611, :NAME "Foster-Glocester Regional School District, Rhode Island", :state "44", :school-district-_secondary_ "00420"}}} {"4499999" {:properties {:B01001_001E 1039880, :NAME "Remainder of Rhode Island, Rhode Island", :state "44", :school-district-_secondary_ "99999"}}})

;; =======================================
