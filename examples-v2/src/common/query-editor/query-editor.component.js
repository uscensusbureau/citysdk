const CodeMirror = require('codemirror');

require('../common');
require('codemirror/mode/javascript/javascript');
require('codemirror/addon/lint/lint');

const fs = require('fs');
const queryEditorTpl = fs.readFileSync(__dirname + '/query-editor.html');

const fields = {
  lat: 'lat',
  lng: 'lng',
  level: 'level',
  sublevel: 'sublevel',
  state: 'state',
  zip: 'zip',
  container: 'container',
  containerGeometry: 'containerGeometry',
  api: 'api',
  year: 'year',
  apikey: 'apikey',
  variables: 'variables'
};

function validateEditorContent(content) {
  try {
    let validJson = JSON.parse(content);

    for (let field in validJson) {
      if (!fields.hasOwnProperty(field)) {
        throw new Error(`Invalid field ${field}`);
      }
    }

  } catch (error) {
    return {valid: false, error: error};
  }

  return {valid: true}
}

function QueryEditorCtrl($document, $timeout, queryEditorService) {
  let ctrl = this;
  let editorEl = $document[0].getElementById('query-editor');

  let editor = CodeMirror(editorEl, {
    mode: 'application/json',
    tabSize: 4,
    indentUnit: 4,
    smartIndent: true,
    lineNumbers: true
  });

  ctrl.contentValid = true;
  ctrl.editorErrorMessage = '';

  editor.setValue(ctrl.query);
  editor.execCommand('selectAll');
  editor.execCommand('indentAuto');
  editor.setCursor({line: 3, ch: 1});

  queryEditorService.setContentValid(true);
  queryEditorService.setEditorContent(ctrl.query);

  editor.on('change', () => {
    let editorContent = editor.getValue();
    let contentState = validateEditorContent(editorContent);

    $timeout(() => {
      ctrl.contentValid = contentState.valid;
      queryEditorService.setContentValid(ctrl.contentValid);
      queryEditorService.setEditorContent(editorContent);

      if (contentState.valid) {
        ctrl.query = editorContent;
      } else {
        ctrl.editorErrorMessage = contentState.error.message;
      }
    });
  });
}

angular.module('citysdk.common').component('queryEditor', {
  bindings: {
    query: '<'
  },
  template: queryEditorTpl,
  controller: QueryEditorCtrl
});