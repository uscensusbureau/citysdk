export default {
  entry: 'js/core/citysdk.new.js',
  format: 'umd',
  dest: 'dist/citysdk.js',
  moduleName: 'CitySDK',
  globals: {
    'jquery': '$',
    'terraformer': 'Terraformer',
    'terraformer-arcgis-parser': 'Terraformer.ArcGIS'
  }
}