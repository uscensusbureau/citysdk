import Promise from 'promise';

import CitySdk from './citysdk';
import CitySdkHttp from './citysdk-http';

import aliases from '../../resources/aliases.json';
import stateCapitalsLatLng from '../../resources/us-states-latlng.json';

const defaultEndpoints = {
  acsVariableDictionaryURL: 'https://api.census.gov/data/',
  geoCoderUrl: 'https://geocoding.geo.census.gov/geocoder/geographies/',
  tigerwebUrl: 'https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/',
  censusUrl: 'https://api.census.gov/data/'
};

const zctaJsonUrl = 'https://s3.amazonaws.com/citysdk/zipcode-to-coordinates.json';
const fipsGeocoderUrl = 'https://geocoding.geo.census.gov/geocoder/geographies/coordinates?';
const addressGeocoderUrl = 'https://geocoding.geo.census.gov/geocoder/locations/address?benchmark=4&format=jsonp';

export default class CitySdkRequestUtils {
  static parseToVariable(aliasOrVariable) {
    // If the requested string is an alias, return the appropriate variable from the dictionary
    if (aliasOrVariable in aliases) {
      return aliases[aliasOrVariable].variable;
    }

    // Otherwise, this is either already a variable name or is unsupported
    return aliasOrVariable;
  }

  static parseToValidVariable(aliasOrVariable, api, year) {
    // If the requested string is an alias, return the appropriate variable from the dictionary
    if (aliasOrVariable in aliases) {
      if (api in aliases[aliasOrVariable]['api']
          && aliases[aliasOrVariable]['api'][api].indexOf(parseInt(year)) !== -1) {

        // Alias found and is valid for selected API & year combination
        return aliases[aliasOrVariable].variable;

      } else {
        // Alias found but is NOT valid for selected API and year combination
        throw new Error('Invalid alias for selected API and year combination.');
      }
    }

    // Otherwise, this is either already a variable name or is unsupported
    return aliasOrVariable;
  }

  static isNormalizable(alias) {
    return alias in aliases && 'normalizable' in aliases[alias] && aliases[alias].normalizable;
  }

  static esriToGeo(esriJson) {
    return CitySdk.esriToGeo(esriJson);
  }

  static geoToEsri(geoJson) {
    return CitySdk.geoToEsri(geoJson);
  }

  static getLatLngFromStateCode(stateCode) {
    let latlng;

    if (stateCode) {
      stateCode = stateCode.toUpperCase();
      latlng = stateCapitalsLatLng[stateCode];
    }

    return latlng;
  }

  static getLatLngFromZipcode(zip) {
    return new Promise((resolve, reject) => {
      CitySdkHttp.get(zctaJsonUrl, false)
          .then((coordinates) => resolve(coordinates[zip]))
          .catch((reason) => reject(reason));
    });
  }

  /**
   * Takes an address object with the fields "street", "city", "state", and "zip".
   * Either city and state or zip must be provided with the street.
   *
   * @param address
   *
   * @returns {promise}
   */
  static getLatLngFromAddress(address) {
    let url = addressGeocoderUrl;

    // Address is required. If address is not present,
    // then the request will fail.
    if (!address.street) {
      throw new Error('Invalid address! The required field "street" is missing.')
    }

    if (!address.city && !address.state && !address.zip) {
      throw new Error('Invalid address! "city" and "state" or "zip" must be provided.');
    }

    url += `&street=${address.street}`;

    if (address.zip) {
      url += `&zip=${address.zip}`;
    }
    else if (address.city && address.state) {
      url += `&city=${address.city}&state=${address.state}`;
    }
    else {
      throw new Error('Invalid address! "city" and "state" or "zip" must be provided.');
    }

    return CitySdkHttp.get(url, true);
  }

  static getLatLng(request) {
    let promiseHandler = (resolve, reject) => {
      if (request.address) {
        CitySdkRequestUtils.getLatLngFromAddress(request.address).then((response) => {
          let coordinates = response.result.addressMatches[0].coordinates;
          request.lat = coordinates.y;
          request.lng = coordinates.x;
          resolve(request);

        }).catch((reason) => reject(reason));

      } else if (request.zip) {
        CitySdkRequestUtils.getLatLngFromZipcode(request.zip).then((coordinates) => {
          request.lat = coordinates[1];
          request.lng = coordinates[0];
          resolve(request);

        }).catch((reason) => reject(reason));

      } else if (request.state) {
        // Since this function returns a promise we want this to be an asynchronous
        // call. Therefore, we wrap in a setTimout() since it allows the function to
        // return before the code inside the setTimeout is excecuted.
        setTimeout(() => {
          let coordinates = CitySdkRequestUtils.getLatLngFromStateCode(request.state);
          request.lat = coordinates[0];
          request.lng = coordinates[1];

          resolve(request);
        }, 0);

      } else {
        reject(new Error("One of 'address', 'state' or 'zip' must be provided."));
      }
    };

    return new Promise(promiseHandler);
  }

  static getFipsFromLatLng(request) {
    let lat = request.lat;
    let lng = request.lng;
    let url = fipsGeocoderUrl;

    // Benchmark id: 4 = Public_AR_Current
    // Vintage id: 4 = Current_Current
    url += `x=${lng}&y=${lat}&benchmark=4&vintage=4&layers=8,12,28,84,86&format=jsonp`;

    let promiseHandler = (resolve, reject) => {
      CitySdkHttp.get(url, true).then((response) => {
        let geographies = response.result.geographies;

        // The 2010 Census Blocks object seems to have
        // the FIPS codes for all the level we need.
        let fips = geographies['2010 Census Blocks'][0];

        // FIPS codes
        request.state = fips.STATE;
        request.tract = fips.TRACT;
        request.county = fips.COUNTY;
        request.blockGroup = fips.BLKGRP;

        // Check if this location is Incorporated. If so, then get the FIPS code.
        if (geographies['Incorporated Places'] && geographies['Incorporated Places'].length) {
          request.place = geographies['Incorporated Places'][0].PLACE;
          request.place_name = geographies['Incorporated Places'][0].NAME;
        }

        request.geocoded = true;
        resolve(request);
      }).catch((reason) => reject(reason));
    };

    return new Promise(promiseHandler);
  }

  static getGeographyVariables(request) {
    if (!request.api || !request.year) {
      throw new Error('Invalid request! "year" and "api" fields must be provided.');
    }
    
    let url = `${defaultEndpoints.censusUrl}${request.year}/${request.api}/geography.json`;
    return CitySdkHttp.get(url, false);
  }
}