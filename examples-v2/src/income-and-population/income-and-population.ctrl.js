require('./income-and-population');
require('jquery');
require('terraformer-arcgis-parser');

const CitySdk = require('../../lib/citysdk');

angular.module('citysdk.incomeAndPopulation')
    .controller('IncomeAndPopulationCtrl', IncomeAndPopulationCtrl);

function IncomeAndPopulationCtrl(queryEditorService) {
  let ctrl = this;

  queryEditorService.addSubscriber('IncomeAndPopulationCtrl', this);
  ctrl.queryEditorContentValid = true;

  ctrl.onQueryEditorContentChange = (editorContentValidity) => {
    ctrl.queryEditorContentValid = !!editorContentValidity;
  };

  ctrl.getData = () => {
    if (ctrl.queryEditorContentValid) {
      let request = JSON.parse(queryEditorService.getEditorContent());
      console.log(request);
      CitySdk.request(request).then((response) => {
        console.log(response);
      }).catch((error) => {
        console.log(error);
      });
    }
  }
}