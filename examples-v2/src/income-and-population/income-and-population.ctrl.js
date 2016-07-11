require('./income-and-population');
require('jquery');
require('terraformer-arcgis-parser');

const fs = require('fs');
const CitySdk = require('../../lib/citysdk');
const mapboxgl = require('mapbox-gl');
const popupTpl = fs.readFileSync(__dirname + '/templates/mapbox-popup.html', 'utf-8');

angular.module('citysdk.incomeAndPopulation')
    .controller('IncomeAndPopulationCtrl', IncomeAndPopulationCtrl);

mapboxgl.accessToken = 'pk.eyJ1IjoiYmFodGVqIiwiYSI6ImNpam5ib2ExdzAwZzR0OWtvYnFxMzl0eG4ifQ.k42YGkuwwfKRnNkV7Ij8tQ';

function IncomeAndPopulationCtrl($timeout, $filter, queryEditorService) {
  let ctrl = this;

  let map = new mapboxgl.Map({
    container: 'map-content',
    style: 'mapbox://styles/mapbox/light-v9',
    center: [-77.3, 38.9],
    zoom: 7.3
  });

  let incomeCode = CitySdk.aliasToVariable('income').income.variable;
  let populationCode = CitySdk.aliasToVariable('population').population.variable;

  ctrl.query = JSON.stringify({
    level: 'state',
    state: 'MD',
    sublevel: true,
    variables: ['income', 'population'],
    apikey: '88c69cd2d93fae30723c3ec3546d66521f339255'
  }, null, 4);

  queryEditorService.addSubscriber('IncomeAndPopulationCtrl', this);
  ctrl.queryEditorContentValid = true;

  ctrl.onQueryEditorContentChange = (editorContentValidity) => {
    ctrl.queryEditorContentValid = !!editorContentValidity;
  };

  ctrl.getData = () => {
    if (ctrl.queryEditorContentValid) {
      let request = JSON.parse(queryEditorService.getEditorContent());

      CitySdk.request(request).then((response) => {
        map.addSource('incomePop', {type: 'geojson', data: response});

        map.addLayer({
          'id': 'counties-fill',
          'type': 'fill',
          'source': 'incomePop',
          'paint': {
            'fill-color': 'rgba(117,117,117,0.2)'
          }
        });

        map.addLayer({
          'id': 'counties-outline',
          'type': 'line',
          'source': 'incomePop',
          'paint': {
            'line-color': 'rgba(117,117,117,0.6)',
            'line-width': 2
          }
        });

        map.addLayer({
          'id': 'route-hover',
          'type': 'fill',
          'source': 'incomePop',
          'layout': {},
          'paint': {
            'fill-color': 'rgba(117,117,117,0.6)'
          },
          'filter': ['==', 'name', '']
        });

        map.on('mousemove', (e) => {
          map.getCanvas().style.cursor = 'pointer';

          let features = map.queryRenderedFeatures(e.point, {layers: ['counties-fill']});

          if (features.length) {
            map.setFilter('route-hover', ['==', 'name', features[0].properties.name]);
          } else {
            map.setFilter('route-hover', ['==', 'name', '']);
          }
        });
        
        map.on('click', (e) => {
          let features = map.queryRenderedFeatures(e.point, { layers: ['counties-fill'] });
          if (!features.length) {
            return;
          }

          let feature = features[0];

          let popupContent = popupTpl.replace(/\$\{\w+\}/g, (match) => {
            switch(match) {
              case '${county}': return feature.properties.NAME;
              case '${income}': return $filter('currency')(feature.properties[incomeCode], '$', 0);
              case '${population}': return $filter('number')(feature.properties[populationCode]);
            }
          });

          new mapboxgl.Popup()
              .setLngLat(map.unproject(e.point))
              .setHTML(popupContent)
              .addTo(map);
        });

      }).catch((error) => {
        console.log(error.message);
        throw new Error(error);
      });
    }
  };

  $timeout(() => { ctrl.getData(); }, 1000);
}