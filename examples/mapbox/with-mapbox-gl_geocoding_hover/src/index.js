let census = require("citysdk");
let mapboxgl = require("mapbox-gl");
let MapboxGeocoder = require("@mapbox/mapbox-gl-geocoder");
let chroma = require("chroma-js");
let _ = require("lodash");


// === CENSUS PREP === //
let censusPromise = function(args) {
  return new Promise(function(resolve, reject) {
    census(args, function(err, json) {
      if (!err) {
        // console.log(json);
        resolve(json);
      } else {
        reject(err);
      }
    });
  });
};

// === TUNE DATA PARAMETERS === //
let center = { lat: 30.4213, lng: -87.2169 };
let values = ["B00001_001E","B01001_001E", "B08303_001E"]; // Detailed Tables : unweighted count, estimate-total, travel-time aggregate
// let values = ["DP04_0003PE"]; // Profiles: vacant housing uints %,
let valueSelection = 0;
let selection = values[valueSelection];
let zoom = 9.0;

// === CENSUS ARGUMENTS === //
let Args = {
  "vintage": 2016,
  "geoHierarchy": {
    "county": center,
    "block group": "*"
  },
  "sourcePath": ["acs", "acs5"],
  "values": values,
  "geoResolution": "500k"
};

// === TUNE CHOROPLETH VALUES  === //
let quantiles = 5;
let colorScale = chroma.scale(["#ffffff", "#000000"]).domain([0, 1]);
// let colorScale = chroma.scale('OrRd').domain([0, 1]);
// let colorScale = chroma.scale('PuBu').domain([0, 1]);


// === MAPBOX FUNCTIONS === //

mapboxgl.accessToken =
  "pk.eyJ1Ijoib3BlbmlkZW8iLCJhIjoiY2pnemR0dmwyMHVhdDJ2bGV1bnl6amJqaiJ9._G3sOFQoJZklpO9pscg1mw";

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/openideo/cj48m1z521vzo2rqws9kwesra",
  center,
  zoom,
  // pitch: 60
});
let geocoder = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken
});



map.addControl(geocoder, "top-left");

// manual equidistant quantile calculation:

let quantileMaker = function(min, max) {
  let diff = max - min;
  let bucket = diff / quantiles;
  let dataScale = Array.apply(null, { length: quantiles })
    .map(Number.prototype.valueOf, 0)
    .map(function(val, idx) { return idx === 0 ? min : (this.acc += bucket)},{ acc: min });
  let normalScale = dataScale
    .map(function(val, idx) { return idx === 0 ? Math.round((min + 1 / max) * 100) / 100 : val / max });
  let chromaScale = normalScale.map(function(val) { return colorScale(val).hex() });
  return _.zip(dataScale, chromaScale);
};

let getCensusData = async function(args) {
  let censusGeoJSON = await censusPromise(args);
  let features = censusGeoJSON.features;
  let maxStat = _.maxBy(features, function(o) {
    return o.properties[selection];
  });
  let maxVal = maxStat.properties[selection];
  let minStat = _.minBy(features, function(o) {
    return o.properties[selection];
  });
  let minVal = minStat.properties[selection];
  let scale = quantileMaker(minVal, maxVal);
  return { data: censusGeoJSON, stops: scale };
};


// Random ID maker for each mapbox geocoder-rendered data view to be unique
let makeid = function() {
  let text = "";
  let possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
};

map.on("style.load", function() {
  geocoder.on("result", function(ev) {
    let sourceUID = makeid();
    let layerUID = makeid();
    let point = {
      lng: ev.result.geometry.coordinates[0],
      lat: ev.result.geometry.coordinates[1]
    };
    let newGeoHierarchy = Args.geoHierarchy;
    _.set(Args, ["geoHierarchy", Object.keys(newGeoHierarchy)[0]], point);
    getCensusData(Args).then(function(res) {
      console.table(res.stops);
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
          "fill-outline-color": "#ffffff",
          "fill-opacity": 0.8
        }
      });
      map.on("mousemove", function (e) {
        let features = map.queryRenderedFeatures(e.point, {
          layers: [layerUID]
        });
        document.getElementById('geo-name').innerHTML = "GEOID: " + features[0].properties.GEOID;
        document.getElementById('geo-value').innerHTML = `
          <ul>
            ${values.map(each => `<li>${each}: ${features[0].properties[each]}</li>`).join('')}
          </ul>
        `
      });
    })
  });
});


// TODO: legend: https://www.mapbox.com/help/choropleth-studio-gl-pt-2/
// TODO: https://www.mapbox.com/mapbox-gl-js/example/updating-choropleth/
