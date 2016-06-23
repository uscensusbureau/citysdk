import $ from 'jquery';

import CitySdk from './citysdk';

import config from '../../resources/config.json';
import aliases from '../../resources/aliases.json';
import stateCapitalsLatLng from '../../resources/us-states-latlng.json';

const defaultEndpoints = {
  acsVariableDictionaryURL: 'https://api.census.gov/data/',
  geoCoderUrl: 'https://geocoding.geo.census.gov/geocoder/geographies/',
  tigerwebUrl: 'https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/',
  censusUrl: 'https://api.census.gov/data/'
};

export default class CensusRequestUtils {
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
    let dfr = $.Deferred();

    $.getJSON(config.zcta.use).then(function(coordinates) {
      dfr.resolve(coordinates[zip]);
    });

    return dfr.promise();
  }

  static getLatLngFromAddress(address) {
    let url = 'https://geocoding.geo.census.gov/geocoder/locations/address?benchmark=4&format=jsonp';
    let separator = '';

    // Address is required. If address is not present,
    // then the request will fail.
    if (address.street) {
      url += `street=${address.street}`;
      separator = '&';
    }

    // The address must contain city and state,
    // or just the zip.
    if (address.city) {
      url += `${separator}city=${address.city}`;
      
      if (!separator) {
        separator = '&';
      }
    }
    
    if (address.state) {
      url += `${separator}state=${address.state}`;

      if (!separator) {
        separator = '&';
      }
    }
    
    if (address.zip) {
      url += `${separator}zip=${address.zip}`;
    }
    
    return CitySdk.ajaxRequest(url, true);
  }

  static getLatLng(request) {
    let deferred = $.Deferred();

    function error(reason) {
      deferred.reject(reason);
    }

    if (request.address) {
      CensusRequestUtils.getLatLngFromAddress(request.address).then((response) => {
        let coordinates = response.addressMatches[0].coordinates;
        request.lat = coordinates.y;
        request.lng = coordinates.x;

        deferred.resolve(request);
      }, error);

    } else if (request.zip) {
      CensusRequestUtils.getLatLngFromZipcode(request.zip).then((response) => {
        let coordinates = response.features[0].attributes;
        request.lat = parseFloat(coordinates.CENTLAT);
        request.lng = parseFloat(coordinates.CENTLON);
        
        deferred.resolve(request);
      }, error);

    } else if (request.state) {
      // Since this function returns a promise
      // we want this to be an asynchronous call.
      // Therefore, we wrap in a setTimout() since
      // it allows the function to return before
      // the code inside the setTimeout is excecuted.
      setTimeout(() => {
        let coordinates = CensusRequestUtils.getLatLngFromStateCode(request.state);
        request.lat = coordinates[0];
        request.lng = coordinates[1];

        deferred.resolve(request);
      }, 0);

    } else {
      deferred.reject(new Error("One of 'address', 'state' or 'zip' must be provided."));
    }

    return deferred.promise();
  }

  static getFipsFromLatLng(request) {
    let lat = request.lat;
    let lng = request.lng;
    let dfr = $.Deferred();
    let url = `https://geocoding.geo.census.gov/geocoder/geographies/coordinates?`;

    let onRequestError = (reason) => {
      dfr.reject(reason);
    };

    // Benchmark id: 4 = Public_AR_Current
    // Vintage id: 4 = Current_Current
    url += `x=${lng}&y=${lat}&benchmark=4&vintage=4&layers=8,12,28,84,86&format=jsonp`;
    
    CitySdk.ajaxRequest(url, true).then((response) => {
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

      dfr.resolve(request);

    }, onRequestError);

    return dfr.promise();
  }
  
  static getGeographyVariables(request) {
    let url = `${defaultEndpoints.censusUrl}${request.year}/${request.api}/geography.json`;
    return CitySdk.ajaxRequest(url, false);
  }
}