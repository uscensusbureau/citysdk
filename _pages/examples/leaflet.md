---
title: Basic Leaflet
description: Example on using CitySDK to create a simple leaflet map with popup
permalink: /examples/leaflet/

layout: post
lightbox: true
---

This example shows how to setup a leaflet map with popup on features when clicked. See the completed example [here]({{ '/examples/live/leaflet-choropleth/' | relative_url }}){:target="\_blank"}.

The data used is the number of Oil and Gas Extraction businesses for counties in Texas, via the (County Business Patterns (CBP) API)['https://www.census.gov/data/developers/data-sets/cbp-nonemp-zbp/cbp-api.html]. The api uses North American Industry Classification System (NAICS), for Oil and Gas Extraction the NAICS is 211.

## Setting up

In the head import libraries and styles. You can download citysdk.js [here]({{ '/assets/citysdk.js' | relative_url }}){:download="citysdk.js"} or build it using browserify.

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css"
/>
<script src="https://unpkg.com/leaflet@1.5.1/dist/leaflet.js"></script>
<script src="./citysdk.js"></script>
```

In the body setup a container with an id of map, with a height and width.

```html
<style>
  #map {
    height: 600px;
    width: 600px;
  }
</style>
<div id="map"></div>
```

In a script tag after the map div, we initialize the map. First by calling `L.map("map")` on the map div id, then running `.setView([31.6623, -99.0306], 6)` to set the center and zoom level. Next we add OpenStreetMap as a base title layer.

```js
var map = L.map("map").setView([31.6623, -99.0306], 6);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
```

## Query and add data

We use CitySDK to query for the geojson and values. Then add the layer by calling `L.geojson().addTo()` and passing in the response as a CitySDK callback.

```js
census(
  {
    vintage: 2016,
    geoHierarchy: {
      state: 48,
      county: "*"
    },
    geoResolution: "500k",
    sourcePath: ["cbp"],
    predicates: {
      NAICS2012: 211 // NAICS code for Oil and Gas Extraction
    },
    values: ["ESTAB"] // number of establishments
  },
  function(error, response) {
    L.geoJson(response).addTo(map);
  }
);
```

![Leaflet map - GeoJSON Layer with the counties of Texas]({{ '/assets/images/examples/example-leaflet-1.png' | relative_url }})

## Adding popup

To add a popup when a county is clicked we modify the L.geoJson function with an additional object as an argument. This object contains a key of onEachFeature, and a value of a function that will be run on each feature to bind a popup when clicked. The contents of the popup will the feature properties which contains the name of county and number of establishments.

```js
L.geoJson(response, {
  onEachFeature: function(feature, layer) {
    layer.bindPopup(
      "<h2>" +
        feature.properties.NAME +
        "</h2><p># of Oil and Gas Extraction businesses: " +
        feature.properties.ESTAB +
        "</p>"
    );
  }
}).addTo(map);
```

![Leaflet map with a popup open, showing number of Oil and Gas Extraction businesses: 51 in Nueces County]({{ '/assets/images/examples/example-leaflet-2.png' | relative_url }})
