(ns census.geojson.core
  (:require
    [cljs.core.async :as <|]
    [clojure.string :as s]
    [clojure.set :refer [map-invert]]
    [defun.core :refer-macros [defun]]
    [cljs-promises.async :as cpa :refer [pair-port] :refer-macros [<?]]
    ["fs" :as fs]
    ["path" :as path]
    ["shpjs" :as shpjs]
    ["mkdirp" :as mkdirp]
    [census.utils.core :as ut]
    [census.geojson.filepaths :as geos]
    [census.geojson.filepaths_abv :as geos_abv]))

(def geoKeyMap (ut/read-edn "./src/census/geojson/index.edn"))

;; NOTE: If you need to increase memory of Node in Shadow... Eval in REPL:
;; (shadow.cljs.devtools.api/node-repl {:node-args ["--max-old-space-size=8192"]})


;; ,e,   d8                                888                               888
;;  "  _d88__  e88~~8e  888-~88e-~88e      888  e88~~8e  Y88b    /  e88~~8e  888
;; 888  888   d888  88b 888  888  888 ____ 888 d888  88b  Y88b  /  d888  88b 888
;; 888  888   8888__888 888  888  888      888 8888__888   Y88b/   8888__888 888
;; 888  888   Y888    , 888  888  888      888 Y888    ,    Y8/    Y888    , 888
;; 888  "88_/  "88___/  888  888  888      888  "88___/      Y      '88___/  888
;;


(defn map-xx->vin
  "
  Map over a collection to transform 2-digit vintages to their 4-digit codes.
  "
  [vtr]
  (map #(cond (= "90" %) "1990"
              (= "00" %) "2000"
              :else %)
       vtr))

(defn filename->>pattern
  "
  Breaks apart a Census Tiger filename and cleans it into meaningful parts.
  Takes a single string and returns a vector of vectors.

  Inputs:
  1) a filename (string)

  Example:
  (filename->>pattern 'cb_d00_01_county_within_ua_500k.zip')
  ; => (['cb'] ['2000'] ['01'] ['county'] ['within'] ['ua'] ['500' 'k'] ['zip'])
  "
  [string]
  (->> (s/split string #"_|\.")
       (map #(re-seq #"[a-z]+|[0-9]+" %))
       (map (fn [y] (remove #(= "d" %) y)))
       (ut/map-target map-xx->vin 2)
       (map #(vec %))))

#_(filename->>pattern 'cb_d00_01_county_within_ua_500k.zip')

; TODO: If geoKeyMap requires additional config to enable pattern matching for
; TODO: API + GeoJSON census.merger, update this:

(defn vin+lev=?key
  "
  Searches a single item from the geoKeyMap (inverted) and checks for a match
  against the provided vintage/level abbreviation code pair. Returns the `name`
  of the key (string) if matched and `nil` if mismatched.

  Inputs:
  1) vintage = string
  2) level abbreviation = string
  3) a map with a single key/value set
  "
  [vintage level [k v]]
  (if-let [[_ v2] (find k (keyword vintage))]
    (if (= (second (first v2)) level) (name v) nil)
    nil))

(defn keySearch
  "
  Searches the entire geoKeyMap (inverted) for matches against a provided
  vintage and level abbreviation returning a string for the verbose geoKeyMap
  key match if successful and an empty string ('') if not.

  Inputs:
  1) vintage = string
  2) level abbreviation = string
  "
  [vintage level]
  (apply str (remove nil? (map #(vin+lev=?key vintage level %)
                               (seq (map-invert geoKeyMap))))))

(defn config-geoPath
  "
  Consumes parts of the Tiger filename to compose a structured path for storage
  as a `.json` file.

  Inputs:
  1) Geographic Level
  2) Shapefile Resolution part 1
  3) Resolution part 2
  4) Vintage
  &) Optional arguments for locally (e.g., state FIPS) scoped geo aggregations

  Example:
  (config-geoPath ['county' '500' 'k' '2000' '01'])
  ; => '500k/2000/01/.json'
  "
  [[lev res m vin & etc]]
  (let [geopath (s/join "/" (list* vin etc))]
    {:filepath  (str "./GeoJSON/"
                     (s/join "/" [(apply str res m) geopath (apply str (keySearch vin lev) ".json")]))
     :directory (str "./GeoJSON/"
                     (s/join "/" [(apply str res m) geopath]))}))


(defn scope-geoPath
  "
  Creates a filepath determined by whether or not the input contains a state
  (e.g., '01') or national code ('99'/'us'). If the value returned from the
  `keySearch` function = `` (empty string) returns `nil`.
  "
  [[lev res mes vin sco]]
  (if-not (= "" (keySearch vin lev))
    (if (or (= sco "99") (= sco "us"))
      (config-geoPath [lev res mes vin])
      (config-geoPath [lev res mes vin sco]))
    nil))


;    ~~~888~~~   ,88~-_   888~-_     ,88~-_
;       888     d888   \  888   \   d888   \
;       888    88888    | 888    | 88888    |
;       888    88888    | 888    | 88888    |
;       888     Y888   /  888   /   Y888   /
;       888      `88_-~   888_-~     `88_-~


(defun file-pattern=<<geoPath
  "
  Pattern matches against incoming file structures to create a harmonized
  directory ontology in which to store the file.
  "
  ([[lev sco] [vin]       _      _]                                       (scope-geoPath [lev       "500" "k" vin    sco])) ; 90-00
  ([_         [vin]       [sco]  ["outline" ] [res mes] _]                (scope-geoPath ["outline" res   mes vin    sco])) ; 2010
  ([_         [vin]       [sco]  ["uac" "10"] [res mes] _]                (scope-geoPath ["uac"     res   mes vin    sco])) ; 2012
  ([_         ["rd" "13"] [sco]  [lev _     ] [res mes] _]                (scope-geoPath [lev       res   mes "2012" sco])) ; 2012
  ([_         ["rd" "13"] [sco]  [lev  ]      [res mes] _]                (scope-geoPath [lev       res   mes "2012" sco])) ; 2012
  ([_         [vin]       [sco]  [lev  ]      [res mes] _]                (scope-geoPath [lev       res   mes vin    sco])) ; 2013+
  ([_         [vin]       [sco]  [lev _     ] [res mes] _]                (scope-geoPath [lev       res   mes vin    sco])) ; 2013+
  ([_         ["2010"]    ["us"] ["860"]      _            ["500" "k"] _] nil) ;; abandon ship (500k zctas)
  ([_         [vin]       [sco]  [lev  ]      _            [res   mes] _] (scope-geoPath [lev       res   mes vin    sco])) ; 2010
  ([& anything-else]                                                      nil))

(defn filename->>geopath
  "
  Takes a filename string as input and sends it through the filepath creation
  pipeline. Returns `nil` if no matches are found for the level abbreviation
  contained in the filename.

  Examples:
    (filename->>geopath 'tb99_d00_shp.zip')
    ;; => nil
    (filename->>geopath 'zt01_d00_shp.zip')
    ;; => {:filepath './GeoJSON/500k/2000/01/zip-code-tabulation-area.json'
           :directory './GeoJSON/500k/2000/01'}
  "
  [string]
  (if-let [answer (->> (filename->>pattern string) (apply file-pattern=<<geoPath))]
    answer
    nil))

(comment ; filename->>geopath
  (filename->>geopath "tb99_d00_shp.zip")
  ;; => nil

  (filename->>geopath "zt01_d00_shp.zip")
  ;; => "500k/2000/01/zip-code-tabulation-area.json"

  (filename->>geopath "cb_rd13_48_sldl_500k.zip")
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
  ;; => "500k/2010/01/school-district-_unified'.json"

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


;            ,e,                     888 ,e,
;  888-~88e   "  888-~88e   e88~~8e  888  "  888-~88e  e88~~8e         /~~~8e   d88~\ Y88b  / 888-~88e  e88~~\
;  888  888b 888 888  888b d888  88b 888 888 888  888 d888  88b ____       88b C888    Y888/  888  888 d888
;  888  8888 888 888  8888 8888__888 888 888 888  888 8888__888       e88~-888  Y88b    Y8/   888  888 8888
;  888  888P 888 888  888P Y888    , 888 888 888  888 Y888    ,      C888  888   888D    Y    888  888 Y888
;  888-_88"  888 888-_88"   "88___/  888 888 888  888  "88___/        "88_-888 \_88P    /     888  888  "88__/
;  888           888                                                                  _/

;; Examples ========================================

;; These functions have the signature required to act as async conduits within
;; `core.async`s `pipeline-async` function...

#_(fs/access "./GeoJSON/500k/103/01/congressional-district.json"
             fs/constants.F_OK
             (fn [err] (if (nil? err)
                         (pprint "There")
                         (pprint "Not there"))))
;=> nil
;"There"
;; ==================================================


(defn fsCheck->put!
  "
  Checks to see if a file is already located at a given location.
  puts 'there' into the passed `chan` if so, puts the filepath in the `chan` if
  not. Used to ensure files aren't saved twice (and thus needed to be recommited)
  "
  [val, =port=]
  (fs/access val
             fs/constants.F_OK
             (fn [err] (if (nil? err)
                         (do (<|/put! =port= (str "there")) (<|/close! =port=))
                         (do (<|/put! =port= val) (<|/close! =port=))))))

(defn fsR-file->put!
  "
  Uses `fs` to read in file (async), putting the resulting file into the passed-
  in `chan` when reading complete.
  "
  [val, =port=]
  (prn (str "fsRead'ing: " val))
  (fs/readFile val
               (fn [err, file]
                 (if (= (type err) ut/err-type)
                   (throw (ut/error err))
                   (<|/put! =port= file #(<|/close! =port=))))))

;; Examples =========================================

#_(let [c (chan 1)]
    (go (fsR-file->put!
          "C:\\Users\\Surface\\Downloads\\www2.census.gov\\geo\\tiger\\GENZ2013\\cb_2013_01_cousub_500k.zip"
          c)
        (pprint (<! c))))

;;=> #object[cljs.core.async.impl.channels.ManyToManyChannel]
;"fsRead'ing: C:\\Users\\Surface\\Downloads\\www2.census.gov\\geo\\tiger\\GENZ2013\\cb_2013_01_cousub_500k.zip"
;
;#object[Buffer PK    'Iï¿½Dcï¿½L  ï¿½   ` cb_2013_01_c ...works
;; ==================================================


;; =================== IMPORTANT NOTE ==========================
;; If the written file is showing up as `[object Object]` it might
;; be due to it being stored as the representation of a js object
;; instead of the actual content therein. This got me stuck for a
;; long time!!! Solved by wrapping the desired output like so:
;; `(js/JSON.stringify <<output>>)`
;; ===============================================================


(defn zip->geojson->put!
  "
  Uses `shpjs` NPM library to convert zipfile into GeoJSON format.
  Uses `cljs-promises` to convert the promise returned from `shpjs` to a
  promise-cum-core.async `chan` (`value-port`). Once the promise is resolved,
  the GeoJSON is `take!`en out of the `value-port` and `put!` into a passed `chan`.
  "
  [val =port=]
  (prn (str "zip->json'ing..."))
  (<|/take! (cpa/value-port (shpjs val))
            (fn [res] (<|/put! =port=
                               (js/JSON.stringify res)
                               #(<|/close! =port=)))))

;; Examples ========================================

#_(let [=zip= (<|/chan 1)
        =json= (<|/chan 1)]
    (<|/go (fsR-file->put!
             ;"C:\\Users\\Surface\\Downloads\\www2.census.gov\\geo\\tiger\\GENZ2010\\gz_2010_us_860_00_500k.zip"
             "C:\\Users\\Surface\\Downloads\\www2.census.gov\\geo\\tiger\\GENZ2013\\cb_2013_01_cousub_500k.zip"
             =zip=)
        (<|/pipeline-async 1 =json= zip->geojson->put! =zip=)
        (js/console.log (<|/<! =json=))))
;; NOTE: pprint overflows the HEAP. Must use native js/console.log :(

;; "fsRead'ing: C:\\Users\\Surface\\Downloads\\www2.census.gov\\geo\\tiger\\GENZ2013\\cb_2013_01_cousub_500k.zip"
;
;=> #object[cljs.core.async.impl.channels.ManyToManyChannel]
;"zip->json'ing..."
;
;{"type":"FeatureCollection","features":[{"type" ... works
;; ==================================================

;;                  88~\
;;  Y88b  /       _888__  e88~-_  888-~\ 888-~88e-~88e
;;   Y88b/   ____  888   d888   i 888    888  888  888
;;    Y88b         888   8888   | 888    888  888  888
;;    /Y88b        888   Y888   ' 888    888  888  888
;;   /  Y88b       888    '88_-~  888    888  888  888


(defn transducified [f]
  "
  A function that takes a standard function (taking a single argument) and
  augments it with the structure of a transducer function.
  "
  (fn [rf]
    (fn
      ([] (rf))
      ([acc] (rf acc))
      ([acc val] (rf acc (f val))))))

(defn geojson-config
  "
  Takes a directory, filepath and some GeoJSON and composes it into a map with
  cooresponding keys.
  "
  [directory filepath json]
  {:directory directory
   :filepath filepath
   :json json})

(defn x-geojson-config
  "
  Turns the census.geojson-config function into a transducer.
  "
  [directory filepath]
  (transducified (partial geojson-config directory filepath)))

;; Examples ========================================

#_(def geotest
    ["census.test directory 1"
     "census.test json 1",
     "census.test directory 2"
     "census.test json 2",
     "census.test directory 3"
     "census.test json 3"])

;(into [] (x-census.geojson-config "geotest directory" "filepath") geotest)
;; =>
;[{:directory "geotest directory", :json "census.test directory 1"}
; {:directory "geotest directory", :json "census.test json 1"}
; {:directory "geotest directory", :json "census.test directory 2"}
; {:directory "geotest directory", :json "census.test json 2"}
; {:directory "geotest directory", :json "census.test directory 3"}
; {:directory "geotest directory", :json "census.test json 3"}]
;; ==================================================

(defn geo+config->mkdirp->fsW!
  "
  Takes some census.geojson and a directory and - internally - calls Node `fs/writeFile`
  to store the census.geojson into the directory, creating the directory first if needed.
  "
  [{:keys [directory filepath json]}]
  (prn (str "Ensuring Directory: " directory))
  (mkdirp directory
          (fn [err]
            (if (= (type err) ut/err-type)
              (prn (str "Error creating directory: " filepath))
              (fs/writeFile
                filepath
                json
                (fn [err]
                  (if (= (type err) ut/err-type)
                    (prn (str "Error writing file: " filepath))
                    (prn (str "Wrote GeoJSON to: " filepath)))))))))


(defn =>read=>convert=>write=>loop
  "
  A loop that takes a `chan`, pulls a filepath out of it and does one of three
  things with that path:

  1) if there is no match found for the filename at the end of the path, recur
  2) if there is a match, but the translated file already exists, recur
  3) if there is a match and the translated file doesn't exists:
  3.1) translate the zip file to GeoJSON
  3.2) Store the GeoJSON with the appropriate name `(ns census.geojson.index)`
  "
  [=path=]
  (<|/go-loop []
    (let [path (<|/<! =path=)]
      (if-let [{:keys [directory filepath]} (->> (s/split path #"\\") (last) (filename->>geopath))]
        (let [=test-path= (<|/chan 1)]
          (do (fsCheck->put! filepath =test-path=)
              (if (not= "there" (<|/<! =test-path=))
                  (let [=zip= (<|/chan 1)
                        =json= (<|/chan 1 (x-geojson-config directory filepath))]
                    (do (fsR-file->put! path =zip=)
                        (<|/pipeline-async 1 =json= zip->geojson->put! =zip=)
                        (geo+config->mkdirp->fsW! (<|/<! =json=))
                        (recur)))
                  (do (prn (str "File already exists: " path))
                      (recur)))))
        (do (prn (str "No :geoKeyMap match found for: " path))
            (recur))))))

#_(let [path "C:\\Users\\Surface\\Downloads\\www2.census.gov\\geo\\tiger\\GENZ2013\\cb_2013_01_cousub_500k.zip"]
    (if-let [{:keys [directory filepath]} (->> (s/split path #"\\") (last) (filename->>geopath))]
      (prn (str "Already existing directory: " directory " Filepath: " filepath))
      (let [=test-path= (<|/chan 1)
            open-path (<|/<! (fsCheck->put! filepath =test-path=))]
        (if (not= "there" open-path)
          (prn (str "Not there"))
          (prn (str "There"))))))

#_(let [=c= (chan 1)]
    (go (>! =c= "C:\\Users\\Surface\\Downloads\\www2.census.gov\\geo\\tiger\\GENZ2013\\cb_2013_01_place_500k.zip")
        (=>read=>convert=>write=>loop =c=)
        (close! =c=)))



;;    88~\ ,e,
;;  _888__  ^  888-~88e
;;   888   888 888  888
;;   888   888 888  888
;;   888   888 888  888
;;   888   888 888  888


(defn batch=>zip-paths=>convert=>geojson
  "
  Takes a path to a list (vector) of paths to some zipfiles and - for each item
  in the list - based on the filename (if present) translates the zipfile to
  census.geojson, creates a directory structure (if needed) to store them and stores
  them in there.

  Uses a single `chan` as a control point between the internal `go-loop` of
  =>read=>convert=>write=>loop & a `doseq` to ensure that each file is put
  through each step of the process before moving onto the next in the file list.
  "
  [paths-vec]
  (let [=path= (<|/chan 1)]
    (=>read=>convert=>write=>loop =path=)
    (<|/go (if (= nil (doseq [path paths-vec] (<|/>! =path= path)))
               (js/console.log "\n ======================== \n
                                \n === FINISHED PARSING === \n
                                \n === Wrapping up .... === \n
                                \n ======================== \n")))))

#_(batch=>zip-paths=>convert=>geojson geos_abv/paths)
