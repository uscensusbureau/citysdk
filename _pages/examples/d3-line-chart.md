---
title: Line Chart with D3js
description: Example on setting up a D3js line chart and CitySDK to display change by month in Agriculture/ Crop Production exports via air and shipping for the US.
permalink: /examples/d3-line-chart/

layout: post
lightbox: true
---

This example shows how to setup line chart using D3.js See the completed example [here]({{ '/examples/live/d3-line-chart/' | relative_url }}){:target="\_blank"}. Adapted from [Gord Lea’s Block](https://bl.ocks.org/gordlea/27370d1eea8464b04538e6d8ced39e89){:target="\_blank"}.

![Example of a line chart using D3.js]({{ '/assets/images/examples/example-d3-line-chart-3.png' | relative_url }})

The data used is from the [Time Series International Trade: Monthly U.S. Exports by North American Industry Classification System (NAICS) Code](https://api.census.gov/data/timeseries/intltrade/exports/naics.html){:target="\_blank"} dataset, using the columns for 15-digit Air Shipping Weight, Vessel Shipping Weight, and Containerized Vessel Shipping Weight.

We will use NAICS Code 111 or Crop Production, to see the effects of seasons on the crop exports of the US. See other NAICS Codes [here](https://www.census.gov/cgi-bin/sssd/naics/naicsrch?chart_code=11&search=2012%20NAICS%20Search){:target="\_blank"}

## Setting up

In the head import libraries and styles. You can download citysdk.js [here]({{ '/assets/citysdk.js' | relative_url }}){:download="citysdk.js"} or build it using browserify.

```html
<script src="https://d3js.org/d3.v5.min.js"></script>
<script src="{{ '/assets/citysdk.js' | relative_url }}"></script>
```

In the body add a svg element with an id of chart

```html
<svg id="chart"></svg>
```

## Query data using promises

Currently the Census Data API does not support multiple times as a parameter so we have to build a query each of the different months and years we want.

```js
//Example query for Jan 2013, the earliest month for this datset
{
    vintage: "timeseries",
    sourcePath: ["intltrade", "exports", "naics"],
    values: ["AIR_WGT_MO", "CNT_WGT_MO", "VES_WGT_MO"],
    predicates: { time: "2013-01", NAICS: "111" },
}

```

If we use the default CitySDK query we would have to nest callbacks within each other. This will cause messy and slow code (callback hell), instead we can use promises which can be queried simultaneously via the `Promise.all` function and get the output in one responses array.

We setup the census promise query with the following snippet.

```js
function censusPromise(args) {
  return new Promise(function(resolve, reject) {
    census(args, function(err, json) {
      if (!err) {
        resolve(json);
      } else {
        reject(err);
      }
    });
  });
}
```

Then to setup the time variable for the query (2013-01 or YYYY-DD) we can use array generators and map functions rather than manually typing out all the times.

```js
//["2015", "2016", "2017", "2018", "2019"]
const years = Array(5)
  .fill()
  .map((_, i) => (i + 2015).toString());

//["01","02"...]
const months = Array(12)
  .fill()
  .map((_, i) => (i + 1).toString().padStart(2, "0"));

//["2015-01","2015-02"...]
const times = [];
years.forEach(year => {
  months.forEach(month => times.push(`${year}-${month}`));
});
```

We can then generate the promises in an array and use Promise.all to query all the times.

Note that a `.then(response => response[0])` is added to the end of the each censusPromise to get the nested data rather than an array with the one data object.

```js
const timesQueries = times.map(time => {
  return censusPromise({
    vintage: "timeseries",
    sourcePath: ["intltrade", "exports", "naics"],
    values: ["AIR_WGT_MO", "CNT_WGT_MO", "VES_WGT_MO"],
    predicates: { time: time, NAICS: "111" },
    statsKey: "3c04140849164b373c8b1da7d7cc8123ef71b7ab"
  }).then(response => response[0]); //get first array
});
Promise.all(timesQueries).then(responses => {
  console.log(responses);
  //[
  //    {AIR_WGT_MO: 8972541, CNT_WGT_MO: 1138572445, VES_WGT_MO: 12638056922, time: "2015-01", NAICS: 111},
  //    {AIR_WGT_MO: 8672703, CNT_WGT_MO: 1238855849, VES_WGT_MO: 11479577166, time: "2015-02", NAICS: 111},
  //...
  //]
});
```

Some times there are missing rows that lead to errors. To avoid that we need to make the data consistent by adding filter function to remove if rows with null returns. Inside the Promise.all function put the following filter function.

```js
const data = responses.filter(response => !!response);
```

## Setting up D3.js

D3.js provides many functions to properly resize our data to fit into a chart and the webpage. Let's setup the axis, scale, and line functions to do so. In the Promise.all function after the filter...

Setup the margin, width and height variables.

```js
const margin = { top: 50, right: 50, bottom: 50, left: 100 },
  width = window.innerWidth - margin.left - margin.right, // Use the window's width
  height = window.innerHeight - margin.top - margin.bottom; // Use the window's height
```

The x scale domain will be the time ranges of the data (2015-01, 2019-12). The dateFormat function converts string to datetime so it can be processed. The y scale domain will be min and max values from our weight exported. Since we are handling three types (air, vessel, and container vessel) we have to get the min and max of the three. The scale functions will then scale the values to a coordinate on the webpage using the domain we processed height (y) and width (x).

```js
const dateFormat = d3.timeParse("%Y-%m");
const xScale = d3
  .scaleTime()
  .domain(d3.extent(data, d => dateFormat(d.time)))
  .range([0, width]);
const yScale = d3
  .scaleLinear()
  .domain([
    d3.min(data, d => d3.min([d.AIR_WGT_MO, d.CNT_WGT_MO, d.VES_WGT_MO])),
    d3.max(data, d => d3.max([d.AIR_WGT_MO, d.CNT_WGT_MO, d.VES_WGT_MO]))
  ])
  .range([height, 0]);
```

Next we pass make a generator function, that will take an object with the time and value and scale them to point on the line.

```js
const line = d3
  .line()
  .x(d => xScale(d.time)) // set the x values for the line generator
  .y(d => yScale(d.value)) // set the y values for the line generator
  .curve(d3.curveMonotoneX); // apply smoothing to the line
```

We can now setup the base of the line chart and its axis

![Axis for the line chart]({{ '/assets/images/examples/example-d3-line-chart-1.png' | relative_url }})

```js
//setup svg
const svg = d3
  .select("#chart")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//setup x and y axis
svg
  .append("g")
  .attr("class", "x axis")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(xScale));

svg
  .append("g")
  .attr("class", "y axis")
  .call(d3.axisLeft(yScale));
```

Then to add the lines for each type, we iterating and format the data so it can use the line generator function (time and value). We also create a colors object to pull the hex colors and name from.

```js
const colors = {
  AIR_WGT_MO: {
    hex: "#00AFE5",
    name: "Air"
  },
  VES_WGT_MO: {
    hex: "#E5DA00",
    name: "Vessel"
  },
  CNT_WGT_MO: {
    hex: "#DC0023",
    name: "Containerized Vessel"
  }
};

["AIR_WGT_MO", "VES_WGT_MO", "CNT_WGT_MO"].forEach(type => {
  const values = data.map(d => {
    return {
      value: d[type],
      time: dateFormat(d.time)
    };
  });

  svg
    .append("path")
    .datum(values)
    .attr("class", "line")
    .attr("d", line)
    .attr("stroke", colors[type].hex);
});
```

We add a legend by iterating the colors object and appending text and circle.

![Legend]({{ '/assets/images/examples/example-d3-line-chart-2.png' | relative_url }})

```js
const legend = svg
  .append("g")
  .attr("class", "legend")
  .attr("transform", `translate(50, 10)`)
  .style("font-size", "12px");

Object.keys(colors).forEach((color, i) => {
  legend
    .append("text")
    .attr("y", `${i}em`)
    .attr("x", "1em")
    .text(colors[color].name);

  legend
    .append("circle")
    .attr("cy", `${i - 0.25}em`)
    .attr("cx", 0)
    .attr("r", "0.4em")
    .attr("fill", colors[color].hex);
});
```

Lastly we add style tag to remove the default page margin and line fill.

```html
<style>
  html,
  body {
    margin: 0;
  }

  .line {
    fill: none;
    stroke-width: 3;
  }
</style>
```

The final output will look like this.
![Example of a line chart using D3.js]({{ '/assets/images/examples/example-d3-line-chart-3.png' | relative_url }})

## Additional Notes

### NAICS codes

Some NAICS codes 4 to 6 digits (e.g. 5223, 236118) may not return any data due to having a only a few business classified under the code. This is to protect an individual business from being identified.

### Exports by State

There also contains a dataset [Monthly U.S. Exports by State and North American Industry Classification System (NAICS)](https://api.census.gov/data/timeseries/intltrade/exports/statenaics.html){:target="\_blank"}

Instead of using geoHierarchy, add an additional predicate for the US Postal Service State Abbreviations. (e.g. MD, VA, WA).

Here is an example query.

```js
{
    "vintage": "timeseries",
    "sourcePath": [
        "intltrade",
        "exports",
        "statenaics"
    ],
    "values": ["AIR_WGT_MO","CNT_WGT_MO","VES_WGT_MO"],
    "predicates":
    {
        "time": "2015-03",
        "NAICS": "212",
        "STATE": "MD"
    }
}
```

Also note that some more general (1-3 digits) NAICS codes might not return because it would be easier to identify an individual business in a smaller area.
