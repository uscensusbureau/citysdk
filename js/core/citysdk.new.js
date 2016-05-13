import $ from 'jquery';
import 'terraformer';
import 'terraformer-arcgis-parser';

import CacheSupport from './cache-support';

import US_STATE_NAMES from './us-state-names';
import US_STATES_LATLNG from './us-states-latlng';

import './polyfills';

/**
 * @class
 * @version 1.6
 */
export default class CitySdk {

  /**
   * @constructs {@link CitySDK}
   */
  constructor() {
    let idbSupported = false;

    this.version = 1.6;
    this.modules = {};
    this.allowCache = false;
    this.cacheSupport = new CacheSupport(this);

    if (CacheSupport.indexedDBSupported) {
      this.allowCache = true;
      idbSupported = true;
    }

    if (idbSupported && this.allowCache === true) {
      this.cacheSupport.openIndexedDb();
    }
  }

  /**
   * @function ajaxRequest
   * @static
   *
   * @description Makes an AJAX call
   *
   * @param {string} url URL to request
   *
   * @return {promise} Returns a standard ajax promise
   */
  static ajaxRequest(url) {
    return $.ajax({
      type: 'GET',
      dataType: 'text',
      contentType: 'text/plain',
      url: url
    });
  }

  /**
   * @function jsonpRequest
   * @static
   *
   * @description Makes an AJAX call (using jsonp)
   *
   * @param {string} url URL to request
   *
   * @return {object} Returns a standard ajax promise
   */
  static jsonpRequest(url) {
    return $.ajax({
      type: 'GET',
      dataType: "jsonp",
      contentType: 'text/plain',
      url: url
    });
  }

  /**
   * @function postRequest
   * @static
   *
   * @description Make an AJAX call using the POST method
   *
   * @param {string} url
   * @param {object} data
   *
   * @returns {*}
   */
  static postRequest(url, data) {
    return $.ajax({
      type: "POST",
      url: url,
      data: data,
      dataType: "text"
    });
  }

  /**
   * @function getStateCapitalCoords
   * @static
   *
   * @description Gets the coordinates of a state's capital from it's name or 2-letter code.
   *
   * @param {string} state Name or 2-letter code of the state (case insensitive)
   *
   * @return {Array} Returns 2-position array of Lat & Long for the capital of the state.
   *         Returns false if no state is found.
   */
  static getStateCapitalCoords(state) {
    // No string supplied
    if (!state) {
      return null;
    }

    state = state.toUpperCase().trim();

    if (state in US_STATES_LATLNG) {
      // state is a 2-letter state code and is valid
      return US_STATES_LATLNG[state];
    }

    // Look in US_STATE_NAMES
    state = state.toLowerCase();

    for (var statecode in US_STATE_NAMES) {
      if (state === US_STATE_NAMES[statecode]) {
        return US_STATES_LATLNG[statecode];
      }
    }

    // Nothing was found
    return null;
  }

  /**
   * @function parseRequestLatLng
   * @static
   *
   * @description Scans the request for alternative ways to specify latitude & longiture
   * and migrates those variables to lat & lng positions.
   *
   * @param {object} request the request being made to the module
   *
   * @return {object} the updated request
   */
  static parseRequestLatLng(request) {
    // Allow the users to use either x,y; lat,lng; latitude,longitude to specify co-ordinates
    if (!("lat" in request)) {
      if ("latitude" in request) {
        request.lat = request.latitude;
        delete request.latitude;
      } else if ("y" in request) {
        request.lat = request.y;
        delete request.y;
      }
    }

    if (!("lng" in request)) {
      if ("longitude" in request) {
        request.lng = request.longitude;
        delete request.longitude;
      } else if ("x" in request) {
        request.lng = request.x;
        delete request.x;
      }
    }

    return request;
  }

  /**
   * @function getCachedData
   * @description Retrieves a value from the cache
   * @see {@link CacheSupport.getData}
   *
   * @param {string} module name of the CitySDK module
   * @param {function} func
   * @param {string} hashKey this is a key that identifies the data. Each module has its own hashing scheme.
   * @param {function} callback
   *
   * @return {object} the value of the cached data.  Returns false if nothing found
   *
   * @todo This function needs to return a promise. This, way there's no need to accept a callback.
   */
  getCachedData(module, func, hashKey, callback) {
    return this.cacheSupport.getData(module, func, hashKey, callback);
  }

  /**
   * @function setCachedData
   * @description Creates and/or Updates a value from the cache
   *
   * @param {string} module name of the CitySDK module
   * @param {string} functionName
   * @param {string} hashKey this is a key that identifies the data. Each module has its own hashing scheme.
   * @param {object} dataValue this is the data being stored.  It should be an object that contains both the
   * specific data and any meta information needed to invalidate it.
   *
   * @return {object} the value of the cached data.  Returns false if nothing found
   */
  setCachedData(module, functionName, hashKey, dataValue) {
    return this.cacheSupport.setData(module, functionName, hashKey, dataValue);
  }

  /**
   * @function deleteData
   * @description Deletes a value from the cache
   *
   * @param {string} module name of the CitySDK module
   * @param {string} functionName
   * @param {string} hashKey this is a key that identifies the data. Each module has its own hashing scheme.
   *
   * @return {object} the value of the cached data.  Returns false if nothing found
   */
  deleteCachedData(module, functionName, hashKey) {
    return this.cacheSupport.deleteData(module, functionName, hashKey);
  }

  /**
   * @description Converts ESRI JSON to GeoJSON
   *
   * @param {string} esriJSON
   *
   * @returns {{type: string, features: Array}}
   *
   * @todo Use lower camelCase for function name
   */
  static ESRItoGEO(esriJSON) {
    let json = $.parseJSON(esriJSON);

    if (!("features" in json)) {
      // data is missing
      return null;
    }

    let features = json.features;

    let geojson = {
      "type": "FeatureCollection",
      "features": []
    };

    for (var i = 0; i < features.length; i++) {
      features[i].spatialReference = json.spatialReference;
      geojson.features.push(Terraformer.ArcGIS.parse(features[i]));
    }

    return geojson;
  }

  /**
   * @description Converts geoJSON to ESRI JSON.
   * This is functionally an alias of Terraformer.ArcGIS.convert (see https://github.com/Esri/Terraformer for details)
   *
   * @param {string} geoJSON
   *
   * @returns {object}
   *
   * @todo Use lower camelCase for function name
   */
  static GEOtoESRI(geoJSON) {
    return Terraformer.ArcGIS.convert(geoJSON);
  }

  /**
   * @description Checks to see whether local storage is available
   * @function storageAvailablefunction
   *
   * @param {string} type the tyoe fo storage being tested. Generally 'localstorage' is used.
   *
   * @return {boolean} true if storage type is available
   */
  static storageAvailablefunction(type) {
    return CacheSupport.storageAvailablefunction(type);
  }
}