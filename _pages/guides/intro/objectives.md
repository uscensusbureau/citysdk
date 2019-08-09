---
title: Objectives and Details
description: Introduction - Objectives and Details
permalink: /guides/intro/

layout: guide
sidenav: guides-intro
subnav:
  - text: What is the Census?
    href: "#what-is-the-census"
  - text: What are APIs?
    href: "#what-are-apis"
lightbox: true
---

This guide provides a background of the Census Bureau and how to use its data API via using CitySDK.

You should have a basic understanding of JavaScript as this guide will use CitySDK, a JavaScript library that combines all the Census APIs easily to a single query. It can be added to any webpage and provides geographies in the form of GeoJSON to easily added onto a web map.

Here are a few recommended guides to get you started with JavaScript:

- [https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript)

For instructions on using the individual APIs, see the advance guide (in-progress). For other programming language libraries for Census data explore the community page for link to their documentation.

---

Before we start, we will first go over what the Census Bureau does so we can understand what data is provided and how we can use it.

### What is the Census

The Census Bureau’s mission is to serve as the leading source of quality data about the nation’s people and economy. It does this by collecting information through surveys such as

- Decennial Census, a complete count of the everyone living in the nation every 10 years with various general demographic data. The next one is 2020!
- American Community Survey, a more frequent survey conducted every one, three, and five years with general and unique demographic questions.
- Economic Census, detailed information on employer businesses, including detailed data by industry and geography. (how many car repair stores are in a county, how many workers, and what is the medium salary)
- and much more… learn more here

These surveys are then aggregated to produce statistics on wide variety topics and geographies in the form of tables. This process removes any individual identifying information, and by Federal law is protected and confidential (not shared with anyone or agency).

Explore the data at [https://data.census.gov/](https://data.census.gov/cedsci/) or [https://censusreporter.org/](https://censusreporter.org/)

### Uses for the data

Since statistics produced by the Census Bureau are the comprehensive measures of the various topics of the people and economy, it is used in many different ways, such as

- Residents to involve legislation, quality-of-life and consumer advocacy
- Local government officials ensure public safety and plan new schools, hospitals, and other buildings
- Businesses to decide where to build factories, offices, and stories.
- Real estate developers and city planners to plan new homes, and improve neighborhoods
- **Grants and funds** funding for many programs such as housing, transportation, agriculture, and disaster planning/recovery at all levels of government, and organizations
- **Representation** to reapportion the House of Representatives, determines the size and shape of local, and state elected districts.

Learn more about use cases here.

[https://www.census.gov/programs-surveys/economic-census/guidance/data-uses.html](https://www.census.gov/programs-surveys/economic-census/guidance/data-uses.html)

---

### **Why use APIs?**

APIs provides an easy way to interface applications to get data or information. Various applications like [data.census.gov](http://data.census.gov/) take advantage of the various public APIs to show up to date information and allow for analysis without having to download the data and the need to import the data to a different software to process. APIs allow for a direct connection to your application, in the case of this guide to your website or JavaScript application.

### **Census APIs**

The Census Bureau provides three main APIs, that are related to each other.

1. [Census Data API](https://www.census.gov/content/dam/Census/data/developers/api-user-guide/api-guide.pdf) - provides access to the raw statistical data from all the various programs
2. TigerWeb - serves census area boundaries/shapes that the statistical data will “map” onto
3. Geocoder - translates an address and other locations formats into lat/lng and unique geographic identifier(s)

Note, not all the APIs have to be used, as information can substituted, or various libraries/tools can be used to abstract the use of the APIs. For example CitySDK, the library this guide will be using combines all three queries to one by

1. Getting the unique identifier of an area (the state where that coordinate is in)
2. Pulling the specific columns from a product (ACS 2015 Medium Household income)
3. Getting the geography/shape of the state and joining the data to it to display on a map

(add chart here with an example of how the APIs connect)
