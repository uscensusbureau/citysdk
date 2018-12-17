import Promise from 'promise';
import Terraformer from 'terraformer';
import ArcGIS from 'terraformer-arcgis-parser';

import CitySdkGeoRequest from './citysdk-geo-request';
import CitySdkRequestUtils from './citysdk-request-utils';
import CitySdkSummaryRequest from './citysdk-summary-request';
import CitySdkTigerwebRequest from './citysdk-tigerweb-request';
import CitySdkRequestValidator from './citysdk-request-validator';

import aliases from '../../resources/aliases.json';
import stateNames from '../../resources/us-state-names.json';
import variableToAliasMap from '../../resources/var-alias-map.json';
import stateCapitalCoordinates from '../../resources/us-states-latlng.json';

Terraformer.ArcGIS = ArcGIS;

export default class CitySdk {

  /**
   * Returns a map of the most popular aliases.
   */
  static getAliases() {
    return aliases;
  }

  /**
   * @description Converts a Census variable, or a list of variables, to
   * its corresponding alias.
   * For example: for the variable B0009_00130 this function
   * would return "population" as the alias.
   *
   * @param variables
   * @returns {{}}
   */
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

  /**
   * @description Converts an alias, or a list of aliases, to its corresponding
   * variable.
   * For example: the alias population would be converted to the
   * variable B0009_00130
   *
   * @param _aliases
   * @returns {{}}
   */
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

  /**
   * @function getStateCapitalCoords
   * @static
   *
   * @description Gets the coordinates of a state's capital
   * from it's name or 2-letter code.
   *
   * @param {string} state Name or 2-letter code of the state
   * (case insensitive)
   *
   * @return {Array} Returns 2-position array of Lat & Long
   * for the capital of the state. Returns false if no state is found.
   */
  static getStateCapitalCoords(state) {
    // No string supplied
    if (!state) {
      return null;
    }

    state = state.toUpperCase().trim();

    if (state in stateCapitalCoordinates) {
      // state is a 2-letter state code and is valid
      return stateCapitalCoordinates[state];
    }

    // Look in US_STATE_NAMES
    state = state.toLowerCase();

    for (var statecode in stateNames) {
      if (state === stateNames[statecode]) {
        return stateCapitalCoordinates[statecode];
      }
    }

    // Nothing was found
    return null;
  }

  /**
   * @description Converts ESRI JSON to GeoJSON
   *
   * @param {string} esriJson
   *
   * @returns {{type: string, features: Array}}
   */
  static esriToGeo(esriJson) {
    if (!('features' in esriJson)) {
      // data is missing
      return null;
    }

    let features = esriJson.features;

    let geojson = {
      'type': 'FeatureCollection',
      'features': []
    };

    for (var i = 0; i < features.length; i++) {
      features[i].spatialReference = esriJson.spatialReference;
      geojson.features.push(Terraformer.ArcGIS.parse(features[i]));
    }

    return geojson;
  }

  /**
   * @description Converts geoJSON to ESRI JSON.
   * This is functionally an alias of Terraformer.ArcGIS.convert
   * (see https://github.com/Esri/Terraformer for details)
   *
   * @param {string} geoJson
   *
   * @returns {object}
   */
  static geoToEsri(geoJson) {
    return Terraformer.ArcGIS.convert(geoJson);
  }

  /**
   * @description Runs the given request through the Census
   * API pipeline and returns a response consisting of GeoJson
   * and Census data.
   *
   * @param request
   * @returns {*}
   */
  static request(request) {
    request = CitySdkRequestValidator.validate(request);

    let promiseHandler = (resolve, reject) => {
      let onRequestHasLatLng = (request) => {
        CitySdkRequestUtils.getFipsFromLatLng(request)
            .then(CitySdkRequestValidator.validateGeoVariables)
            .then(CitySdkSummaryRequest.request)
            .then(CitySdkTigerwebRequest.request)
            .then(CitySdkGeoRequest.handleTigerwebResponse)
            .then((response) => resolve(response))
            .catch((reason) => reject(reason));
      };

      if (!request.lat && !request.lng) {
        // Get the coordinates, then using the coordinates, get
        // the FIPS codes for state, tract, county and blockGroup.
        CitySdkRequestUtils.getLatLng(request)
            .then(onRequestHasLatLng)
            .catch((reason) => reject(reason));

      } else {
        onRequestHasLatLng(request);
      }
    };

    return new Promise(promiseHandler);
  }
}