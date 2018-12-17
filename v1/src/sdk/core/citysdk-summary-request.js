import Promise from 'promise';

import CitySdkHttp from './citysdk-http';
import CitySdkRequestUtils from './citysdk-request-utils';

import requiredVariables from '../../resources/required-variables.json';

const defaultEndpoints = {
  acsVariableDictionaryURL: 'https://api.census.gov/data/',
  geoCoderUrl: 'https://geocoding.geo.census.gov/geocoder/geographies/',
  tigerwebUrl: 'https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/',
  censusUrl: 'https://api.census.gov/data/'
};

export default class CitySdkSummaryRequest {

  static parseSummaryResponse(request, response) {
    request.data = [];

    if (request.sublevel) {
      // If sublevel is set to true, our 'data' property
      // will be an array of objects for each sublevel item.
      let currentVariable;
      let currentResponseItem;
      let currentDataObject;

      for (let i = 1; i < response.length; i++) {
        currentDataObject = {};
        currentResponseItem = response[i];

        if (['sf1', 'sf3'].indexOf(request.api) && request.year.toString() == '1990') {
          // Hardcoded rule for decennial survey of 1990
          currentDataObject['name'] = currentResponseItem[response[0].indexOf('ANPSADPI')];
        } else {
          // ACS survey & SF survey not 1990
          currentDataObject['name'] = currentResponseItem[response[0].indexOf('NAME')];
        }

        let stateIndex = response[0].indexOf('state');
        let countyIndex = response[0].indexOf('county');
        let tractIndex = response[0].indexOf('tract');
        let blockGroupIndex = response[0].indexOf('block group');
        let placeIndex = response[0].indexOf('place');

        if (stateIndex >= 0) {
          currentDataObject['state'] = currentResponseItem[stateIndex];
        }

        if (countyIndex >= 0) {
          currentDataObject['county'] = currentResponseItem[countyIndex];
        }

        if (tractIndex >= 0) {
          currentDataObject['tract'] = currentResponseItem[tractIndex];
        }

        if (blockGroupIndex >= 0) {
          currentDataObject['blockGroup'] = currentResponseItem[blockGroupIndex];
        }

        if (placeIndex >= 0) {
          currentDataObject['place'] = currentResponseItem[placeIndex];
        }

        for (let j = 0; j < request.variables.length; j++) {
          currentVariable = request.variables[j];

          let validVariable = CitySdkRequestUtils.parseToValidVariable(currentVariable, request.api, request.year);
          let index = response[0].indexOf(validVariable);
          let intermediateVar = currentResponseItem[index];

          if (intermediateVar) {
            currentDataObject[currentVariable] = intermediateVar;
          }

          // Variable is Normalizeable
          if (intermediateVar && CitySdkRequestUtils.isNormalizable(currentVariable)
              && CitySdkRequestUtils.parseToValidVariable('population', request.api, request.year)) {

            let validVariable = CitySdkRequestUtils.parseToValidVariable('population', request.api, request.year);
            let index = response[0].indexOf(validVariable);
            let property = currentVariable + '_normalized';

            currentDataObject[property] = currentDataObject[currentVariable] / currentResponseItem[index];
          }
        }

        request.data.push(currentDataObject);
      }
    } else {
      // We don't have sublevel, so we just grab the single response
      let currentVariable;
      let currentDataObject = {};

      for (let i = 0; i < request.variables.length; i++) {
        currentVariable = request.variables[i];

        if (CitySdkRequestUtils.parseToValidVariable(currentVariable, request.api, request.year)) {
          let validVariable = CitySdkRequestUtils.parseToValidVariable(currentVariable, request.api, request.year);
          let index = response[0].indexOf(validVariable);

          currentDataObject[currentVariable] = response[1][index];
        }

        if (currentDataObject[currentVariable] && CitySdkRequestUtils.isNormalizable(currentVariable)
            && CitySdkRequestUtils.parseToValidVariable('population', request.api, request.year)) {

          let validVariable = CitySdkRequestUtils.parseToValidVariable('population', request.api, request.year);
          let index = response[1].indexOf(validVariable);
          let property = currentVariable + '_normalized';

          currentDataObject[property] = currentDataObject[currentVariable] / response[1][index];
        }

        request.data.push(currentDataObject);
      }
    }

    delete request.geocoded;
    
    return request;
  }

  static request(request) {
    let cascade = false;
    let qualifiers = 'for=';

    if (request.sublevel) {
      let level = (request.level === 'blockGroup') ? 'block+group' : request.level;

      switch (request.container) {
        case 'us':
          qualifiers += level + ':*';
          break;
        case 'place':
        case 'state':
          qualifiers += level + `:*&in=state:${request.state}`;
          if (request.level == 'blockGroup') {
            qualifiers += `+county:${request.county}`;
          }
          break;
        case 'county':
          qualifiers += level + `:*&in=county:${request.county}+state:${request.state}`;
          break;
        case 'tract':
          qualifiers += level + `:*&in=tract:${request.tract}+county:${request.county}+state:${request.state}`;
          break;
      }
    }

    // Only do this if the previous switch had no effect
    // (i.e. no contianer)
    if (qualifiers == 'for=') {
      switch (request.level) {
        case 'us':
          // If sublevel, add the appropriate for and attach the in
          if (request.sublevel) {
            qualifiers += 'state:*';
            cascade = true;
          } else {
            qualifiers += 'us:1';
          }

          break;
        case 'blockGroup':
          if (request.sublevel) {
            // Can't do this. No levels beneath. We'll set the sublevel to false here
            request.sublevel = false;
          }

          qualifiers += `block+Group:${request.blockGroup}`;

          if (!cascade) {
            qualifiers += '&in=';
            cascade = true;
          }

        case 'tract':
          // If sublevel, add the appropriate for and attach the in
          // We also check the cascade tag so we don't do this twice.
          if (request.sublevel && !cascade) {
            qualifiers += 'block+Group:*&in=';
            cascade = true;
          }

          qualifiers += `tract:${request.tract}`;

          if (!cascade) {
            qualifiers += '&in=';
            cascade = true;
          } else {
            qualifiers += '+';
          }

        case 'county':
          // If sublevel, add the appropriate for and attach the in
          // We also check the cascade tag so we don't do this twice.
          if (request.sublevel && !cascade) {
            qualifiers += 'tract:*&in=';
            cascade = true;
          }

          qualifiers += `county:${request.county}`;
          if (!cascade) {
            qualifiers += '&in=';
            cascade = true;
          } else {
            qualifiers += '+';
          }

        case 'place':
          // If sublevel, add the appropriate for and attach the in
          // Check for cascade so we don't do this twice
          if (request.sublevel && !cascade) {
            qualifiers += 'place:*&in=';
            cascade = true;

          } else if (!cascade) {
            //We only use place in the for, for the moment
            qualifiers += `place:${request.place}&in=`;
            cascade = true;
          }

        case 'state':
          // If sublevel, add the appropriate for and attach the in
          // We also check the cascade tag so we don't do this twice.
          if (request.sublevel && !cascade) {
            qualifiers += 'county:*&in=';
            cascade = true;
          }

          qualifiers += `state:${request.state}`;
          break;
      }
    }

    for (let variable of request.variables) {
      if (CitySdkRequestUtils.isNormalizable(variable)) {
        // add acs population variable
        if (request.variables.indexOf('population') < 0) {
          //We have a variable that is normalizable, but no population in the request.
          //Grab the population
          request.variables.push('population');
        }

        //We have normalizable variables AND a request for population, we can break the for loop now
        break;
      }
    }
    
    let variables = request.variables;
    let hasPopulation = false;
    
    for (let i = 0; i < variables.length; i++) {
      if (CitySdkRequestUtils.isNormalizable(variables[i]) && !hasPopulation) {
        // add acs population variable
        if (request.variables.indexOf('population') < 0) {
          //We have a variable that is normalizable, but no population in the request.
          //Grab the population
          request.variables.push('population');
        }

        hasPopulation = true;
      }

      // Convert the aliased variables
      let variableIntermediate = CitySdkRequestUtils
          .parseToValidVariable(request.variables[i], request.api, request.year);
      
      if (variableIntermediate) {
        request.variables[i] = variableIntermediate;
      }
    }

    // Add the Required Variables
    if (requiredVariables[request.api] && requiredVariables[request.api][request.year]) {
      for (var i = 0; i < requiredVariables[request.api][request.year].length; i++) {
        if (request.variables.indexOf(requiredVariables[request.api][request.year][i]) === -1) {
          request.variables.unshift(requiredVariables[request.api][request.year][i]);
        }
      }
    }

    // Add the variables to request string
    let variableString = request.variables.join(',');

    // URL for ACS5 request (summary file)
    var url = defaultEndpoints.censusUrl;
    url += `${request.year}/${request.api}?get=${variableString}&${qualifiers}&key=${request.apikey}`;

    let promiseHandler = (resolve, reject) => {
      CitySdkHttp.get(url, false).then((response) => {
        request = CitySdkSummaryRequest.parseSummaryResponse(request, response);
        resolve(request);
        
      }).catch((reason) => reject(reason));
    };

    return new Promise(promiseHandler);
  }
}