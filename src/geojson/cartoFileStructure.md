# Cartography Files from the US Census Bureau

## FTP asset structure

### Examples:


- 500K (Resolution)
  - 2010 (Vintage)
    - National/
      - National `GeoJSON Feature`
      - States/
        - States in the Nation `GeoJSON Feature Collection` (if `for=state:?`)
        - 01/ (folders by state FIPS codes)
          - Counties in this state `GeoJSON Feature Collection` (if `for=county:?`)
            - Tracts in this state `GeoJSON Feature Collection` (if `for=tract:?`)
            - 001/ (folders by county FIPS codes)
              - Block-groups in this state `GeoJSON Feature Collection` (if `for=block%20group:?`)
              - Blocks in this state `GeoJSON Feature Collection` (TBD) 
            - .../ (rest of counties)
        - .../ (rest of states)


Recursive function
within each vintage (available from cartography files: hard-coded?)
    within nation, get each level available at nation level (considering wildcards)
    get all states
        within state, get each level available at state level (considering wildcards)
        within each state, get each county
            within each county, get each level available at county level (considering wildcards)

Use `/examples` of sf1 to configure each call

Indexes needed:
- mapping between cartography file geo-descriptor and `/geography.json` geo-descriptors 
  - (2 maps = 1 for 2010+ and pre2010 vintages)
- cartographic vintages available 
  - (vector)
- store files by name that matches keyword used in the `geoHierarchy` arg 
  - (e.g., `state-legislative-district-#upper-chamber#`)
  
  
# Cartography Files Mapping

## 2010 and later

### National level
```
https://www2.census.gov/geo/tiger/GENZ2010/gz_2010_us_outline_500k.zip
└──────────────┬────────────────┘ └┬─ ──┬┘ └┬ └──┬ └┬ └────┬─ └─┬┘ └┬┘
               1                   2    3   4    5  6      7    8   9
```
#### components
1) base
2) generalized delineation
3) vintage
4) generalized delineation 2
5) vintage 2
6) scope
7) level
8) resolution
9) file extension

### State level
```
https://www2.census.gov/geo/tiger/GENZ2017/shp/cb_2017_02_tract_500k.zip
└──────────────┬────────────────┘ └┬─ ──┬┘ └┬┘ └┬ └──┬ └┬ └──┬─ └─┬┘ └┬┘
               1                   2    3   4   5    6  7    8    9  10
```
#### components
1) base
2) generalized delineation
3) vintage
4) **format (different)**
5) cb delineation
6) vintage 2
7) scope (state FIPS)
8) level
9) resolution
10) file extension

## Pre 2010

## National level
```
https://www2.census.gov/geo/tiger/PREVGENZ/rg/rg00shp/rg99_d00_shp.zip
└──────────────┬────────────────┘ └──┬───┘└┬┘ └┬└┬└┬┘ └┬└┬ └┬─ └┬┘ └┬┘
               1                     2     3   4 5 6   7 8  9  10  11
```               
#### components
1) base
2) pre2010 generalized delineation
3) level
4) level 2
5) vintage
6) format
7) level 3
8) scope (99 = national)
9) vintage 2
10) format 2
11) file extension


## State Level
```
https://www2.census.gov/geo/tiger/PREVGENZ/tr/tr00shp/tr01_d00_shp.zip
└──────────────┬────────────────┘ └──┬───┘└┬┘ └┬└┬└┬┘ └┬└┬ └┬─ └┬┘ └┬┘
               1                     2     3   4 5 6   7 8  9  10  11
```
#### components
1) base
2) pre2010 generalized delineation
3) level
4) level 2
5) vintage
6) format
7) level 3
8) scope (state FIPS)
9) vintage 2
10) format 2
11) file extension


# Scoping and Storage

| No. | Key                                                           | pre2010       | 2010+                 | by state  | by county | extra |
| --- | ------------------------------------------------------------- | ------------- | --------------------- | :-------: | :-------: | ----- |
| 1   | nation                                                        | x             | us_nation             |           |           | 8     |
| 2   | region                                                        | rg            | region                |           |           |       |
| 3   | division                                                      | dv            | division              |           |           |       |
| 4   | state                                                         | st            | state                 |           |           |       | 
| 5   | county                                                        | co            | county                | api?      |           |       |
| 6   | county                                                        | x             | county_within_ua      | geo & api |           | 1     |
| 7   | county                                                        | x             | county_within_cd115   | api       |           | 2     |
| 8   | county-subdivision                                            | cs            | cousub                | geo/api   | api?      |       |
| 9   | tract                                                         | tr            | tract                 | geo/api   | api?      |       |
| 10  | place                                                         | pl            | place                 | geo/api?  |           |       |
| 11  | alaska-native-regional-corporation                            | an            | anrc                  | geo/api?  |           |       |
| 12  | american-indian-area!alaska-native-area!hawaiian-home-land    | na:00 ir:90   | aiannh                |           |           |       |
| 13  | metropolitan-statistical-area!micropolitan-statistical-area   | ma            | cbsa                  | api?      |           |       |
| 14  | combined-statistical-area                                     | cmsa:96 cm:99 | csa                   |           |           | 3     |
| 15  | new-england-city-and-town-area                                | ne            | necta                 |           |           | 3     |
| 16  | urban-area                                                    | ua            | ua10                  |           |           | 3     |
| 17  | congressional-district                                        | cd...         | cd99...               | api?      |           | 5     |
| 18  | school-district-_elementary'                                  | se..          | elsd                  | geo/api   |           |       |
| 19  | school-district-_secondary'                                   | ss..          | scsd                  | geo/api   |           |       |
| 20  | school-district-_unified'                                     | sn..          | unsd                  | geo/api   |           |       |
|     | place-remainder                                               | x             | x                     |           |           |       |
| 21  | block-group                                                   | bg..          | .._bg                 | geo/api   | api       |       |
| 22  | public-use-microdata-area                                     | p1..          | .._puma10             | geo/api?  |           | 6     |
| 23  | zip-code-tabulation-area             (zbp)                    | zt..          | us_zcta510            |           |           | 7     |
| 24  | state-legislative-district-'upper-chamber'                    | su..          | .._sldu               |  geo/api  |           |       |
| 25  | state-legislative-district-'lower-chamber'                    | sl..          | .._sldl               |  geo/api  |           |       |
|     | principal-city                                                | x             | x                     |           |           |       |
|     | metropolitan-division                                         | x             | x                     |           |           |       |
|     | principal-city-'or-part'                                      | x             | x                     |           |           |       |
|     | combined-new-england-city-and-town-area                       | x             | x                     |           |           |       |
|     | combined-statistical-area                                     | x             | x                     |           |           |       |
|     | new-england-city-and-town-area                                | x             | x                     |           |           |       |
|     | county-subdivision-'or-part'                                  | x             | x                     |           |           |       |
|     | consolidated-city                                             | cc            | x                     |           | geo/api?  |       |

## Notes
1) (612) required geoHierarchy `{:urban-growth-area :state :county}`
2) (510) required geoHierarchy `{:state :congressional-distric :county}`
3) Confirm these mappings (2010+ vs pre2010 respectively)

| 2010+                                             | Pre 2010                                                                               | Correct? |
| ---------------------------------------           | ---------------------------------------------------------------------------------------| -------- |
| cbsa = Core Based Statistical Areas               | ma = Metropolitan Statistical Areas                                                    | Y        |
| csa = Combined Statistical Areas                  | cm:99 cmsa:96/98 = Consolidated Metropolitan Statistical Areas                         | Y        |
| csa = Combined Statistical Areas                  | cm_sa = Consolidated Metropolitan Statistical Areas and Metropolitan Statistical Areas |          |
| necta = New England City and Town Areas           | ne = New England County Metropolitan Areas                                             |          |
| cnecta = Combined New England City and Town Areas | ?                                                                                      |          |
| ua10= Urban Area                                  | ua = Urbanized Areas                                                                   |          |

5) `...` = 3-digit congressional session number (e.g., `103`)
6) Confirm these mappings (2010+ vs pre2010 respectively)       
  - puma10 = public use microdata areas                 :   p1 or p5 = public use microdata areas (1 or 5 percent?)
7) for zbp, `zipcode` for all others: `zip-code-tabulation-area`
8) Confirm that US boundary hasn't changed since 1990 (earliest available = 2010)

# Rosetta Stones

Note: "Incoherent" means that the 
1) GeoJSON doesn't contain enough information to construct a GEOID (!)
2) that the stats API doesn't avail the data (?) at this level

Key                                                           | 1990                     | GEOID                                        | Notes
------------------------------------------------------------- | ------------------------ | -------------------------------------------- | -----
nation                                                        | x                        |                                              | 
region                                                        | x                        |                                              | 
division                                                      | x                        |                                              | 
state                                                         | st01_d90_shp             | "ST":"01"                                    | 
county                                                        | co01_d90_shp             | "ST":"01","CO":"077"                         | 
consolidated-cities                                           | x                        |                                              | 
county-subdivision                                            | cs01_d90_shp             | "GEOID":"01077040"                           | "ST":"01","CO":"077","MCD":"040","GEOID":"01077040",
tract                                                         | tr01_d90_shp             | "ST":"01","CO":"077","TRACTBASE":"0113","TRACTSUF":"" | "" = 00
place                                                         | pl01_d90_shp             | "GEOID":"011023"                             | 
alaska-native-regional-corp oration                           | an02_d90_shp             | "ANRC":"63"                                  | [details](https://bit.ly/1990-ANRC-FIPS)
american-indian-area!alaska-native-area!hawaiian-home-land    | ir99_d90_shp             | "IR":"6220"                                  | 
metropolitan-statistical-area!micropolitan-statistical-area   | ~~ma99_90_shp~~          | ~~"MSA":"0380"~~                             | *MSA =/= CBSA*
combined-statistical-area                                     | x                        |                                              |
new-england-city-and-town-area                                | x                        |                                              |
combined-new-england-city-and-town-area                       | x                        |                                              | 
urban-area                                                    | ua99_d90_shp             | "UA":"0380"                                  | [details](https://www2.census.gov/geo/pdfs/reference/ua/1990uas.pdf)
congressional-district                                        | x                        |                                              | (3)
school-district-_elementary'                                  | x                        |                                              | 
school-district-_secondary'                                   | x                        |                                              | 
school-district-_unified'                                     | x                        |                                              | 
block-group                                                   | bg01_d90_shp             | "GEOID":"010770113001"                       | 
public-use-microdata-area                                     | x                        |                                              |
zip-code-tabulation-area                                      | x                        |                                              | 
state-legislative-district-'upper-chamber'                    | x                        |                                              |
state-legislative-district-'lower-chamber'                    | x                        |                                              |


Key                                                           | 2000                     | GEOID                                        | Notes
------------------------------------------------------------- | -------------------------| -------------------------------------------- | ------
nation                                                        | x                        | x                                            |
region                                                        | rg99_d00_shp             | "REGION":"4"                                 |
division                                                      | dv99_d00_shp             | "DIVISION":"9"                               |
state                                                         | st01_d00_shp             | "STATE":"04"                                 |
county                                                        | co01_d00_shp             | "STATE":"02","COUNTY":"185"                  |
consolidated-cities                                           | cc99_d00_shp             | "STATE":"30","CONCITFP":"11390"              |           
county-subdivision                                            | cs01_d00_shp             | "STATE":"44","COUNTY":"007","COUSUBFP":"80780"| "MCD":"040" no longer used
tract                                                         | tr01_d00_shp             | "STATE":"44","COUNTY":"007","TRACT":"011402" |
place                                                         | pl01_d00_shp             | "STATE":"44","PLACEFP":"80780"               | 
alaska-native-regional-corporation                            | an02_d00_shp             | "STATE":"02","ANRCFP":"03950"                | 
american-indian-area!alaska-native-area!hawaiian-home-land    | na99_d00_shp             | "AIANACE":"6165"                             | 
metropolitan-statistical-area!micropolitan-statistical-area   | x                        | x                                            |
combined-statistical-area                                     | x                        | x                                            |
new-england-city-and-town-area                                | ~~ne99_d00_shp~~         | ~~"NECMA":"1123"~~                           | *NECMA =/= NECTA*
combined-new-england-city-and-town-area                       | x                        | x                                            |
urban-area                                                    | ua99_d00_shp             | "UA":"45748"                                 | https://www2.census.gov/geo/docs/reference/ua/ua2k.txt
congressional-district                                        | x                        | x                                            | (3) 
school-district-_elementary'                                  | se01_d00_shp             | "STATE":"44","SD_E":"00360"                  |
school-district-_secondary'                                   | ss01_d00_shp             | "STATE":"44","SD_S":"00420"                  |
school-district-_unified'                                     | sn01_d00_shp             | "STATE":"44","SD_U":"00270"                  |
block-group                                                   | bg01_d00_shp             | "STATE":"44","COUNTY":"007","TRACT":"011402","BLKGROUP":"8" |
public-use-microdata-area                                     | x                        | x                                            | only p1/5
zip-code-tabulation-area                                      | zt01_d00_shp             | "ZCTA":"99782"                               | 
state-legislative-district-'upper-chamber'                    | su01_d00_shp             | "STATE":"44","SLDU":"033"                    |
state-legislative-district-'lower-chamber'                    | sl01_d00_shp             | "STATE":"44","SLDL":"063"                    |


Key                                                           | 2010                     | GEOID                                        | Notes
------------------------------------------------------------- | :----------------------- | ---------------------------------------------| -------
nation                                                        | gz_2010_us_outline_20m   | create "US" or 99 GEOID                      | no 500k available
region                                                        | gz_2010_us_020_00_500k   | "REGION":"1"                                 |
division                                                      | gz_2010_us_030_00_500k   | "DIVISION":"1"                               |
state                                                         | gz_2010_us_040_00_500k   | "STATE":"25"                                 |
consolidated-cities                                           | gz_2010_09_170_00_500k   | "STATE":"47","CONCIT":"52004"                |
county                                                        | gz_2010_us_050_00_500k   | "STATE":"01","COUNTY":"029"                  |
county-subdivision                                            | gz_2010_01_060_00_500k   | "STATE":"01","COUNTY":"073","COUSUB":"93204" | "GEO_ID":"0600000US0107393204"
tract                                                         | gz_2010_01_140_00_500k   | "STATE":"44","COUNTY":"001","TRACT":"030100" |
place                                                         | gz_2010_01_160_00_500k   | "STATE":"44","PLACE":"14140"                 |
alaska-native-regional-corporation                            | gz_2010_02_230_00_500k   | "STATE":"02","ANRC":"00590"                  |
american-indian-area!alaska-native-area!hawaiian-home-land    | gz_2010_us_250_00_500k   | "AIANHH":"5138"                              |
metropolitan-statistical-area!micropolitan-statistical-area   | gz_2010_us_310_m1_500k   | "CBSA":"10020"                               |
combined-statistical-area                                     | gz_2010_us_330_m1_500k   | "CSA":"102"                                  |
new-england-city-and-town-area                                | gz_2010_us_350_m1_500k   | "NECTA":"70450"                              |
combined-new-england-city-and-town-area                       | gz_2010_us_335_m1_500k   |                                              |
urban-area                                                    | x                        |                                              | (1) 
congressional-district                                        | gz_2010_us_500_11_5m     | "STATE":"44","CD":"01"                       | Same for CDs in 103-110
school-district-_elementary'                                  | gz_2010_55_950_00_500k   |                                              |
school-district-_secondary'                                   | gz_2010_55_960_00_500k   |                                              |
school-district-_unified'                                     | gz_2010_01_970_00_500k   | "STATE":"44","SDUNI":"00120"                 |
block-group                                                   | gz_2010_01_150_00_500k   | "STATE":"44","COUNTY":"001","TRACT":"030602","BLKGRP":"1" |
public-use-microdata-area                                     | x                        | x                                            |
zip-code-tabulation-area                                      | ~~gz_2010_us_860_00_500k~~|                                             | this is a bfjo, punted 
state-legislative-district-'upper-chamber'                    | gz_2010_01_610_u2_500k   | "STATE":"44","SLDU":"004"                    |
state-legislative-district-'lower-chamber'                    | gz_2010_01_620_l2_500k   | "STATE":"44","SLDL":"001"                    |


Key                                                           | 2012                     | GEOID                                        | Notes
------------------------------------------------------------- | :----------------------- | -------------------------------------------- | ------
nation                                                        | x                        |                                              |
region                                                        | x                        |                                              |
division                                                      | x                        |                                              |
state                                                         | x                        |                                              |
consolidated-cities                                           | x                        |                                              |
county                                                        | x                        |                                              |
county-subdivision                                            | x                        |                                              |
tract                                                         | x                        |                                              |
place                                                         | x                        |                                              |
alaska-native-regional-corporation                            | x                        |                                              |
american-indian-area!alaska-native-area!hawaiian-home-land    | x                        |                                              |
metropolitan-statistical-area!micropolitan-statistical-area   | x                        |                                              |
combined-statistical-area                                     | x                        |                                              |
new-england-city-and-town-area                                | x                        |                                              |
combined-new-england-city-and-town-area                       | x                        |                                              |
urban-area                                                    | cb_2012_us_uac10_500k    | "UACE10":"79282"                             |
congressional-district                                        | cb_rd13_us_cd113_500k    | "GEOID":"0101"                               | 
school-district-_elementary'                                  | x                        |                                              | 
school-district-_secondary'                                   | x                        |                                              |
school-district-_unified'                                     | x                        |                                              |
block-group                                                   | x                        |                                              |
public-use-microdata-area                                     | x                        |                                              |
zip-code-tabulation-area                                      | x                        |                                              |
state-legislative-district-'upper-chamber'                    | cb_rd13_01_sldu_500k     | "GEOID":"44008"                              | 
state-legislative-district-'lower-chamber'                    | cb_rd13_01_sldl_500k     | "GEOID":"44061"                              | 


Key                                                           | 2013 - 2015              | GEOID                                        | NOTES
------------------------------------------------------------- | :----------------------- | -------------------------------------------- | ------
nation                                                        | cb_2013_us_nation_500k   | "GEOID":"US"                                 | no 500k available
region                                                        | cb_2013_us_region_500k   | "GEOID":"1"                                  |
division                                                      | cb_2013_us_division_500k | "GEOID":"3"                                  |
state                                                         | cb_2013_us_state_500k    | "GEOID":"05"                                 |
consolidated-cities                                           | cb_2013_01_concity_500k  | "GEOID":"2148003"                            |
county                                                        | cb_2013_us_county_500k   | "GEOID":"01001"                              |
county-subdivision                                            | cb_2013_01_cousub_500k   | "GEOID":"4400378440"                         |
tract                                                         | cb_2013_01_tract_500k    | "GEOID":"44001030200"                        |
place                                                         | cb_2013_01_place_500k    | "GEOID":"4419180"                            |
alaska-native-regional-corporation                            | cb_2013_02_anrc_500k     | "GEOID":"0220010"                            | 
american-indian-area!alaska-native-area!hawaiian-home-land    | cb_2013_us_aiannh_500k   | "GEOID":"2430"                               |
metropolitan-statistical-area!micropolitan-statistical-area   | cb_2013_us_cbsa_500k     | "GEOID":"38300"                              |
combined-statistical-area                                     | cb_2013_us_csa_500k      | "GEOID":"430"                                |    
new-england-city-and-town-area                                | cb_2013_us_necta_500k    | "GEOID":"71650"                              |
combined-new-england-city-and-town-area                       | x                        |                                              |
urban-area                                                    | cb_2013_us_ua10_500k     | "GEOID10":"71155"                            | 
congressional-district                                        | cb_2013_us_cd113_500k    | "GEOID":"0401"                               |
school-district-_elementary'                                  | x                        |                                              |
school-district-_secondary'                                   | x                        |                                              |
school-district-_unified'                                     | x                        |                                              |
block-group                                                   | cb_2013_01_bg_500k       | "GEOID":"440070136002"                       |
public-use-microdata-area                                     | cb_2013_01_puma10_500k   | "GEOID10":"4400400"                          | 
zip-code-tabulation-area                                      | cb_2013_us_zcta510_500k  | "GEOID10":"36522"                            | 
state-legislative-district-'upper-chamber'                    | cb_2013_01_sldu_500k     | "GEOID":"44011"                              |
state-legislative-district-'lower-chamber'                    | cb_2013_01_sldl_500k     | "GEOID":"44062"                              |


Key                                                           | 2016 - 2017              | GEOID                                         | Notes
------------------------------------------------------------- | :----------------------- | --------------------------------------------- | -----
nation                                                        | cb_2016_us_nation_5m     | "GEOID":"US"                                  | no 500k available
region                                                        | cb_2016_us_region_500k   | "GEOID":"1"                                   |
division                                                      | cb_2016_us_division_500k | "GEOID":"1"                                   |
state                                                         | cb_2016_us_state_500k    | "GEOID":"02"                                  |
consolidated-cities                                           | cb_2016_01_concity_500k  | "GEOID":"2148003"                             |
county                                                        | cb_2016_us_county_500k   | "GEOID":"01005"                               |
county-subdivision                                            | cb_2016_01_cousub_500k   | "GEOID":"2108991512"                          |
tract                                                         | cb_2016_01_tract_500k    | "GEOID":"44005040302"                         |                      
place                                                         | cb_2016_01_place_500k    | "GEOID":"4408020"                             |                 
alaska-native-regional-corporation                            | cb_2016_02_anrc_500k     | "GEOID":"0206370"                             |                 
american-indian-area!alaska-native-area!hawaiian-home-land    | cb_2016_us_aiannh_500k   | "GEOID":"9560"                                |              
metropolitan-statistical-area!micropolitan-statistical-area   | cb_2016_us_cbsa_500k     | "GEOID":"43620"                               |               
combined-statistical-area                                     | cb_2016_us_csa_500k      | "GEOID":"450"                                 |             
new-england-city-and-town-area                                | cb_2016_us_necta_500k    | "GEOID":"70450"                               |               
combined-new-england-city-and-town-area                       | cb_2016_us_cnecta_500k   | "GEOID":"710"                                 |             
urban-area                                                    | cb_2016_us_ua10_500k     | "GEOID10":"44789"                             |                 
congressional-district                                        | cb_2016_us_cd115_500k    | "GEOID":"1309"                                |              
school-district-_elementary'                                  | cb_2016_01_elsd_500k     | "GEOID":"4400510"                             |                 
school-district-_secondary'                                   | cb_2016_01_scsd_500k     | "GEOID":"4400420"                             |                 
school-district-_unified'                                     | cb_2016_01_unsd_500k     | "GEOID":"4400990"                             |                 
block-group                                                   | cb_2016_01_bg_500k       | "GEOID":"440090509011"                        |                      
public-use-microdata-area                                     | cb_2016_01_puma10_500k   | "GEOID10":"4400300"                           |                   
zip-code-tabulation-area                                      | cb_2016_us_zcta510_500k  | "GEOID10":"35442"                             |                 
state-legislative-district-'upper-chamber'                    | cb_2016_01_sldu_500k     | "GEOID":"44038"                               |               
state-legislative-district-'lower-chamber'                    | cb_2016_01_sldl_500k     | "GEOID":"44062"                               |               



## Notations
1) Source for Summary Level codes: [AFF](https://factfinder.census.gov/help/en/summary_level_code_list.htm)
2) Listed as 2010 [here](https://www.census.gov/geo/maps-data/data/cbf/cbf_ua.html)
3) Listing of Sessions of Congress [by year](https://en.wikipedia.org/wiki/List_of_United_States_Congresses)



# Patterns
Vintage       | i0           | i1          | i2                | i3              | i4          | i5          | i6
------------- | ------------ | ----------- | ----------------- | --------------- | ----------- | ----------- | ---
 1990 - 2000  |  ["st" "01"] |  ["90"]     | ["shp"]           | ["zip"]         |             |             |   
 2010         |  ["gz"]      |  ["2010"]   | ["us"]            | ["outline"]     | ["500" "k"] | ["zip"]     |   
 2010         |  ["cb"]      |  ["2012"]   | ["us"]            | ["uac" "10"]    | ["500" "k"] | ["zip"]     |   
 2010         |  ["gz"]      |  ["2010"]   | ["us"]            | ["970"]         | ["00"]      | ["500" "k"] | ["zip"]
 2013 - 2017  |  ["cb"]      |  ["2013"]   | ["us"]            | ["tract"]       | ["500" "k"] | ["zip"]     |   


## File Structure for Geo Files

- 500K
  - 1990 (vintage or session of congress)
    - National level files
    - 01 (state fips)
      - State level files
      - 001 (county fips) <- TBD
        - County level files (block-groups and blocks (TBD))

## Summary Level Codes

 Summary Level (2010) | Name
:---:| ---
 010 | United States
 020 | Region
 030 | Division
 040 | State
 050 | State-County
 060 | State-County-County Subdivision
 067 | State-County-County Subdivision-Subminor Civil Division
 070 | State-County-County Subdivision-Place/Remainder
 080 | State-County-County Subdivision-Place/Remainder-Census Tract
 091 | State-County-County Subdivision-Place/Remainder-Census Tract-Block Group
 101 | State-County-County Sub∀division-Place/Remainder-Census Tract∀-Block Group-Block
 140 | State-County-Census Tract
 144 | State-County-Census Tract-American Indian Area/Alaska Native Area/Hawaiian Home Land
 150 | State-County-Census Tract-Block Group
 154 | State-County-Census Tract-Block Group-American Indian Area/Alaska Native Area/Hawaiian Home Land
 155 | State-Place-County
 158 | State-Place-County-Census Tract
 160 | State-Place
 170 | State-Consolidated City
 172 | State-Consolidated City-Place Within Consolidated City
 230 | State-Alaska Native Regional Corporation
 250 | American Indian Area/Alaska Native Area/Hawaiian Home Land
 251 | American Indian Area-Tribal Subdivision/Remainder
 252 | American Indian Area/Alaska Native Area (Reservation or Statistical Entity Only)
 253 | American Indian Area (Reservation or Statistical Entity Only)-Tribal Subdivision/Remainder
 254 | American Indian Area (Off-Reservation Trust Land Only)/Hawaiian Home Land
 255 | American Indian Area (Off-Reservation Trust Land Only)-Tribal Subdivision/Remainder
 256 | American Indian Area-Tribal Census Tract
 257 | American Indian Area-Tribal Subdivision/Remainder-Tribal Census Tract
 258 | American Indian Area-Tribal Census Tract-Tribal Block Group
 259 | American Indian Area-Tribal Subdivision/Remainder-Tribal Census Tract-Tribal Block Group
 260 | American Indian Area/Alaska Native Area/Hawaiian Home Land-State
 261 | State-American Indian Area/Alaska Native Area/Hawaiian Home Land-County-County Subdivision
 262 | American Indian Area/Alaska Native Area (Reservation or Statistical Entity Only)-State
 263 | State-American Indian Area/Alaska Native Area/Hawaiian Home Land-County-County Subdivision-Place/Remainder
 264 | American Indian Area (Off-Reservation Trust Land Only)/Hawaiian Home Land-State
 265 | State-American Indian Area/Alaska Native Area (Reservation or Statistical Entity Only)-County-County Subdivision
 266 | State-American Indian Area/Alaska Native Area (Reservation or Statistical Entity Only)-County-County Subdivision-Place/Remainder
 267 | State-American Indian Area (Off-Reservation Trust Land Only)/Hawaiian Home Land-County-County Subdivision
 268 | State-American Indian Area (Off-Reservation Trust Land Only)/Hawaiian Home Land-County-County Subdivision-Place/Remainder
 269 | American Indian Area/Alaska Native Area/Hawaiian Home Land-State-Place/Remainder
 270 | American Indian Area/Alaska Native Area/Hawaiian Home Land-State-County
 271 | American Indian Area/Alaska Native Area/Hawaiian Home Land-State-County-County Subdivision
 272 | American Indian Area/Alaska Native Area (Reservation or Statistical Entity Only)-State-County
 273 | American Indian Area/Alaska Native Area/Hawaiian Home Land-State-County-County Subdivision-Place/Remainder
 274 | American Indian Area (Off-Reservation Trust Land Only)/Hawaiian Home Land-State-County
 275 | American Indian Area/Alaska Native Area (Reservation or Statistical Entity Only)-State-County-County Subdivision
 276 | American Indian Area/Alaska Native Area (Reservation or Statistical Entity Only)-State-County-County Subdivision-Place/Remainder
 277 | American Indian Area (Off-Reservation Trust Land Only)/Hawaiian Home Land-State-County-County Subdivision
 278 | American Indian Area (Off-Reservation Trust Land Only)/Hawaiian Home Land-State-County-County Subdivision-Place/Remainder
 280 | State-American Indian Area/Alaska Native Area/Hawaiian Home Land
 281 | State-American Indian Area-Tribal Subdivision/Remainder
 282 | State-American Indian Area/Alaska Native Area/Hawaiian Home Land-County
 283 | State-American Indian Area/Alaska Native Area (Reservation or Statistical Entity Only)
 284 | State-American Indian Area (Reservation or Statistical Entity Only)-Tribal Subdivision/Remainder
 285 | State-American Indian Area/Alaska Native Area (Reservation or Statistical Entity Only)-County
 286 | State-American Indian Area (Off-Reservation Trust Land Only)/Hawaiian Home Land
 287 | State-American Indian Area (Off-Reservation Trust Land Only)-Tribal Subdivision/Remainder
 288 | State-American Indian Area (Off-Reservation Trust Land Only)/Hawaiian Home Land-County
 290 | American Indian Area-Tribal Subdivision/Remainder-State
 291 | American Indian Area (Reservation Only)-Tribal Census Tract
 292 | American Indian Area (Off-Reservation Trust Land Only)-Tribal Census Tract
 293 | American Indian Area (Reservation Only)-Tribal Census Tract-Tribal Block Group
 294 | American Indian Area (Off-Reservation Trust Land Only)-Tribal Census Tract-Tribal Block Group
 310 | Metropolitan Statistical Area/Micropolitan Statistical Area
 311 | Metropolitan Statistical Area/Micropolitan Statistical Area-State
 312 | Metropolitan Statistical Area/Micropolitan Statistical Area-State-Principal City
 313 | Metropolitan Statistical Area/Micropolitan Statistical Area-State-County
 314 | Metropolitan Statistical Area/Micropolitan Statistical Area-Metropolitan Division
 315 | Metropolitan Statistical Area/Micropolitan Statistical Area-Metropolitan Division-State
 316 | Metropolitan Statistical Area/Micropolitan Statistical Area-Metropolitan Division-State-County
 320 | State-Metropolitan Statistical Area/Micropolitan Statistical Area
 321 | State-Metropolitan Statistical Area/Micropolitan Statistical Area-Principal City
 322 | State-Metropolitan Statistical Area/Micropolitan Statistical Area-County
 323 | State-Metropolitan Statistical Area-Metropolitan Division
 324 | State-Metropolitan Statistical Area-Metropolitan Division-County
 330 | Combined Statistical Area
 331 | Combined Statistical Area-State
 332 | Combined Statistical Area-Metropolitan Statistical Area/Micropolitan Statistical Area
 333 | Combined Statistical Area-Metropolitan Statistical Area/Micropolitan Statistical Area-State
 335 | Combined New England City and Town Area
 336 | Combined New England City and Town Area-State
 337 | Combined New England City and Town Area-New England City and Town Area
 338 | Combined New England City and Town Area-New England City and Town Area-State
 340 | State-Combined Statistical Area
 341 | State-Combined Statistical Area-Metropolitan Statistical Area/Micropolitan Statistical Area
 345 | State-Combined New England City and Town Area
 346 | State-Combined New England City and Town Area-New England City and Town Area
 350 | New England City and Town Area
 351 | New England City and Town Area-State
 352 | New England City and Town Area-State-Principal City
 353 | New England City and Town Area-State-County
 354 | New England City and Town Area-State-County-County Subdivision
 355 | New England City and Town Area (NECTA)-NECTA Division
 356 | New England City and Town Area (NECTA)-NECTA Division-State
 357 | New England City and Town Area (NECTA)-NECTA Division-State-County
 358 | New England City and Town Area (NECTA)-NECTA Division-State-County-County Subdivision
 360 | State-New England City and Town Area
 361 | State-New England City and Town Area-Principal City
 362 | State-New England City and Town Area-County
 363 | State-New England City and Town Area-County-County Subdivision
 364 | State-New England City and Town Area (NECTA)-NECTA Division
 365 | State-New England City and Town Area (NECTA)-NECTA Division-County
 366 | State-New England City and Town Area (NECTA)-NECTA Division-County-County Subdivision
 500 | State-Congressional District
 510 | State-Congressional District-County
 511 | State-Congressional District-County-Census Tract
 512 | State-County-Congressional District
 521 | State-Congressional District-County-County Subdivision
 531 | State-Congressional District-Place/Remainder
 532 | State-Place-Congressional District
 541 | State-Congressional District-Consolidated City
 542 | State-Congressional District-Consolidated City-Place Within Consolidated City
 550 | State-Congressional District-American Indian Area/Alaska Native Area/Hawaiian Home Land
 551 | State-Congressional District-American Indian Area/Alaska Native Area (Reservation or Statistical Entity Only)
 552 | State-Congressional District-American Indian Area (Off-Reservation Trust Land Only)/Hawaiian Home Land
 553 | State-Congressional District-American Indian Area-Tribal Subdivision/Remainder
 554 | State-Congressional District-American Indian Area (Reservation or Statistical Entity Only)-Tribal Subdivision/Remainder
 555 | State-Congressional District-American Indian Area (Off-Reservation Trust Land Only)-Tribal Subdivision/Remainder
 560 | State-Congressional District-Alaska Native Regional Corporation
 570 | State-Congressional District-School District (Elementary)/Remainder
 571 | State-Congressional District-School District (Secondary)/Remainder
 572 | State-Congressional District-School District (Unified)/Remainder
 610 | State⌀State Legislative District (Upper Chamber)
 612 | State-State Legislative District (Upper Chamber)-County
 613 | State-State Legislative District (Upper Chamber)-County-County Subdivision
 614 | State-State Legislative District (Upper Chamber)-Place/Remainder
 615 | State-State Legislative District (Upper Chamber)-Consolidated City
 616 | State-State Legislative District (Upper Chamber)-American Indian Area/Alaska Native Area/Hawaiian Home Land
 617 | State-State Legislative District (Upper Chamber)-School District (Elementary)/Remainder
 618 | State-State Legislative District (Upper Chamber)-School District (Secondary)/Remainder
 619 | State-State Legislative District (Upper Chamber)-School District (Unified)/Remainder
 620 | State⌀State Legislative District (Lower Chamber)
 622 | State-State Legislative District (Lower Chamber)-County
 623 | State-State Legislative District (Lower Chamber)-County-County Subdivision
 624 | State-State Legislative District (Lower Chamber)-Place/Remainder
 625 | State-State Legislative District (Lower Chamber)-Consolidated City
 626 | State-State Legislative District (Lower Chamber)-American Indian Area/Alaska Native Area/Hawaiian Home Land
 627 | State-State Legislative District (Lower Chamber)-School District (Elementary)/Remainder
 628 | State-State Legislative District (Lower Chamber)-School District (Secondary)/Remainder
 629 | State-State Legislative District (Lower Chamber)-School District (Unified)/Remainder
 630 | State-State Legislative District (Upper Chamber)-County-Voting District/Remainder
 631 | State-State Legislative District (Upper Chamber)-County-Census Tract
 632 | State-State Legislative District (Upper Chamber)-County-County Subdivision-Subminor Civil Division
 633 | State-State Legislative District (Upper Chamber)-American Indian Area-Tribal Subdivision/Remainder
 634 | State-State Legislative District (Upper Chamber)-Alaska Native Regional Corporation
 635 | State-State Legislative District (Lower Chamber)-County-Voting District/Remainder
 636 | State-State Legislative District (Lower Chamber)-County-Census Tract
 637 | State-State Legislative District (Lower Chamber)-County-County Subdivision-Subminor Civil Division
 638 | State-State Legislative District (Lower Chamber)-American Indian Area-Tribal Subdivision/Remainder
 639 | State-State Legislative District (Lower Chamber)-Alaska Native Regional Corporation
 640 | State-County-State Legislative District (Upper Chamber)
 641 | State-County-State Legislative District (Lower Chamber)
 642 | State-Place-State Legislative District (Upper Chamber)
 643 | State-Place-State Legislative District (Lower Chamber)
 644 | State-State Legislative District (Upper Chamber)-Consolidated City-Place Within Consolidated City
 645 | State-State Legislative District (Lower Chamber)-Consolidated City-Place Within Consolidated City
 646 | State-State Legislative District (Upper Chamber)-American Indian Area/Alaska Native Area (Reservation or Statistical Entity Only)
 647 | State-State Legislative District (Lower Chamber)-American Indian Area/Alaska Native Area (Reservation or Statistical Entity Only)
 648 | State-State Legislative District (Upper Chamber)-American Indian Area (Off-Reservation Trust Land Only)/Hawaiian Home Land
 649 | State-State Legislative District (Lower Chamber)-American Indian Area (Off-Reservation Trust Land Only)/Hawaiian Home Land
 700 | State⌀County⌀Voting District/Remainder
 701 | State-County-Voting District/Remainder-Place/Remainder
 702 | State-County-Voting District/Remainder-Consolidated City
 703 | State-County-Voting District/Remainder-American Indian Area/Alaska Native Area/Hawaiian Home Land
 704 | State-County-Voting District/Remainder-American Indian Area-Tribal Subdivision/Remainder
 705 | State-County-Voting District/Remainder-Alaska Native Regional Corporation
 706 | State-County-Voting District/Remainder-School District (Elementary)/Remainder
 707 | State-County-Voting District/Remainder-School District (Secondary)/Remainder
 708 | State-County-Voting District/Remainder-School District (Unified)/Remainder
 709 | State-County-Voting District/Remainder-Census Tract
 710 | State⌀County⌀Voting District/Remainder⌀County Subdivision
 715 | State-County-Voting District/Remainder-County Subdivision-Subminor Civil Division
 720 | State⌀County⌀Voting District/Remainder⌀County Subdivision⌀Place/Remainder
 730 | State⌀County⌀Voting District/Remainder⌀County Subdivision-Place/Remainder⌀Census Tract
 735 | State-County-Voting District/Remainder-County Subdivision-Subminor Civil Division-Census Tract
 740 | State⌀County⌀Voting District/Remainder⌀County Subdivision⌀Place/Remainder⌀Census Tract⌀Block Group
 745 | State-County-Voting District/Remainder-County Subdivision-Subminor Civil Division-Census Tract-Block Group
 750 | State⌀County⌀Voting District/Remainder⌀County Subdivision⌀Place/Remainder-Census Tract-Block Group⌀Block
 755 | State-County-Voting District/Remainder-County Subdivision-Subminor Civil Division-Census Tract-Block Group-Block
 860 | 5-Digit ZIP Code Tabulation Area
 870 | 5-Digit ZIP Code Tabulation Area-State
 871 | State-5-Digit ZIP Code Tabulation Area
 880 | 5-Digit ZIP Code Tabulation Area-State-County
 881 | State-5-Digit ZIP Code Tabulation Area-County
 950 | State-School District (Elementary)/Remainder
 960 | State-School District (Secondary)/Remainder
 970 | State-School District (Unified)/Remainder
 
### Cartography Cross-walk Checklist:

#### National Files

- [x] American Indian Areas/Alaska Native Areas/Hawaiian Home Land
- [x] Congressional District
- [x] County
- [x] County Within Congressional District
- [x] Division
- [ ] Metropolitan and Micropolitan Statistical Area and Related Statistical Area <- Questions remain
- [x] Nation (U.S. Outline)
- [x] Region
- [x] State
- [x] Urban Area
- [x] ZIP Code Tabulation Area (ZCTA)

#### State-based Files

- [x] Alaska Native Regional Corporation
- [x] Block Group
- [x] Census Tract
- [x] Consolidated City
- [x] County Subdivision
- [x] County Within Urban Area
- [x] Place
- [x] Public Use Microdata Area (PUMA)
- [x] School Districts
- [x] State Legislative District - Upper and Lower
- [ ] Subbarrio (Puerto Rico only) <- Not available via API (TBD)
- [ ] Traffic Analysis Zone (TAZ) <- Not available via API (TBD)

   
Codes:
1) Follow up: Need clarification on alignment between cartography files and api geography

## Functions

- availableStats
  - vintages
    - sourcePaths
- availableGeoJSON
  - vintages
    - geoHiearchies
- error `chan`s
  - if none found, "geoJSON unavailable for this vintage or geography"
  - 
        

# WGET
---
# Note: do this at your own risk. If too eager, Census will blacklist your IP address.
---

To get a recursive search through folders (branches) and assets (leaves) in a subdomain:
`wget -r -np -R "index.html*" -e robots=off https://www2.census.gov/geo/tiger/PREVGENZ/`

To remove a specific subdomain, use the `-X` (exclusion) option:
`wget -r -np -R "index.html*" -e robots=off -X /geo/tiger/GENZ2015/kml/,other/path/to/exclude/ https://www2.census.gov/geo/tiger/GENZ2015/`

### Components
- `wget`                                            (from where it was downloaded)
- `-r`                                              (recursive)
- `-np`                                             (no parent)
- `-R "index.html*"`                                (reject autogenerated index.html files)
- `-e robots=off`                                   (allow parsing despite blocked robots/crawlers file)
- `-X /geo/tiger/GENZ2015/kml/,other/path/exclude/` notice in the example above that we don't include the host server in the exclusion path
- `https://www2.census.gov/geo/tiger/PREVGENZ/`     make sure to add the trailing `/` to let wget know that this is a directory and not a file
