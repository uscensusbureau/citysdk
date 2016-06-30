import Promise from 'promise';

import CitySdkRequestUtils from './citysdk-request-utils';

import availableDatasets from '../../resources/available-datasets.json';


// Defaults
const defaultApi = 'acs5';
const defaultLevel = 'blockGroup';
const defaultSublevel = false;

// Valid levels
const levels = new Set(['blockGroup', 'tract', 'county', 'state', 'us', 'place']);

export default class CitySdkRequestValidator {
  constructor() {}

  static validateApi(request) {
    if (!request.api) {
      request.api = defaultApi;
    }
    
    return this;
  }
  
  static validateApiYear(request) {
    // Check if api is valid.
    if (availableDatasets[request.api]) {
      // Get available years for this api and sort the them in
      // ascending order.
      let availableApiYears = availableDatasets[request.api].sort();

      // If the request year was not provided or if it is invalid, set it to
      // the most recent year that is available for the requested api.
      if (!request.year || isNaN(+request.year) || availableApiYears.indexOf(request.year) === -1) {
        request.year = availableApiYears[availableApiYears.length - 1];
      }
    }
    
    return this;
  }

  static validateLevel(request) {
    if (!request.level || !levels.has(request.level)) {
      request.level = defaultLevel;
    }
    
    return this;
  }
  
  static validateSublevel(request) {
    if (request.hasOwnProperty('sublevel')) {
      if ((typeof request.sublevel) !== 'boolean') {
        request.sublevel = request.sublevel === 'true';
      }
    } else {
      request.sublevel = defaultSublevel;
    }

    return this;
  }

  static validate(request) {
    this.validateApi(request)
        .validateApiYear(request)
        .validateLevel(request)
        .validateSublevel(request);
    
    return request;
  }
  
  static validateGeoVariables(request) {
    let promiseHandler = (resolve, reject) => {
      CitySdkRequestUtils.getGeographyVariables(request).then((response) => {
        let fips = response.fips;
        let level = request.level;
        let valid = false;
        let requiredFields;

        if (level === 'blockGroup') {
          level = 'block group'
        }

        for (let value of fips) {
          if (value.name === level) {
            valid = true;
            let requires = value.requires;

            if (requires && requires.length) {
              for (let required of requires) {
                if (!request.hasOwnProperty(required)) {
                  valid = false;
                  break;
                }
              }
            }

            // Required fields are missing in the request.
            // Save them so that we can inform the user by
            // adding them to the error.
            if (!valid) {
              requiredFields = requires.join(', ');
            }

            break;
          }
        }

        request.geographyValidForAPI = valid;

        if (valid) {
          resolve(request);
        } else {
          if (requiredFields) {
            reject(new Error(`Request is missing required fields: ${requiredFields}.`));
          } else {
            reject(new Error(`Invalid level "${level}" for this request.`));
          }
        }
      }).catch((reason) => reject(reason));
    };

    return new Promise(promiseHandler);
  }
}