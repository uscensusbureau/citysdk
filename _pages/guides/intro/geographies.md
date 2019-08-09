---
title: Geographies
description: Introduction - Geographies
permalink: /guides/intro/3/

layout: guide
sidenav: guides-intro
subnav:
  - text: Querying with Geography
    href: "#querying-with-geography"
  - text: Vintage and Geography
    href: "#vintage-and-geography"
  - text: Hierarchical structure
    href: "#hierarchical-structure"
  - text: Latitude and Longitude
    href: "#latitude-and-longitude"
lightbox: true
---

## Querying with Geography

The last dimension is the geographic entity. You may of noticed the `"geoHierarchy": {states: "*"}` object used in the previous section to get data for all the states. Census data is provided in many other familiar aggregated geographies such as county, ZIP codes, school and congressional districts. Additionally it is also provided in census specific geographies such as tracts, block groups, blocks, metropolitan and tribal areas. These can provide a much finer scales but only available in certain data products or regions.

![]({{ '/assets/images/block.jpg' | relative_url }})
[View all the various Census Geographies using TIGERweb](https://tigerweb.geo.census.gov/tigerweb/)

Census blocks are the smallest geography available and are comparable to city blocks but is only provided in the Decennial Census dataset. To get more recent data you might want to use block groups and tracts which are provide by the ACS 5 years, which contain the aggregate of many blocks. To check if a dataset supports a geography check the "Geography List" in the dataset documentation.

![]({{ '/assets/images/geographies1.png' | relative_url }})
[https://api.census.gov/data/2017/acs/acs5.html](https://api.census.gov/data/2017/acs/acs5.html)

![]({{ '/assets/images/geographies2.png' | relative_url }})
[https://api.census.gov/data/2017/acs/acs5/geography.html](https://api.census.gov/data/2017/acs/acs5/geography.html)

To query for census tracts you might want to do `"geoHierarchy: {:tract": "*"}` Grabbing all the census tracts might be too much data, so instead we can add a filter of only census tracts for state or county, by adding an additional key/value pair to the geoHierarchy object.

```js
// all census tracts for the state of California
{
    "geoHierarchy": {
        "state": "05",
        "tract": "*"
    },
    "values" : ["B00001_001E"],
    "vintage" : 2017,
    "sourcePath" : ["acs","acs5"]
}
```

The state id is the [FIPS code](https://en.wikipedia.org/wiki/Federal_Information_Processing_Standard_state_code#FIPS_state_codes) for California.

## Vintage and Geography

Note that FIPS codes for areas smaller than states can reference different geographies depending on the year, because the census redoes its geographies every year to account for the new sizes or areas. A Vintage from the 2000 for a tract may be different from 2017.

## Hierarchical structure

What if we wanted the population for all the counties in a zipcode? We can try this query...

```js
{
	"geoHierarchy": {
		"zip code tabulation area": 10010,
		"county": "*"
	},
	 "values" : ["B00001_001E"],
	 "vintage" : 2017,
	"sourcePath" : ["acs","acs5"]
}

//result
STATUS: 400: error: unknown/unsupported geography heirarchy
```

The query returns an error with "unknown/unsupported geography hierarchy" because counties don't perfectly fit into zipcodes. To avoid issues with over and under querying for entries Census areas have a hierarchical structure so certain areas nest within others. If you want to filter for a lower areas using a higher level as a filter you must follow the hierarchy structure.

![]({{ '/assets/images/hierarchy.png' | relative_url }})

You can also check the Geography List of your dataset to see the possible hierarchy.

## Latitude and Longitude

It might get complex if we don't know the state id or county id. CitySDK can also take in coordinates instead of FIPS.

For example, if you want to get all the census tracts in Denver County you can use the coordinates "39.736667, -104.989179".

```js
{
    "geoHierarchy": {
        "county": {
            "lat": 39.736667,
            "lng": -104.989179
        },
        "tract": "*"
    },
        "values" : ["B00001_001E"],
        "vintage" : 2017,
        "sourcePath" : ["acs","acs5"]
    }

//result
[
  {
    "B00001_001E": 437,
    "state": "08",
    "county": "031",
    "tract": "000903"
  },
  {
    "B00001_001E": 290,
    "state": "08",
    "county": "031",
    "tract": "001302"
  },
...
]
```

You can also just get only the id for specific tract by including only vintage and hierarchy.

```js
{
   "vintage" : 2017,
    "geoHierarchy": {
	"tract": {
	   "lat": 39.736667,
	    "lng": -104.989179
	}
   }
}


//result
{
  "vintage": "2017",
  "geoHierarchy": {
    "state": "08",
    "county": "031",
    "tract": "002000"
  }
}
```
