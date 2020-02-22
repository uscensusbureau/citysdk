const census = require("../census.js")

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

census(
  {
    vintage: 2018,
    geoHierarchy: {
      state: "27",
      county: "123"
    },
    sourcePath: ["acs", "acs1"],
    values: ["GEOCOMP"],
    geoResolution: "500k"
  },
  (err, res) => console.log(JSON.stringify(res))
)
