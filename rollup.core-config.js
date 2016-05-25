import json from 'rollup-plugin-json';

export default {
  entry: 'js/core/citysdk.new.js',
  format: 'umd',
  dest: 'dist/core/citysdk.js',
  moduleName: 'CitySDK',
  globals: {
    'jquery': '$',
    'terraformer': 'Terraformer',
    'terraformer-arcgis-parser': 'Terraformer.ArcGIS'
  },
  plugins: [json()]
}