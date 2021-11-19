(ns configs.utils.core
  (:require [clojure.reader :refer [read-string]]
            [census.utils.core :refer [err-type]]
            ["fs" :as fs]
            ["mkdirp" :as mkdirp]))

(defn read-edn [path]
  (read-string (str (fs/readFileSync path))))

; TODO: ? https://github.com/loganpowell/census-geojson/blob/44b621e173952d7a349267f0a5cf946b591c291b/src/census/core.cljs
; If users want a simple way to save the file on Node...

(defn FileSaver
  "
  Takes some configs.geojson and a directory and - internally - calls Node `fs/writeFile`
  to store the configs.geojson into the directory, creating the directory first if needed.
  "
  [{:keys [directory filepath json]}]
  (prn (str "Ensuring Directory: " directory))
  (-> (mkdirp directory)
      (.then (fn [res]
               (do (prn (str "res " res))
                   (fs/writeFile
                      filepath
                      json
                      (fn [res]
                        (if (= (type res) err-type)
                            (prn (str "Error writing file: " filepath))
                            (prn (str "Wrote file to: " filepath))))))))
      (.catch (fn [err] (prn (str "Error creating directory: " err " for " filepath))))))


(FileSaver {:directory "./bloop/bleep"
            :filepath "./bloop/bleep/stuff.json"
            :json "['hello']"})