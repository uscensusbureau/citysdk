import Terraformer from "terraformer";
import ArcGIS from "terraformer-arcgis-parser";
import $ from "jquery";

import stateNames from "../resources/us-state-names.json";
import stateCapitalCoordinates from "../resources/us-states-latlng.json";

Terraformer.ArcGIS = ArcGIS;

/**
 * @class
 */
export default class CitySdk {

  /**
   * @constructs {@link CitySdk}
   */
  constructor() {
    this.modules = {};
  }

  /**
   * @function ajaxRequest
   * @static
   *
   * @description Makes an AJAX call
   *
   * @param {string} url URL to request
   *
   * @param {boolean} jsonp
   *
 * @return {promise} Returns a standard ajax promise
   */
  static ajaxRequest(url, jsonp) {
    if (jsonp) {
      var deferred = $.Deferred();

      $.ajax({
        url: url,
        method: "GET",
        dataType: "jsonp",

        success: function(response) {
          deferred.resolve(response);
        }
      });

      return deferred.promise();
    }

    return $.getJSON(url);
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
      dataType: "json"
    });
  }

  /**
   * @function getStateCapitalCoords
   * @static
   *
   * @description Gets the coordinates of a state"s capital
   * from it"s name or 2-letter code.
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
   * @function parseRequestLatLng
   * @static
   *
   * @description Scans the request for alternative ways
   * to specify latitude & longiture and migrates those
   * variables to lat & lng positions.
   *
   * @param {object} request the request being made to the module
   *
   * @return {object} the updated request
   */
  static parseRequestLatLng(request) {
    // Allow the users to use either x,y; lat,lng;
    // latitude,longitude to specify co-ordinates
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

  static parseResponseLatLng(response) {
    response.lat = parseFloat(response.features[0].attributes.CENTLAT);
    response.lng = parseFloat(response.features[0].attributes.CENTLON);

    return response;
  }

  /**
   * @description Converts ESRI JSON to GeoJSON
   *
   * @param {string} esriJson
   *
   * @returns {{type: string, features: Array}}
   *
   * @todo Use lower camelCase for function name
   */
  static esriToGeo(esriJson) {
    if (!("features" in esriJson)) {
      // data is missing
      return null;
    }

    let features = esriJson.features;

    let geojson = {
      "type": "FeatureCollection",
      "features": []
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
   *
   * @todo Use lower camelCase for function name
   */
  static geoToEsri(geoJson) {
    return Terraformer.ArcGIS.convert(geoJson);
  }
}

CitySdk.version = "0.0.1";
CitySdk.stateNames = stateNames;
CitySdk.stateCapitalCoordinates = stateCapitalCoordinates;




