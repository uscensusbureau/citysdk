---
title: Mapbox dynamic loading
description: Mapbox dynamic loading example using CitySDK
permalink: /examples/mapbox-dynamic/

layout: post
---

This example shows how to setup a choropleth map using mapbox with dynamic loading. The data used is the unweighted count, estimate-total, and travel-time aggregate values for all block groups in a county. By dynamic loading for only a single county, it avoids pulling large amounts of data and crashing the browser. See the completed example [here](https://uscensusbureau.github.io/citysdk/examples/mapbox/with-mapbox-gl_geocoding_hover/index.html){:target="\_blank"} and source code [here](https://github.com/loganpowell/census-js-examples/blob/master/mapbox/with-mapbox-gl_geocoding_hover/src/index.js){:target="\_blank"}

![Example of citysdk being used dynamically in mapbox]({{ '/assets/images/examples/example-mapbox-dyamnic-loading.png' | relative_url }})

When the geocoder (address search) result is processed it return an event with a latlng point. From that a point it will query CitySDK for GeoJSON data and add it to the map using the styles generated.

```js
geocoder.on("result", function(ev) {
  let sourceUID = makeid(); // random characters
  let layerUID = makeid();
  let point = {
    lng: ev.result.geometry.coordinates[0],
    lat: ev.result.geometry.coordinates[1]
  };

  let Args = {
    vintage: 2016,
    geoHierarchy: {
      county: point,
      "block group": "*"
    },
    sourcePath: ["acs", "acs5"],
    values: ["B00001_001E", "B01001_001E", "B08303_001E"],
    geoResolution: "500k"
  };
  // using census promise
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
        "fill-outline-color": "#ffffff",
        "fill-opacity": 0.8
      }
    });
  });
});
```
