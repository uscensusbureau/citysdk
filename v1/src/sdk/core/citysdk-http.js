import $ from 'jquery';
import Promise from 'promise';

const nodeEnv = typeof window === 'undefined' && typeof module !== 'undefined' && module.exports;
const request = nodeEnv ? require('request') : {};

export default class CitySdkHttp {
  static get(url, jsonp) {
    if (!nodeEnv) {
      return CitySdkHttp.ajaxGet(url, jsonp);
    }

    return new Promise((resolve, reject) => {
      request.get({url: url, rejectUnauthorized: false}, (error, response) => {
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

  static post(url, data) {
    if (!nodeEnv) {
      return CitySdkHttp.ajaxPost(url, data);
    }

    return new Promise((resolve, reject) => {
      request.post({url: url, form: data, rejectUnauthorized: false}, (error, response) => {
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

  static ajaxGet(url, jsonp) {
    return new Promise((resolve, reject) => {
      if (jsonp) {
        $.ajax({url: url, method: 'GET', dataType: 'jsonp'})
            .done((response) => resolve(response))
            .fail((reason) => reject(reason));

      } else {
        $.getJSON(url)
            .done((response) => resolve(response))
            .fail((reason) => reject(reason));
      }
    });
  }

  static ajaxPost(url, data) {
    return new Promise((resolve, reject) => {
      $.ajax({type: 'POST', url: url, data: data, dataType: 'json'})
          .done((response) => resolve(response))
          .fail((reason) => reject(reason));
    });
  }
}