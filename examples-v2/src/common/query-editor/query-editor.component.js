const CodeMirror = require('codemirror');

require('codemirror/mode/javascript/javascript');
require('codemirror/addon/lint/lint');

const fs = require('fs');
const queryEditorTpl = fs.readFileSync(__dirname + '/query-editor.html');

require('../common');

function validateEditorContent(content) {
  try {
    JSON.parse(content);
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
    lineNumbers: true,
    gutters: ["CodeMirror-lint-markers"]
  });

  ctrl.editorContent = '{\n"level": "county"\n}';
  ctrl.contentValid = true;
  ctrl.editorErrorMessage = '';

  editor.setValue(ctrl.editorContent);
  editor.execCommand('selectAll');
  editor.execCommand('indentAuto');
  editor.setCursor({line: 3, ch: 1});

  queryEditorService.setContentValid(true);
  queryEditorService.setEditorContent(ctrl.editorContent);

  editor.on('change', () => {
    let editorContent = editor.getValue();
    let contentState = validateEditorContent(editorContent);

    $timeout(() => {
      ctrl.contentValid = contentState.valid;
      queryEditorService.setContentValid(ctrl.contentValid);
      queryEditorService.setEditorContent(editorContent);

      if (contentState.valid) {
        ctrl.editorContent = editorContent;
      } else {
        ctrl.editorErrorMessage = contentState.error.message;
      }
    });
  });
}

angular.module('citysdk.common').component('queryEditor', {
  template: queryEditorTpl,
  controller: QueryEditorCtrl
});