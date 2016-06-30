import Promise from 'promise';

import CitySdk from './citysdk';
import CitySdkSummaryRequest from './citysdk-summary-request';
import CitySdkTigerwebRequest from './citysdk-tigerweb-request';

export default class CitySdkGeoRequest {

  static supplementalRequest(req, res, featureIndex) {
    let i = featureIndex;
    let features = res.features;
    let variables = req.variables;

    // Sometimes cities span multiple counties. In this case,
    // we sometimes miss data due to the limited nature of
    // the Census API's geography hierarchy. This will issue
    // supplemental requests to ensure we have data for all of
    // our geojson entities
    let suppRequest = {
      state: features[i].properties['STATE'],
      tract: features[i].properties['TRACT'],
      county: features[i].properties['COUNTY'],
      blockGroup: features[i].properties['BLKGRP'],
      place: features[i].properties['PLACE'],
      lat: parseFloat(features[i].properties.CENTLAT),
      lng: parseFloat(features[i].properties.CENTLON),
      level: req.level,
      year: req.year,
      api: req.api,
      variables: variables,
      featuresIndex: i,
      apikey: req.apikey
    };

    let promiseHandler = (resolve, reject) => {
      let censusSummaryRequest = CitySdkSummaryRequest.request(suppRequest);

      censusSummaryRequest.then((response) => {
        for (let property in response.data[0]) {
          if (response.data[0].hasOwnProperty(property)) {
            features[response.featuresIndex].properties[property] = response.data[0][property];

            if (variables.indexOf(property) !== -1) {
              res.totals[property] = Number(res.totals[property]) >= 0 ? Number(response.data[0][property]) : 0;
            }
          }
        }

        resolve(response);
      });

      censusSummaryRequest.catch((reason) => {
        reject(reason);
      });
    };

    return new Promise(promiseHandler);
  }

  static handleTigerwebResponse(tigerwebResponse) {
    let request = tigerwebResponse.request;
    let response = tigerwebResponse.response;
    let supplementalRequests = [];

    // Reference dictionary of levels -> geocoder response variables
    let comparisonVariables = {
      'tract': 'TRACT',
      'place': 'PLACE',
      'county': 'COUNTY',
      'blockGroup': 'BLKGRP'
    };

    if (!response.totals) {
      response.totals = {};
    }

    if (request.data) {
      let data = request.data;
      let variables = request.variables;

      let totals = response.totals;
      let features = response.features;

      let matchedFeature;

      features.forEach((f, i) => {
        matchedFeature = data.filter((d) => {
          // Ensure we have a direct match for low level items by comparing the higher level items
          if (request.level === 'blockGroup' || request.level === 'tract') {
            let levelMatch = d[request.level] === f.properties[comparisonVariables[request.level]];
            let tractMatch = d['tract'] === f.properties.TRACT;
            let countyMatch = d['county'] === f.properties.COUNTY;

            return levelMatch && tractMatch && countyMatch;

          } else {
            return d[request.level] === f.properties[comparisonVariables[request.level]];
          }
        });

        if (matchedFeature.length === 0) {
          supplementalRequests.push(CitySdkGeoRequest.supplementalRequest(request, response, i))

        } else if (matchedFeature.length === 1) {
          // We have matched the feature's tract to a data tract, move the data over
          matchedFeature = matchedFeature[0];

          for (let property in matchedFeature) {
            if (matchedFeature.hasOwnProperty(property)) {
              f.properties[property] = matchedFeature[property];

              if (variables.indexOf(property) !== -1) {
                totals[property] = Number(totals[property]) >= 0 ? Number(matchedFeature[property]) : 0;
              }
            }
          }

        } else {
          // This usually occurs when a low-level geography entity isn't uniquely identified
          // by the grep. We'll need to add more comparisons to the grep to clear this issue up.
          console.log('Multiple matched features: ');
          console.log(f);
          console.log(matchedFeature);
        }
      });
    }

    let promiseHandler = (resolve, reject) => {
      // If supplemental requests were needed, wait for all
      // to finish.
      if (supplementalRequests.length) {
        Promise.all(supplementalRequests)
            .then(() => resolve(response))
            .catch((reason) => reject(reason))

      } else {
        setTimeout(() => resolve(response), 0);
      }
    };

    return new Promise(promiseHandler);
  }

  static request(request) {
    let promiseHandler = (resolve, reject) => {
      CitySdk.request(request)
          .then(CitySdkTigerwebRequest.request)
          .then(CitySdkGeoRequest.handleTigerwebResponse)
          .then((response) => resolve(response))
          .catch((reason) => reject(reason));
    };

    return new Promise(promiseHandler);
  }
}