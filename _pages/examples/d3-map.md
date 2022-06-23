---
title: Maps with D3js
description: Example on setting up a D3js map and CitySDK to toggle between state and county data.
permalink: /examples/d3-map/

layout: post
lightbox: true
---

This example shows how to setup map using D3.js and topojson. See the completed example [here]({{ '/examples/live/d3-map/' | relative_url }}){:target="\_blank"}.

Alternately you can use the geojson provided by CitySDK for smaller queries. View a quick example in the [additional notes below](#using-geojson)

![Example of a map using D3.js]({{ '/assets/images/examples/example-d3-map.png' | relative_url }})

---

to add...

---

## Additional Notes

### Using GeoJSON

[bl.ocks]({{ 'https://bl.ocks.org/zhik/5e9d2c28113d29cfcd27e31ad122c576' }}){:target="\_blank"}

```js
//setup width, height, and svg
const width = 800,
  height = 600;
const map = d3
  .select("svg")
  .attr("width", width)
  .attr("height", height);

//projection
const projection = d3
  .geoAlbersUsa()
  .scale(width)
  .translate([width / 2, height / 2]);
const path = d3.geoPath(projection);

//call data
censusPromise({
  vintage: 2019,
  geoHierarchy: {
    county: "*"
  },
  sourcePath: ["acs", "acs5"],
  values: ["B17001_001E", "B17001_002E"],
  geoResolution: "20m"
}).then(data => {
  //generate color scale
  const extent = d3.extent(
    data.features.map(
      d => d.properties["B17001_002E"] / d.properties["B17001_001E"]
    )
  );
  const colorScale = d3
    .scaleQuantile()
    .domain(extent)
    .range(d3.schemeBlues[7]);

  //generate map
  map
    .append("g")
    .selectAll("path")
    .data(data.features)
    .enter()
    .append("path")
    .attr("d", path)
    .attr("fill", d => {
      return colorScale(
        d.properties["B17001_002E"] / d.properties["B17001_001E"]
      );
    });
});
```
