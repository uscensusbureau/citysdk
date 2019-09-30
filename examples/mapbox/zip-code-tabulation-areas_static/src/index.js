let mapboxgl = require("mapbox-gl");
let chroma = require("chroma-js");
let _ = require("lodash");

// === TUNE DATA PARAMETERS === //
let values = ["B19083_001E"];
let valueSelection = 0;
let selection = values[valueSelection];

// === TUNE CHOROPLETH VALUES  === //
let quantiles = 5;
// let colorScale = chroma.scale('RdBu').domain([1, 0]);
// let colorScale = chroma.scale('OrRd').domain([0, 1]);
// let colorScale = chroma.scale('PuBu').domain([0, 1]);
/*
To create some merged stats+geojson:
in terminal:

node --max-old-space-size=4096

let census = require("census-js")

census({
  "vintage": 2016,
  "geoHierarchy": {"zip code tabulation area": "*"},
  "geoResolution": "500k",
  "values": ["B00001_001E", "B01001_001E", "B08303_001E", "B19083_001E"],
  "sourcePath": ["acs", "acs5"]
}, (err, data) => {
  fs.writeFileSync("./zctas.json", JSON.stringify(data))
})

*/

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


let quantileMaker = function(vec) {
  let dataScale = chroma.limits(vec, 'q', quantiles);
  let colorScale =
    chroma.scale(['white', 'black'])
    .padding([dataScale[1]*-1-1, dataScale[dataScale.length -1]*-1-1])
  let chromaScale = dataScale.map(function(val) { return colorScale(val).hex() });
  return _.zip(dataScale, chromaScale);
};

/* Actual scale:
let scale  = [[-666666666, rgba(250, 250, 250, 0.0)],
              [0.363, #ffffff],
              [0.400, #BDBDBD],
              [0.429, #757575],
              [0.466, #424242],
              [0.848, #212121]];
 */

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let getCensusData = async function(url) {
  let response = await fetch(url);
  let json = await response.json()
  let censusGeoJSON = JSON.parse(json);
  let dataVec = censusGeoJSON.features.map(function(feature){
    return feature.properties[selection]
  });
  let scale = quantileMaker(dataVec);
  return { data: censusGeoJSON, stops: scale };
};

// ZCTAS
const DATA_URL = "https://raw.githubusercontent.com/loganpowell/census-js-examples/master/data/ZCTAs-acs-acs5-B19083_001E-GINI.json"
// COUNTIES
// const DATA_URL = "https://raw.githubusercontent.com/loganpowell/census-js-examples/master/data/county-acs-acs5-B19083_001E.json"

const US_URL = "https://raw.githubusercontent.com/loganpowell/census-geojson/master/GeoJSON/20m/2017/state.json"

map.on("style.load", async function() {
  getCensusData(DATA_URL).then(async function(result){
    let data = result.data;
    let stops = result.stops;
    let ustr = await fetch(US_URL)
    let us = await ustr.json()
    console.table(stops)
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
        "fill-opacity": 0.8
      }
    });
    map.addLayer({
      id: "us",
      type: "line",
      source: {
        type: "geojson",
        data: us
      },
      layout: {
        "line-join": "round",
        "line-cap": "round"
      },
      paint: {
        "line-color": "#ffffff",
        "line-width": 1
      }
    })
  });
});


// TODO: legend: https://www.mapbox.com/help/choropleth-studio-gl-pt-2/
// TODO: https://www.mapbox.com/mapbox-gl-js/example/updating-choropleth/
