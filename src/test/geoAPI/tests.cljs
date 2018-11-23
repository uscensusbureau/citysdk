(ns test.geoAPI.tests
  (:require [cljs.core.async    :refer [>! <! chan close! pipeline-async]
                                :refer-macros [go]]
            [census.geoAPI.core :refer [geo-error
                                        geo-url-builder
                                        geo-scoper
                                        lg-warn->geo
                                        geo-pattern-matcher
                                        geo-pattern-maker
                                        geo-url-composer
                                        IO-pp->census-GeoJSON
                                        ids<-$g$<-args
                                        geoid<-feature
                                        features<-geoids]]

            [test.fixtures.core :refer [*g*]]))
