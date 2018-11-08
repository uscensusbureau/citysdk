(ns census.geoAPI.states)

(def FIPS
  [
    {:fips "01" :vins [1990 2000 2010 2012 2013 2014 2015 2016] :short "AL" :long "Alabama"}
    {:fips "02" :vins [1990 2000 2010 2012 2013 2014 2015 2016] :short "AK" :long "Alaska"}
    {:fips "04" :vins [1990 2000 2010 2012 2013 2014 2015 2016] :short "AZ" :long "Arizona"}
    {:fips "05" :vins [1990 2000 2010 2012 2013 2014 2015 2016] :short "AR" :long "Arkansas"}
    {:fips "06" :vins [1990 2000 2010 2012 2013 2014 2015 2016] :short "CA" :long "California"}
    {:fips "08" :vins [1990 2000 2010 2012 2013 2014 2015 2016] :short "CO" :long "Colorado"}
    {:fips "09" :vins [1990 2000 2010 2012 2013 2014 2015 2016] :short "CT" :long "Connecticut"}
    {:fips "10" :vins [1990 2000 2010 2012 2013 2014 2015 2016] :short "DE" :long "Delaware"}
    {:fips "11" :vins [1990 2000 2010 2012 2013 2014 2015 2016] :short "DC" :long "District of Columbia"}
    {:fips "12" :vins [1990 2000 2010 2012 2013 2014 2015 2016] :short "FL" :long "Florida"}
    {:fips "13" :vins [1990 2000 2010 2012 2013 2014 2015 2016] :short "GA" :long "Georgia"}
    {:fips "15" :vins [1990 2000 2010 2012 2013 2014 2015 2016] :short "HI" :long "Hawaii"}
    {:fips "16" :vins [1990 2000 2010 2012 2013 2014 2015 2016] :short "ID" :long "Idaho"}
    {:fips "17" :vins [1990 2000 2010 2012 2013 2014 2015 2016] :short "IL" :long "Illinois"}
    {:fips "18" :vins [1990 2000 2010 2012 2013 2014 2015 2016] :short "IN" :long "Indiana"}
    {:fips "19" :vins [1990 2000 2010 2012 2013 2014 2015 2016] :short "IA" :long "Iowa"}
    {:fips "20" :vins [1990 2000 2010 2012 2013 2014 2015 2016] :short "KS" :long "Kansas"}
    {:fips "21" :vins [1990 2000 2010 2012 2013 2014 2015 2016] :short "KY" :long "Kentucky"}
    {:fips "22" :vins [1990 2000 2010 2012 2013 2014 2015 2016] :short "LA" :long "Louisiana"}
    {:fips "23" :vins [1990 2000 2010 2012 2013 2014 2015 2016] :short "ME" :long "Maine"}
    {:fips "24" :vins [1990 2000 2010 2012 2013 2014 2015 2016] :short "MD" :long "Maryland"}
    {:fips "25" :vins [1990 2000 2010 2012 2013 2014 2015 2016] :short "MA" :long "Massachusetts"}
    {:fips "26" :vins [1990 2000 2010 2012 2013 2014 2015 2016] :short "MI" :long "Michigan"}
    {:fips "27" :vins [1990 2000 2010 2012 2013 2014 2015 2016] :short "MN" :long "Minnesota"}
    {:fips "28" :vins [1990 2000 2010 2012 2013 2014 2015 2016] :short "MS" :long "Mississippi"}
    {:fips "29" :vins [1990 2000 2010 2012 2013 2014 2015 2016] :short "MO" :long "Missouri"}
    {:fips "30" :vins [1990 2000 2010 2012 2013 2014 2015 2016] :short "MT" :long "Montana"}
    {:fips "31" :vins [1990 2000 2010 2012 2013 2014 2015 2016] :short "NE" :long "Nebraska"}
    {:fips "32" :vins [1990 2000 2010 2012 2013 2014 2015 2016] :short "NV" :long "Nevada"}
    {:fips "33" :vins [1990 2000 2010 2012 2013 2014 2015 2016] :short "NH" :long "New Hampshire"}
    {:fips "34" :vins [1990 2000 2010 2012 2013 2014 2015 2016] :short "NJ" :long "New Jersey"}
    {:fips "35" :vins [1990 2000 2010 2012 2013 2014 2015 2016] :short "NM" :long "New Mexico"}
    {:fips "36" :vins [1990 2000 2010 2012 2013 2014 2015 2016] :short "NY" :long "New York"}
    {:fips "37" :vins [1990 2000 2010 2012 2013 2014 2015 2016] :short "NC" :long "North Carolina"}
    {:fips "38" :vins [1990 2000 2010 2012 2013 2014 2015 2016] :short "ND" :long "North Dakota"}
    {:fips "39" :vins [1990 2000 2010 2012 2013 2014 2015 2016] :short "OH" :long "Ohio"}
    {:fips "40" :vins [1990 2000 2010 2012 2013 2014 2015 2016] :short "OK" :long "Oklahoma"}
    {:fips "41" :vins [1990 2000 2010 2012 2013 2014 2015 2016] :short "OR" :long "Oregon"}
    {:fips "42" :vins [1990 2000 2010 2012 2013 2014 2015 2016] :short "PA" :long "Pennsylvania"}
    {:fips "44" :vins [1990 2000 2010 2012 2013 2014 2015 2016] :short "RI" :long "Rhode Island"}
    {:fips "45" :vins [1990 2000 2010 2012 2013 2014 2015 2016] :short "SC" :long "South Carolina"}
    {:fips "46" :vins [1990 2000 2010 2012 2013 2014 2015 2016] :short "SD" :long "South Dakota"}
    {:fips "47" :vins [1990 2000 2010 2012 2013 2014 2015 2016] :short "TN" :long "Tennessee"}
    {:fips "48" :vins [1990 2000 2010 2012 2013 2014 2015 2016] :short "TX" :long "Texas"}
    {:fips "49" :vins [1990 2000 2010 2012 2013 2014 2015 2016] :short "UT" :long "Utah"}
    {:fips "50" :vins [1990 2000 2010 2012 2013 2014 2015 2016] :short "VT" :long "Vermont"}
    {:fips "51" :vins [1990 2000 2010 2012 2013 2014 2015 2016] :short "VA" :long "Virginia"}
    {:fips "53" :vins [1990 2000 2010 2012 2013 2014 2015 2016] :short "WA" :long "Washington"}
    {:fips "54" :vins [1990 2000 2010 2012 2013 2014 2015 2016] :short "WV" :long "West Virginia"}
    {:fips "55" :vins [1990 2000 2010 2012 2013 2014 2015 2016] :short "WI" :long "Wisconsin"}
    {:fips "56" :vins [1990 2000 2010 2012 2013 2014 2015 2016] :short "WY" :long "Wyoming"}
    {:fips "60" :vins [1990 2000           2013 2014 2015 2016] :short "AS" :long "American Samoa"}
    {:fips "66" :vins [1990 2000           2013 2014 2015 2016] :short "GU" :long "Guam"}
    {:fips "69" :vins [1990 2000           2013 2014 2015 2016] :short "MP" :long "Northern Mariana Islands"}
    {:fips "70" :vins [1990                                   ] :short "PW" :long "Palau"}
    {:fips "72" :vins [1990 2000 2010 2012 2013 2014 2015 2016] :short "PR" :long "Puerto Rico"}
    {:fips "78" :vins [1990 2000           2013 2014 2015 2016] :short "VI" :long "Virgin Islands of the United States"}])