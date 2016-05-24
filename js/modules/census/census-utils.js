import aliases from './json/aliases.json';
import properties from './json/census.properties.json';

import CitySdk from '../../core/citysdk.new';

import $ from 'jquery';

export class CensusUtils {
  /**
   * Checks to see if a string is in the aliases dictionary and returns the appropriate variable if so.
   * This function is depreciated and not recommended as it does not check to see if a particular alias
   * is valid for a particular api.
   * e.g. "income" will return "DP03_0064PE"
   *
   * If the string is not in the alias dictionary, it will return the same string back. This is useful for
   * parsing user input. (Either a user requests a variable in the alias dictionary OR a specific variable)
   *
   * @param {string} aliasOrVariable A string to parse into a variable string.
   *
   * @returns {string} Variable string
   */
  static parseToVariable(aliasOrVariable) {
    //If the requested string is an alias, return the appropriate variable from the dictionary
    if (aliasOrVariable in aliases) {
      return aliases[aliasOrVariable].variable;
    }

    //Otherwise, this is either already a variable name or is unsupported
    return aliasOrVariable;
  }

  /**
   * Checks to see if a string is in the aliases dictionary and returns the appropriate VALID variable if so.
   * e.g. "income" will return "DP03_0064PE"
   * If the string is not in the alias dictionary, it will return the same string back. This is useful for parsing
   * user input. (Either a user requests a variable in the alias dictionary OR a specific variable)
   *
   * @param {string} aliasOrVariable A string to parse into a variable string.
   * @param {string} api The api key being called (acs5, sf1, etc).
   * @param {string} year The year of the desired dataset.
   *
   * @returns {string} Variable string
   */
  static parseToValidVariable(aliasOrVariable, api, year) {
    //If the requested string is an alias, return the appropriate variable from the dictionary
    if (aliasOrVariable in aliases) {

      if (api in aliases[aliasOrVariable]['api'] && aliases[aliasOrVariable]['api'][api].indexOf(parseInt(year)) != -1) {
        // Alias found and is valid for selected API & year combination
        return aliases[aliasOrVariable].variable;

      } else {
        // Alias found but is NOT valid for selected API and year combination
        return false;
      }
    }

    //Otherwise, this is either already a variable name or is unsupported
    return aliasOrVariable;
  }

  /**
   * Determines if the alias is normalizable.  This is generally limited to aliases of ACS variables
   * (American Community Survey)
   *
   * @param {string} alias
   *
   * @returns {boolean} Returns TRUE if the alias is normalizable (as marked in the alias dictionary),
   * otherwise, false.
   */
  static isNormalizable(alias) {
    if (alias in aliases) {
      if ("normalizable" in this.aliases[alias]) {
        if (this.aliases[alias].normalizable == true) {
          return true;
        }
      }
    }

    return false;
  }

  /**
   * Parses the state code in a request object, converting two letter state codes to lat/lng
   *
   * @param {object} request Object representing an api request
   *
   * @returns {object} returns the request Object with lat and lng populated
   */
  static parseRequestStateCode(request) {
    //This supports 2 letter state codes in a request
    if ("state" in request) {
      if (isNaN(request.state)) {
        if (!("lat" in request) && !("lng" in request)) {
          request.lat = this.stateCapitals[request.state][0];
          request.lng = this.stateCapitals[request.state][1];

        } else {
          delete request.state;
        }
      }
    }

    return request;
  }

  /**
   * Checks the request object for lat/lng latitude/longitude and x/y fields and moves them to
   * the appropriate locations for processing by the module
   *
   * @param {object} request Object representing an api request
   */
  static parseRequestLatLng(request) {
    return CitySdk.parseRequestLatLng(request);
  }

  /**
   * Converts ESRI JSON to GeoJSON
   * This function has been moved to the CitySDK core. An alias remains here for legacy support.
   *
   * @param {string} esriJSON
   *
   * @returns {{type: string, features: Array}}
   */
  static ESRItoGEO(esriJSON) {
    return CitySdk.ESRItoGEO(geoJSON);
  }

  /**
   * Converts geoJSON to ESRI JSON
   * This function has been moved to the CitySDK core. An alias remains here for legacy support.
   * @param {string} geoJSON
   * @returns {object}
   */
  static GEOtoESRI(geoJSON) {
    return CitySdk.GEOtoESRI(geoJSON);
  }

  /**
   * Downloads an API's entire dictionary of variables from the Census
   * @param {string} inapi
   * @param {string} inyear
   * @param {function} callback
   * @param {object} citysdk Instance of CitySdk
   *
   * @return {object}
   */
  static getVariableDictionary(inapi, inyear, callback, citysdk) {
    var intermediate = JSON.parse(JSON.stringify([inapi, inyear]));
    var api = intermediate[0];
    var year = intermediate[1];

    var cacheKey = api.toString() + year.toString();

    citysdk.getCachedData("census", "getVariableDictionary", cacheKey, function(cachedData) {
      if (cachedData != null) {
        callback(cachedData);

      } else {
        var url = `${properties.defaultEndpoints.acsVariableDictionaryURL}${year}/${api}/variables.json`;

        CitySdk.ajaxRequest(url).done(function(response) {
          response = $.parseJSON(response);
          citysdk.setCachedData("census", "getVariableDictionary", cacheKey, response);
          callback(response);
        });
      }
    });
  }
}