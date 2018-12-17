import Promise from 'promise';

import CitySdk from './citysdk';
import CitySdkHttp from './citysdk-http';

import servers from '../../resources/servers.json'
import usBoundingBox from '../../resources/us-bounds.json';

const defaultTigerwebApi = 'current';
const spatialReferenceCode = 4326;

export default class CitySdkTigerwebRequest {

  static getContainerGeometry(request) {
    let mapServer = request.tigerwebApiInfo.mapServers[request.container];
    let tigerwebUrl = request.tigerwebApiInfo.url.replace('{mapserver}', mapServer);
    let tigerwebRequest = request.tigerwebRequest;

    tigerwebRequest.geometry = request.lng + "," + request.lat;
    tigerwebRequest.geometryType = "esriGeometryPoint";
    tigerwebRequest.spatialRel = "esriSpatialRelIntersects";

    let promiseHandler = (resolve, reject) => {
      CitySdkHttp.post(tigerwebUrl, tigerwebRequest).then((response) => {
        let features = response.features;

        // Grab our container ESRI geography, attach it to our request,
        // and call this function again.
        if (request.container.toLowerCase() === "us") {
          request.containerGeometry = CitySdk.geoToEsri(usBoundingBox)[0].geometry;
        } else {
          request.containerGeometry = features[0].geometry;
        }

        resolve(request);
      }).catch((reason) => reject(reason));
    };

    return new Promise(promiseHandler);
  }

  static getGeoData(request) {
    // We have a sublevel request with a container,
    // AND we've already grabbed the container's ESRI json
    let mapServer = request.tigerwebApiInfo.mapServers[request.level];
    let tigerwebUrl = request.tigerwebApiInfo.url.replace('{mapserver}', mapServer);
    let tigerwebRequest = request.tigerwebRequest;
    
    tigerwebRequest.geometry = JSON.stringify(request.containerGeometry);
    tigerwebRequest.geometryType = "esriGeometryPolygon";

    tigerwebRequest.spatialRel = request.container === "place" || request.container === "geometry"
        ? "esriSpatialRelIntersects"
        : "esriSpatialRelContains";

    let promiseHandler = (resolve, reject) => {
      CitySdkHttp.post(tigerwebUrl, tigerwebRequest).then((response) => {
        resolve(response);
      }).catch((reason) => reject(reason));
    };

    return new Promise(promiseHandler);
  }

  static request(request) {
    if (!request.tigerwebApi) {
      request.tigerwebApi = defaultTigerwebApi;
    }

    request.tigerwebApiInfo = servers[request.tigerwebApi];
    request.tigerwebRequest = {
      f: "json",
      where: "",
      outFields: "*",
      outSR: spatialReferenceCode,
      inSR: spatialReferenceCode
    };

    const sublevelRequested = request.hasOwnProperty('sublevel') && request.sublevel;

    let promiseHandler = (resolve, reject) => {
      if (request.container && sublevelRequested && !request.containerGeometry) {
        CitySdkTigerwebRequest.getContainerGeometry(request)
            .then(CitySdkTigerwebRequest.getGeoData)
            .then((response) => resolve({response: CitySdk.esriToGeo(response), request: request}))
            .catch((reason) => reject(reason));
        
      } else if (sublevelRequested) {
        request.container = request.level;

        switch (request.level) {
          case 'us':
            request.level = 'state';
            break;
          case 'state':
            request.level = 'county';
            break;
          case 'county':
          case 'place':
            request.level = 'tract';
            break;
          default:
            request.level = 'blockGroup';
        }

        CitySdkTigerwebRequest.getContainerGeometry(request)
            .then(CitySdkTigerwebRequest.getGeoData)
            .then((response) => resolve({response: CitySdk.esriToGeo(response), request: request}))
            .catch((reason) => reject(reason));
        
      } else {
        let mapServer = request.tigerwebApiInfo.mapServers[request.level];
        let tigerwebUrl = request.tigerwebApiInfo.url.replace('{mapserver}', mapServer);
        let tigerwebRequest = request.tigerwebRequest;

        tigerwebRequest.geometry = request.lng + "," + request.lat;
        tigerwebRequest.geometryType = "esriGeometryPoint";
        tigerwebRequest.spatialRel = "esriSpatialRelIntersects";

        CitySdkHttp.post(tigerwebUrl, tigerwebRequest)
            .then((response) => resolve({response: CitySdk.esriToGeo(response), request: request}))
            .catch((reason) => reject(reason));
      }
    };

    return new Promise(promiseHandler);
  }
}