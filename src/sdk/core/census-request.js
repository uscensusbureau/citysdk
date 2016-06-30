import Promise from 'promise';

import CensusGeoRequest from './census-geo-request';
import CensusRequestUtils from './census-request-utils';
import CensusRequestValidator from './census-request-validator';
import CensusSummaryRequest from './census-summary-request';
import CensusTigerwebRequest from './census-tigerweb-request';

import aliases from '../../resources/aliases.json';
import variableToAliasMap from '../../resources/var-alias-map.json';

export default class CensusRequest {

  static getAliases() {
    return aliases;
  }

  static variableToAlias(variables) {
    if(Object.prototype.toString.call(variables) !== '[object Array]') {
      variables = [variables];
    }
    
    let result = {};

    if (variables && variables.length) {
      for (let variable of variables) {
        result[variable] = variableToAliasMap[variable];
      }

      return result;

    } else {
      throw new Error('Invalid list of variables. Make sure multiple variables are comma separated.');
    }
  }

  static aliasToVariable(_aliases) {
    if(Object.prototype.toString.call(_aliases) !== '[object Array]') {
      _aliases = [_aliases];
    }
    
    let result = {};

    if (_aliases && _aliases.length) {
      for (let alias of _aliases) {
        result[alias] = aliases[alias];
      }
    } else {
      throw new Error('Invalid list of aliases. Make sure multiple aliases are comma separated.');
    }

    return result;
  }

  static request(request) {
    request = CensusRequestValidator.validate(request);

    let promiseHandler = (resolve, reject) => {
      let onRequestHasLatLng = (request) => {
        CensusRequestUtils.getFipsFromLatLng(request)
            .then(CensusRequestValidator.validateGeoVariables)
            .then(CensusSummaryRequest.request)
            .then(CensusTigerwebRequest.request)
            .then(CensusGeoRequest.handleTigerwebResponse)
            .then((response) => resolve(response))
            .catch((reason) => reject(reason));
      };

      if (!request.lat && !request.lng) {
        // Get the coordinates, then using the coordinates, get
        // the FIPS codes for state, tract, county and blockGroup.
        CensusRequestUtils.getLatLng(request)
            .then(onRequestHasLatLng)
            .catch((reason) => reject(reason));

      } else {
        onRequestHasLatLng(request);
      }
    };

    return new Promise(promiseHandler);
  }
}