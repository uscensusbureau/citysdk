export default {
  entry: 'js/modules',
  format: 'umd',
  dest: 'dist/modules',
  globals: {
    'jquery': '$'
  },
  plugins: [json()]
}