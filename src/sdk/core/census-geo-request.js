import $ from 'jquery';

import CensusRequest from './census-request';
import CensusTigerwebRequest from './census-tigerweb-request';

export default class CensusGeoRequest {

  static supplementalRequest(req, res, featureIndex) {
    let i = featureIndex;
    let dfr = $.Deferred();

    let features = res.features;
    let variables = req.variables;

    //Sometimes cities span multiple counties. In this case, we sometimes miss data due to the
    //limited nature of the Census API's geography hierarchy. This will issue supplemental requests
    //to ensure we have data for all of our geojson entities
    let suppRequest = {
      "state": features[i].properties["STATE"],
      "tract": features[i].properties["TRACT"],
      "county": features[i].properties["COUNTY"],
      "blockGroup": features[i].properties["BLKGRP"],
      "place": features[i].properties["PLACE"],
      "lat": parseFloat(features[i].properties.CENTLAT),
      "lng": parseFloat(features[i].properties.CENTLON),
      "level": req.level,
      "year": req.year,
      "api": req.api,
      "variables": variables,
      "featuresIndex": i
    };

    let onRequestError = (reason) => {
      dfr.reject(reason);
    };

    CensusRequest.request(suppRequest).then((response) => {
      for (let property in response.data[0]) {
        if (response.data[0].hasOwnProperty(property)) {
          features[response.featuresIndex].properties[property] = response.data[0][property];

          if (variables.indexOf(property) !== -1) {
            res.totals[property] = Number(res.totals[property]) >= 0 ? Number(response.data[0][property]) : 0;
          }
        }
      }

      dfr.resolve(response);

    }, onRequestError);

    return dfr.promise();
  }

  static handleTigerwebResponse(response) {
    let dfr = $.Deferred();
    let resp = response.response;
    let request = response.request;

    // Reference dictionary of levels -> geocoder response variables
    let comparisonVariables = {
      "tract": "TRACT",
      "place": "PLACE",
      "county": "COUNTY",
      "blockGroup": "BLKGRP"
    };

    let onRequestError = (reason) => {
      dfr.reject(reason);
    };

    let onRequestSuccess = (response) => {
      dfr.resolve(response);
    };

    if (!resp.totals) {
      resp.totals = {};
    }

    if (request.data) {
      let data = request.data;
      let variables = request.variables;

      let totals = resp.totals;
      let features = resp.features;

      let matchedFeature;

      features.forEach((f, i) => {
        matchedFeature = data.filter((d) => {
          // Ensure we have a direct match for low level items by comparing the higher level items
          if (request.level === "blockGroup" || request.level === "tract") {
            let levelMatch = d[request.level] === f.properties[comparisonVariables[request.level]];
            let tractMatch = d["tract"] === f.properties.TRACT;
            let countyMatch = d["county"] === f.properties.COUNTY;

            return levelMatch && tractMatch && countyMatch;

          } else {
            return d[request.level] === f.properties[comparisonVariables[request.level]];
          }
        });

        if (matchedFeature.length === 0) {
          CensusGeoRequest.supplementalRequest(request, resp, i)
              .then(onRequestSuccess, onRequestError);

        } else if (matchedFeature.length === 1) {
          setTimeout(() => {
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

            onRequestSuccess(resp);
          }, 0);

        } else {
          setTimeout(() => {
            // This usually occurs when a low-level geography entity isn't uniquely identified
            // by the grep. We'll need to add more comparisons to the grep to clear this issue up.
            console.log("Multiple matched features: ");
            console.log(f);
            console.log(matchedFeature);

            onRequestSuccess(resp);
          }, 0);
        }
      });
    }

    return dfr.promise();
  }

  static request(request) {
    let dfr = $.Deferred();

    let onRequestError = (reason) => {
      dfr.reject(reason);
    };

    let onRequestSuccess = (response) => {
      dfr.resolve(response);
    };

    CensusRequest.request(request)
        .then(CensusTigerwebRequest.request, onRequestError)
        .then(CensusGeoRequest.handleTigerwebResponse, onRequestError)
        .then(onRequestSuccess, onRequestError);

    return dfr.promise();
  }
}