---
title: Getting Started
description: Introduction - Getting Started
permalink: /guides/intro/1/

layout: guide
sidenav: guides-intro
lightbox: true
---

To use CitySDK include the script in your page's head. Download citysdk.js [here]({{ '/assets/citysdk.js' | relative_url }}){:download="citysdk.js"}.

```html
<script src="./citysdk.js"></script>
```

Alternatively you can install CitySDK via NPM, and then import it

```bash
npm install citysdk
```

```javascript
const census = require("citysdk");
```

If you would like to just run small queries, you can use the [try it out app]({{ '/docs/try/' | relative_url }})

---

To call CitySDK you need to use census function, with the first argument being the object query, and second a callback function with the return error and response (result).

```js
census(
  {
    vintage: "2017",
    geoHierarchy: {
      tract: {
        lat: 41.878787,
        lng: -87.63588
      }
    }
  },
  function(error, response) {
    console.log(response);
    //result
    // {
    // "vintage": "2017",
    // "geoHierarchy": {
    //     "state": "17",
    //     "county": "031",
    //     "tract": "839100"
    // }
    // }
  }
);
```
