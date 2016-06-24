import $ from 'jquery';

import CensusGeoRequest from './census-geo-request';
import CensusRequestUtils from './census-request-utils';
import CensusRequestValidator from './census-request-validator';
import CensusSummaryRequest from './census-summary-request';
import CensusTigerwebRequest from './census-tigerweb-request';

export default class CensusRequest {

  constructor(apikey) {
    this.apikey = apikey;
  }

  static request(request) {
    let dfr = $.Deferred();

    let onRequestError = (reason) => {
      dfr.reject(reason);
    };

    let onRequestSuccess = (response) => {
      dfr.resolve(response);
    };

    let onRequestHasLatLng = (request) => {
      CensusRequestUtils.getFipsFromLatLng(request)
          .then(CensusRequestValidator.validateGeoVariables, onRequestError)
          .then(CensusSummaryRequest.request, onRequestError)
          .then(CensusTigerwebRequest.request, onRequestError)
          .then(CensusGeoRequest.handleTigerwebResponse, onRequestError)
          .then(onRequestSuccess, onRequestError);
    };

    request = CensusRequestValidator.validate(request);

    if (!request.lat && !request.lng) {
      // Get the coordinates, then using the coordinates, get
      // the FIPS codes for state, tract, county and blockGroup.
      CensusRequestUtils.getLatLng(request)
          .then(onRequestHasLatLng, onRequestError);

    } else {
      onRequestHasLatLng(request);
    }

    return dfr.promise();
  }
}