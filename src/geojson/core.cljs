(ns geojson.core
  (:require [cljs.core.async
             :as async
             :refer [chan put! take! >! <! pipe timeout close! alts! pipeline-async split]
             :refer-macros [go go-loop alt!]]
            [clojure.string :as s]
            [clojure.set :refer [map-invert]]
            [cljs.pprint :refer [pprint]]
            [defun.core :refer-macros [defun]]
            [cljs-promises.async
             :as cpa
             :refer [pair-port]
             :refer-macros [<?]]
            ["node-dir" :as dir]
            ["fs-extra" :as fs] ;; If all else fails, use this and...
            ["path" :as path]
            ["shpjs" :as shpjs]
            ["mkdirp" :as mkdirp] ;; remove this (redundant).
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
  "
  Map over a collection to transform 2-digit vintages to their 4-digit codes.
  "
  [vtr]
  (map #(cond (= "90" %) "1990"
              (= "00" %) "2000"
              :else %)
       vtr))

(defn map-target-idx
  "
  Maps a provided function to a specific index of a provided collection of
  collections.
  "
  [fnc idx coll]
  (map-indexed #(if (zero? (mod (inc %1) idx)) (fnc %2) %2) coll))

(defn filename->>geoIDvecs
  "
  Breaks apart a Census Tiger filename and cleans it into meaningful parts.
  Takes a single string and returns a vector of vectors.
  "
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
  "
  Searches a single item from an inverted geoKeyMap and checks for a match
  against the provided vintage/level abbreviation code pair. Returns the `name`
  of the key (string) if matched and `nil` if mismatched.
  "
  [vintage level [k v]]
  (if-let [[_ v2] (find k (keyword vintage))]
    (if (= v2 level)
      (name v)
      nil)
    nil))

(defn keySearch
  "
  Searches the entire geoKeyMap (inverted) for matches against a provided
  vintage and level abbreviation returning a string for the verbose geoKeyMap
  key match if successful and an empty string ('') if not.
  "
  [vintage level]
  (apply str (remove nil? (map #(?keyMatch vintage level %) (seq (map-invert geoKeyMap))))))

(defn parts->geopath
  "
  Consumes parts of the Tiger filename to compose a structured path for storage
  as a `.json` file.
  "
  [[lev res m vin & etc]]
  (let [geopath (s/join "/" (list* vin etc))]
    {:filepath (str "./GeoJSON/" (s/join "/" [(apply str res m) geopath (apply str (keySearch vin lev) ".json")]))
     :dirpath (str "./GeoJSON/" (s/join "/" [(apply str res m) geopath]))}))

(parts->geopath ["county" "500" "k" "2000" "01"]) ;;  "500k/2000/01/.json"


(defn geoScopeFiler
  "
  Creates a filepath determined by whether or not the input contains a state
  (e.g., '01') or national code ('99'/'us'). If the value returned from the
  `keySearch` function = `` (empty string) returns `nil`.
  "
  [[lev res m vin sco]]
  (if-not (= "" (keySearch vin lev))
    (if (or (= sco "99") (= sco "us"))
      (parts->geopath [lev res m vin])
      (parts->geopath [lev res m vin sco]))
    nil))

(defun file=<<Director
  "
  Pattern matches against incoming file structures to create a harmonized
  directory ontology in which to store the file.
  "
  ([[lev sco] [vin] _     _]                                (geoScopeFiler [lev       "500" "k" vin    sco]))
  ([_         [vin] [sco] ["outline"]  [res m] _]           (geoScopeFiler ["outline" res   m   vin    sco]))
  ([_         [vin] [sco] ["uac" "10"] [res m] _]           (geoScopeFiler ["uac"     res   m   vin    sco]))
  ([_         [vin] [sco] [lev]        _         [res m] _] (geoScopeFiler [lev       res   m   vin    sco]))
  ([_         [vin] [sco] [lev]        [res m] _]           (geoScopeFiler [lev       res   m   vin    sco]))
  ([_         [vin] [sco] [lev]        [res m] _]           (geoScopeFiler [lev       res   m   vin    sco]))
  ([_         _     [sco] [lev "113"]  [res m] _]           (geoScopeFiler [lev       res   m   "2012" sco]))
  ([& anything-else] nil))

(defn filename->>geopath
  "
  Takes a filename string as input and sends it through the filepath creation
  pipeline. Returns `nil` if no matches are found for the level abbreviation
  contained in the filename.
  "
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
  "
  Transducer, which takes a fully qualified path string (returned from node
  `fs`) and pulls out the filename from the end.
  "
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

;(into []
;      x-pathStr->>filename
;      (js/JSON.parse (fs/readFileSync ".\\test\\test10-abv.json" "utf8")))


;; =================== IMPORTANT NOTE ==========================
;; If the written file is showing up as `[object Object]` it might
;; be due to it being stored as the representation of a js object
;; instead of the actual content therein. This got me stuck for a
;; long time!!! Solved by wrapping the desired output like so:
;; `(js/JSON.stringify <<output>>)`
;; ===============================================================

(comment ;; this version can handle a single source-path -> destination-path transformation
  (defn fsRead1-zip->fsWrite-json
    "
    A `core.async` asynchronous operation coordination function, which takes two
    string paths: `inpath` is a path to a zipfile containing a shapefile and
    related assets; The shapefile is converted to geojson and sent to the
    `outpath` as the destination folder.
    "
    [inpath outpath]
    (let [=file= (chan 1)
          =json= (chan 1)]
      (do
        (fs/readFile
          inpath
          (fn [err zip]
            (if (= (type err) (type js/Error))
              (throw err)
              (put! =file= zip #(pprint "put! =file=")))))
        (go (>! =json= (<? (cpa/pair-port (shpjs (<! =file=))))))
        (take! =json=
               (fn [json]
                 (fs/writeFile
                     outpath
                     (js/JSON.stringify json)
                     #(js/console.log "wrote")))))))

  (fsRead1-zip->fsWrite-json
    "C:\\Users\\Surface\\Downloads\\www2.census.gov\\geo\\tiger\\GENZ2013\\cb_2013_01_cousub_500k.zip"
    "./GeoJSON/500k/2013/01/county-subdivision.json"))

;; =================== IMPORTANT NOTE ==========================
;; The pipeline-async function is used below in an unconventional
;; manner. Instead of it being used primarily to subject some input
;; from a channel to an asynchronous function and then passing the
;; resulting transformation to an out-bound channel, it's primarily
;; used as a coordination device to ensure the file directories are
;; created before the filesystem tries to create files within.
;; ===============================================================


;; Works, but has issues with a race condition, seemingly between the creation of the folders and the files.

(defn fsRead-zip->fsWriteWDIR-json
  "
  A `core.async` asynchronous operation coordination function, which takes a
  full string path to a zipfile containing a shapefile and related assets. The
  shapefile is converted to geojson and sent to a destination folder if the path
  contains a valid geopath (based on `filename->>geopath` function).
  "
  [fullpath]
  (let [=file= (chan 1)
        =json= (chan 1)
        =dirpath= (chan 1)
        =fullpath= (chan 1)
        =as-pipe= (fn [dirpath* =fullpath=]
                    (do
                      (mkdirp dirpath* (put! =fullpath= fullpath)) ;; the most important part
                      (close! =fullpath=)))]
    (if-let
      [{:keys [filepath dirpath]} (->> (s/split fullpath #"\\") (last) (filename->>geopath))]
      (do
        ;; To kick things off, async create directories if needed,
        ;; then put dirpath into =dirpath= chan. Make sure to close!
        (go (do (>! =dirpath= dirpath) (close! =dirpath=)))
        ;; use pipeline-async to ensure order of chan functions,
        ;; passing fullpath as the coordination baton,
        (pipeline-async 1
                        =fullpath= ; to
                        =as-pipe=  ; make directory and pass fullpath to next step
                        =dirpath=) ; from
        ;; take the fullpath from the out-bound pipeline-async =fullpath= chan
        ;; then read in zip file, then put! onto =file= chan
        (go (fs/readFile
              (<! =fullpath=)
              (fn [err zip]
                (if (= (type err) (type js/Error))
                  (throw err)
                  (put! =file= zip #(pprint "put! =file="))))))
        ;; <! zipfile from =file= chan, translate to geojson, convert
        ;; the promise returned from shpjs via the cljs-promise <? macro,
        ;; then >! resulting geojson to =json= chan
        (go (>! =json= (<? (cpa/pair-port (shpjs (<! =file=)))))
            (close! =file=))
        ;; take! the geojson and write to the filepath, then close! =json=
        (take! =json=
               (fn [json]
                 (do (fs/writeFile
                       filepath
                       (js/JSON.stringify json)
                       #(js/console.log "wrote"))
                     (close! =json=)))))
      (go (close! =file=)
          (close! =json=)
          (close! =dirpath=)
          (close! =fullpath=)))))
;
(fsRead-zip->fsWriteWDIR-json "C:\\Users\\Surface\\Downloads\\www2.census.gov\\geo\\tiger\\GENZ2013\\cb_2013_01_cousub_500k.zip")






;;    ~~~888~~~   ,88~-_   888~-_     ,88~-_
;;       888     d888   \  888   \   d888   \
;;       888    88888    | 888    | 88888    |
;;       888    88888    | 888    | 88888    |
;;       888     Y888   /  888   /   Y888   /
;;       888      `88_-~   888_-~     `88_-~
;;

;; TODO: Consider making two passes: 1) to create the folder structures and 2) to create the files... solve race consdition.




(defn fsRead-zip->fsWriteWDIR-json2
  "
  A `core.async` asynchronous operation coordination function, which takes a
  full string path to a zipfile containing a shapefile and related assets. The
  shapefile is converted to geojson and sent to a destination folder if the path
  contains a valid geopath (based on `filename->>geopath` function).
  "
  [fullpath]
  (if-let
    [{:keys [filepath dirpath]} (->> (s/split fullpath #"\\") (last) (filename->>geopath))]
    (go
      (let [=file= (chan 1)
            =json= (chan 1)
            =dirpath= (chan 1)
            =fullpath= (chan 1)
            =as-pipe= (fn [dirpath* =fullpath=]
                        (go
                          (mkdirp dirpath* (>! =fullpath= fullpath)) ;; the most important part
                          (close! =fullpath=)))]

        (do (>! =dirpath= dirpath) (close! =dirpath=))
        (pipeline-async 2
                        =fullpath=
                        =as-pipe=
                        =dirpath=)
        (fs/readFile
          (<! =fullpath=)
          (fn [err zip]
            (if (= (type err) (type js/Error))
              (throw err)
              (go (>! =file= zip)))))
        (do (>! =json= (<? (cpa/pair-port (shpjs (<! =file=)))))
            (close! =file=))
        (do (fs/writeFile
                filepath
                (js/JSON.stringify (<! =json=))
                #(js/console.log "wrote"))
            (close! =json=))))
    (js/console.log "bloop")))


(map #(fsRead-zip->fsWriteWDIR-json2 %)
     ["C:\\Users\\Surface\\Downloads\\www2.census.gov\\geo\\tiger\\GENZ2013\\cb_2013_01_cousub_500k.zip",
      "C:\\Users\\Surface\\Downloads\\www2.census.gov\\geo\\tiger\\GENZ2013\\cb_2013_01_county_within_ua_500k.zip",
      "C:\\Users\\Surface\\Downloads\\www2.census.gov\\geo\\tiger\\GENZ2013\\cb_2013_01_puma10_500k.zip",
      "C:\\Users\\Surface\\Downloads\\www2.census.gov\\geo\\tiger\\GENZ2013\\cb_2013_01_place_500k.zip",
      "C:\\Users\\Surface\\Downloads\\www2.census.gov\\geo\\tiger\\GENZ2013\\cb_2013_01_sldl_500k.zip"])

; MADE MOOT BY FS-EXTRA NPM LIBRARY
;(defn mkdirp!
;  "
;  Like the NPM mkdirp, but takes a file path string (the file to be created), a
;  directory path string (the file path minus the file name) and an input `chan`
;  and puts the file path to that channel when done making the directory. This is
;  used as an async coordinator to halts later file-writing processes via
;  internal `(go...)` block.
;  "
;  [=file-path= file-path dir-path]
;  (go (mkdirp dir-path (>! =file-path= file-path))))
;
;#_(let [=file-path= (chan 1)]
;    (go (mkdirp! =file-path= "./test/mkdirp!/file.name" "./test/mkdirp2!/")
;        (pprint (<! =file-path=))
;        (close! =file-path=)))
;
;;=> #object[cljs.core.async.impl.channels.ManyToManyChannel]
;;"Done mkdirp: ./test/mkdirp!/"

(defn fsR!
  "
  Takes a file-path and a channel and uses `fs/readFile` to read the file and
  put the result into the chan. Inputs:
  1. channel in which to put read file
  2. file path to read from
  "
  [=file= file-path]
  (fs/readFile
    file-path
    ;"utf8" ;; IMPORTANT: Can't be encoded, or else `shpjs` throws:
    ; `TypeError: Request path contains unescaped characters`
    (fn [err file]
      (if (= (type err) (type js/Error))
        (throw err)
        (go (>! =file= file))))))

#_(let [=file-path= (chan 1) =zip= (chan 1)]
    (go
      (mkdirp!
        =file-path=
        "C:\\Users\\Surface\\Downloads\\www2.census.gov\\geo\\tiger\\GENZ2013\\cb_2013_01_puma10_500k.zip"
        "./test/mkdirp!/")
      (fsR! =zip= (<! =file-path=))
      (close! =file-path=)
      (pprint (<! =zip=))
      (close! =zip=)))

;=> #object[cljs.core.async.impl.channels.ManyToManyChannel]
;"PK"   \b (Iï¿½Dï¿½ï¿½ï¿½ï¿½ ï¿½ï¿½  ` cb_2013_01_pum... zipfile wackies

(defn zip->>json!
  "
  Takes a .zip file and converts it to GeoJSON via 3rd party `shpjs` library.
  Inputs:
  1. a channel to put GeoJSON into
  2. .zip file to be converted to GeoJSON
  "
  [=json= zip]
  (go (>! =json= (<? (cpa/value-port (shpjs zip))))))

#_(let [=file-path= (chan 1) =zip= (chan 1) =json= (chan 1)]
    (go
      (mkdirp!
        =file-path=
        "C:\\Users\\Surface\\Downloads\\www2.census.gov\\geo\\tiger\\GENZ2013\\cb_2013_01_puma10_500k.zip"
        "./test/mkdirp!/")
      (fsR! =zip= (<! =file-path=))
      (close! =file-path=)
      (zip->>json! =json= (<! =zip=))
      (close! =zip=)
      (js/console.log (js/JSON.stringify (<! =json=)))
      (close! =json=)))

;=> #object[cljs.core.async.impl.channels.ManyToManyChannel]
;{"type":"FeatureCollection","features":[{"type":"Feature", ... GeoJSON!

(defn json->fsW!
  "
  Takes a file path and some GeoJSON and uses `fs/writeFile` to save the file.
  Inputs:
  2) file path to store GeoJSON to
  1) GeoJSON
  "
  [outpath =json=]
  (go (fs/outputJson
        outpath
        (js/JSON.stringify (<! =json=))
        #(js/console.log "Wrote GeoJSON to: " filepath))
      (close! =json=)))


(let [=file-path= (chan 1) =zip= (chan 1) =json= (chan 1)]
  (go
    (mkdirp!
      =file-path=
      "C:\\Users\\Surface\\Downloads\\www2.census.gov\\geo\\tiger\\GENZ2013\\cb_2013_01_puma10_500k.zip"
      "./test/mkdirp!/")
    (fsR! =zip= (<! =file-path=))
    (close! =file-path=)
    (zip->>json! =json= (<! =zip=))
    (close! =zip=)
    (json->fsW! "./test/mkdirp!/test.json" =json=)))


;;    88~\ ,e,
;;  _888__  ^  888-~88e
;;   888   888 888  888
;;   888   888 888  888
;;   888   888 888  888
;;   888   888 888  888
;;


(defn mkdirp>!fsR-zip>!json>!fsW
  "
  Coordinates the conveyance of a zipped shapefile through three asynchronous
  process using `core.async` channels. Takes a path as a string and determines
  if the file in the path matches one of the known geoHierarchies (in
  `geoKeyMap`). If matched, creates the necessary directory structure, converts
  the file from .zip to .json (GeoJSON), then saves the file to the directory
  created.
  "
  [path-string]
  (if-let [{:keys [filepath dirpath]} (->> (s/split path-string #"\\") (last) (filename->>geopath))]
    (let [=mkdirp= (chan 1)
          =zip=    (chan 1)
          =json=   (chan 1)]
      (go ()))))














(defn megaShpGeoJSONConverter
  "Takes a path to a list (vector) of paths to some zipfiles and - for each item in the list - based on the filename (if present) translates the zipfile to geojson, creates a directory structure (if needed) to store them and stores them in there."
  [path-to-list-of-files]
  (let [=filepaths= (chan 1)
        =to= (chan 1)
        =from= (chan 1)]
    (go (fs/readFile
         path-to-list-of-files
         (fn [err list]
           (if (= (type err) (type js/Error))
             (throw err)
             (put! =filepaths= (js->clj (js/JSON.parse list)))))))
    (pipeline-async
      1
      =to=
      (take! =filepaths= (fn [filepaths])
                   (map #(js/console.log (str "filepath: " %)) filepaths)))))
;      =from=
;
;
;
;
;
;    (do (fs/readFile
;          path-to-list-of-files
;          (fn [err list]
;            (if (= (type err) (type js/Error))
;              (throw err)
;              (put! =filepaths= (js->clj (js/JSON.parse list))))))
;        (take! =filepaths= (fn [filepaths]
;                             (map #(js/console.log (str "filepath: " %)) filepaths)))
;        (close! =filepaths=)))
;
;(megaShpGeoJSONConverter "./test/test10-abv.json")
;
;(fs/readFile
;  "./test/test10-abv.json"
;  (fn [err list]
;    (if (= (type err) (type js/Error))
;      (throw err)
;      (js/console.log (js/JSON.parse list)))))
;; ============================================================================

;; -----------------------------------------------------------------------------------------

;; TODO: Map over all the files in the test.json abr for a test of functionality




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




