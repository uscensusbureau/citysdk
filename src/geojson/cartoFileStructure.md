

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

## Rosetta Stones (all files end in .zip)

Key                                                           | 1990                              | 
------------------------------------------------------------- | :--------------------------------:| 
nation                                                        | x                                 | 
region                                                        | x                                 | 
division                                                      | x                                 | 
state                                                         | st01_d90_shp                      | 
county                                                        | co01_d90_shp                      | 
county                                                        | x                                 | 
county                                                        | x                                 | 
county-subdivision                                            | cs01_d00_shp                      | 
tract                                                         |                                   | 
place                                                         |                                   | 
alaska-native-regional-corporation                            |                                   | 
american-indian-area!alaska-native-area!hawaiian-home-land    |                                   | 
metropolitan-statistical-area!micropolitan-statistical-area   |                                   | 
combined-statistical-area                                     |                                   | 
new-england-city-and-town-area                                |                                   | 
urban-area                                                    |                                   | 
congressional-district                                        |                                   | 
school-district-'elementary'                                  |                                   | 
school-district-'secondary'                                   |                                   | 
school-district-'unified'                                     |                                   | 
place-remainder                                               |                                   | 
block-group                                                   |                                   | 
public-use-microdata-area                                     |                                   | 
zip-code-tabulation-area *or* zipcode                         |                                   | 
state-legislative-district-'upper-chamber'                    |                                   |

Key                                                           | 2000                              | 
------------------------------------------------------------- | :--------------------------------:| 
nation                                                        |                                   | 
region                                                        | rg99_d00_shp                      | 
division                                                      | dv99_d00_shp                      | 
state                                                         | st01_d00_shp                      | 
county                                                        | co01_d00_shp                      | 
county                                                        |                                   | 
county                                                        |                                   | 
county-subdivision                                            |                                   | 
tract                                                         |                                   | 
place                                                         |                                   | 
alaska-native-regional-corporation                            |                                   | 
american-indian-area!alaska-native-area!hawaiian-home-land    |                                   | 
metropolitan-statistical-area!micropolitan-statistical-area   |                                   | 
combined-statistical-area                                     |                                   | 
new-england-city-and-town-area                                |                                   | 
urban-area                                                    |                                   | 
congressional-district                                        |                                   | 
school-district-'elementary'                                  |                                   | 
school-district-'secondary'                                   |                                   | 
school-district-'unified'                                     |                                   | 
place-remainder                                               |                                   | 
block-group                                                   |                                   | 
public-use-microdata-area                                     |                                   | 
zip-code-tabulation-area *or* zipcode                         |                                   | 
state-legislative-district-'upper-chamber'                    |                                   |

Key                                                           | 2010                              | 
------------------------------------------------------------- | :--------------------------------:| 
nation                                                        |                                   | 
region                                                        |                                   | 
division                                                      |                                   | 
state                                                         | st01_d90_shp.zip                  | 
county                                                        |                                   | 
county                                                        |                                   | 
county                                                        |                                   | 
county-subdivision                                            |                                   | 
tract                                                         |                                   | 
place                                                         |                                   | 
alaska-native-regional-corporation                            |                                   | 
american-indian-area!alaska-native-area!hawaiian-home-land    |                                   | 
metropolitan-statistical-area!micropolitan-statistical-area   |                                   | 
combined-statistical-area                                     |                                   | 
new-england-city-and-town-area                                |                                   | 
urban-area                                                    |                                   | 
congressional-district                                        |                                   | 
school-district-'elementary'                                  |                                   | 
school-district-'secondary'                                   |                                   | 
school-district-'unified'                                     |                                   | 
place-remainder                                               |                                   | 
block-group                                                   |                                   | 
public-use-microdata-area                                     |                                   | 
zip-code-tabulation-area *or* zipcode                         |                                   | 
state-legislative-district-'upper-chamber'                    |                                   |

Key                                                           | 2013                              | 
------------------------------------------------------------- | :--------------------------------:| 
nation                                                        |                                   | 
region                                                        |                                   | 
division                                                      |                                   | 
state                                                         | st01_d90_shp.zip                  | 
county                                                        |                                   | 
county                                                        |                                   | 
county                                                        |                                   | 
county-subdivision                                            |                                   | 
tract                                                         |                                   | 
place                                                         |                                   | 
alaska-native-regional-corporation                            |                                   | 
american-indian-area!alaska-native-area!hawaiian-home-land    |                                   | 
metropolitan-statistical-area!micropolitan-statistical-area   |                                   | 
combined-statistical-area                                     |                                   | 
new-england-city-and-town-area                                |                                   | 
urban-area                                                    |                                   | 
congressional-district                                        |                                   | 
school-district-'elementary'                                  |                                   | 
school-district-'secondary'                                   |                                   | 
school-district-'unified'                                     |                                   | 
place-remainder                                               |                                   | 
block-group                                                   |                                   | 
public-use-microdata-area                                     |                                   | 
zip-code-tabulation-area *or* zipcode                         |                                   | 
state-legislative-district-'upper-chamber'                    |                                   |

Key                                                           | 2012                              | 
------------------------------------------------------------- | :--------------------------------:| 
nation                                                        |                                   | 
region                                                        |                                   | 
division                                                      |                                   | 
state                                                         | st01_d90_shp.zip                  | 
county                                                        |                                   | 
county                                                        |                                   | 
county                                                        |                                   | 
county-subdivision                                            |                                   | 
tract                                                         |                                   | 
place                                                         |                                   | 
alaska-native-regional-corporation                            |                                   | 
american-indian-area!alaska-native-area!hawaiian-home-land    |                                   | 
metropolitan-statistical-area!micropolitan-statistical-area   |                                   | 
combined-statistical-area                                     |                                   | 
new-england-city-and-town-area                                |                                   | 
urban-area                                                    |                                   | 
congressional-district                                        |                                   | 
school-district-'elementary'                                  |                                   | 
school-district-'secondary'                                   |                                   | 
school-district-'unified'                                     |                                   | 
place-remainder                                               |                                   | 
block-group                                                   |                                   | 
public-use-microdata-area                                     |                                   | 
zip-code-tabulation-area *or* zipcode                         |                                   | 
state-legislative-district-'upper-chamber'                    |                                   |

Key                                                           | 1990                              | 
------------------------------------------------------------- | :--------------------------------:| 
nation                                                        |                                   | 
region                                                        |                                   | 
division                                                      |                                   | 
state                                                         | st01_d90_shp.zip                  | 
county                                                        |                                   | 
county                                                        |                                   | 
county                                                        |                                   | 
county-subdivision                                            |                                   | 
tract                                                         |                                   | 
place                                                         |                                   | 
alaska-native-regional-corporation                            |                                   | 
american-indian-area!alaska-native-area!hawaiian-home-land    |                                   | 
metropolitan-statistical-area!micropolitan-statistical-area   |                                   | 
combined-statistical-area                                     |                                   | 
new-england-city-and-town-area                                |                                   | 
urban-area                                                    |                                   | 
congressional-district                                        |                                   | 
school-district-'elementary'                                  |                                   | 
school-district-'secondary'                                   |                                   | 
school-district-'unified'                                     |                                   | 
place-remainder                                               |                                   | 
block-group                                                   |                                   | 
public-use-microdata-area                                     |                                   | 
zip-code-tabulation-area *or* zipcode                         |                                   | 
state-legislative-district-'upper-chamber'                    |                                   |

Key                                                           | 1990                              | 
------------------------------------------------------------- | :--------------------------------:| 
nation                                                        |                                   | 
region                                                        |                                   | 
division                                                      |                                   | 
state                                                         | st01_d90_shp.zip                  | 
county                                                        |                                   | 
county                                                        |                                   | 
county                                                        |                                   | 
county-subdivision                                            |                                   | 
tract                                                         |                                   | 
place                                                         |                                   | 
alaska-native-regional-corporation                            |                                   | 
american-indian-area!alaska-native-area!hawaiian-home-land    |                                   | 
metropolitan-statistical-area!micropolitan-statistical-area   |                                   | 
combined-statistical-area                                     |                                   | 
new-england-city-and-town-area                                |                                   | 
urban-area                                                    |                                   | 
congressional-district                                        |                                   | 
school-district-'elementary'                                  |                                   | 
school-district-'secondary'                                   |                                   | 
school-district-'unified'                                     |                                   | 
place-remainder                                               |                                   | 
block-group                                                   |                                   | 
public-use-microdata-area                                     |                                   | 
zip-code-tabulation-area *or* zipcode                         |                                   | 
state-legislative-district-'upper-chamber'                    |                                   |

Key                                                           | 1990                              | 
------------------------------------------------------------- | :--------------------------------:| 
nation                                                        |                                   | 
region                                                        |                                   | 
division                                                      |                                   | 
state                                                         | st01_d90_shp.zip                  | 
county                                                        |                                   | 
county                                                        |                                   | 
county                                                        |                                   | 
county-subdivision                                            |                                   | 
tract                                                         |                                   | 
place                                                         |                                   | 
alaska-native-regional-corporation                            |                                   | 
american-indian-area!alaska-native-area!hawaiian-home-land    |                                   | 
metropolitan-statistical-area!micropolitan-statistical-area   |                                   | 
combined-statistical-area                                     |                                   | 
new-england-city-and-town-area                                |                                   | 
urban-area                                                    |                                   | 
congressional-district                                        |                                   | 
school-district-'elementary'                                  |                                   | 
school-district-'secondary'                                   |                                   | 
school-district-'unified'                                     |                                   | 
place-remainder                                               |                                   | 
block-group                                                   |                                   | 
public-use-microdata-area                                     |                                   | 
zip-code-tabulation-area *or* zipcode                         |                                   | 
state-legislative-district-'upper-chamber'                    |                                   |


  
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
