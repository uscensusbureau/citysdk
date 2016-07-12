const fs = require('fs');
const CodeMirror = require('codemirror');
const codeViewerTpl = fs.readFileSync(__dirname + '/code-viewer.html', 'utf-8');

require('../common');
require('codemirror/mode/htmlmixed/htmlmixed');

angular.module('citysdk.common').component('codeViewer', {
  template: codeViewerTpl,
  controller: CodeViewerCtrl,
  bindings: {content: '<'}
});

function CodeViewerCtrl($document) {
  let ctrl = this;
  let viewerEl = $document[0].getElementById('code-viewer');

  let viewer = CodeMirror(viewerEl, {
    mode: 'text/html',
    tabSize: 4,
    indentUnit: 4,
    smartIndent: true,
    lineNumbers: true,
    readOnly: true
  });

  viewer.setValue(ctrl.content);
}