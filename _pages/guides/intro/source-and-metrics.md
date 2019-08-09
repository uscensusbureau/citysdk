---
title: Source and metrics
description: Introduction - Source and metrics
permalink: /guides/intro/2/

layout: guide
sidenav: guides-intro
subnav:
  - text: Dimensions
    href: "#dimensions"
  - text: Example
    href: "#example"
  - text: Additional Example
    href: "#additional-example"
lightbox: true
---

## Dimensions

To first get data from the Census Data API we have to gather these three dimensions.

- A source - what survey, and year do we want (e.g., ACS 2015 5-year estimate)
- A metric - what column we want to get the data for (e.g. population density)
- A geographic entity - (e.g state, county, census tract, census block)

The dimensions are then put as the different keys in the following object that is passed into CitySDK.

```js
{
    "sourcePath" : ["acs","acs1"],  // source (survey, ACS 1-year estimate)
    "vintage" : 2017,               // source (year, 2017)
    "values" : ["B00001_001E"],     // metric (column for population count)
    "geoHierarchy" : {              // geographic entity (grouped by state)
      "state" : "*"
    }
}
```

The query will return the population count from ACS 2017 1-year estimate for all states.

Each dataset provides information for different topics, years, and at different levels of geography (national, state, county, block levels).

We will focus on the the American Community Survey (ACS) because of its wide variarty of population questions and frequent surveys.

You can also discover sources and metrics using the search feature in [data.census.gov](http://data.census.gov/). If you need help trying to find a specific data set see the [Community Page](https://zhecensus.github.io/api-docs/community/), we have helpful a community that will be happy to assist you.

## Example

For the first example we will get the population of the all the States. At [data.census.gov](http://data.census.gov/) click on the **Population** under the **Subjects** heading on the main page. You can see the various tables that have population information, select the first one “Total Population in United States”

![Figure of the data.census.gov website with all search results of the "Population" term]({{ '/assets/images/source-metrics1.png' | relative_url }})

It will bring you to this window where you can look at the table in detail. Take a note of the following.

- **Survey/Program:** ACS
- **Year:** 2017
- **Estimate:** 1-year
- **TableID:** DP05

This will help you find the specific column ids needed for the query. For this example we will get the total population, male and female population columns.

![Table of ACS Demographic and Housing Estimates, with the Survey/program, Year, Estimate, TableID underlined in red]({{ '/assets/images/source-metrics2.png' | relative_url }})

1.Locate the Source on https://www.census.gov/data/developers/data-sets.html , using the Survey/Program ID, Year, and Estimate.

![Available APIs page, with American Community Survey 1-Year Data(2011-2017) underlined in red]({{ '/assets/images/source-metrics3.png' | relative_url }})

2.Select the year 2017

![APIs page for the American Community Survey 1-Year Data zoomed into the years navbar]({{ '/assets/images/source-metrics4.png' | relative_url }})

3.Select the specific profile, which is the prefix of the table id (DP). Note each profile has different prefixes look at the example or you can reference [Notes on ACS API Variable Formats](https://www.census.gov/data/developers/data-sets/acs-1year/notes-on-acs-api-variable-formats.html).

![Data Profile section of the page, with DP02 underlined relating profile prefix we are looking for]({{ '/assets/images/source-metrics5.png' | relative_url }})

4.Click "html" for the 2017 ACS DAta Profiles Variables. Then find columns by searching the page (Ctrl + F) for your Tableid (DP05)

![2017 ACS Data Profiles Variables with a search term of DP05]({{ '/assets/images/source-metrics6.png' | relative_url }})

We found them!! Now copy the column names (DP05_0001E, DP05_0002E, DP05_0003E) and the url.

![The url of the variables page]({{ '/assets/images/source-metrics7.png' | relative_url }})

### Constructing the Query

Following the template of a query we can fill in the following.

```js
{
  "sourcePath" : [""] // source (survey)
  "vintage" : // source (year)
  "values" : [],   // metric (columns)
  "geoHierarchy" : {  // geographic entity (grouped by state)
    "state" : "*"
    }
}
```

We can find sourcePath and vintage by breaking down the url. The sourcePath is an array of the path.

> https://api.census.gov/data/2017/acs/acs1/profile/variables.html

```js
{
    "sourcePath" : ["acs","acs1","profile"],  // source (survey, ACS 1-year profile estimate)
    "vintage" : 2017,               // source (year, 2017)
}
```

Add you the column names in array, add "NAME" column too

```js
{
    "sourcePath" : ["acs","acs1","profile"],
    "vintage" : 2017,
    "values" : ["NAME","DP05_0001E","DP05_0002E", "DP05_0003E"], // metric (column for total count, male, and female popluation)
}
```

after your query is done, you will get this.

```js
{
    "sourcePath" : ["acs","acs1","profile"],  // source (survey, ACS 1-year profile estimate)
    "vintage" : 2017,               // source (year, 2017)
    "values" : ["NAME","DP05_0001E","DP05_0002E", "DP05_0003E"],     // metric (column for total count, male, and female popluation)
    "geoHierarchy" : {              // geographic entity (grouped by state)
      "state" : "*"
    }
}

//result
[{
    "NAME": "Alabama",
    "DP05_0001E": 4874747,
    "DP05_0002E": 2359896,
    "DP05_0003E": 2514851,
    "state": "01"
  },
  {
    "NAME": "Alaska",
    "DP05_0001E": 739795,
    "DP05_0002E": 385776,
    "DP05_0003E": 354019,
    "state": "02"
},
  ...
}]
```

---

## Additional Example

For the additional example, we will look at the Total households with one or more computing devices.

1.Search "computer" at data.census.gov, and take note of the program and table details.

![Table of Types of Computers and Internet Subscriptions, with the Survey/program, Year, Estimate, TableID underlined in red]({{ '/assets/images/source-metrics8.png' | relative_url }})

- **Survey/Program:** ACS
- **Year:** 2017
- **Estimate:** 1-year
- **TableID:** S2801

2. Locate the dataset, in this case it is a subject profile.

![2017 ACS Subject Profiles Variables with a search term of S2801]({{ '/assets/images/source-metrics9.png' | relative_url }})

- **Column Names:** "S2801_C01_001E","S2801_C01_002E"
- **URL:** https://api.census.gov/data/2017/acs/acs1/subject/variables.html

### Constructing the Query

```js
{
  "sourcePath" : ["acs","acs1","subject"], // source (survey, ACS 1-year subject estimate)
  "vintage" : 2017,                         // source (year, 2017)
  "values" : ["NAME","S2801_C01_001E","S2801_C01_002E" ], // metric (column for total households, one or more types of computing devices)
  "geoHierarchy" : {  // geographic entity (grouped by state)
    "state" : "*"
  }
}

//result
[{
    "NAME": "Alabama",
    "S2801_C01_001E": 1841665,
    "S2801_C01_002E": 1585085,
    "state": "01"
  },
  {
    "NAME": "Alaska",
    "S2801_C01_001E": 250741,
    "S2801_C01_002E": 236300,
    "state": "02"
  },
  ...
}]
```
