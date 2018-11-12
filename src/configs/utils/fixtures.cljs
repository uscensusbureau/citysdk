(ns configs.utils.fixtures
  (:require [clojure.reader :refer [read-string]]
            [census.utils.core :refer [err-type]]
            ["fs" :as fs]
            ["mkdirp" :as mkdirp]))

(defn read-edn [path]
  (read-string (str (fs/readFileSync path))))

(defn config->mkdirp->fsW!
  "
  Takes some configs.geojson and a directory and - internally - calls Node `fs/writeFile`
  to store the configs.geojson into the directory, creating the directory first if needed.
  "
  [{:keys [directory filepath json]}]
  (prn (str "Ensuring Directory: " directory))
  (mkdirp directory
          (fn [err]
            (if (= (type err) err-type)
              (prn (str "Error creating directory: " filepath))
              (fs/writeFile
                filepath
                json
                (fn [err]
                  (if (= (type err) err-type)
                    (prn (str "Error writing file: " filepath))
                    (prn (str "Wrote file to: " filepath)))))))))