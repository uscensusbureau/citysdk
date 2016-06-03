/**
 * @private
 * @type boolean
 */
let cacheSupported;

export default class CacheSupport {

  /**
   * @constructor
   */
  constructor(citysdk) {
    this.citysdk = citysdk;

    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

    if (!window.indexedDB) {
      cacheSupported = false;
    }
  }

  openIndexedDb() {
    let citysdk = this.citysdk;
    let openRequest = window.indexedDB.open("CitySDKdb", 1);

    openRequest.onupgradeneeded = function(e) {
      citysdk.CitySDKdb = e.target.result;

      if (!citysdk.CitySDKdb.objectStoreNames.contains("citySDKCache")) {
        let objectStore = citysdk.CitySDKdb.createObjectStore("citySDKCache", {autoIncrement: true});
        objectStore.createIndex("cacheKeys", ["module", "functionName", "hashKey"], {unique: false});
      }
    };

    openRequest.onsuccess = function(e) {
      citysdk.CitySDKdb = e.target.result;
    };

    openRequest.onerror = function(e) {
      console.log("Error! could not open request to CitySDKdb.");
      console.dir(e);
    }
  }

  /**
   * @function getData
   * @description Retrieves a value from the cache
   *
   * @param {string} module name of the CitySDK module
   * @param {string} functionName
   * @param {string} hashKey this is a key that identifies the data. Each module has its own hashing scheme.
   * @param {function} callback
   *
   * @return {object} the value of the cached data.  Returns false if nothing found
   *
   * @todo This function needs to return a promise. This, way there's no need to accept a callback.
   */
  getData(module, functionName, hashKey, callback) {
    if (typeof module == "undefined" || typeof hashKey == "undefined"
        || module == "" || hashKey == "" || this.allowCache == false) {

      callback(null);
      return null;
    }

    let citysdk = this.citysdk;
    let openRequest = window.indexedDB.open("CitySDKdb", 1);

    openRequest.onsuccess = function(e) {
      citysdk.CitySDKdb = e.target.result;

      // In your query section
      let transaction = citysdk.CitySDKdb.transaction(["citySDKCache"], 'readonly');
      let store = transaction.objectStore('citySDKCache');
      let index = store.index('cacheKeys');

      // Select the first matching record
      let request = index.get(IDBKeyRange.only([module, functionName, hashKey]));

      request.onerror = function() {
        return null;
      };

      request.onsuccess = function(e) {
        let result = e.target.result;

        if (result) {
          if (callback && typeof callback === 'function') {
            callback(result.data);
          }

          return result.data;

        } else {
          if (callback && typeof callback === 'function') {
            callback(null);
          }

          return null;
        }
      }
    }
  }

  /**
   * @function setData
   * @description Creates and/or Updates a value from the cache
   *
   * @param {string} module name of the CitySDK module
   * @param {string} functionName
   * @param {string} hashKey this is a key that identifies the data. Each module has its own hashing scheme.
   * @param {object} dataValue this is the data being stored.  It should be an object that contains both the
   * specific data and any meta information needed to invalidate it.
   *
   * @return {object} the value of the cached data.  Returns false if nothing found
   */
  setData(module, functionName, hashKey, dataValue) {
    let citysdk = this.citysdk;

    if (module && hashKey && functionName && dataValue && citysdk.allowCache) {
      // CitySDKdb CitySDKdb citySDKCache
      let storeData = {"module": module, "functionName": functionName, "hashKey": hashKey, "data": dataValue};
      let openRequest = indexedDB.open("CitySDKdb", 1);

      openRequest.onsuccess = function(e) {
        citysdk.CitySDKdb = e.target.result;

        let transaction = citysdk.CitySDKdb.transaction(["citySDKCache"], "readwrite");
        let store = transaction.objectStore("citySDKCache");

        store.add(storeData);
      };

      return true;

    }

    return false;
  }

  /**
   * @function deleteData
   * @description Deletes a value from the cache
   * 
   * @param {string} module name of the CitySDK module
   * @param {string} functionName
   * @param {string} hashKey this is a key that identifies the data. Each module has its own hashing scheme.
   * 
   * @return {object} the value of the cached data.  Returns false if nothing found
   */
  deleteData(module, functionName, hashKey) {
    let citysdk = this.citysdk;
    
    if (module && hashKey && citysdk.allowCache) {
      // CitySDKdb CitySDKdb citySDKCache
      var openRequest = indexedDB.open("CitySDKdb", 1);

      openRequest.onsuccess = function(e) {
        citysdk.CitySDKdb = e.target.result;
        
        var transaction = city.CitySDKdb.transaction(["citySDKCache"], "readwrite");
        var store = transaction.objectStore("citySDKCache");
        
        store.delete(IDBKeyRange.only([module, functionName, hashKey]));
      };

      return true;
    }
    
    return false;
  }

  /**
   * @description Checks to see whether local storage is available
   * @function storageAvailablefunction
   *
   * @param {string} type the tyoe fo storage being tested. Generally 'localstorage' is used.
   *
   * @return {boolean} true if storage type is available
   */
  static storageAvailablefunction(type) {
    try {
      let storage = window[type];
      let x = '__storage_test__';

      storage.setItem(x, x);
      storage.removeItem(x);

      return true;

    } catch (e) {
      return false;
    }
  }

  static indexedDBSupported() {
    return cacheSupported;
  }
}