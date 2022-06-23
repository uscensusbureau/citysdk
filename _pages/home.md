---
title: Home
permalink: /

layout: home
---

This site provides documentation, examples, and guides focused on using the Census Data API in frontend and backend Javascript applications by unitizing CitySDK, which streamlines, and enhances the usability and access to the data.

[NPM page](https://www.npmjs.com/package/citysdk)

### Browser Quick start
You can download citysdk.js [here]({{ '/assets/citysdk.js' | relative_url }}){:download="citysdk.js"} or build it using browserify.

```html
<script src="./citysdk.js"></script>
<script>
//Web developers in the US 2017
census(
  {
  vintage: '2017',
  geoHierarchy: {
    us: '*',
  },
  sourcePath: ['acs','acs5',],
  values: ['B24121_065E'],
  }
  (err, res) => console.log(res) // [{"B24121_065E": 62792,"us": "1"}]
)
</script>
```

### Node.js quick start

`npm install citysdk`

```js
const census = require("citysdk")

//get the ACS5 2017 population for all counties in the California
census(
  {
    vintage: '2017',
    geoHierarchy: {
      state: "06",
      county: '*',
    },
    sourcePath: ['acs','acs5'],
    values: ['B00001_001E'],
  },
  (err, res) => console.log(res) // [{"B00001_001E": 889,"state": "06","county": "049"}, ...
)
```

## Sections

### [Interactive Example]({{ '/docs/try/' | relative_url }})

![Try it section]({{ '/assets/images/tryit.png' | relative_url }})

### [Documentation]({{ '/docs/' | relative_url }})

The documentation section contains quick API reference, section to [try out]({{ '/docs/try/' | relative_url }}) CitySDK, and frequency asked questions.

For the main Census API Docs [click here](https://www.census.gov/data/developers/about.html).

### [Guides]({{ '/guides/' | relative_url }})

The guides section contains quick start guides to start developing using CitySDK.

### [Examples]({{ '/examples/' | relative_url }})

The examples section contains examples built with CitySDK and various other javascript libraries.

Few examples:

- [Leaflet]({{ '/examples/leaflet/' | relative_url }})
  ![Example of a map using leaflet with a popup]({{ '/assets/images/examples/example-leaflet.png' | relative_url }})

- [Mapbox choropleth map using Census vector tiles]({{ '/examples/mapbox-choropleth/' | relative_url }})
  ![Example of a choropleth map using mapbox and census vector tile server]({{ '/assets/images/examples/example-mapbox-choropleth.png' | relative_url }})

- [D3.js Line Chart]({{ '/examples/d3-line-chart/' | relative_url }})
  ![Example of a line chart using D3.js]({{ '/assets/images/examples/example-d3-line-chart.png' | relative_url }})

### [Community]({{ '/community/' | relative_url }})

The community section contains links to community resources such as contacts and help channels, other community libraries, and showcases to applications and tools built with the Census Data API.
