let census = require("census-js");
let mapboxgl = require("mapbox-gl");
let chroma = require("chroma-js");
let _ = require("lodash");

// === TUNE DATA PARAMETERS === //
let center = { lat: 37.0902, lng: -95.7129 };
let values = ["B19083_001E"];
let valueSelection = 0;
let selection = values[valueSelection];
let zoom = 4;


// === TUNE CHOROPLETH VALUES  === //
let quantiles = 5;
// let colorScale = chroma.scale(["#ffffff", "#000000"]).domain([0, 1]);
// let colorScale = chroma.scale('OrRd').domain([0, 1]);
let colorScale = chroma.scale('PuBu').domain([0, 1]);


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


let scale = [];

let quantileMaker = function(min, max) {
  let diff = max - min;
  let bucket = diff / quantiles;
  let dataScale = Array.apply(null, { length: quantiles + 1 })
    .map(Number.prototype.valueOf, 0)
    .map(function(val, idx) { return idx === 0 ? min : (this.acc += bucket)},{ acc: min });
  let chromaScale = dataScale.map(function(val) { return colorScale(val).hex() });
  scale = _.zip(dataScale, chromaScale);
};

let getCensusData = async function(url) {
  let response = await fetch(url);
  let censusGeoJSON = await response.json();
  console.log(url)
  let features = censusGeoJSON.features;
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
};


const ZCTA_URL = "https://raw.githubusercontent.com/loganpowell/census-js-examples/master/data/ZCTAs-acs-acs5-B19083_001E-GINI.json"


map.on("style.load", function() {
  getCensusData(ZCTA_URL).then(function(res) {
    map.addSource("Census ZCTAs GINI", {
      type: "geojson",
      data: res.data
    });
    map.addLayer({
      id: "ZCTAs",
      type: "fill",
      source: "Census ZCTAs GINI",
      paint: {
        "fill-color": {
          property: selection,
          stops: res.stops
        },
        "fill-outline-color": "#ffffff",
        "fill-opacity": 0.5
      }
    });
  })
});


// TODO: legend: https://www.mapbox.com/help/choropleth-studio-gl-pt-2/
// TODO: https://www.mapbox.com/mapbox-gl-js/example/updating-choropleth/
