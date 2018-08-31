(ns geojson.index)

;;       /                    888  /                          e    e
;; e88~88e  e88~~8e   e88~-_  888 /     e88~~8e  Y88b  /     d8b  d8b       /~~~8e  888-~88e
;; 888 888 d888  88b d888   i 888/\    d888  88b  Y888/     d888bdY88b          88b 888  888b
;; "88_88" 8888__888 8888   | 888  \   8888__888   Y8/     / Y88Y Y888b    e88~-888 888  8888
;;  /      Y888    , Y888   ' 888   \  Y888    ,    Y     /   YY   Y888b  C888  888 888  888P
;; Cb       "88___/   "88_-~  888    \  "88___/    /     /          Y888b  "88_-888 888-_88"
;;  Y8"'8D                                       _/                                 888


(def geoKeyMap                                                             ; :id<-json Examples:
  {:us                                                                     ; TODO: Changed from `:nation`
   {:2010 {:lev<-file "outline"  :id<-json []}                             ; NA
    :2013 {:lev<-file "nation"   :id<-json [:GEOID]}                       ; "US"
    :2014 {:lev<-file "nation"   :id<-json [:GEOID]}                       ; "US"
    :2015 {:lev<-file "nation"   :id<-json [:GEOID]}                       ; "US"
    :2016 {:lev<-file "nation"   :id<-json [:GEOID]}                       ; "US"
    :2017 {:lev<-file "nation"   :id<-json [:GEOID]}}                      ; "US"
   :region
   {:2013 {:lev<-file "region"   :id<-json [:GEOID]}                       ; "4"
    :2014 {:lev<-file "region"   :id<-json [:GEOID]}                       ; "4"
    :2015 {:lev<-file "region"   :id<-json [:GEOID]}                       ; "4"
    :2016 {:lev<-file "region"   :id<-json [:GEOID]}                       ; "4"
    :2017 {:lev<-file "region"   :id<-json [:GEOID]}                       ; "4"
    :2010 {:lev<-file "020"      :id<-json [:REGION]}                      ; "4"
    :2000 {:lev<-file "rg"       :id<-json [:REGION]}}                     ; "4"
   :division
   {:2013 {:lev<-file "division" :id<-json [:GEOID]}                       ; "3"
    :2014 {:lev<-file "division" :id<-json [:GEOID]}                       ; "3"
    :2015 {:lev<-file "division" :id<-json [:GEOID]}                       ; "3"
    :2016 {:lev<-file "division" :id<-json [:GEOID]}                       ; "3"
    :2017 {:lev<-file "division" :id<-json [:GEOID]}                       ; "3"
    :2010 {:lev<-file "030"      :id<-json [:DIVISION]}                    ; "3"
    :2000 {:lev<-file "dv"       :id<-json [:DIVISION]}}                   ; "3"
   :state
   {:2013 {:lev<-file "state"    :id<-json [:GEOID]}                       ; "01"
    :2014 {:lev<-file "state"    :id<-json [:GEOID]}                       ; "01"
    :2015 {:lev<-file "state"    :id<-json [:GEOID]}                       ; "01"
    :2016 {:lev<-file "state"    :id<-json [:GEOID]}                       ; "01"
    :2017 {:lev<-file "state"    :id<-json [:GEOID]}                       ; "01"
    :2010 {:lev<-file "040"      :id<-json [:STATE]}                       ; "01"
    :2000 {:lev<-file "st"       :id<-json [:STATE]}                       ; "01"
    :1990 {:lev<-file "st"       :id<-json [:ST]}}                         ; "01"
   :consolidated-cities
   {:2000 {:lev<-file "cc"       :id<-json [:STATE :CONCITFP]}             ; "30", "11390"
    :2010 {:lev<-file "170"      :id<-json [:STATE :CONCIT]}               ; "47", "52004"
    :2013 {:lev<-file "concity"  :id<-json [:GEOID]}                       ; "2148003"
    :2014 {:lev<-file "concity"  :id<-json [:GEOID]}                       ; "2148003"
    :2015 {:lev<-file "concity"  :id<-json [:GEOID]}                       ; "2148003"
    :2016 {:lev<-file "concity"  :id<-json [:GEOID]}                       ; "2148003"
    :2017 {:lev<-file "concity"  :id<-json [:GEOID]}}                      ; "2148003"
   :county
   {:2013 {:lev<-file "county"   :id<-json [:GEOID]}                       ; "01005"
    :2014 {:lev<-file "county"   :id<-json [:GEOID]}                       ; "01005"
    :2015 {:lev<-file "county"   :id<-json [:GEOID]}                       ; "01005"
    :2016 {:lev<-file "county"   :id<-json [:GEOID]}                       ; "01005"
    :2017 {:lev<-file "county"   :id<-json [:GEOID]}                       ; "01005"
    :2010 {:lev<-file "050"      :id<-json [:STATE :COUNTY]}               ; "01", "077"
    :2000 {:lev<-file "co"       :id<-json [:STATE :COUNTY]}               ; "01", "077"
    :1990 {:lev<-file "co"       :id<-json [:ST :CO]}}                     ; "01", "077"
   :county-subdivision
   {:2013 {:lev<-file "cousub"   :id<-json [:GEOID]}                       ; "4400378440"
    :2014 {:lev<-file "cousub"   :id<-json [:GEOID]}                       ; "4400378440"
    :2015 {:lev<-file "cousub"   :id<-json [:GEOID]}                       ; "4400378440"
    :2016 {:lev<-file "cousub"   :id<-json [:GEOID]}                       ; "4400378440"
    :2017 {:lev<-file "cousub"   :id<-json [:GEOID]}                       ; "4400378440"
    :2010 {:lev<-file "060"      :id<-json [:STATE :COUNTY :COUSUB]}       ; "01","073","93204"
    :2000 {:lev<-file "cs"       :id<-json [:STATE :COUNTY :COUSUBFP]}     ; "44","007","80780"
    :1990 {:lev<-file "cs"       :id<-json [:GEOID]}}                      ; "01077040"
   :tract
   {:2013 {:lev<-file "tract"    :id<-json [:GEOID]}                       ; "44001030200"
    :2014 {:lev<-file "tract"    :id<-json [:GEOID]}                       ; "44001030200"
    :2015 {:lev<-file "tract"    :id<-json [:GEOID]}                       ; "44001030200"
    :2016 {:lev<-file "tract"    :id<-json [:GEOID]}                       ; "44001030200"
    :2017 {:lev<-file "tract"    :id<-json [:GEOID]}                       ; "44001030200"
    :2010 {:lev<-file "140"      :id<-json [:STATE :COUNTY :TRACT]}        ; "44","001","030100"
    :2000 {:lev<-file "tr"       :id<-json [:STATE :COUNTY :TRACT]}        ; "44","007","011402"
    :1990 {:lev<-file "tr"       :id<-json [:ST :CO :TRACTBASE :TRACTSUF]}}; "01","077","0113","" ="00"
   :place
   {:2013 {:lev<-file "place"    :id<-json [:GEOID]}                       ; "4419180"
    :2014 {:lev<-file "place"    :id<-json [:GEOID]}                       ; "4419180"
    :2015 {:lev<-file "place"    :id<-json [:GEOID]}                       ; "4419180"
    :2016 {:lev<-file "place"    :id<-json [:GEOID]}                       ; "4419180"
    :2017 {:lev<-file "place"    :id<-json [:GEOID]}                       ; "4419180"
    :2010 {:lev<-file "160"      :id<-json [:STATE :PLACE]}                ; "44","14140"
    :2000 {:lev<-file "pl"       :id<-json [:STATE :PLACEFP]}              ; "44","80780"
    :1990 {:lev<-file "pl"       :id<-json [:GEOID]}}                      ; "011023"
   :alaska-native-regional-corporation
   {:2013 {:lev<-file "anrc"     :id<-json [:GEOID]}                       ; "0220010"
    :2014 {:lev<-file "anrc"     :id<-json [:GEOID]}                       ; "0220010"
    :2015 {:lev<-file "anrc"     :id<-json [:GEOID]}                       ; "0206370"
    :2016 {:lev<-file "anrc"     :id<-json [:GEOID]}                       ; "0206370"
    :2017 {:lev<-file "anrc"     :id<-json [:GEOID]}                       ; "0206370"
    :2010 {:lev<-file "230"      :id<-json [:STATE :ANRC]}                 ; "02","00590"
    :2000 {:lev<-file "an"       :id<-json [:STATE :ANRCFP]}               ; "02","03950"
    :1990 {:lev<-file "an"       :id<-json [:ANRC]}}                       ; "63"  bit.ly/1990-ANRC-FIPS
   :american-indian-area!alaska-native-area!hawaiian-home-land
   {:2013 {:lev<-file "aiannh"   :id<-json [:GEOID]}                       ; "9560"
    :2014 {:lev<-file "aiannh"   :id<-json [:GEOID]}                       ; "9560"
    :2015 {:lev<-file "aiannh"   :id<-json [:GEOID]}                       ; "9560"
    :2016 {:lev<-file "aiannh"   :id<-json [:GEOID]}                       ; "9560"
    :2017 {:lev<-file "aiannh"   :id<-json [:GEOID]}                       ; "9560"
    :2010 {:lev<-file "250"      :id<-json [:AIANHH]}                      ; "5138"
    :2000 {:lev<-file "na"       :id<-json [:AIANACE]}                     ; "6165"
    :1990 {:lev<-file "ir"       :id<-json [:IR]}}                         ; "6220"
   :metropolitan-statistical-area!micropolitan-statistical-area
   {:2013 {:lev<-file "cbsa"     :id<-json [:GEOID]}                       ; "38300"
    :2014 {:lev<-file "cbsa"     :id<-json [:GEOID]}                       ; "15660"
    :2015 {:lev<-file "cbsa"     :id<-json [:GEOID]}                       ; "15660"
    :2016 {:lev<-file "cbsa"     :id<-json [:GEOID]}                       ; "15660"
    :2017 {:lev<-file "cbsa"     :id<-json [:GEOID]}                       ; "15660"
    :2010 {:lev<-file "310"      :id<-json [:CBSA]}                        ; "10020"
    :1990 {:lev<-file "ma"       :id<-json [:MSA]}}                        ;? "0380" (*MSA may =/= CBSA*)
   :combined-statistical-area
   {:2013 {:lev<-file "csa"      :id<-json [:GEOID]}                       ; "430"
    :2014 {:lev<-file "csa"      :id<-json [:GEOID]}                       ; "430"
    :2015 {:lev<-file "csa"      :id<-json [:GEOID]}                       ; "430"
    :2016 {:lev<-file "csa"      :id<-json [:GEOID]}                       ; "430"
    :2017 {:lev<-file "csa"      :id<-json [:GEOID]}                       ; "430"
    :2010 {:lev<-file "330"      :id<-json [:CSA]}}                        ; "102"
   :new-england-city-and-town-area
   {:2013 {:lev<-file "necta"    :id<-json [:GEOID]}                       ; "70450"
    :2014 {:lev<-file "necta"    :id<-json [:GEOID]}                       ; "70450"
    :2015 {:lev<-file "necta"    :id<-json [:GEOID]}                       ; "70450"
    :2016 {:lev<-file "necta"    :id<-json [:GEOID]}                       ; "70450"
    :2017 {:lev<-file "necta"    :id<-json [:GEOID]}                       ; "70450"
    :2010 {:lev<-file "350"      :id<-json [:NECTA]}                       ; "70450"
    :2000 {:lev<-file "ne"       :id<-json [:NECMA]}}                      ;? "1123" (*NECMA may =/= NECTA*)
   :combined-new-england-city-and-town-area
   {:2016 {:lev<-file "cnecta"   :id<-json [:GEOID]}                       ; "710"
    :2017 {:lev<-file "cnecta"   :id<-json [:GEOID]}}                      ; "710"
   :urban-area
   {:2013 {:lev<-file "ua"       :id<-json [:GEOID10]}                     ; "71155"
    :2014 {:lev<-file "ua"       :id<-json [:GEOID10]}                     ; "58600"
    :2015 {:lev<-file "ua"       :id<-json [:GEOID10]}                     ; "58600"
    :2016 {:lev<-file "ua"       :id<-json [:GEOID10]}                     ; "58600"
    :2017 {:lev<-file "ua"       :id<-json [:GEOID10]}                     ; "58600"
    :2012 {:lev<-file "uac"      :id<-json [:UACE10]}                      ; "79282"
    :2000 {:lev<-file "ua"       :id<-json [:UA]}                          ; "45748"
    :1990 {:lev<-file "ua"       :id<-json [:UA]}}                         ; "0380"
   :congressional-district
   {:103  {:lev<-file "cd"       :id<-json [:STATE :CD]}                   ; "44","01"
    :104  {:lev<-file "cd"       :id<-json [:STATE :CD]}                   ; "44","01"
    :105  {:lev<-file "cd"       :id<-json [:STATE :CD]}                   ; "44","01"
    :106  {:lev<-file "cd"       :id<-json [:STATE :CD]}                   ; "44","01"
    :107  {:lev<-file "cd"       :id<-json [:STATE :CD]}                   ; "44","01"
    :108  {:lev<-file "cd"       :id<-json [:STATE :CD]}                   ; "44","01"
    :109  {:lev<-file "cd"       :id<-json [:STATE :CD]}                   ; "44","01"
    :110  {:lev<-file "cd"       :id<-json [:STATE :CD]}                   ; "44","01"
    :2013 {:lev<-file "cd"       :id<-json [:GEOID]}                       ; "0401"
    :2014 {:lev<-file "cd"       :id<-json [:GEOID]}                       ; "0633"
    :2015 {:lev<-file "cd"       :id<-json [:GEOID]}                       ; "0633"
    :2016 {:lev<-file "cd"       :id<-json [:GEOID]}                       ; "0633"
    :2017 {:lev<-file "cd"       :id<-json [:GEOID]}                       ; "0633"
    :2012 {:lev<-file "cd"       :id<-json [:GEOID]}                       ; "0633"
    :2010 {:lev<-file "500"      :id<-json [:STATE :CD]}}                  ; "44","01"
   :school-district-'elementary'
   {:2016 {:lev<-file "elsd"     :id<-json [:GEOID]}                       ; "4400510"
    :2017 {:lev<-file "elsd"     :id<-json [:GEOID]}                       ; "4400510"
    :2000 {:lev<-file "se"       :id<-json [:STATE :SD_E]}}                ; "44","00360"
   :school-district-'secondary'
   {:2016 {:lev<-file "scsd"     :id<-json [:GEOID]}                       ; "4400420"
    :2017 {:lev<-file "scsd"     :id<-json [:GEOID]}                       ; "4400420"
    :2000 {:lev<-file "ss"       :id<-json [:STATE :SD_S]}}                ; "44","00420"
   :school-district-'unified'
   {:2016 {:lev<-file "unsd"     :id<-json [:GEOID]}                       ; "4400990"
    :2017 {:lev<-file "unsd"     :id<-json [:GEOID]}                       ; "4400990"
    :2010 {:lev<-file "970"      :id<-json [:STATE :SDUNI]}                ; "44","00120"
    :2000 {:lev<-file "sn"       :id<-json [:STATE :SD_U]}}                ; "44","00270"
   :block-group
   {:2013 {:lev<-file "bg"       :id<-json [:GEOID]}                       ; "440070136002"
    :2014 {:lev<-file "bg"       :id<-json [:GEOID]}                       ; "440070140003"
    :2015 {:lev<-file "bg"       :id<-json [:GEOID]}                       ; "440070140003"
    :2016 {:lev<-file "bg"       :id<-json [:GEOID]}                       ; "440090509011"
    :2017 {:lev<-file "bg"       :id<-json [:GEOID]}                       ; "440090509011"
    :2010 {:lev<-file "150"      :id<-json [:STATE :COUNTY :TRACT :BLKGRP]}; "44","001","030602","1"
    :2000 {:lev<-file "bg"       :id<-json [:STATE :COUNTY :TRACT :BLKGROUP]}; "44","007","011402","8"
    :1990 {:lev<-file "bg"       :id<-json [:GEOID]}}                      ; "010770113001"
   :public-use-microdata-area
   {:2013 {:lev<-file "puma"     :id<-json [:GEOID10]}                     ; "4400400"
    :2014 {:lev<-file "puma"     :id<-json [:GEOID10]}                     ; "4400103"
    :2015 {:lev<-file "puma"     :id<-json [:GEOID10]}                     ; "4400103"
    :2016 {:lev<-file "puma"     :id<-json [:GEOID10]}                     ; "4400300"
    :2017 {:lev<-file "puma"     :id<-json [:GEOID10]}}                    ; "4400300"
   :zip-code-tabulation-area
   {:2013 {:lev<-file "zcta"     :id<-json [:GEOID10]}                     ; "36522"
    :2014 {:lev<-file "zcta"     :id<-json [:GEOID10]}                     ; "36426"
    :2015 {:lev<-file "zcta"     :id<-json [:GEOID10]}                     ; "36426"
    :2016 {:lev<-file "zcta"     :id<-json [:GEOID10]}                     ; "36426"
    :2017 {:lev<-file "zcta"     :id<-json [:GEOID10]}                     ; "36426"
    :2010 {:lev<-file "860"      :id<-json []}                             ; this is a bfjo, punted
    :2000 {:lev<-file "zt"       :id<-json [:ZCTA]}}                       ; "99782"
   :state-legislative-district-'upper-chamber'
   {:2013 {:lev<-file "sldu"     :id<-json [:GEOID]}                       ; "44038"
    :2014 {:lev<-file "sldu"     :id<-json [:GEOID]}                       ; "44038"
    :2015 {:lev<-file "sldu"     :id<-json [:GEOID]}                       ; "44038"
    :2016 {:lev<-file "sldu"     :id<-json [:GEOID]}                       ; "44038"
    :2017 {:lev<-file "sldu"     :id<-json [:GEOID]}                       ; "44038"
    :2012 {:lev<-file "sldu"     :id<-json [:GEOID]}                       ; "44038"
    :2010 {:lev<-file "610"      :id<-json [:STATE :SLDU]}                 ; "44038"
    :2000 {:lev<-file "su"       :id<-json [:STATE :SLDU]}}                ; "44","033"
   :state-legislative-district-'lower-chamber'
   {:2013 {:lev<-file "sldl"     :id<-json [:GEOID]}                       ; "44061"
    :2014 {:lev<-file "sldl"     :id<-json [:GEOID]}                       ; "44061"
    :2015 {:lev<-file "sldl"     :id<-json [:GEOID]}                       ; "44061"
    :2016 {:lev<-file "sldl"     :id<-json [:GEOID]}                       ; "44061"
    :2017 {:lev<-file "sldl"     :id<-json [:GEOID]}                       ; "44061"
    :2012 {:lev<-file "sldl"     :id<-json [:GEOID]}                       ; "44061"
    :2010 {:lev<-file "620"      :id<-json [:STATE :SLDL]}                 ; "44","001"
    :2000 {:lev<-file "sl"       :id<-json [:STATE :SLDL]}}})              ; "44","063"

