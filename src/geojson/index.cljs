(ns geojson.index)

;;       /                    888  /                          e    e
;; e88~88e  e88~~8e   e88~-_  888 /     e88~~8e  Y88b  /     d8b  d8b       /~~~8e  888-~88e
;; 888 888 d888  88b d888   i 888/\    d888  88b  Y888/     d888bdY88b          88b 888  888b
;; "88_88" 8888__888 8888   | 888  \   8888__888   Y8/     / Y88Y Y888b    e88~-888 888  8888
;;  /      Y888    , Y888   ' 888   \  Y888    ,    Y     /   YY   Y888b  C888  888 888  888P
;; Cb       "88___/   "88_-~  888    \  "88___/    /     /          Y888b  "88_-888 888-_88"
;;  Y8"'8D                                       _/                                 888


(def geoKeyMap
  {:nation                                                      {:2010 {:abbr "outline"  :geo-target []}
                                                                 :2013 {:abbr "nation"   :geo-target []}
                                                                 :2014 {:abbr "nation"   :geo-target []}
                                                                 :2015 {:abbr "nation"   :geo-target []}
                                                                 :2016 {:abbr "nation"   :geo-target []}
                                                                 :2017 {:abbr "nation"   :geo-target []}}
   :region                                                      {:2013 {:abbr "region"   :geo-target []}
                                                                 :2014 {:abbr "region"   :geo-target []}
                                                                 :2015 {:abbr "region"   :geo-target []}
                                                                 :2016 {:abbr "region"   :geo-target []}
                                                                 :2017 {:abbr "region"   :geo-target []}
                                                                 :2010 {:abbr "020"      :geo-target []}
                                                                 :2000 {:abbr "rg"       :geo-target []}}
   :division                                                    {:2013 {:abbr "division" :geo-target []}
                                                                 :2014 {:abbr "division" :geo-target []}
                                                                 :2015 {:abbr "division" :geo-target []}
                                                                 :2016 {:abbr "division" :geo-target []}
                                                                 :2017 {:abbr "division" :geo-target []}
                                                                 :2010 {:abbr "030"      :geo-target []}
                                                                 :2000 {:abbr "dv"       :geo-target []}}
   :state                                                       {:2013 {:abbr "state"    :geo-target []}
                                                                 :2014 {:abbr "state"    :geo-target []}
                                                                 :2015 {:abbr "state"    :geo-target []}
                                                                 :2016 {:abbr "state"    :geo-target []}
                                                                 :2017 {:abbr "state"    :geo-target []}
                                                                 :2010 {:abbr "040"      :geo-target []}
                                                                 :1990 {:abbr "st"       :geo-target []}
                                                                 :2000 {:abbr "st"       :geo-target []}}
   :consolidated-cities                                         {:2000 {:abbr "cc"       :geo-target []}
                                                                 :2010 {:abbr "170"      :geo-target []}
                                                                 :2013 {:abbr "concity"  :geo-target []}
                                                                 :2014 {:abbr "concity"  :geo-target []}
                                                                 :2015 {:abbr "concity"  :geo-target []}
                                                                 :2016 {:abbr "concity"  :geo-target []}
                                                                 :2017 {:abbr "concity"  :geo-target []}}
   :county                                                      {:2013 {:abbr "county"   :geo-target []}
                                                                 :2014 {:abbr "county"   :geo-target []}
                                                                 :2015 {:abbr "county"   :geo-target []}
                                                                 :2016 {:abbr "county"   :geo-target []}
                                                                 :2017 {:abbr "county"   :geo-target []}
                                                                 :2010 {:abbr "050"      :geo-target []}
                                                                 :1990 {:abbr "co"       :geo-target []}
                                                                 :2000 {:abbr "co"       :geo-target []}}
   :county-subdivision                                          {:2013 {:abbr "cousub"   :geo-target []}
                                                                 :2014 {:abbr "cousub"   :geo-target []}
                                                                 :2015 {:abbr "cousub"   :geo-target []}
                                                                 :2016 {:abbr "cousub"   :geo-target []}
                                                                 :2017 {:abbr "cousub"   :geo-target []}
                                                                 :2010 {:abbr "060"      :geo-target []}
                                                                 :1990 {:abbr "cs"       :geo-target []}
                                                                 :2000 {:abbr "cs"       :geo-target []}}
   :tract                                                       {:2013 {:abbr "tract"    :geo-target []}
                                                                 :2014 {:abbr "tract"    :geo-target []}
                                                                 :2015 {:abbr "tract"    :geo-target []}
                                                                 :2016 {:abbr "tract"    :geo-target []}
                                                                 :2017 {:abbr "tract"    :geo-target []}
                                                                 :2010 {:abbr "140"      :geo-target []}
                                                                 :1990 {:abbr "tr"       :geo-target []}
                                                                 :2000 {:abbr "tr"       :geo-target []}}
   :place                                                       {:2013 {:abbr "place"    :geo-target []}
                                                                 :2014 {:abbr "place"    :geo-target []}
                                                                 :2015 {:abbr "place"    :geo-target []}
                                                                 :2016 {:abbr "place"    :geo-target []}
                                                                 :2017 {:abbr "place"    :geo-target []}
                                                                 :2010 {:abbr "160"      :geo-target []}
                                                                 :1990 {:abbr "pl"       :geo-target []}
                                                                 :2000 {:abbr "pl"       :geo-target []}}
   :alaska-native-regional-corporation                          {:2013 {:abbr "anrc"     :geo-target []}
                                                                 :2014 {:abbr "anrc"     :geo-target []}
                                                                 :2015 {:abbr "anrc"     :geo-target []}
                                                                 :2016 {:abbr "anrc"     :geo-target []}
                                                                 :2017 {:abbr "anrc"     :geo-target []}
                                                                 :2010 {:abbr "230"      :geo-target []}
                                                                 :1990 {:abbr "an"       :geo-target []}
                                                                 :2000 {:abbr "an"       :geo-target []}}
   :american-indian-area!alaska-native-area!hawaiian-home-land  {:2013 {:abbr "aiannh"   :geo-target []}
                                                                 :2014 {:abbr "aiannh"   :geo-target []}
                                                                 :2015 {:abbr "aiannh"   :geo-target []}
                                                                 :2016 {:abbr "aiannh"   :geo-target []}
                                                                 :2017 {:abbr "aiannh"   :geo-target []}
                                                                 :2010 {:abbr "250"      :geo-target []}
                                                                 :1990 {:abbr "ir"       :geo-target []}
                                                                 :2000 {:abbr "na"       :geo-target []}}
   :metropolitan-statistical-area!micropolitan-statistical-area {:2013 {:abbr "cbsa"     :geo-target []}
                                                                 :2014 {:abbr "cbsa"     :geo-target []}
                                                                 :2015 {:abbr "cbsa"     :geo-target []}
                                                                 :2016 {:abbr "cbsa"     :geo-target []}
                                                                 :2017 {:abbr "cbsa"     :geo-target []}
                                                                 :2010 {:abbr "310"      :geo-target []}
                                                                 :1990 {:abbr "ma"       :geo-target []}}
   :combined-statistical-area                                   {:2013 {:abbr "csa"      :geo-target []}
                                                                 :2014 {:abbr "csa"      :geo-target []}
                                                                 :2015 {:abbr "csa"      :geo-target []}
                                                                 :2016 {:abbr "csa"      :geo-target []}
                                                                 :2017 {:abbr "csa"      :geo-target []}
                                                                 :2010 {:abbr "330"      :geo-target []}}
   :new-england-city-and-town-area                              {:2013 {:abbr "necta"    :geo-target []}
                                                                 :2014 {:abbr "necta"    :geo-target []}
                                                                 :2015 {:abbr "necta"    :geo-target []}
                                                                 :2016 {:abbr "necta"    :geo-target []}
                                                                 :2017 {:abbr "necta"    :geo-target []}
                                                                 :2010 {:abbr "350"      :geo-target []}
                                                                 :2000 {:abbr "ne"       :geo-target []}}
   :combined-new-england-city-and-town-area                     {:2016 {:abbr "cnecta"   :geo-target []}
                                                                 :2017 {:abbr "cnecta"   :geo-target []}}
   :urban-area                                                  {:2013 {:abbr "ua"       :geo-target []}
                                                                 :2014 {:abbr "ua"       :geo-target []}
                                                                 :2015 {:abbr "ua"       :geo-target []}
                                                                 :2016 {:abbr "ua"       :geo-target []}
                                                                 :2017 {:abbr "ua"       :geo-target []}
                                                                 :2012 {:abbr "uac"      :geo-target []}
                                                                 :1990 {:abbr "ua"       :geo-target []}
                                                                 :2000 {:abbr "ua"       :geo-target []}}
   :congressional-district                                      {:103  {:abbr "cd"       :geo-target []}
                                                                 :104  {:abbr "cd"       :geo-target []}
                                                                 :105  {:abbr "cd"       :geo-target []}
                                                                 :106  {:abbr "cd"       :geo-target []}
                                                                 :107  {:abbr "cd"       :geo-target []}
                                                                 :108  {:abbr "cd"       :geo-target []}
                                                                 :109  {:abbr "cd"       :geo-target []}
                                                                 :110  {:abbr "cd"       :geo-target []}
                                                                 :2013 {:abbr "cd"       :geo-target []}
                                                                 :2014 {:abbr "cd"       :geo-target []}
                                                                 :2015 {:abbr "cd"       :geo-target []}
                                                                 :2016 {:abbr "cd"       :geo-target []}
                                                                 :2017 {:abbr "cd"       :geo-target []}
                                                                 :2012 {:abbr "cd"       :geo-target []}
                                                                 :2010 {:abbr "500"      :geo-target []}}
   :school-district-'elementary'                                {:2016 {:abbr "elsd"     :geo-target []}
                                                                 :2017 {:abbr "elsd"     :geo-target []}
                                                                 :2000 {:abbr "se"       :geo-target []}}
   :school-district-'secondary'                                 {:2016 {:abbr "scsd"     :geo-target []}
                                                                 :2017 {:abbr "scsd"     :geo-target []}
                                                                 :2000 {:abbr "ss"       :geo-target []}}
   :school-district-'unified'                                   {:2016 {:abbr "unsd"     :geo-target []}
                                                                 :2017 {:abbr "unsd"     :geo-target []}
                                                                 :2010 {:abbr "970"      :geo-target []}
                                                                 :2000 {:abbr "sn"       :geo-target []}}
   :block-group                                                 {:2013 {:abbr "bg"       :geo-target []}
                                                                 :2014 {:abbr "bg"       :geo-target []}
                                                                 :2015 {:abbr "bg"       :geo-target []}
                                                                 :2016 {:abbr "bg"       :geo-target []}
                                                                 :2017 {:abbr "bg"       :geo-target []}
                                                                 :2010 {:abbr "150"      :geo-target []}
                                                                 :1990 {:abbr "bg"       :geo-target []}
                                                                 :2000 {:abbr "bg"       :geo-target []}}
   :public-use-microdata-area                                   {:2013 {:abbr "puma"     :geo-target []}
                                                                 :2014 {:abbr "puma"     :geo-target []}
                                                                 :2015 {:abbr "puma"     :geo-target []}
                                                                 :2016 {:abbr "puma"     :geo-target []}
                                                                 :2017 {:abbr "puma"     :geo-target []}}
   :zip-code-tabulation-area                                    {:2013 {:abbr "zcta"     :geo-target []}
                                                                 :2014 {:abbr "zcta"     :geo-target []}
                                                                 :2015 {:abbr "zcta"     :geo-target []}
                                                                 :2016 {:abbr "zcta"     :geo-target []}
                                                                 :2017 {:abbr "zcta"     :geo-target []}
                                                                 :2010 {:abbr "860"      :geo-target []} ;; this is a bfjo, punted
                                                                 :2000 {:abbr "zt"       :geo-target []}} ;; zipcodes are *not* the same
   :state-legislative-district-'upper-chamber'                  {:2013 {:abbr "sldu"     :geo-target []}
                                                                 :2014 {:abbr "sldu"     :geo-target []}
                                                                 :2015 {:abbr "sldu"     :geo-target []}
                                                                 :2016 {:abbr "sldu"     :geo-target []}
                                                                 :2017 {:abbr "sldu"     :geo-target []}
                                                                 :2012 {:abbr "sldu"     :geo-target []}
                                                                 :2010 {:abbr "610"      :geo-target []}
                                                                 :2000 {:abbr "su"       :geo-target []}}
   :state-legislative-district-'lower-chamber'                  {:2013 {:abbr "sldl"     :geo-target []}
                                                                 :2014 {:abbr "sldl"     :geo-target []}
                                                                 :2015 {:abbr "sldl"     :geo-target []}
                                                                 :2016 {:abbr "sldl"     :geo-target []}
                                                                 :2017 {:abbr "sldl"     :geo-target []}
                                                                 :2012 {:abbr "sldl"     :geo-target []}
                                                                 :2010 {:abbr "620"      :geo-target []}
                                                                 :2000 {:abbr "sl"       :geo-target []}}})

