---
title: Frequently asked questions
description: Frequently asked questions on CitySDK and Census Data.
permalink: /docs/faq/

layout: post
sidenav: docs
---

## What does the Census Bureau do?

The Census Bureau's suverys provide a wide range of information on the population and economy of the nation. The data is used by local, state, and federal goverements to determine the distribution of represention, and make planning decisions about community services and funding. It is also used by many other organizations and buinesses to inform their decisions.

The data is available to the publicly via [Data.census.gov](https://data.census.gov/cedsci/), and for developers via an [API](https://www.census.gov/data/developers/about.html).

## Why is some data not available at smaller geographic levels or for certain groups of populations or industries?

When numbers or specific populations are reponse are low for an area, statistical summaries are not released ...
E.g. ACS 1 year has data down to the block group (check) for current areas. While decennial census has census tract level.

It is an important process done to protect the privacy of individual respondents and reduce the number of estimates with unacceptable levels of statistical reliability. (sample sizes are low)

Read more about it here:
[ACS Data Suppression](https://www.census.gov/programs-surveys/acs/technical-documentation/data-suppression.html)

## Why is CitySDK slow?

If you are using CitySDK on the client and GeoJSON takes a while to load or crashes the browser, prefetch your data and service it statically to your client instead. Follow the example on[saving the file locally in Node.js using fs]({{ '/examples/#example-saving-the-file-locally-in-nodejs-using-fs' | relative_url }}).

If you are suing CitySDK on the server (Node.js) and GeoJSON include the flag max-old-space-size `node --max-old-space-size=4096`.

Using current predicates or large geographic queries may also slow down queries.
