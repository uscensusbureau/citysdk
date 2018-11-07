  
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

https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_ACS2016/MapServer/10/query?geometry=-87.240372%2C30.433283&geometryType=esriGeometryPoint&inSR=4269&spatialRel=esriSpatialRelIntersects&outFields=*&returnGeometry=false&f=pjson

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

# AFF API

[link](https://factfinder.census.gov/service/Overview.html)