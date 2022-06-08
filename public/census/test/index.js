const census = require("../census.js");

//census(
//  {
//    vintage: 2015, // required
//    geoHierarchy: {
//      // required
//      county: {
//        lat: 28.2639,
//        lng: -80.7214,
//      },
//    },
//  },
//  (err, res) => console.log(res)
//);

//census(
//    {
//        vintage       : 2018,
//        geoHierarchy  : {
//            state  : "27",
//            county : "123",
//        },
//        sourcePath    : [ "acs", "acs1" ],
//        values        : [ "NAME" ],
//        geoResolution : "500k",
//    },
//    (err, res) => console.log(JSON.stringify(res)),
//) //?

//census(
//    {
//        vintage      : 2019,
//        geoHierarchy : {
//            county : { lat: 42.3601, lng: -71.0589 },
//            //"county subdivision" : "07000",
//        },
//        sourcePath   : [ "acs", "acs5" ],
//        values       : [ "group(B15003)" ],
//    },
//    (err, res) => console.log(JSON.stringify(res)),
//) //?

//census(
//  {
//    vintage: "2018",
//    geoHierarchy: {
//      state: {
//        lat: 38.8482,
//        lng: -76.932,
//      },
//      county: "*",
//    },
//    sourcePath: ["acs", "acs5"],
//    values: ["B00001_001E"],
//    geoResolution: "500k",
//  },
//  (err, res) => console.log(res)
//); //?

//census(
//  {
//    vintage: 2018,
//    geoHierarchy: {
//      // required
//      state: {
//        lat: 38.8482,
//        lng: -76.9312,
//      },
//      //  state: "24",
//      //  county: null,
//      county: "*",
//      //  tract: "*",
//    },
//    sourcePath: ["acs", "acs5"],
//    values: ["B01001_001E"],
//    // "statsKey": censusAccessToken,
//    geoResolution: "500k",
//  },
//  (err, res) => console.log(res)
//); //?
/*
"Getting Census FIPS Geocoding data from source:" 
"https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_ACS2018/MapServer/84/query?geometry=-76.9312,38.8482&geometryType=esriGeometryPoint&inSR=4269&spatialRel=esriSpatialRelIntersects&returnGeometry=false&f=pjson&outFields=STATE" 
:stats+geos 
"Getting Census GeoJSON (for merge) data from source:" 
"https://raw.githubusercontent.com/uscensusbureau/citysdk/master/v2/GeoJSON/500k/2018/24/tract.json" 
"Getting Census statistics data from source:" 
"https://api.census.gov/data/2018/acs/acs5?get=B01001_001E&in=state:24&for=tract:*" 
"Merging GeoJSON with Statistics..." 
{ type: 'FeatureCollection', features: [] }

:stats+geos 
"Getting Census GeoJSON (for merge) data from source:" 
"https://raw.githubusercontent.com/uscensusbureau/citysdk/master/v2/GeoJSON/500k/2018/01/tract.json" 
"Getting Census statistics data from source:" 
"https://api.census.gov/data/2018/acs/acs5?get=B01001_001E&in=state:01&for=tract:*" 
"Merging GeoJSON with Statistics..." 
{ type: 'FeatureCollection',
  features: 
   [ { type: 'Feature', geometry: [Object], properties: [Object] },

*/

census(
  {
    vintage: 2020,
    geoHierarchy: {
      // required
      //  state: null,
      //  state: "24",
      county: {
        lat: 38.8482,
        lng: -76.9312,
      },
      //  tract: null,
      //  county: null,
      //  "zip-code-tabulation-area": "*",
      //  "block group": "*",
    },
    //sourcePath: ["pdb", "blockgroup"],
    //values: ["State_name", "County_name"],
    sourcePath: ["acs", "acs5"],
    values: ["B01001_001E", "BOOP"],
    // "statsKey": censusAccessToken,
    //geoResolution: "500k",
  },
  (err, res) => console.log(res /*JSON.stringify(res)*/)
); //?
