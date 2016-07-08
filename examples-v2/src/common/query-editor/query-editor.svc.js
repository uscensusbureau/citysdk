require('../common');

angular.module('citysdk.common').factory('queryEditorService', () => {
  let content;
  let contentValid;
  let subscribers = {};

  return {
    getEditorContent: getEditorContent,
    setEditorContent: setEditorContent,
    getContentValid: getContentValid,
    setContentValid: setContentValid,
    addSubscriber: addSubscriber,
    removeSubscriber: removeSubscriber
  };

  function getEditorContent() {
    return content;
  }

  function setEditorContent(updatedContent) {
    content = updatedContent;
    
    for (let subscriber in subscribers) {
      if (subscribers.hasOwnProperty(subscriber)) {
        subscribers[subscriber].onQueryEditorContentChange(contentValid);
      }
    }
  }
  
  function getContentValid() {
    return contentValid;
  }
  
  function setContentValid(validity) {
    contentValid = validity;
  }
  
  function addSubscriber(name, subscriber) {
    subscribers[name] = subscriber;
  }
  
  function removeSubscriber(name) {
    delete subscribers[name];
  }
});