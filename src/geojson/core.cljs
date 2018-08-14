(ns geojson.core
  (:require [cljs.core.async
             :as async
             :refer [chan put! take! >! <! pipe timeout close! alts! pipeline-async split]
             :refer-macros [go go-loop alt!]]
            [ajax.core :as http :refer [GET POST]]
            [cognitect.transit :as t]
            [oops.core :as obj]
            [clojure.string :as s]
            [clojure.set :refer [map-invert]]
            [cljs.pprint :refer [pprint]]
            [defun.core :refer-macros [defun]]
            [promesa.core :as p]
            [promesa.async-cljs :refer-macros [async]]
            [cljs-promises.core :as cp]
            [cljs-promises.async
             :as cpa
             :refer [pair-port]
             :refer-macros [<?]]
            ["node-dir" :as dir]
            ["fs" :as fs]
            ["path" :as path]
            ["shpjs" :as shpjs]
            ["mkdirp" :as mkdirp]
            [clojure.repl :refer [source doc]]))


;;       /                    888  /                          e    e
;; e88~88e  e88~~8e   e88~-_  888 /     e88~~8e  Y88b  /     d8b  d8b       /~~~8e  888-~88e
;; 888 888 d888  88b d888   i 888/\    d888  88b  Y888/     d888bdY88b          88b 888  888b
;; "88_88" 8888__888 8888   | 888  \   8888__888   Y8/     / Y88Y Y888b    e88~-888 888  8888
;;  /      Y888    , Y888   ' 888   \  Y888    ,    Y     /   YY   Y888b  C888  888 888  888P
;; Cb       "88___/   "88_-~  888    \  "88___/    /     /          Y888b  "88_-888 888-_88"
;;  Y8"'8D                                       _/                                 888

(def geoKeyMap
  {:nation                                                      {:2010 "outline"
                                                                 :2013 "nation"
                                                                 :2014 "nation"
                                                                 :2015 "nation"
                                                                 :2016 "nation"
                                                                 :2017 "nation"}
   :region                                                      {:2013 "region"
                                                                 :2014 "region"
                                                                 :2015 "region"
                                                                 :2016 "region"
                                                                 :2017 "region"
                                                                 :2010 "020"
                                                                 :2000 "rg"}
   :division                                                    {:2013 "division"
                                                                 :2014 "division"
                                                                 :2015 "division"
                                                                 :2016 "division"
                                                                 :2017 "division"
                                                                 :2010 "030"
                                                                 :2000 "dv"}
   :state                                                       {:2013 "state"
                                                                 :2014 "state"
                                                                 :2015 "state"
                                                                 :2016 "state"
                                                                 :2017 "state"
                                                                 :2010 "040"
                                                                 :1990 "st"
                                                                 :2000 "st"}
   :consolidated-cities                                         {:2000 "cc"
                                                                 :2010 "170"
                                                                 :2013 "concity"
                                                                 :2014 "concity"
                                                                 :2015 "concity"
                                                                 :2016 "concity"
                                                                 :2017 "concity"}
   :county                                                      {:2013 "county"
                                                                 :2014 "county"
                                                                 :2015 "county"
                                                                 :2016 "county"
                                                                 :2017 "county"
                                                                 :2010 "050"
                                                                 :1990 "co"
                                                                 :2000 "co"}
   :county-subdivision                                          {:2013 "cousub"
                                                                 :2014 "cousub"
                                                                 :2015 "cousub"
                                                                 :2016 "cousub"
                                                                 :2017 "cousub"
                                                                 :2010 "060"
                                                                 :1990 "cs"
                                                                 :2000 "cs"}
   :tract                                                       {:2013 "tract"
                                                                 :2014 "tract"
                                                                 :2015 "tract"
                                                                 :2016 "tract"
                                                                 :2017 "tract"
                                                                 :2010 "140"
                                                                 :1990 "tr"
                                                                 :2000 "tr"}
   :place                                                       {:2013 "place"
                                                                 :2014 "place"
                                                                 :2015 "place"
                                                                 :2016 "place"
                                                                 :2017 "place"
                                                                 :2010 "160"
                                                                 :1990 "pl"
                                                                 :2000 "pl"}
   :alaska-native-regional-corporation                          {:2013 "anrc"
                                                                 :2014 "anrc"
                                                                 :2015 "anrc"
                                                                 :2016 "anrc"
                                                                 :2017 "anrc"
                                                                 :2010 "230"
                                                                 :1990 "an"
                                                                 :2000 "an"}
   :american-indian-area!alaska-native-area!hawaiian-home-land  {:2013 "aiannh"
                                                                 :2014 "aiannh"
                                                                 :2015 "aiannh"
                                                                 :2016 "aiannh"
                                                                 :2017 "aiannh"
                                                                 :2010 "250"
                                                                 :1990 "ir"
                                                                 :2000 "na"}
   :metropolitan-statistical-area!micropolitan-statistical-area {:2013 "cbsa"
                                                                 :2014 "cbsa"
                                                                 :2015 "cbsa"
                                                                 :2016 "cbsa"
                                                                 :2017 "cbsa"
                                                                 :2010 "310"
                                                                 :1990 "ma"}
   :combined-statistical-area                                   {:2013 "csa"
                                                                 :2014 "csa"
                                                                 :2015 "csa"
                                                                 :2016 "csa"
                                                                 :2017 "csa"
                                                                 :2010 "330"}
   :new-england-city-and-town-area                              {:2013 "necta"
                                                                 :2014 "necta"
                                                                 :2015 "necta"
                                                                 :2016 "necta"
                                                                 :2017 "necta"
                                                                 :2010 "350"}
   :combined-new-england-city-and-town-area                     {:2016 "cnecta"
                                                                 :2017 "cnecta"}
   :urban-area                                                  {:2013 "ua"
                                                                 :2014 "ua"
                                                                 :2015 "ua"
                                                                 :2016 "ua"
                                                                 :2017 "ua"
                                                                 :2012 "uac"
                                                                 :1990 "ua"
                                                                 :2000 "ua"}
   :congressional-district                                      {:103  "cd"
                                                                 :104  "cd"
                                                                 :105  "cd"
                                                                 :106  "cd"
                                                                 :107  "cd"
                                                                 :108  "cd"
                                                                 :109  "cd"
                                                                 :110  "cd"
                                                                 :2013 "cd"
                                                                 :2014 "cd"
                                                                 :2015 "cd"
                                                                 :2016 "cd"
                                                                 :2017 "cd"
                                                                 :2012 "cd"
                                                                 :2010 "500"}
   :school-district-'elementary'                                {:2016 "elsd"
                                                                 :2017 "elsd"
                                                                 :2000 "se"}
   :school-district-'secondary'                                 {:2016 "scsd"
                                                                 :2017 "scsd"
                                                                 :2000 "ss"}
   :school-district-'unified'                                   {:2016 "unsd"
                                                                 :2017 "unsd"
                                                                 :2010 "970"
                                                                 :2000 "sn"}
   :block-group                                                 {:2013 "bg"
                                                                 :2014 "bg"
                                                                 :2015 "bg"
                                                                 :2016 "bg"
                                                                 :2017 "bg"
                                                                 :2010 "150"
                                                                 :1990 "bg"
                                                                 :2000 "bg"}
   :public-use-microdata-area                                   {:2013 "puma"
                                                                 :2014 "puma"
                                                                 :2015 "puma"
                                                                 :2016 "puma"
                                                                 :2017 "puma"}
   :zip-code-tabulation-area                                    {:2013 "zcta"
                                                                 :2014 "zcta"
                                                                 :2015 "zcta"
                                                                 :2016 "zcta"
                                                                 :2017 "zcta"
                                                                 :2010 "860"
                                                                 :2000 "zt"} ;; zipcodes are *not* the same
   :state-legislative-district-'upper-chamber'                  {:2013 "sldu"
                                                                 :2014 "sldu"
                                                                 :2015 "sldu"
                                                                 :2016 "sldu"
                                                                 :2017 "sldu"
                                                                 :2012 "sldu"
                                                                 :2010 "610"
                                                                 :2000 "su"}
   :state-legislative-district-'lower-chamber'                  {:2013 "sldl"
                                                                 :2014 "sldl"
                                                                 :2015 "sldl"
                                                                 :2016 "sldl"
                                                                 :2017 "sldl"
                                                                 :2012 "sldl"
                                                                 :2010 "620"
                                                                 :2000 "sl"}})


;; ,e,   d8                                888                               888
;;  "  _d88__  e88~~8e  888-~88e-~88e      888  e88~~8e  Y88b    /  e88~~8e  888
;; 888  888   d888  88b 888  888  888 ____ 888 d888  88b  Y88b  /  d888  88b 888
;; 888  888   8888__888 888  888  888      888 8888__888   Y88b/   8888__888 888
;; 888  888   Y888    , 888  888  888      888 Y888    ,    Y8/    Y888    , 888
;; 888  "88_/  "88___/  888  888  888      888  "88___/      Y      '88___/  888
;;


(defn ii->vin
  "Map over a collection to transform 2-digit vintages to their 4-digit codes."
  [vtr]
  (map #(cond (= "90" %) "1990"
              (= "00" %) "2000"
              :else %)
       vtr))

(defn map-target-idx
  "Maps a provided function to a specific index of a provided collection of collections."
  [fnc idx coll]
  (map-indexed #(if (zero? (mod (inc %1) idx)) (fnc %2) %2) coll))

(defn filename->>geoIDvecs
  "Breaks apart a Census Tiger filename and cleans it into meaningful parts. Takes a single string and returns a vector of vectors."
  [string]
  (->>
    (s/split string #"_|\.")
    (map #(re-seq #"[a-z]+|[0-9]+" %))
    (map (fn [y] (remove #(= "d" %) y)))
    (map-target-idx ii->vin 2)
    (map #(vec %))))

;; (filename->>geoIDvecs "cb_d00_01_county_within_ua_500k.zip")
;; => (["cb"] ["2000"] ["01"] ["county"] ["within"] ["ua"] ["500" "k"] ["zip"])


(defn ?keyMatch
  "Searches a single item from an inverted geoKeyMap and checks for a match against the provided vintage/level abbreviation code pair. Returns the `name` of the key (string) if matched and `nil` if mismatched."
  [vintage level [k v]]
  (if-let [[_ v2] (find k (keyword vintage))]
    (if (= v2 level)
      (name v)
      nil)
    nil))

(defn keySearch
  "Searches the entire geoKeyMap (inverted) for matches against a provided vintage and level abbreviation returning a string for the verbose geoKeyMap key match if successful and an empty string ('') if not"
  [vintage level]
  (apply str (remove nil? (map #(?keyMatch vintage level %) (seq (map-invert geoKeyMap))))))

(defn parts->geopath
  "Consumes parts of the Tiger filename to compose a structured path for storage as a `.json` file."
  [[lev res m vin & etc]]
  (let [geopath (s/join "/" (list* vin etc))]
    {:filepath (str "./GeoJSON/" (s/join "/" [(apply str res m) geopath (apply str (keySearch vin lev) ".json")]))
     :dirpath (str "./GeoJSON/" (s/join "/" [(apply str res m) geopath]))}))

(parts->geopath ["county" "500" "k" "2000" "01"]) ;;  "500k/2000/01/.json"


(defn geoScopeFiler
  "Creates a filepath determined by whether or not the input contains a state (e.g., '01') or national code ('99'/'us'). If the value returned from the `keySearch` function = `` (empty string) returns `nil`."
  [[lev res m vin sco]]
  (if-not (= "" (keySearch vin lev))
    (if (or (= sco "99") (= sco "us"))
      (parts->geopath [lev res m vin])
      (parts->geopath [lev res m vin sco]))
    nil))

(defun file=<<Director
  "Pattern matches against incoming file structures to create a harmonized directory ontology in which to store the file"
  ([[lev sco] [vin] _     _]                                (geoScopeFiler [lev       "500" "k" vin    sco]))
  ([_         [vin] [sco] ["outline"]  [res m] _]           (geoScopeFiler ["outline" res   m   vin    sco]))
  ([_         [vin] [sco] ["uac" "10"] [res m] _]           (geoScopeFiler ["uac"     res   m   vin    sco]))
  ([_         [vin] [sco] [lev]        _         [res m] _] (geoScopeFiler [lev       res   m   vin    sco]))
  ([_         [vin] [sco] [lev]        [res m] _]           (geoScopeFiler [lev       res   m   vin    sco]))
  ([_         [vin] [sco] [lev]        [res m] _]           (geoScopeFiler [lev       res   m   vin    sco]))
  ([_         _     [sco] [lev "113"]  [res m] _]           (geoScopeFiler [lev       res   m   "2012" sco]))
  ([& anything-else] nil))

(defn filename->>geopath
  "Takes a filename string as input and sends it through the filepath creation pipeline. Returns `nil` if no matches are found for the level abbreviation contained in the filename."
  [string]
  (if-let [answer (->> (filename->>geoIDvecs string) (apply file=<<Director))] answer nil))  ;; use the `nil` here to trigger the fs to skip this file

(comment ; filename->>geopath
  (filename->>geopath "tb99_d00_shp.zip")
  ;; => nil

  (filename->>geopath "zt01_d00_shp.zip")
  ;; => "500k/2000/01/zip-code-tabulation-area.json"

  (filename->>geopath "cm_sa_96_shp.zip")
  ;; => nil

  (filename->>geopath "tb99_d00_shp.zip")
  ;; => nil

  (filename->>geopath "zt01_d00_shp.zip")
  ;; => "500k/2000/01/zip-code-tabulation-area.json"

  (filename->>geopath "cm_sa_96_shp.zip")
  ;; => nil

  (filename->>geopath "cmsa_96_shp.zip")
  ;; => nil

  (filename->>geopath "cb99_03a_shp.zip")
  ;; => nil

  (filename->>geopath "cb_2014_us_county_within_cd114_500k.zip")
  ;; => nil

  (filename->>geopath "cb_rd13_us_cd113_500k.zip")
  ;; => "500k/2012/congressional-district.json"

  (filename->>geopath "st01_d90_shp.zip")
  ;; => "500k/1990/01/state.json"

  (filename->>geopath "rg99_d00_shp.zip")
  ;; => "500k/2000/region.json"

  (filename->>geopath "gz_2010_us_outline_500k.zip")
  ;; => "500k/2010/nation.json"

  (filename->>geopath "cb_2012_us_uac10_500k.zip")
  ;; => "500k/2012/urban-area.json"

  (filename->>geopath "gz_2010_us_330_m1_500k.zip")
  ;; => "500k/2010/combined-statistical-area.json"

  (filename->>geopath "gz_2010_01_970_00_500k.zip")
  ;; => "500k/2010/01/school-district-'unified'.json"

  (filename->>geopath "cb_2014_us_nation_5m.zip")
  ;; => "5m/2014/nation.json"

  (filename->>geopath "cb_2014_us_region_500k.zip")
  ;; => "500k/2014/region.json"

  (filename->>geopath "cb_2014_01_tract_500k.zip")
  ;; => "500k/2014/01/tract.json"

  (filename->>geopath "cd36_103_shp.zip")
  ;; => "500k/103/36/congressional-district.json"

  (filename->>geopath "cb_rd13_us_cd113_500k.zip")
  ;; => "500k/2012/congressional-district.json"

  (filename->>geopath "cb_2013_01_cousub_500k.zip"))
  ;; => "500k/2012/congressional-district.json"


;;                  88~\
;;  Y88b  /       _888__  e88~-_  888-~\ 888-~88e-~88e
;;   Y88b/   ____  888   d888   i 888    888  888  888
;;    Y88b         888   8888   | 888    888  888  888
;;    /Y88b        888   Y888   ' 888    888  888  888
;;   /  Y88b       888    '88_-~  888    888  888  888


(defn x-pathStr->>filename
  "Transducer, which takes a fully qualified path string (returned from node `fs`) and pulls out the filename from the end."
  [rf]
  (fn
    ([] (rf))
    ([result] (rf result))
    ([result input]
     (rf result (->> (s/split input #"\\") (last) (filename->>geopath))))))

(into []
      x-pathStr->>filename
      ["C:\\Users\\Surface\\Downloads\\www2.census.gov\\geo\\tiger\\Directory_Contents_ReadMe.pdf",
       "C:\\Users\\Surface\\Downloads\\www2.census.gov\\geo\\tiger\\GENZ2013\\cb_2013_01_cousub_500k.zip",
       "C:\\Users\\Surface\\Downloads\\www2.census.gov\\geo\\tiger\\PREVGENZ\\econ\\pl\\pl97shp"])
;; => [nil "500k/2013/01/county-subdivision.json" nil]

;; TODO: Create transducer(s), which can be composed with the x-pathStr->>filename to pull the file using `fs` -> converts that to geojson -> and then stores it to the resulting filepath if not nil.
;; Resources:
;; - https://github.com/substack/node-mkdirp
;; - https://github.com/calvinmetcalf/shapefile-js
;; - if-let

(into []
      x-pathStr->>filename
      (js/JSON.parse (fs/readFileSync ".\\test\\test10-abv.json" "utf8")))


;; TODO: Use Promesa for this

(defn x-path->geojson->fs
  "Transducer, which takes a fully qualified path string (returned from node `fs`) tries to convert its last component (split by `\\`) into a geojson filepath (if the filename successfully passes through conversion). If conversion results in `nil` does nothing. If it returns a filepath, it uses the path string as input to `shpjs` library and outputs to the supplied geojson filepath."
  [rf]
  (fn
    ([] (rf))
    ([result] (rf result))
    ([result input]
     (rf result (let [=c= (chan)]
                  (if-let
                    [{:keys [filepath dirpath]} (->> (s/split input #"\\") (last) (filename->>geopath))]
                    (do
                      (go (mkdirp dirpath (js/console.log (str "Saved " filepath " to: " dirpath))))
                      (go (.then (shpjs (fs/readFileSync input)) #(put! =c= %)))
                      (go (fs/writeFileSync filepath (<! =c=))))
                    (js/console.log (str "No bueno.")))
                  (close! =c=))))))

(into []
      x-path->geojson->fs
      (js/JSON.parse (fs/readFileSync ".\\test\\test10-abv.json" "utf8")))

(.then
  (shpjs (fs/readFile
           "C:\\Users\\Surface\\Downloads\\www2.census.gov\\geo\\tiger\\GENZ2013\\cb_2013_01_cousub_500k.zip"
           "utf8"
           (fn [err data]
             (if err
               (js/console.log (str "Error: " err))
               data))))
  (fn [geojson] (fs/writeFile
                  "./GeoJSON/500k/2013/01/county-subdivision.json"
                  geojson
                  "utf8"
                  #(js/console.log "wrote"))))

;; Works
(.then
  (shpjs (fs/readFileSync "C:\\Users\\Surface\\Downloads\\www2.census.gov\\geo\\tiger\\GENZ2013\\cb_2013_01_cousub_500k.zip"))
  #(js/console.log %))

;; test 1


;; see examples: https://blog.jeaye.com/2017/09/30/clojurescript-promesa/
;; https://stackoverflow.com/questions/17645478/node-js-how-to-read-a-file-and-then-write-the-same-file-with-two-separate-functi
;; https://stackoverflow.com/questions/39732076/how-to-bind-the-resolved-value-of-javascript-promise-in-clojurescript#comment66818230_39742698
;; https://github.com/jamesmacaulay/cljs-promises
;; https://clojureverse.org/t/any-pointer-to-make-clojurescript-javascript-interop-work-with-promise-library/1744

;; works with `fs/readFileSync, but...

(defn x-shp->json
  [rf]
  (fn
    ([] (rf))
    ([result] (rf result))
    ([result input] (rf result (-> (shpjs input)
                                   (.then (fn [_ data] data)))))))

(defn x-json->save
  [rf]
  (fn
    ([] (rf))
    ([result] (rf result))
    ([result input] (rf result (fs/writeFile
                                 "./GeoJSON/500k/2013/01/county-subdivision5.json"
                                 input
                                 #(js/console.log "wrote"))))))


;;    ~~~888~~~   ,88~-_   888~-_     ,88~-_
;;       888     d888   \  888   \   d888   \
;;       888    88888    | 888    | 88888    |
;;       888    88888    | 888    | 88888    |
;;       888     Y888   /  888   /   Y888   /
;;       888      `88_-~   888_-~     `88_-~
;;                                             


;; TODO: SOOOOOOOOO CLOOOOOOOOOOOOOSE!
(let [=file= (chan 1)
      =json= (chan 1)]
  (fs/readFile "C:\\Users\\Surface\\Downloads\\www2.census.gov\\geo\\tiger\\GENZ2013\\cb_2013_01_cousub_500k.zip"
                  (fn [err zip]
                    (if (= (type err) (type js/Error))
                      (throw err)
                      (go (>! =file= zip)))))
  (go (pprint (<? (cpa/pair-port (shpjs (<! =file=)))))))






;; https://blog.jeaye.com/2017/09/30/clojurescript-promesa/ ---------------
;(defmacro await-> [thenable & thens]
;  `(-> ~thenable
;       ~@thens
;       ~'js/Promise.resolve
;       p/await))
;; ------------------------------------------------------------------------

;; ==== This works, but returns the actual zip file instead of geojson ====
(defn shp->fs->json
  [srcPath cbk]
  (shpjs (fs/readFile
           srcPath
           "utf8"
           (fn [err json]
             (if (= (type err) (type js/Error))
               (throw err)
               (cbk json))))))

(defn json->fs->save
  [srcPath savPath]
  (shp->fs->json srcPath
                 (fn [json]
                   (fs/writeFile
                     savPath
                     json
                     #(js/console.log "wrote")))))

(json->fs->save
  "C:\\Users\\Surface\\Downloads\\www2.census.gov\\geo\\tiger\\GENZ2013\\cb_2013_01_cousub_500k.zip"
  "./GeoJSON/500k/2013/01/county-subdivision3.json")

;; ============================================================================

(go
  (let [[value _] (pair-port
                    (shpjs (fs/readFile
                             "C:\\Users\\Surface\\Downloads\\www2.census.gov\\geo\\tiger\\GENZ2013\\cb_2013_01_cousub_500k.zip"
                             "utf8"
                             (fn [err json]
                               (if (= (type err) (type js/Error))
                                 (throw err)
                                 json)))))]
    (try
      ;(fs/writeFile
      ;  "./GeoJSON/500k/2013/01/county-subdivision4.json"
      ;  (<? value)
      ;  #(js/console.log "wrote"))
      (js/console.log (<? value))
      (catch js/Error e
        (js/console.log (str "bogus: " (ex-message e)))))))



(-> (shpjs (fs/readFile
             "C:\\Users\\Surface\\Downloads\\www2.census.gov\\geo\\tiger\\GENZ2013\\cb_2013_01_cousub_500k.zip"
             (fn [_ data]
               data)))
    (.then (fn [_ geojson] (fs/writeFile
                             "./GeoJSON/500k/2013/01/county-subdivision4.json"
                             geojson
                             #(js/console.log "wrote")))))


;; Works
(async
  (p/alet [geojson
           (->
             (shpjs (fs/readFileSync "C:\\Users\\Surface\\Downloads\\www2.census.gov\\geo\\tiger\\GENZ2013\\cb_2013_01_cousub_500k.zip"))
             js/Promise.resolve
             p/await)]
          (js/console.log geojson)))


(go
  (let [geojson (cpa/value-port (shpjs (fs/readFileSync "C:\\Users\\Surface\\Downloads\\www2.census.gov\\geo\\tiger\\GENZ2013\\cb_2013_01_cousub_500k.zip")))]
    (try
      (js/console.log (<? geojson))
      (catch js/Error e
        (js/console.log (str "Bloop: " (ex-message e)))))))

(async
  (p/alet [geojson
           (->
             (shpjs (fs/readFileSync
                      "C:\\Users\\Surface\\Downloads\\www2.census.gov\\geo\\tiger\\GENZ2013\\cb_2013_01_cousub_500k.zip"))
             js/Promise.resolve
             p/await)]
    (fs/writeFile "./GeoJSON/500k/2013/01/county-sub.json"
       geojson
       "utf8"
       #(js/console.log "wrote"))))

;; -----------------------------------------------------------------------------------------


;;                         Y8b           ,e, 888 Y8b        ,e,                Y8b          888                         Y8b
;; 888-~88e  e88~-_         Y8b 888-~88e  "  888  Y8b        "  888-~88e        Y8b  e88~~\ 888-~88e   /~~~8e  888-~88e  Y8b
;; 888  888 d888   i            888  888 888 888            888 888  888            d888    888  888       88b 888  888
;; 888  888 8888   |            888  888 888 888            888 888  888            8888    888  888  e88~-888 888  888
;; 888  888 Y888   '            888  888 888 888            888 888  888            Y888    888  888 C888  888 888  888
;; 888  888  "88_-~             888  888 888 888            888 888  888             "88__/ 888  888  '88_-888 888  888
;;
;;

(-> (shpjs (fs/readFileSync "C:\\Users\\Surface\\Downloads\\www2.census.gov\\geo\\tiger\\GENZ2013\\cb_2013_01_cousub_500k.zip"))
    (.then (fn [promisedata] (js/Promise.resolve promisedata)))
    (.then #(js/console.log %)))
    ;(.then  (fn [geojson]
    ;          (fs/writeFile "./GeoJSON/500k/2013/01/county-subdivision.json"
    ;            geojson
    ;            "utf8"
    ;            #(js/console.log "wrote")))))



(.then
  (.then
    (shpjs
      (fs/readFile "C:\\Users\\Surface\\Downloads\\www2.census.gov\\geo\\tiger\\GENZ2013\\cb_2013_01_cousub_500k.zip"
                   (fn [err data]
                     (if err
                       (js/console.log (str "Error: " err))
                       data))))
    (fn [promisedata]
      promisedata))
  (fn [geojson]
    (fs/writeFile "./GeoJSON/500k/2013/01/county-subdivision.json"
                   geojson
                   "utf8"
                   #(js/console.log "wrote"))))




(go
  (let [[err data] (<! (.then (shpjs (io/aslurp "C:\\Users\\Surface\\Downloads\\www2.census.gov\\geo\\tiger\\GENZ2013\\cb_2013_01_cousub_500k.zip"))))]
    (if-not err
      (js/console.log data)
      (js/console.log "bloop"))))

;; Doesn't work... yet
(go
  (.then
    (shpjs (slurp "C:\\Users\\Surface\\Downloads\\www2.census.gov\\geo\\tiger\\GENZ2013\\cb_2013_01_cousub_500k.zip"))
    #(fs/writeFile
       "./GeoJSON/500k/2013/01/county-subdivision.json"
       %
       "utf8"
       (fn [err]
         (js/console.log "wrote")))))



(go (get->put!->port stats-call =stats=)
    (pipeline-async 1 =merged= identity =stats=)
    (fs/writeFileSync "./test/counties.json" (<! =merged=) (js/console.log "file saved")))

;; (.then some-promise #(async/put! chan %))
;; ^ something like that, and take the value out of the channel in a go block
;; See reference: https://clojurians-log.clojureverse.org/clojurescript/2017-03-07/1488907938.022922


;(into [] x-vinter ["90" "blah"])

;([string]
;  (fn [rf]
;    (fn
;      ([] (rf))
;      ([result] (rf result))
;      ([result item]
;       (rf result (s/split string #"\\") item))))))


;;                               88~\
;; Y88b  /       Y88b  /       _888__  e88~-_  888-~\ 888-~88e-~88e
;;  Y88b/   ____  Y88b/   ____  888   d888   i 888    888  888  888
;;   Y88b          Y88b         888   8888   | 888    888  888  888
;;   /Y88b         /Y88b        888   Y888   ' 888    888  888  888
;;  /  Y88b       /  Y88b       888    '88_-~  888    888  888  888



; (getShapeFilePaths->restructure "C:\\Users\\Surface\\Downloads\\www2.census.gov\\geo\\tiger\\GENZ2012\\ua")

;; Dealing with promise in core.async:
;; `(.then some-promise #(async/put! chan %))`
;; ^^^^ something like that, and take the value out of the channel in a go block
;; from: https://clojurians-log.clojureverse.org/clojurescript/2017-03-07/1488907938.022922
;; also see this for other ideas: https://gist.github.com/pesterhazy/74dd6dc1246f47eb2b9cd48a1eafe649


;;          888
;;   e88~~\ 888-~88e   /~~~8e  888-~88e
;;  d888    888  888       88b 888  888
;;  8888    888  888  e88~-888 888  888
;;  Y888    888  888 C888  888 888  888
;;   "88__/ 888  888  "88_-888 888  888




(comment
  (go
    (let [=paths= (chan)]
      (go (fs/readFile source-path "utf8"
                       (fn [err data]
                         (if err
                           (go (>! =paths= err))
                           (go (>! =paths= (js/JSON.parse data)))))))
      (go (map (fn [path] (go (let [filename (->> (s/split path "\\") (last))
                                    fileExtn (->> (s/split filename ".") (last))]
                                (if (= fileExtn "zip")
                                  (js/console.log "zipper!")
                                  (js/console.log (str "fileExtn: " fileExtn))))))
               (<! =paths=))))))

;; test on this C:\Users\Surface\Downloads\www2.census.gov\geo\tiger\GENZ2012\ua

;;                   ,e,                       d8
;;  888-~88e  888-~\  "  Y88b    /   /~~~8e  _d88__  e88~~8e
;;  888  888b 888    888  Y88b  /        88b  888   d888  88b
;;  888  8888 888    888   Y88b/    e88~-888  888   8888__888
;;  888  888P 888    888    Y8/    C888  888  888   Y888    ,
;;  888-_88"  888    888     Y      "88_-888  '88_/  "88___/
;;  888

;; inspired by: https://github.com/georgewsinger/cljs-callback-heaven
(defn getShpFilePaths
  "
  Get full path and filenames for a given source-path
  js/JSON.stringify the result and output that via fs/writeFile
  to a given destination-path
  "
  [source-path destination-path]
  (go
    (let [c (chan)]
      (dir/paths
        source-path
        true
        (fn [err, raw] (if err (go (>! c err))
                               (go (>! c (js/JSON.stringify raw))))))
      (go (fs/writeFile destination-path (<! c) "utf8" #(js/console.log "file saved"))))))


;; (getShpFilePaths "C:\\Users\\Surface\\Downloads\\www2.census.gov\\geo\\tiger\\GENZ2012\\ua" ".\\test\\test11.json")




