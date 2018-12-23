(defproject census-cljc "1.0.0"
  :description "Convenience functions for working with Census APIs: Statistics, Cartographic GeoJSON, lat/lng -> FIPS, and other niceties."
  :url "https://github.com/uscensusbureau/citysdk/tree/cljc"
  :dependencies [[org.clojure/core.async "0.4.474"]
                 [funcool/cuerdas "2.0.5"]
                 [defun "0.3.0-RC1"]
                 [com.rpl/specter "1.1.3-SNAPSHOT"]
                 [frankiesardo/linked "1.3.0"]
                 [net.cgrand/xforms "0.18.2"]])