require('./income-and-population');

angular.module('citysdk.incomeAndPopulation')
    .controller('IncomeAndPopulationCtrl', IncomeAndPopulationCtrl);

function IncomeAndPopulationCtrl(queryEditorService) {
  let ctrl = this;

  queryEditorService.addSubscriber('IncomeAndPopulationCtrl', this);
  ctrl.queryEditorContentValid = true;

  ctrl.onQueryEditorContentChange = (editorContentValidity) => {
    ctrl.queryEditorContentValid = !!editorContentValidity;
    console.log(ctrl.queryEditorContentValid);
    console.log(JSON.parse(queryEditorService.getEditorContent()));
  }
}