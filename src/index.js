let census = require("census-js");
let mapboxgl = require("mapbox-gl");
let MapboxGeocoder = require("@mapbox/mapbox-gl-geocoder");
let chroma = require("chroma-js");
let _ = require("lodash");

console.log("hello world");

// === CENSUS PREP === //
let isJsonString = function(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

let logger = function(json) {
  document.getElementById("console").innerHTML = `${JSON.stringify(json,null,2)}`;
};

let setAndLog = function(res) {
  if (isJsonString(res)) {
    let json = JSON.parse(res);
    logger(json);
    return json;
  } else {
    logger(res);
    return {};
  }
};

let censusPromise = function(args) {
  console.log("In censusPromise");
  return new Promise(function(resolve, reject) {
    census(args, function(err, json) {
      if (!err) {
        resolve(setAndLog(json));
      } else {
        reject(err);
      }
    });
  });
};

// === TUNE DATA PARAMETERS === //
let center = { lat: 28.2639, lng: -80.7214 };
let values = ["B00001_001E"];
let valueSelection = 0;
let selection = values[valueSelection];
let zoom = 9.0;
let pitch = 45;

// === CENSUS ARGUMENTS === //
let Args = {
  vintage: "2016",
  geoHierarchy: {
    county: center,
    tract: "*"
  },
  sourcePath: ["acs", "acs5"],
  values: values,
  geoResolution: "500k"
};

// === TUNE CHOROPLETH VALUES  === //
let quantiles = 5;
let colorScale = chroma.scale(["#ffffff", "#000000"]).domain([0, 1]);

censusPromise(Args).then(function(res) {
  console.log(res);
});
// census(
//   {
//     vintage: "2015",
//     geoHierarchy: {
//       // state: {
//       //   lat: 28.2639,
//       //   lng: -80.7214
//       // },
//       county: "*"
//     },
//     sourcePath: ["acs", "acs5"],
//     values: ["B00001_001E"],
//     geoResolution: "500k"
//   },
//   (err, res) => console.log(res)
// );

// stats({
//     vintage: 2016,
//     sourcePath: ["acs", "acs5"],
//     values: ['B01003_001E'],
//     geoResolution: "500k",
//     geoHierarchy: { state: "44", county: "*" }
//   },
//   (err, res) => console.log(res))

// stats({
//     vintage: 2016,
//     sourcePath: ["acs", "acs5"],
//     values: ['B25001_001E'],
//     geoResolution: "500k",
//     geoHierarchy: { state: "44", county: "*" }
//   },
//   (err, res) => console.log(res))

// census({
//     vintage: 2016,
//     sourcePath: ["acs", "acs5"],
//     values: ['B25001_001E'],
//     geoResolution: "500k",
//     geoHierarchy: { state: "44", county: "*" }
//   },
//   (err, res) => console.log(res))

// === MAPBOX FUNCTIONS === //

mapboxgl.accessToken = "pk.eyJ1Ijoib3BlbmlkZW8iLCJhIjoiY2pnemR0dmwyMHVhdDJ2bGV1bnl6amJqaiJ9._G3sOFQoJZklpO9pscg1mw";

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/openideo/cj48m1z521vzo2rqws9kwesra",
  center,
  zoom,
  pitch
});
let geocoder = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken
});

map.addControl(geocoder, "top-left");
// placeholder for color scale created in quantileMaker
let scale = [];

let quantileMaker = function(min, max) {
  console.log("In quantileMaker");
  let diff = max - min;
  let bucket = diff / quantiles;
  let dataScale = Array.apply(null, { length: quantiles + 1 })
    .map(Number.prototype.valueOf, 0)
    .map(
      function(val, idx) {
        return idx === 0 ? min : (this.acc += bucket);
      },
      { acc: min }
    );
  let normalScale = dataScale.map(function(val, idx) {
    return idx === 0 ? Math.round((min + 1 / max) * 100) / 100 : val / max;
  });
  let chromaScale = normalScale.map(function(val, idx) {
    return colorScale(val).hex();
  });
  scale = _.zip(dataScale, chromaScale);
};

let getCensusData = async function(args) {
  console.log("In getCensusData");
  // Add the feature source
  let censusGeoJSON = await censusPromise(args);

  // pull out features for color scaling:
  let features = censusGeoJSON.features;
  /* ES6 destructuring if so inclined:
  let { properties: { [selection]: maxVal } } = _.maxBy(features, function (o) {
    return o.properties[selection];
  });
  let { properties: { [selection]: minVal } } = _.minBy(features, function (o) {
    return o.properties[selection];
  });
  */
  let maxStat = _.maxBy(features, function(o) {
    return o.properties[selection];
  });
  let maxVal = maxStat.properties[selection];
  let minStat = _.minBy(features, function(o) {
    return o.properties[selection];
  });
  let minVal = minStat.properties[selection];
  quantileMaker(minVal, maxVal);
  return { data: censusGeoJSON, stops: scale };
  // map.addSource("census", {
  //   type: "geojson",
  //   data: censusGeoJSON
  // });
  // map.addLayer({
  //   id: "stats",
  //   type: "fill",
  //   source: "census",
  //   paint: {
  //     "fill-color": {
  //       property: selection,
  //       stops: scale
  //     },
  //     "fill-outline-color": "#ffffff"
  //   }
  // });
};

// Random ID maker for each rendering to be unique
let makeid = function() {
  console.log("In makeID");
  let text = "";
  let possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
};

map.on("style.load", function() {
  console.log("after style.load");
  geocoder.on("result", function(ev) {
    // console.log(ev.result.geometry.coordinates);
    let sourceUID = makeid();
    let layerUID = makeid();

    let point = {
      lng: ev.result.geometry.coordinates[0],
      lat: ev.result.geometry.coordinates[1]
    };
    let newGeoHierarchy = Args.geoHierarchy;
    _.set(Args, ["geoHierarchy", Object.keys(newGeoHierarchy)[0]], point);
    getCensusData(Args).then(function(res) {
      map.addSource(sourceUID, {
        type: "geojson",
        data: res.data
      });
      map.addLayer({
        id: layerUID,
        type: "fill",
        source: sourceUID,
        paint: {
          "fill-color": {
            property: selection,
            stops: res.stops
          },
          "fill-outline-color": "#ffffff"
        }
      });
    });
  });
});

//   async function() {
//   // Add the feature source
//   let response = await censusPromise(args);
//   let censusGeoJSON = await response;

//   // pull out features for color scaling:
//   let features = censusGeoJSON.features;
/* ES6 destructuring if so inclined:
  let { properties: { [selection]: maxVal } } = _.maxBy(features, function (o) {
    return o.properties[selection];
  });
  let { properties: { [selection]: minVal } } = _.minBy(features, function (o) {
    return o.properties[selection];
  });
  */
//   let maxStat = _.maxBy(features, function(o) {
//     return o.properties[selection];
//   });
//   let maxVal = maxStat.properties[selection];
//   let minStat = _.minBy(features, function(o) {
//     return o.properties[selection];
//   });
//   let minVal = minStat.properties[selection];
//   quantileMaker(maxVal, minVal);

//   map.addSource("census", {
//     type: "geojson",
//     data: censusGeoJSON
//   });
//   map.addLayer({
//     id: "stats",
//     type: "fill",
//     source: "census",
//     paint: {
//       "fill-color": {
//         property: selection,
//         stops: scale
//       },
//       "fill-outline-color": "#ffffff"
//     }
//   });

// TODO: legend: https://www.mapbox.com/help/choropleth-studio-gl-pt-2/
// TODO: https://www.mapbox.com/mapbox-gl-js/example/updating-choropleth/
