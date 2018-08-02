

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

No. | Key                                                           | pre2010       | 2010+                 | by state  | by county | extra 
--- | ------------------------------------------------------------- | ------------- | --------------------- | :-------: | :-------: | ----- 
1   | nation                                                        | x             | us_nation             |           |           | 8
2   | region                                                        | rg            | region                |           |           |       
3   | division                                                      | dv            | division              |           |           |       
4   | state                                                         | st            | state                 |           |           |        
5   | county                                                        | co            | county                | api?      |           |       
6   | county                                                        | x             | county_within_ua      | geo & api |           | 1     
7   | county                                                        | x             | county_within_cd115   | api       |           | 2     
8   | county-subdivision                                            | cs            | cousub                | geo/api   | api?      |       
9   | tract                                                         | tr            | tract                 | geo/api   | api?      |       
10  | place                                                         | pl            | place                 | geo/api?  |           |       
11  | alaska-native-regional-corporation                            | an            | anrc                  | geo/api?  |           |       
12  | american-indian-area!alaska-native-area!hawaiian-home-land    | na:00 ir:90   | aiannh                |           |           |       
13  | metropolitan-statistical-area!micropolitan-statistical-area   | ma            | ?                     | api?      |           | 3     
14  | combined-statistical-area                                     | ?             | csa                   |           |           | 3     
15  | new-england-city-and-town-area                                | ?             | necta                 |           |           | 3     
16  | urban-area                                                    | ua            | ua10                  |           |           | 4     
17  | congressional-district                                        | cd...         | cd99...               | api?      |           | 5     
18  | school-district-'elementary'                                  | se..          | elsd                  | geo/api   |           |       
19  | school-district-'secondary'                                   | ss..          | scsd                  | geo/api   |           |       
20  | school-district-'unified'                                     | sn..          | unsd                  | geo/api   |           |       
    | place-remainder                                               | x             | x                     |           |           |       
21  | block-group                                                   | bg..          | .._bg                 | geo/api   | api       |       
22  | public-use-microdata-area                                     | p1..          | .._puma10             | geo/api?  |           | 6     
23  | zip-code-tabulation-area *or* zipcode                         | zt..          | us_zcta510            |           |           | 7     
24  | state-legislative-district-'upper-chamber'                    | su..          | .._sldu               |  geo/api  |           |       
25  | state-legislative-district-'lower-chamber'                    | sl..          | .._sldl               |  geo/api  |           |       
    | principal-city                                                | x             | x                     |           |           |       
    | metropolitan-division                                         | x             | x                     |           |           |       
    | principal-city-'or-part'                                      | x             | x                     |           |           |       
    | combined-new-england-city-and-town-area                       | x             | x                     |           |           |       
    | combined-statistical-area                                     | x             | x                     |           |           |       
    | new-england-city-and-town-area                                | x             | x                     |           |           |       
    | county-subdivision-'or-part'                                  | x             | x                     |           |           |       
    | consolidated-city                                             | cc            | x                     |           | geo/api?  |       


## Table of file structure notes
No. | 1990                  | 1998                  | 2000                  | 2010                  | 2013+                 |
--- | --------------------- | --------------------- | --------------------- | --------------------- | --------------------- |
1   | x | x | x | GENZ2010/gz_2010_us_outline_500k.zip | GENZ2013/cb_201._us_nation_500k.zip|
2   | x | x | PREVGENZ/rg/rg00shp/rg99_d00_shp.zip  | GENZ2010/gz_2010_us_020_00_500k.zip | GENZ2013/cb_2013_us_region_500k.zip |
3   | x | x | PREVGENZ/dv/dv99_d00_shp.zip | GENZ2010/gz_2010_us_030_00_500k.zip | GENZ2010/cb_2013_us_division_500k.zip|
4   | PREVGENZ/st/st90shp/st01_d90_shp.zip | x | PREVGENZ/st/st00shp/st01_d00_shp.zip | GENZ2010/gz_2010_us_040_00_500k.zip | GENZ2013/cb_2013_us_state_500k.zip |
5   |                       |                       |                       |                       |                       |
6   |                       |                       |                       |                       |                       |
7   |                       |                       |                       |                       |                       |
8   |                       |                       |                       |                       |                       |
9   |                       |                       |                       |                       |                       |
10  |                       |                       |                       |                       |                       |
11  |                       |                       |                       |                       |                       |
12  |                       |                       |                       |                       |                       |
13  |                       |                       |                       |                       |                       |
14  |                       |                       |                       |                       |                       |
15  |                       |                       |                       |                       |                       |
16  |                       |                       |                       |                       |                       |
17  |                       |                       |                       |                       |                       |
18  |                       |                       |                       |                       |                       |
19  |                       |                       |                       |                       |                       |
20  |                       |                       |                       |                       |                       |
21  |                       |                       |                       |                       |                       |
22  |                       |                       |                       |                       |                       |
23  |                       |                       |                       |                       |                       |
24  |                       |                       |                       |                       |                       |
25  |                       |                       |                       |                       |                       |


## Folder structures


- PREVGENZ/
  - aianhh/
    - ir/
      - `ir02_d90_shp.zip`
      - `ir99_d90_shp.zip`
    - na/
      - na00shp/
        - `na99_d00_shp.zip`
  - an/
    - `an02_d00_shp.zip`
    - `an02_d90_shp.zip`
  - bg/
    - bg00shp/
      - `bg01_d00_shp.zip`
      - `bg.._d00_shp.zip`
      - ...
    - bg90shp/
      - `bg01_d90_shp.zip`
      - `bg.._d90_shp.zip`
      - ...
  - cc/
    - cc00shp/
      - `cc99_d00_shp.zip`
  - cd/
    - cd103shp/ (through 110)
      - `cd01_103_shp.zip`
      - `cd.._103_shp.zip`
      - ...
  - co/
  - cs/
  - dv/ 
  - econ/
  - ma/
  - metroarea/
  - ne/
  - ou/
  - pl/
  - rg/
  - sb/
  - se/
  - sl/
  - sn/
  - ss/
  - st/
  - su/
  - tb/
  - tr/
  - ts/
  - tt/
  - tz/
  - ua/
  - vt/
  - zt/
  
- 1998
- 2000
- 2010
- 2013
- 2014

## Notes
1) (612) required geoHierarchy `{:urban-growth-area :state :county}`
2) (510) required geoHierarchy `{:state :congressional-distric :county}`
3) Confirm these mappings (2010+ vs pre2010 respectively)
  - cbsa = Core Based Statistical Areas                 :   ma = Metropolitan Statistical Areas
  - csa = Combined Statistical Areas                    :   cm:99 cmsa:96/98 = Consolidated Metropolitan Statistical Areas *or* cm_sa = Consolidated Metropolitan Statistical Areas and Metropolitan Statistical Areas
  - necta = New England City and Town Areas             :   ne = New England County Metropolitan Areas 
  - cnecta = Combined New England City and Town Areas   :   ?
4) Confirm these mappings (2010+ vs pre2010 respectively)
  - ua10= Urban Area                                    :   ua = Urbanized Areas
5) `...` = 3-digit congressional session number (e.g., `103`)
6) Confirm these mappings (2010+ vs pre2010 respectively)
  - puma10 = public use microdata areas                 :   p1 or p5 = public use microdata areas (1 or 5 percent?)
7) for zbp, `zipcode` for all others: `zip-code-tabulation-area`
8) Confirm that US boundary hasn't changed since 1990 (earliest available = 2010)
  
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