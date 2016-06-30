import Terraformer from 'terraformer';
import ArcGIS from 'terraformer-arcgis-parser';

import stateNames from '../../resources/us-state-names.json';
import stateCapitalCoordinates from '../../resources/us-states-latlng.json';

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
}
