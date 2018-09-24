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
   {
    :2017 {:lev<-file "nation"   :scopes [:us       ] :id<-json [:GEOID]}                       ; "US"
    :2016 {:lev<-file "nation"   :scopes [:us       ] :id<-json [:GEOID]}                       ; "US"
    :2015 {:lev<-file "nation"   :scopes [:us       ] :id<-json [:GEOID]}                       ; "US"
    :2014 {:lev<-file "nation"   :scopes [:us       ] :id<-json [:GEOID]}                       ; "US"
    :2013 {:lev<-file "nation"   :scopes [:us       ] :id<-json [:GEOID]}                       ; "US"
    :2010 {:lev<-file "outline"  :scopes [:us       ] :id<-json []}}                            ; no usable construct
   :region
   {
    :2017 {:lev<-file "region"   :scopes [:us       ] :id<-json [:GEOID]}                       ; "4"
    :2016 {:lev<-file "region"   :scopes [:us       ] :id<-json [:GEOID]}                       ; "4"
    :2015 {:lev<-file "region"   :scopes [:us       ] :id<-json [:GEOID]}                       ; "4"
    :2014 {:lev<-file "region"   :scopes [:us       ] :id<-json [:GEOID]}                       ; "4"
    :2013 {:lev<-file "region"   :scopes [:us       ] :id<-json [:GEOID]}                       ; "4"
    :2010 {:lev<-file "020"      :scopes [:us       ] :id<-json [:REGION]}                      ; "4"
    :2000 {:lev<-file "rg"       :scopes [:us       ] :id<-json [:REGION]}}                     ; "4"
   :division
   {
    :2017 {:lev<-file "division" :scopes [:us       ] :id<-json [:GEOID]}                       ; "3"
    :2016 {:lev<-file "division" :scopes [:us       ] :id<-json [:GEOID]}                       ; "3"
    :2015 {:lev<-file "division" :scopes [:us       ] :id<-json [:GEOID]}                       ; "3"
    :2014 {:lev<-file "division" :scopes [:us       ] :id<-json [:GEOID]}                       ; "3"
    :2013 {:lev<-file "division" :scopes [:us       ] :id<-json [:GEOID]}                       ; "3"
    :2010 {:lev<-file "030"      :scopes [:us       ] :id<-json [:DIVISION]}                    ; "3"
    :2000 {:lev<-file "dv"       :scopes [:us       ] :id<-json [:DIVISION]}}                   ; "3"
   :state
   {
    :2017 {:lev<-file "state"    :scopes [:us       ] :id<-json [:GEOID]}                       ; "01"
    :2016 {:lev<-file "state"    :scopes [:us       ] :id<-json [:GEOID]}                       ; "01"
    :2015 {:lev<-file "state"    :scopes [:us       ] :id<-json [:GEOID]}                       ; "01"
    :2014 {:lev<-file "state"    :scopes [:us       ] :id<-json [:GEOID]}                       ; "01"
    :2013 {:lev<-file "state"    :scopes [:us       ] :id<-json [:GEOID]}                       ; "01"
    :2010 {:lev<-file "040"      :scopes [:us       ] :id<-json [:STATE]}                       ; "01"
    :2000 {:lev<-file "st"       :scopes [:us :state] :id<-json [:STATE]}                       ; "01"
    :1990 {:lev<-file "st"       :scopes [:us :state] :id<-json [:ST]}}                         ; "01"
   :county
   {
    :2017 {:lev<-file "county"   :scopes [:us       ] :id<-json [:GEOID]}                       ; "01005"
    :2016 {:lev<-file "county"   :scopes [:us       ] :id<-json [:GEOID]}                       ; "01005"
    :2015 {:lev<-file "county"   :scopes [:us       ] :id<-json [:GEOID]}                       ; "01005"
    :2014 {:lev<-file "county"   :scopes [:us       ] :id<-json [:GEOID]}                       ; "01005"
    :2013 {:lev<-file "county"   :scopes [:us       ] :id<-json [:GEOID]}                       ; "01005"
    :2010 {:lev<-file "050"      :scopes [:us       ] :id<-json [:STATE :COUNTY]}               ; "01", "077"
    :2000 {:lev<-file "co"       :scopes [:us :state] :id<-json [:STATE :COUNTY]}               ; "01", "077"
    :1990 {:lev<-file "co"       :scopes [:us :state] :id<-json [:ST :CO]}}                     ; "01", "077"
   :county-subdivision
   {
    :2017 {:lev<-file "cousub"   :scopes [:state    ] :id<-json [:GEOID]}                       ; "4400378440"
    :2016 {:lev<-file "cousub"   :scopes [:state    ] :id<-json [:GEOID]}                       ; "4400378440"
    :2015 {:lev<-file "cousub"   :scopes [:state    ] :id<-json [:GEOID]}                       ; "4400378440"
    :2014 {:lev<-file "cousub"   :scopes [:state    ] :id<-json [:GEOID]}                       ; "4400378440"
    :2013 {:lev<-file "cousub"   :scopes [:state    ] :id<-json [:GEOID]}                       ; "4400378440"
    :2010 {:lev<-file "060"      :scopes [:state    ] :id<-json [:STATE :COUNTY :COUSUB]}       ; "01","073","93204"
    :2000 {:lev<-file "cs"       :scopes [:state    ] :id<-json [:STATE :COUNTY :COUSUBFP]}     ; "44","007","80780"
    :1990 {:lev<-file "cs"       :scopes [:state    ] :id<-json [:GEOID]}}                      ; "01077040"
   :tract
   {
    :2017 {:lev<-file "tract"    :scopes [:state    ] :id<-json [:GEOID]}                       ; "44001030200"
    :2016 {:lev<-file "tract"    :scopes [:state    ] :id<-json [:GEOID]}                       ; "44001030200"
    :2015 {:lev<-file "tract"    :scopes [:state    ] :id<-json [:GEOID]}                       ; "44001030200"
    :2014 {:lev<-file "tract"    :scopes [:state    ] :id<-json [:GEOID]}                       ; "44001030200"
    :2013 {:lev<-file "tract"    :scopes [:state    ] :id<-json [:GEOID]}                       ; "44001030200"
    :2010 {:lev<-file "140"      :scopes [:state    ] :id<-json [:STATE :COUNTY :TRACT]}        ; "44","001","030100"
    :2000 {:lev<-file "tr"       :scopes [:state    ] :id<-json [:STATE :COUNTY :TRACT]}        ; "44","007","011402"
    :1990 {:lev<-file "tr"       :scopes [:state    ] :id<-json [:ST :CO :TRACTBASE :TRACTSUF]}}; "01","077","0113","" ="00"
   :block-group
   {
    :2017 {:lev<-file "bg"       :scopes [:state    ] :id<-json [:GEOID]}                       ; "440090509011"
    :2016 {:lev<-file "bg"       :scopes [:state    ] :id<-json [:GEOID]}                       ; "440090509011"
    :2015 {:lev<-file "bg"       :scopes [:state    ] :id<-json [:GEOID]}                       ; "440070140003"
    :2014 {:lev<-file "bg"       :scopes [:state    ] :id<-json [:GEOID]}                       ; "440070140003"
    :2013 {:lev<-file "bg"       :scopes [:state    ] :id<-json [:GEOID]}                       ; "440070136002"
    :2010 {:lev<-file "150"      :scopes [:state    ] :id<-json [:STATE :COUNTY :TRACT :BLKGRP]}; "44","001","030602","1"
    :2000 {:lev<-file "bg"       :scopes [:state    ] :id<-json [:STATE :COUNTY :TRACT :BLKGROUP]}; "44","007","011402","8"
    :1990 {:lev<-file "bg"       :scopes [:state    ] :id<-json [:GEOID]}}                      ; "010770113001"
   :place
   {
    :2017 {:lev<-file "place"    :scopes [:state    ] :id<-json [:GEOID]}                       ; "4419180"
    :2016 {:lev<-file "place"    :scopes [:state    ] :id<-json [:GEOID]}                       ; "4419180"
    :2013 {:lev<-file "place"    :scopes [:state    ] :id<-json [:GEOID]}                       ; "4419180"
    :2015 {:lev<-file "place"    :scopes [:state    ] :id<-json [:GEOID]}                       ; "4419180"
    :2014 {:lev<-file "place"    :scopes [:state    ] :id<-json [:GEOID]}                       ; "4419180"
    :2010 {:lev<-file "160"      :scopes [:state    ] :id<-json [:STATE :PLACE]}                ; "44","14140"
    :2000 {:lev<-file "pl"       :scopes [:state    ] :id<-json [:STATE :PLACEFP]}              ; "44","80780"
    :1990 {:lev<-file "pl"       :scopes [:us       ] :id<-json [:GEOID]}}                      ; "011023"
   :consolidated-cities
   {
    :2017 {:lev<-file "concity"  :scopes [:state    ] :id<-json [:GEOID]}                       ; "2148003"
    :2016 {:lev<-file "concity"  :scopes [:state    ] :id<-json [:GEOID]}                       ; "2148003"
    :2015 {:lev<-file "concity"  :scopes [:state    ] :id<-json [:GEOID]}                       ; "2148003"
    :2014 {:lev<-file "concity"  :scopes [:state    ] :id<-json [:GEOID]}                       ; "2148003"
    :2013 {:lev<-file "concity"  :scopes [:state    ] :id<-json [:GEOID]}                       ; "2148003"
    :2010 {:lev<-file "170"      :scopes [:state    ] :id<-json [:STATE :CONCIT]}               ; "47", "52004"
    :2000 {:lev<-file "cc"       :scopes [:us       ] :id<-json [:STATE :CONCITFP]}}            ; "30", "11390"
   :alaska-native-regional-corporation
   {
    :2017 {:lev<-file "anrc"     :scopes [:state    ] :id<-json [:GEOID]}                       ; "0206370"
    :2016 {:lev<-file "anrc"     :scopes [:state    ] :id<-json [:GEOID]}                       ; "0206370"
    :2015 {:lev<-file "anrc"     :scopes [:state    ] :id<-json [:GEOID]}                       ; "0206370"
    :2014 {:lev<-file "anrc"     :scopes [:state    ] :id<-json [:GEOID]}                       ; "0220010"
    :2013 {:lev<-file "anrc"     :scopes [:state    ] :id<-json [:GEOID]}                       ; "0220010"
    :2010 {:lev<-file "230"      :scopes [:state    ] :id<-json [:STATE :ANRC]}                 ; "02","00590"
    :2000 {:lev<-file "an"       :scopes [:state    ] :id<-json [:STATE :ANRCFP]}               ; "02","03950"
    :1990 {:lev<-file "an"       :scopes [:state    ] :id<-json [:ANRC]}}                       ; "63"  bit.ly/1990-ANRC-FIPS
   :american-indian-area!alaska-native-area!hawaiian-home-land
   {
    :2017 {:lev<-file "aiannh"   :scopes [:us       ] :id<-json [:GEOID]}                       ; "9560"
    :2016 {:lev<-file "aiannh"   :scopes [:us       ] :id<-json [:GEOID]}                       ; "9560"
    :2015 {:lev<-file "aiannh"   :scopes [:us       ] :id<-json [:GEOID]}                       ; "9560"
    :2014 {:lev<-file "aiannh"   :scopes [:us       ] :id<-json [:GEOID]}                       ; "9560"
    :2013 {:lev<-file "aiannh"   :scopes [:us       ] :id<-json [:GEOID]}                       ; "9560"
    :2010 {:lev<-file "250"      :scopes [:us       ] :id<-json [:AIANHH]}                      ; "5138"
    :2000 {:lev<-file "na"       :scopes [:us       ] :id<-json [:AIANACE]}                     ; "6165"
    :1990 {:lev<-file "ir"       :scopes [:us :state] :id<-json [:IR]}}                         ; "6220"
   :metropolitan-statistical-area!micropolitan-statistical-area
   {
    :2017 {:lev<-file "cbsa"     :scopes [:us       ] :id<-json [:GEOID]}                       ; "15660"
    :2016 {:lev<-file "cbsa"     :scopes [:us       ] :id<-json [:GEOID]}                       ; "15660"
    :2015 {:lev<-file "cbsa"     :scopes [:us       ] :id<-json [:GEOID]}                       ; "15660"
    :2014 {:lev<-file "cbsa"     :scopes [:us       ] :id<-json [:GEOID]}                       ; "15660"
    :2013 {:lev<-file "cbsa"     :scopes [:us       ] :id<-json [:GEOID]}                       ; "38300"
    :2010 {:lev<-file "310"      :scopes [:us       ] :id<-json [:CBSA]}}                       ; "10020"
    ;:1990 {:lev<-file "ma"       :scopes [:us       ] :id<-json [:MSA]}}                       ; "0380": MSA =/= CBSA
   :combined-statistical-area
   {
    :2017 {:lev<-file "csa"      :scopes [:us       ] :id<-json [:GEOID]}                       ; "430"
    :2016 {:lev<-file "csa"      :scopes [:us       ] :id<-json [:GEOID]}                       ; "430"
    :2015 {:lev<-file "csa"      :scopes [:us       ] :id<-json [:GEOID]}                       ; "430"
    :2014 {:lev<-file "csa"      :scopes [:us       ] :id<-json [:GEOID]}                       ; "430"
    :2013 {:lev<-file "csa"      :scopes [:us       ] :id<-json [:GEOID]}                       ; "430"
    :2010 {:lev<-file "330"      :scopes [:us       ] :id<-json [:CSA]}}                        ; "102"
   :combined-new-england-city-and-town-area
   {
    :2017 {:lev<-file "cnecta"   :scopes [:us       ] :id<-json [:GEOID]}                       ; "710"
    :2016 {:lev<-file "cnecta"   :scopes [:us       ] :id<-json [:GEOID]}                       ; "710"
    :2010 {:lev<-file "335"      :scopes [:us       ] :id<-json []}}                            ; TODO
   :new-england-city-and-town-area
   {
    :2017 {:lev<-file "necta"    :scopes [:us       ] :id<-json [:GEOID]}                       ; "70450"
    :2016 {:lev<-file "necta"    :scopes [:us       ] :id<-json [:GEOID]}                       ; "70450"
    :2015 {:lev<-file "necta"    :scopes [:us       ] :id<-json [:GEOID]}                       ; "70450"
    :2014 {:lev<-file "necta"    :scopes [:us       ] :id<-json [:GEOID]}                       ; "70450"
    :2013 {:lev<-file "necta"    :scopes [:us       ] :id<-json [:GEOID]}                       ; "70450"
    :2010 {:lev<-file "350"      :scopes [:us       ] :id<-json [:NECTA]}}                      ; "70450"
    ;:2000 {:lev<-file "ne"       :scopes [:us       ] :id<-json [:NECMA]}}                     ; "1123" NECMA =/= NECTA
   :urban-area
   {
    :2017 {:lev<-file "ua"       :scopes [:us       ] :id<-json [:GEOID10]}                     ; "58600"
    :2016 {:lev<-file "ua"       :scopes [:us       ] :id<-json [:GEOID10]}                     ; "58600"
    :2015 {:lev<-file "ua"       :scopes [:us       ] :id<-json [:GEOID10]}                     ; "58600"
    :2014 {:lev<-file "ua"       :scopes [:us       ] :id<-json [:GEOID10]}                     ; "58600"
    :2013 {:lev<-file "ua"       :scopes [:us       ] :id<-json [:GEOID10]}                     ; "71155"
    :2012 {:lev<-file "uac"      :scopes [:us       ] :id<-json [:UACE10]}                      ; "79282"
    :2000 {:lev<-file "ua"       :scopes [:us       ] :id<-json [:UA]}                          ; "45748"
    :1990 {:lev<-file "ua"       :scopes [:us :state] :id<-json [:UA]}}                         ; "0380"
   :congressional-district
   {
    :2017 {:lev<-file "cd"       :scopes [:us       ] :id<-json [:GEOID]}                       ; "0633"
    :2016 {:lev<-file "cd"       :scopes [:us       ] :id<-json [:GEOID]}                       ; "0633"
    :2015 {:lev<-file "cd"       :scopes [:us       ] :id<-json [:GEOID]}                       ; "0633"
    :2014 {:lev<-file "cd"       :scopes [:us       ] :id<-json [:GEOID]}                       ; "0633"
    :2013 {:lev<-file "cd"       :scopes [:us       ] :id<-json [:GEOID]}                       ; "0401"
    :2012 {:lev<-file "cd"       :scopes [:us       ] :id<-json [:GEOID]}                       ; "0633"
    :2010 {:lev<-file "500"      :scopes [:state    ] :id<-json [:STATE :CD]}                   ; "44","01"
    :110  {:lev<-file "cd"       :scopes [:state    ] :id<-json [:STATE :CD]}                   ; "44","01"
    :109  {:lev<-file "cd"       :scopes [:state    ] :id<-json [:STATE :CD]}                   ; "44","01"
    :108  {:lev<-file "cd"       :scopes [:state    ] :id<-json [:STATE :CD]}                   ; "44","01"
    :107  {:lev<-file "cd"       :scopes [:state    ] :id<-json [:STATE :CD]}                   ; "44","01"
    :106  {:lev<-file "cd"       :scopes [:state    ] :id<-json [:STATE :CD]}                   ; "44","01"
    :105  {:lev<-file "cd"       :scopes [:state    ] :id<-json [:STATE :CD]}                   ; "44","01"
    :104  {:lev<-file "cd"       :scopes [:state    ] :id<-json [:STATE :CD]}                   ; "44","01"
    :103  {:lev<-file "cd"       :scopes [:state    ] :id<-json [:STATE :CD]}}                  ; "44","01"
   :state-legislative-district-_upper-chamber'
   {
    :2017 {:lev<-file "sldu"     :scopes [:state    ] :id<-json [:GEOID]}                       ; "44038"
    :2016 {:lev<-file "sldu"     :scopes [:state    ] :id<-json [:GEOID]}                       ; "44038"
    :2015 {:lev<-file "sldu"     :scopes [:state    ] :id<-json [:GEOID]}                       ; "44038"
    :2014 {:lev<-file "sldu"     :scopes [:state    ] :id<-json [:GEOID]}                       ; "44038"
    :2013 {:lev<-file "sldu"     :scopes [:state    ] :id<-json [:GEOID]}                       ; "44038"
    :2012 {:lev<-file "sldu"     :scopes [:state    ] :id<-json [:GEOID]}                       ; "44038"
    :2010 {:lev<-file "610"      :scopes [:state    ] :id<-json [:STATE :SLDU]}                 ; "44038"
    :2000 {:lev<-file "su"       :scopes [:state    ] :id<-json [:STATE :SLDU]}}                ; "44","033"
   :state-legislative-district-_lower-chamber'
   {
    :2017 {:lev<-file "sldl"     :scopes [:state    ] :id<-json [:GEOID]}                       ; "44061"
    :2016 {:lev<-file "sldl"     :scopes [:state    ] :id<-json [:GEOID]}                       ; "44061"
    :2015 {:lev<-file "sldl"     :scopes [:state    ] :id<-json [:GEOID]}                       ; "44061"
    :2014 {:lev<-file "sldl"     :scopes [:state    ] :id<-json [:GEOID]}                       ; "44061"
    :2013 {:lev<-file "sldl"     :scopes [:state    ] :id<-json [:GEOID]}                       ; "44061"
    :2012 {:lev<-file "sldl"     :scopes [:state    ] :id<-json [:GEOID]}                       ; "44061"
    :2010 {:lev<-file "620"      :scopes [:state    ] :id<-json [:STATE :SLDL]}                 ; "44","001"
    :2000 {:lev<-file "sl"       :scopes [:state    ] :id<-json [:STATE :SLDL]}}                ; "44","063"
   :zip-code-tabulation-area
   {
    :2017 {:lev<-file "zcta"     :scopes [:us       ] :id<-json [:GEOID10]}                     ; "36426"
    :2016 {:lev<-file "zcta"     :scopes [:us       ] :id<-json [:GEOID10]}                     ; "36426"
    :2015 {:lev<-file "zcta"     :scopes [:us       ] :id<-json [:GEOID10]}                     ; "36426"
    :2014 {:lev<-file "zcta"     :scopes [:us       ] :id<-json [:GEOID10]}                     ; "36426"
    :2013 {:lev<-file "zcta"     :scopes [:us       ] :id<-json [:GEOID10]}                     ; "36522"
    ;:2010 {:lev<-file "860"      :scopes [:us       ] :id<-json []}                            ; this is a bfjo, punted
    :2000 {:lev<-file "zt"       :scopes [:us :state] :id<-json [:ZCTA]}}                       ; "99782"
   :school-district-_elementary'
   {
    :2017 {:lev<-file "elsd"     :scopes [:state    ] :id<-json [:GEOID]}                       ; "4400510"
    :2016 {:lev<-file "elsd"     :scopes [:state    ] :id<-json [:GEOID]}                       ; "4400510"
    :2010 {:lev<-file "950"      :scopes [:state    ] :id<-json []}                             ; TODO
    :2000 {:lev<-file "se"       :scopes [:state    ] :id<-json [:STATE :SD_E]}}                ; "44","00360"
   :school-district-_secondary'
   {
    :2017 {:lev<-file "scsd"     :scopes [:state    ] :id<-json [:GEOID]}                       ; "4400420"
    :2016 {:lev<-file "scsd"     :scopes [:state    ] :id<-json [:GEOID]}                       ; "4400420"
    :2010 {:lev<-file "960"      :scopes [:state    ] :id<-json []}                             ; TODO
    :2000 {:lev<-file "ss"       :scopes [:state    ] :id<-json [:STATE :SD_S]}}                ; "44","00420"
   :school-district-_unified'
   {
    :2017 {:lev<-file "unsd"     :scopes [:state    ] :id<-json [:GEOID]}                       ; "4400990"
    :2016 {:lev<-file "unsd"     :scopes [:state    ] :id<-json [:GEOID]}                       ; "4400990"
    :2010 {:lev<-file "970"      :scopes [:state    ] :id<-json [:STATE :SDUNI]}                ; "44","00120"
    :2000 {:lev<-file "sn"       :scopes [:state    ] :id<-json [:STATE :SD_U]}}                ; "44","00270"
   :public-use-microdata-area
   {
    :2017 {:lev<-file "puma"     :scopes [:state    ] :id<-json [:GEOID10]}                     ; "4400300"
    :2016 {:lev<-file "puma"     :scopes [:state    ] :id<-json [:GEOID10]}                     ; "4400300"
    :2015 {:lev<-file "puma"     :scopes [:state    ] :id<-json [:GEOID10]}                     ; "4400103"
    :2014 {:lev<-file "puma"     :scopes [:state    ] :id<-json [:GEOID10]}                     ; "4400103"
    :2013 {:lev<-file "puma"     :scopes [:state    ] :id<-json [:GEOID10]}}})                  ; "4400400"

