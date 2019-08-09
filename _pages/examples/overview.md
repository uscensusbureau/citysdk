---
title: Examples
description: Examples on using CitySDK and Census Data with various libraries such as leaflet and mapbox.
permalink: /examples/

layout: post
sidenav: examples
subnav:
  - text: Leaflet Examples
    href: "#leaflet"
  - text: Mapbox Examples
    href: "#mapbox"
  - text: D3.js Examples
    href: "#d3js"
  - text: Quick Reference Examples
    href: "#quick-reference-examples"
  - text: Saving the file locally
    href: "#saving-the-file-locally-in-nodejs-using-fs"
  - text: Getting all counties
    href: "#getting-all-counties"
lightbox: true
---

### Leaflet

- [Leaflet with popup]({{ '/examples/leaflet/' | relative_url }})
  ![Example of a map using leaflet with a popup]({{ '/assets/images/examples/example-leaflet.png' | relative_url }})

- [Leaflet choropleth map]({{ '/examples/leaflet-choropleth/' | relative_url }})
  ![Example of a choropleth map using leaflet]({{ '/assets/images/examples/example-leaflet-choropleth.png' | relative_url }})

### Mapbox

- [Mapbox choropleth map]({{ '/examples/mapbox-choropleth/' | relative_url }})
  ![Example of a choropleth map using mapbox]({{ '/assets/images/examples/example-mapbox-choropleth.png' | relative_url }})
- [Mapbox dynamic loading]({{ '/examples/mapbox-dynamic/' | relative_url }})
  ![Example of citysdk being used dynamically in mapbox]({{ '/assets/images/examples/example-mapbox-dyamnic-loading.png' | relative_url }})

### D3.js

- [D3.js Line Chart]({{ '/examples/d3-line-chart/' | relative_url }})
  ![Example of a line chart using D3.js]({{ '/assets/images/examples/example-d3-line-chart.png' | relative_url }})

## Quick Reference Examples

### Getting all counties

```js
census({
  vintage: "2017",
  geoHierarchy: {
    county: "*"
  },
  sourcePath: ["acs", "acs5"],
  values: ["B19083_001E"], // GINI index
  statsKey: "<your key here>",
  geoResolution: "500k"
});
```

### Saving the file locally in Node.js using [`fs`]

```js
var fs = require("fs");

census(
  {
    vintage: 2017,
    geoHierarchy: {
      "metropolitan statistical area/micropolitan statistical area": "*"
    },
    geoResolution: "500k" // required
  },
  (err, res) => {
    fs.writeFile("./directory/filename.json", JSON.stringify(res), () =>
      console.log("done")
    );
  }
);
```

[`fs`]: https://nodejs.org/api/fs.html

This would convert the returned geojson to a string, which allows it to be saved via Node.js' fileSystem API.
