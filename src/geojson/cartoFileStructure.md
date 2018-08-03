

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
| 13  | metropolitan-statistical-area!micropolitan-statistical-area   | ma            | cbsa                  | api?      |           |      |
| 14  | combined-statistical-area                                     | cmsa:96 cm:99 | csa                   |           |           | 3     |
| 15  | new-england-city-and-town-area                                | ne            | necta                 |           |           | 3     |
| 16  | urban-area                                                    | ua            | ua10                  |           |           | 3     |
| 17  | congressional-district                                        | cd...         | cd99...               | api?      |           | 5     |
| 18  | school-district-'elementary'                                  | se..          | elsd                  | geo/api   |           |       |
| 19  | school-district-'secondary'                                   | ss..          | scsd                  | geo/api   |           |       |
| 20  | school-district-'unified'                                     | sn..          | unsd                  | geo/api   |           |       |
|     | place-remainder                                               | x             | x                     |           |           |       |
| 21  | block-group                                                   | bg..          | .._bg                 | geo/api   | api       |       |
| 22  | public-use-microdata-area                                     | p1..          | .._puma10             | geo/api?  |           | 6     |
| 23  | zip-code-tabulation-area *or* zipcode(zbp)                    | zt..          | us_zcta510            |           |           | 7     |
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

## Rosetta Stones (all files end in .zip)

Key                                                           | 1990                              | Notes
------------------------------------------------------------- | :--------------------------------:| -----
nation                                                        | x                                 | 
region                                                        | x                                 | 
division                                                      | x                                 | 
state                                                         | st01_d90_shp                      | 
county                                                        | co01_d90_shp                      | 
county-subdivision                                            | cs01_d90_shp                      | 
tract                                                         | tr01_d90_shp                      | 
place                                                         | pl01_d90_shp                      | 
alaska-native-regional-corporation                            | an02_d90_shp                      | 
american-indian-area!alaska-native-area!hawaiian-home-land    | ir99_d90_shp                      | 
metropolitan-statistical-area!micropolitan-statistical-area   | ma99_90_shp                       | 
combined-statistical-area                                     | x                                 |
new-england-city-and-town-area                                | x                                 | 
urban-area                                                    | ua99_d90_shp                      | 
congressional-district                                        | cd01_103_shp                      |  ? TBD
school-district-'elementary'                                  | x                                 | 
school-district-'secondary'                                   | x                                 | 
school-district-'unified'                                     | x                                 | 
place-remainder                                               | x                                 | 
block-group                                                   | bg01_d90_shp                      | 
public-use-microdata-area                                     | x                                 |
zip-code-tabulation-area *or* zipcode                         | x                                 | 
state-legislative-district-'upper-chamber'                    | x                                 |
state-legislative-district-'lower-chamber'                    | x                                 |

Key                                                           | 1996                              | Notes
------------------------------------------------------------- | :--------------------------------:| -----
nation                                                        | x                                 | 
region                                                        | x                                 | 
division                                                      | x                                 | 
state                                                         | x                                 | 
county                                                        | x                                 | 
county-subdivision                                            | x                                 | 
tract                                                         | x                                 | 
place                                                         | x                                 | 
alaska-native-regional-corporation                            | x                                 | 
american-indian-area!alaska-native-area!hawaiian-home-land    | x                                 | 
metropolitan-statistical-area!micropolitan-statistical-area   | x                                 | 
combined-statistical-area                                     | x                                 |
new-england-city-and-town-area                                | x                                 | 
urban-area                                                    | x                                 | 
congressional-district                                        |                                   | ? TBD
school-district-'elementary'                                  | x                                 | 
school-district-'secondary'                                   | x                                 | 
school-district-'unified'                                     | x                                 | 
place-remainder                                               | x                                 | 
block-group                                                   | x                                 | 
public-use-microdata-area                                     | x                                 | 
zip-code-tabulation-area *or* zipcode                         | x                                 | 
state-legislative-district-'upper-chamber'                    | x                                 |
state-legislative-district-'lower-chamber'                    | x                                 |

Key                                                           | 1998                              | Notes
------------------------------------------------------------- | :--------------------------------:| -----
nation                                                        | x                                 | 
region                                                        | x                                 | 
division                                                      | x                                 | 
state                                                         | x                                 | 
county                                                        | x                                 | 
county-subdivision                                            | x                                 | 
tract                                                         | x                                 | 
place                                                         | pl01_d98_shp                      | 
alaska-native-regional-corporation                            | x                                 | 
american-indian-area!alaska-native-area!hawaiian-home-land    | x                                 | 
metropolitan-statistical-area!micropolitan-statistical-area   | x                                 | 
combined-statistical-area                                     | x                                 |
new-england-city-and-town-area                                | x                                 | 
urban-area                                                    | x                                 | 
congressional-district                                        |                                   | ? TBD
school-district-'elementary'                                  | x                                 | 
school-district-'secondary'                                   | x                                 | 
school-district-'unified'                                     | x                                 | 
place-remainder                                               | x                                 | 
block-group                                                   | x                                 | 
public-use-microdata-area                                     | x                                 | ? TBD
zip-code-tabulation-area *or* zipcode                         | x                                 | 
state-legislative-district-'upper-chamber'                    | x                                 |
state-legislative-district-'lower-chamber'                    | x                                 |

Key                                                           | 1999                              | Notes
------------------------------------------------------------- | :--------------------------------:| -----
nation                                                        | x                                 | 
region                                                        | x                                 | 
division                                                      | x                                 | 
state                                                         | x                                 | 
county                                                        | x                                 | 
county-subdivision                                            | x                                 | 
tract                                                         | x                                 | 
place                                                         | x                                 | 
alaska-native-regional-corporation                            | x                                 | 
american-indian-area!alaska-native-area!hawaiian-home-land    | x                                 | 
metropolitan-statistical-area!micropolitan-statistical-area   | x                                 | 
combined-statistical-area                                     | x                                 | 
new-england-city-and-town-area                                | x                                 | 
urban-area                                                    | x                                 | 
congressional-district                                        |                                   | ? TBD
school-district-'elementary'                                  | x                                 | 
school-district-'secondary'                                   | x                                 | 
school-district-'unified'                                     | x                                 | 
place-remainder                                               | x                                 | 
block-group                                                   | x                                 | 
public-use-microdata-area                                     | x                                 | 
zip-code-tabulation-area *or* zipcode                         | x                                 | 
state-legislative-district-'upper-chamber'                    | x                                 |
state-legislative-district-'lower-chamber'                    | x                                 |

Key                                                           | 2000                              | Notes
------------------------------------------------------------- | :--------------------------------:| -----
nation                                                        | x                                 | 
region                                                        | rg99_d00_shp                      | 
division                                                      | dv99_d00_shp                      | 
state                                                         | st01_d00_shp                      | 
county                                                        | co01_d00_shp                      | 
county-subdivision                                            | cs01_d00_shp                      | 
tract                                                         | tr01_d00_shp                      | 
place                                                         | pl01_d00_shp                      | 
alaska-native-regional-corporation                            | an02_d00_shp                      | 
american-indian-area!alaska-native-area!hawaiian-home-land    | na99_d00_shp                      | 
metropolitan-statistical-area!micropolitan-statistical-area   | x                                 | 
combined-statistical-area                                     | x                                 | 
new-england-city-and-town-area                                | ne99_d00_shp                      | 
urban-area                                                    | ua99_d00_shp                      | 
congressional-district                                        |                                   | ? TBD
school-district-'elementary'                                  | se01_d00_shp                      | 
school-district-'secondary'                                   | ss01_d00_shp                      | 
school-district-'unified'                                     | sn01_d00_shp                      | 
place-remainder                                               | x                                 | 
block-group                                                   | bg01_d00_shp                      | 
public-use-microdata-area                                     | x                                 | only p1/5 available
zip-code-tabulation-area *or* zipcode                         | zt01_d00_shp                      | 
state-legislative-district-'upper-chamber'                    | su01_d00_shp                      |
state-legislative-district-'lower-chamber'                    | sl01_d00_shp                      |

Key                                                           | 2010                              | Notes
------------------------------------------------------------- | :--------------------------------:| -----
nation                                                        | gz_2010_us_outline_500k           | 
region                                                        | gz_2010_us_020_00_500k            | 
division                                                      | gz_2010_us_030_00_500k            | 
state                                                         | gz_2010_us_040_00_500k            | 
county                                                        | gz_2010_us_050_00_500k            | 
county-subdivision                                            | gz_2010_01_060_00_500k            | 
tract                                                         | gz_2010_01_140_00_500k            | 
place                                                         | gz_2010_01_160_00_500k            | 
alaska-native-regional-corporation                            | gz_2010_02_230_00_500k            | 
american-indian-area!alaska-native-area!hawaiian-home-land    | x                                 | 
metropolitan-statistical-area!micropolitan-statistical-area   | x                                 | 
combined-statistical-area                                     | x                                 | 
new-england-city-and-town-area                                | x                                 | 
urban-area                                                    | cb_2012_us_uac10_500k             | mislabeled? https://www.census.gov/geo/maps-data/data/cbf/cbf_ua.html
congressional-district                                        | x                                 | 
school-district-'elementary'                                  | x                                 | 
school-district-'secondary'                                   | x                                 | 
school-district-'unified'                                     | x                                 | 
place-remainder                                               | x                                 | 
block-group                                                   | gz_2010_01_150_00_500k            | 
public-use-microdata-area                                     | x                                 | 
zip-code-tabulation-area *or* zipcode                         | x                                 | 
state-legislative-district-'upper-chamber'                    | gz_2010_01_610_u2_500k            |
state-legislative-district-'lower-chamber'                    | gz_2010_01_620_l2_500k            |

Key                                                           | 2011                              | Notes
------------------------------------------------------------- | :--------------------------------:| -----
nation                                                        | x                                 | 
region                                                        | x                                 | 
division                                                      | x                                 | 
state                                                         | x                                 | 
county                                                        | x                                 | 
county-subdivision                                            | x                                 | 
tract                                                         | x                                 | 
place                                                         | x                                 | 
alaska-native-regional-corporation                            | x                                 | 
american-indian-area!alaska-native-area!hawaiian-home-land    | x                                 | 
metropolitan-statistical-area!micropolitan-statistical-area   | x                                 | 
combined-statistical-area                                     | x                                 | 
new-england-city-and-town-area                                | x                                 | 
urban-area                                                    | x                                 | 
congressional-district                                        | x                                 | 
school-district-'elementary'                                  | x                                 | 
school-district-'secondary'                                   | x                                 | 
school-district-'unified'                                     | x                                 | 
place-remainder                                               | x                                 | 
block-group                                                   | x                                 | 
public-use-microdata-area                                     | x                                 | 
zip-code-tabulation-area *or* zipcode                         | x                                 | 
state-legislative-district-'upper-chamber'                    | su01_d11_shp                      | ? folder is su06shp
state-legislative-district-'lower-chamber'                    | sl01_d11_shp                      | ?

Key                                                           | 2012                              | Notes
------------------------------------------------------------- | :--------------------------------:| -----
nation                                                        | x                                 | 
region                                                        | x                                 | 
division                                                      | x                                 | 
state                                                         | x                                 | 
county                                                        | x                                 | 
county-subdivision                                            | x                                 | 
tract                                                         | x                                 | 
place                                                         | x                                 | 
alaska-native-regional-corporation                            | x                                 | 
american-indian-area!alaska-native-area!hawaiian-home-land    | x                                 | 
metropolitan-statistical-area!micropolitan-statistical-area   | x                                 | 
combined-statistical-area                                     | x                                 | 
new-england-city-and-town-area                                | x                                 | 
urban-area                                                    | cb_2012_us_uac10_500k             | 
congressional-district                                        | cb_rd13_us_cd113_500k             | 
school-district-'elementary'                                  | x                                 | 
school-district-'secondary'                                   | x                                 | 
school-district-'unified'                                     | x                                 | 
place-remainder                                               | x                                 | 
block-group                                                   | x                                 | 
public-use-microdata-area                                     | x                                 | 
zip-code-tabulation-area *or* zipcode                         | x                                 | 
state-legislative-district-'upper-chamber'                    | cb_rd13_01_sldu_500k              |
state-legislative-district-'lower-chamber'                    | cb_rd13_01_sldl_500k              |

Key                                                           | 2013                              | Notes
------------------------------------------------------------- | :--------------------------------:| -----
nation                                                        | cb_2013_us_nation_500k            | 
region                                                        | cb_2013_us_region_500k            | 
division                                                      | cb_2013_us_division_500k          | 
state                                                         | cb_2013_us_state_500k             | 
county                                                        | cb_2013_us_county_500k            | 
county-subdivision                                            | cb_2013_01_cousub_500k            | 
tract                                                         | cb_2013_01_tract_500k             | 
place                                                         | cb_2013_01_place_500k             | 
alaska-native-regional-corporation                            | cb_2013_02_anrc_500k              | 
american-indian-area!alaska-native-area!hawaiian-home-land    | cb_2013_us_aiannh_500k            | 
metropolitan-statistical-area!micropolitan-statistical-area   | cb_2013_us_cbsa_500k              | 
combined-statistical-area                                     | cb_2013_us_csa_500k               | 
new-england-city-and-town-area                                | cb_2013_us_necta_500k             | 
urban-area                                                    | cb_2013_us_ua10_500k              | 
congressional-district                                        | cb_2013_us_cd113_500k             | 
school-district-'elementary'                                  | x                                 | 
school-district-'secondary'                                   | x                                 | 
school-district-'unified'                                     | x                                 | 
place-remainder                                               | x                                 | 
block-group                                                   | cb_2013_01_bg_500k                | 
public-use-microdata-area                                     | cb_2013_01_puma10_500k            | 
zip-code-tabulation-area *or* zipcode                         | cb_2013_us_zcta510_500k           | 
state-legislative-district-'upper-chamber'                    | cb_2013_01_sldu_500k              |
state-legislative-district-'lower-chamber'                    | cb_2013_01_sldl_500k              |

Key                                                           | 2014                              | Notes
------------------------------------------------------------- | :--------------------------------:| -----
nation                                                        | cb_2014_us_nation_5m              | no 500k available
region                                                        | cb_2014_us_region_500k            | 
division                                                      | cb_2014_us_division_500k          | 
state                                                         | cb_2014_us_state_500k             | 
county                                                        | cb_2014_us_county_500k            | 
county-subdivision                                            | cb_2014_01_cousub_500k            | 
tract                                                         | cb_2017_01_tract_500k             | 
place                                                         | cb_2013_01_place_500k             | 
alaska-native-regional-corporation                            | cb_2017_02_anrc_500k              | 
american-indian-area!alaska-native-area!hawaiian-home-land    | cb_2013_us_aiannh_500k            | 
metropolitan-statistical-area!micropolitan-statistical-area   | cb_2017_us_cbsa_500k              | 
combined-statistical-area                                     | cb_2013_us_csa_500k               | 
new-england-city-and-town-area                                | cb_2013_us_necta_500k             | 
urban-area                                                    | cb_2014_us_ua10_500k              | 
congressional-district                                        | cb_2014_us_cd114_500k             | 
school-district-'elementary'                                  | x                                 | 
school-district-'secondary'                                   | x                                 | 
school-district-'unified'                                     | x                                 | 
place-remainder                                               | x                                 | 
block-group                                                   | cb_2013_01_bg_500k                | 
public-use-microdata-area                                     | cb_2013_01_puma10_500k            | 
zip-code-tabulation-area *or* zipcode                         | cb_2013_us_zcta510_500k           | 
state-legislative-district-'upper-chamber'                    | cb_2013_01_sldu_500k              |
state-legislative-district-'lower-chamber'                    | cb_2013_01_sldl_500k              |

Key                                                           | 2015                              | Notes
------------------------------------------------------------- | :--------------------------------:| -----
nation                                                        | cb_2015_us_nation_5m              | no 500k available
region                                                        | cb_2015_us_region_500k            | 
division                                                      | cb_2015_us_division_500k          | 
state                                                         | cb_2015_us_state_500k             | 
county                                                        | cb_2015_us_county_500k            | 
county-subdivision                                            | cb_2015_01_cousub_500k            | 
tract                                                         | cb_2017_01_tract_500k             | 
place                                                         | cb_2013_01_place_500k             | 
alaska-native-regional-corporation                            | cb_2017_02_anrc_500k              | 
american-indian-area!alaska-native-area!hawaiian-home-land    | cb_2013_us_aiannh_500k            | 
metropolitan-statistical-area!micropolitan-statistical-area   | cb_2017_us_cbsa_500k              | 
combined-statistical-area                                     | cb_2013_us_csa_500k               | 
new-england-city-and-town-area                                | cb_2013_us_necta_500k             | 
urban-area                                                    | cb_2015_us_ua10_500k              | 
congressional-district                                        | cb_2015_us_cd114_500k             | 
school-district-'elementary'                                  | x                                 | 
school-district-'secondary'                                   | x                                 | 
school-district-'unified'                                     | x                                 | 
place-remainder                                               | x                                 | 
block-group                                                   | cb_2013_01_bg_500k                | 
public-use-microdata-area                                     | cb_2013_01_puma10_500k            | 
zip-code-tabulation-area *or* zipcode                         | cb_2013_us_zcta510_500k           | 
state-legislative-district-'upper-chamber'                    | cb_2013_01_sldu_500k              |
state-legislative-district-'lower-chamber'                    | cb_2013_01_sldl_500k              |

Key                                                           | 2016                              | Notes
------------------------------------------------------------- | :--------------------------------:| -----
nation                                                        | cb_2016_us_nation_5m              | no 500k available
region                                                        | cb_2016_us_region_500k            | 
division                                                      | cb_2016_us_division_500k          | 
state                                                         | cb_2016_us_state_500k             | 
county                                                        | cb_2016_us_county_500k            | 
county-subdivision                                            | cb_2016_01_cousub_500k            | 
tract                                                         | cb_2017_01_tract_500k             | 
place                                                         | cb_2013_01_place_500k             | 
alaska-native-regional-corporation                            | cb_2017_02_anrc_500k              | 
american-indian-area!alaska-native-area!hawaiian-home-land    | cb_2013_us_aiannh_500k            | 
metropolitan-statistical-area!micropolitan-statistical-area   | cb_2017_us_cbsa_500k              | 
combined-statistical-area                                     | cb_2013_us_csa_500k               | 
new-england-city-and-town-area                                | cb_2013_us_necta_500k             | 
urban-area                                                    | cb_2015_us_ua10_500k              | 
congressional-district                                        | cb_2016_us_cd115_500k             | 
school-district-'elementary'                                  | cb_2016_01_elsd_500k              | 
school-district-'secondary'                                   | cb_2016_01_scsd_500k              | 
school-district-'unified'                                     | cb_2016_01_unsd_500k              | 
place-remainder                                               | x                                 | 
block-group                                                   | cb_2013_01_bg_500k                | 
public-use-microdata-area                                     | cb_2013_01_puma10_500k            | 
zip-code-tabulation-area *or* zipcode                         | cb_2013_us_zcta510_500k           | 
state-legislative-district-'upper-chamber'                    | cb_2013_01_sldu_500k              |
state-legislative-district-'lower-chamber'                    | cb_2013_01_sldl_500k              |

Key                                                           | 2017                              | Notes
------------------------------------------------------------- | :--------------------------------:| -----
nation                                                        | cb_2017_us_nation_5m              | no 500k available
region                                                        | cb_2017_us_region_500k            | 
division                                                      | cb_2017_us_division_500k          | 
state                                                         | cb_2017_us_state_500k             | 
county                                                        | cb_2017_us_county_500k            | 
county-subdivision                                            | cb_2017_01_cousub_500k            | 
tract                                                         | cb_2017_01_tract_500k             | 
place                                                         | cb_2013_01_place_500k             | 
alaska-native-regional-corporation                            | cb_2017_02_anrc_500k              | 
american-indian-area!alaska-native-area!hawaiian-home-land    | cb_2013_us_aiannh_500k            | 
metropolitan-statistical-area!micropolitan-statistical-area   | cb_2017_us_cbsa_500k              | 
combined-statistical-area                                     | cb_2013_us_csa_500k               | 
new-england-city-and-town-area                                | cb_2013_us_necta_500k             | 
urban-area                                                    | cb_2015_us_ua10_500k              | 
congressional-district                                        | cb_2017_us_cd115_500k             | 
school-district-'elementary'                                  | cb_2016_01_elsd_500k              | 
school-district-'secondary'                                   | cb_2016_01_scsd_500k              | 
school-district-'unified'                                     | cb_2016_01_unsd_500k              | 
place-remainder                                               | x                                 | 
block-group                                                   | cb_2013_01_bg_500k                | 
public-use-microdata-area                                     | cb_2013_01_puma10_500k            | 
zip-code-tabulation-area *or* zipcode                         | cb_2013_us_zcta510_500k           | 
state-legislative-district-'upper-chamber'                    | cb_2013_01_sldu_500k              |
state-legislative-district-'lower-chamber'                    | cb_2013_01_sldl_500k              |


  
### Cartography Cross-walk Checklist:

#### National Files

- [x] American Indian Areas/Alaska Native Areas/Hawaiian Home Land
- [x] Congressional District
- [x] County
- [x] County Within Congressional District
- [x] Division
- [?] Metropolitan and Micropolitan Statistical Area and Related Statistical Area
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
- [ ] Subbarrio (Puerto Rico only)
- [ ] Traffic Analysis Zone (TAZ)

   
Codes:
1) Follow up: Need clarification on alignment between cartography files and api geography

```clojure
(let [level (last geoHiearchy)
      vintage vintage]
    (cond (= level :county)
          (get from vintage path))
```

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
  
# Using Tigerweb to translate lat/lng to FIPS:

## Example (2016):
- use the appropriate vintage: [link](https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_ACS2016/MapServer/78)
- use these settings ![image](https://files.slack.com/files-pri/T6AL55003-FB7KP6WKD/input-geometry-lng-lat-format.png)
  - "Input Geometry:" <lng>,<lat> (ex: `-96,37`)
  - "Geometry Type:" "Point"
  - "Input Spatial Reference:" `4269`
  - "Out Fields:" <GEO Levels you need> (ex: `STATE,COUNTY,TRACT`)
  - "Return Geometry:" `False`
  - "Retern True Curves:" `False`
  
## Example Call:
https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_ACS2016/MapServer/10/query?geometry=-87.240372%2C30.433283&geometryType=esriGeometryPoint&inSR=4269&spatialRel=esriSpatialRelIntersects&outFields=*&returnGeometry=false&returnTrueCurves=false&returnIdsOnly=false&returnCountOnly=false&returnZ=false&returnM=false&returnDistinctValues=false&returnExtentsOnly=false&f=pjson

### Components
- base: https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/
- vintage: tigerWMS_ACS2016/
- level: MapServer/10/ (10 = block groups)
query components: 
- query?
  - geometry=-87.240372%2C30.433283
  - &geometryType=esriGeometryPoint
  - &inSR=4269
  - &spatialRel=esriSpatialRelIntersects
  - &outFields=*
  - &returnGeometry=false
  - &returnTrueCurves=false
  - &returnIdsOnly=false
  - &returnCountOnly=false
  - &returnZ=false
  - &returnM=false
  - &returnDistinctValues=false
  - &returnExtentsOnly=false
  - &f=pjson


# WGET

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
