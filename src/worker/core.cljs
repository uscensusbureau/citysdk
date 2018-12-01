(ns worker.core
  (:require [census.core :refer [census]]))

(js/self.addEventListener "message"
   (fn [^js e]
     (let [args (.. e -data)]
       (census args (fn [err json]
                      (if err
                          (js/postMessage (str "Error: " err))
                          (js/postMessage json)))))))
