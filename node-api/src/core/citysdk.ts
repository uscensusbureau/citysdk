import Terraformer = require("terraformer");
import ArcGIS = require("terraformer-arcgis-parser");
import Promise = require("promise");
import request = require("request");

const stateNames = require("../resources/us-state-names.json");
const stateCapitalCoordinates = require("../resources/us-states-latlng.json");

Terraformer.ArcGIS = ArcGIS;

/**
 * @class
 */
export default class CitySdk {

  static version: string = "0.0.1";
  static stateNames: any = stateNames;
  static stateCapitalCoordinates: any = stateCapitalCoordinates;

  modules: any;

  /**
   * @constructs {@link CitySdk}
   */
  constructor() {
    this.modules = {};
  }

  get(url: string) {
    return new Promise((resolve, reject) => {
      request.get(url, (error: any, response: any) => {
        if (!error) {
          try {
            resolve(JSON.parse(response.body));
          } catch (e) {
            throw new Error(e);
          }

        } else {
          reject(error);
        }
      });
    });
  }

  post(url: string, data: any) {
    return new Promise((resolve, reject) => {
      request.post({url: url, form: data}, (error: any, response: any) => {
        if (!error) {
          try {
            resolve(JSON.parse(response.body));
          } catch (e) {
            throw new Error(e);
          }

        } else {
          reject(error);
        }
      });
    })
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
  getStateCapitalCoords(state: string): Array<Number> {
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
  parseRequestLatLng(request: any): any {
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

  parseResponseLatLng(response: any): any {
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
  esriToGeo(esriJson: any): any {
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
  geoToEsri(geoJson: any): any {
    return Terraformer.ArcGIS.convert(geoJson);
  }

  getStates(): any {
    return stateNames;
  }

  getStateCapitals() {
    return stateCapitalCoordinates
  }
}




