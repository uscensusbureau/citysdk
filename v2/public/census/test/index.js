const census = require("../census.js");

// census(
//   {
//     vintage: 2015, // required
//     geoHierarchy: {
//       // required
//       county: {
//         lat: 28.2639,
//         lng: -80.7214
//       }
//     }
//   },
//   (err, res) => console.log(res)
// )

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

census(
  {
    vintage: "2018",
    geoHierarchy: {
      state: {
        lat: 38.8482,
        lng: -76.932,
      },
      county: "*",
    },
    sourcePath: ["acs", "acs5"],
    values: ["B00001_001E"],
    geoResolution: "500k",
  },
  (err, res) => console.log(res)
); //?
