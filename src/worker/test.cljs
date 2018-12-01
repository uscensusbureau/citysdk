(ns worker.test)

(let [worker (js/Worker. "/js/main.js")]
  (.. worker (addEventListener (fn [e] (js/console.log e))))
  (.. worker (postMessage #js {"vintage" "2015","geoHierarchy" #js {"county" #js {"lat" 28.2639,"lng" -80.7214}}})))
