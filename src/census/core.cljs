(ns census.core
  (:require
    [cljs.core.async :as <|]
    [ajax.core :refer [GET POST]]
    [cljs.pprint :refer [pprint]]
    [clojure.repl :refer [source]]
    [geojson.index :refer [geoKeyMap]]
    [geoAPI.core :refer [IO-pp->census-GeoJSON]]
    [statsAPI.core :refer [IO-pp->census-stats stats-key]]
    [geojson.core :refer [geo+config->mkdirp->fsW!]]
    [com.rpl.specter :as sp]
    [wmsAPI.core :refer [Icb<-args<<=IO=]]
    [utils.core :as ut]))