(ns configs.utils.fixtures
  (:require [clojure.reader :refer [read-string]]
            ["fs" :as fs]))

(defn read-edn [path]
  (read-string (str (fs/readFileSync path))))