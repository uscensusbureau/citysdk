import $ from 'jquery';

import CensusRequestValidator from './census-request-validator';
import CensusRequestUtils from './census-request-utils';
import CensusSummaryRequest from './census-summary-request';

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

    request = CensusRequestValidator.validate(request);

    if (!request.lat && !request.lng) {
      // Get the coordinates, then using the coordinates, get
      // the FIPS codes for state, tract, county and blockGroup.
      CensusRequestUtils.getLatLng(request)
          .then(CensusRequestUtils.getFipsFromLatLng, onRequestError)
          .then(CensusRequestValidator.validateGeoVariables, onRequestError)
          .then(CensusSummaryRequest.request, onRequestError)
          .then(onRequestSuccess, onRequestError);
    }

    return dfr.promise();
  }
}