import $ from 'jquery';

import CitySdk from './citysdk';

import servers from '../../resources/servers.json'
import usBoundingBox from '../../resources/us-bounds.json';

const defaultTigerwebApi = 'current';
const spatialReferenceCode = 4326;

export default class CensusTigerwebRequest {

  static getContainerGeometry(request) {
    let dfr = $.Deferred();
    let mapServer = request.tigerwebApi.mapServers[request.container];
    let tigerwebUrl = request.tigerwebApi.url.replace('{mapserver}', mapServer);
    let tigerwebRequest = request.tigerwebApi.request;

    tigerwebRequest.geometry = request.lng + "," + request.lat;
    tigerwebRequest.geometryType = "esriGeometryPoint";
    tigerwebRequest.spatialRel = "esriSpatialRelIntersects";

    let onRequestError = (reason) => {
      dfr.reject(reason);
    };

    CitySdk.postRequest(tigerwebUrl, tigerwebRequest).then((response) => {
      let features = response.features;

      // Grab our container ESRI geography, attach it to our request,
      // and call this function again.
      if (request.container.toLowerCase() === "us") {
        request.containerGeometry = CitySdk.geoToEsri(usBoundingBox)[0].geometry;
      } else {
        request.containerGeometry = features[0].geometry;
      }

      dfr.resolve(request);
    }, onRequestError);

    return dfr.promise();
  }

  static getGeoData(request) {
    // We have a sublevel request with a container,
    // AND we've already grabbed the container's ESRI json
    let dfr = $.Deferred();
    let mapServer = request.tigerwebApi.mapServers[request.level];
    let tigerwebRequest = request.tigerwebApi.request;
    let tigerwebUrl = request.tigerwebApi.url.replace('{mapserver}', mapServer);
    
    let onRequestError = (reason) => {
      dfr.reject(reason);
    };

    tigerwebRequest.geometry = JSON.stringify(request.containerGeometry);
    tigerwebRequest.geometryType = "esriGeometryPolygon";

    tigerwebRequest.spatialRel = request.container === "place" || request.container === "geometry"
        ? "esriSpatialRelIntersects"
        : "esriSpatialRelContains";

    CitySdk.postRequest(tigerwebUrl, tigerwebRequest).then((response) => {
      dfr.resolve(response);
    }, onRequestError);

    return dfr.promise();
  }

  static request(request) {
    let dfr = $.Deferred();
    let api = request.tigerwebApi;

    if (!api) {
      api = defaultTigerwebApi;
    }

    request.tigerwebApi = servers[api];
    request.tigerwebApi.request = {
      f: "json",
      where: "",
      outFields: "*",
      outSR: spatialReferenceCode,
      inSR: spatialReferenceCode
    };

    const sublevelRequested = request.hasOwnProperty('sublevel') && request.sublevel;

    let onRequestError = (reason) => {
      dfr.reject(reason);
    };

    let onRequestSuccess = (response) => {
      dfr.resolve({response: CitySdk.esriToGeo(response), request: request});
    };

    if (request.container && sublevelRequested && !request.containerGeometry) {
      CensusTigerwebRequest.getContainerGeometry(request)
          .then(CensusTigerwebRequest.getGeoData, onRequestError)
          .then(onRequestSuccess, onRequestError);
    }
    else if (sublevelRequested) {
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

      this.getContainerGeometry(request)
          .then(CensusTigerwebRequest.getGeoData, onRequestError)
          .then(onRequestSuccess, onRequestError);
    }
    else {
      let mapServer = request.tigerwebApi.mapServers[request.level];
      let tigerwebUrl = request.tigerwebApi.url.replace('{mapserver}', mapServer);
      let tigerwebRequest = request.tigerwebApi.request;

      tigerwebRequest.geometry = request.lng + "," + request.lat;
      tigerwebRequest.geometryType = "esriGeometryPoint";
      tigerwebRequest.spatialRel = "esriSpatialRelIntersects";

      CitySdk.postRequest(tigerwebUrl, tigerwebRequest)
          .then(onRequestSuccess, onRequestError);
    }

    return dfr.promise();
  }
}