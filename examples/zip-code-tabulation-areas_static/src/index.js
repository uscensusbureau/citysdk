let mapboxgl = require("mapbox-gl");
let chroma = require("chroma-js");
let _ = require("lodash");

// === TUNE DATA PARAMETERS === //
let values = ["B19083_001E"];
let valueSelection = 0;
let selection = values[valueSelection];

// === TUNE CHOROPLETH VALUES  === //
let quantiles = 4;
let colorScale = chroma.scale('RdBu').domain([1, 0]);
// let colorScale = chroma.scale('OrRd').domain([0, 1]);
// let colorScale = chroma.scale('PuBu').domain([0, 1]);


// === MAPBOX FUNCTIONS === //

mapboxgl.accessToken =
  "pk.eyJ1Ijoib3BlbmlkZW8iLCJhIjoiY2pnemR0dmwyMHVhdDJ2bGV1bnl6amJqaiJ9._G3sOFQoJZklpO9pscg1mw";

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/openideo/cj48m1z521vzo2rqws9kwesra",
  center: { lat: 37.0902, lng: -95.7129 },
  zoom: 3,
  pitch: 0
});


let quantileMaker = function(min, max) {
  let diff = max - min;
  let bucket = diff / quantiles;
  let dataScale = Array.apply(null, { length: quantiles + 1 })
    .map(Number.prototype.valueOf, 0)
    .map(function(val, idx) { return idx === 0 ? min : (this.acc += bucket)},{ acc: min });
  let chromaScale = dataScale.map(function(val) { return colorScale(val).hex() });
  return _.zip(dataScale, chromaScale);
};

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let getCensusData = async function(url) {
  let response = await fetch(url);
  let json = await response.json()
  let censusGeoJSON = JSON.parse(json);
  let scale = quantileMaker(0, 1)
  return { data: censusGeoJSON, stops: scale };
};

// ZCTAS
const DATA_URL = "https://raw.githubusercontent.com/loganpowell/census-js-examples/master/data/ZCTAs-acs-acs5-B19083_001E-GINI.json"
// COUNTIES
// const DATA_URL = "https://raw.githubusercontent.com/loganpowell/census-js-examples/master/data/county-acs-acs5-B19083_001E.json"

map.on("style.load", async function() {
  getCensusData(DATA_URL).then(function(result){
    let data = result.data;
    let stops = result.stops;
    console.log("stops: " + stops)
    map.addSource("census-gini", {
      type: "geojson",
      data: data,
    });
    map.addLayer({
      id: "zctas",
      type: "fill",
      source: "census-gini",
      paint: {
        "fill-color": {
          property: selection,
          stops: stops
        },
        // "fill-outline-color": "#f7f7f7",
        // "fill-opacity": 0.8
      }
    });
  });
});


// TODO: legend: https://www.mapbox.com/help/choropleth-studio-gl-pt-2/
// TODO: https://www.mapbox.com/mapbox-gl-js/example/updating-choropleth/
