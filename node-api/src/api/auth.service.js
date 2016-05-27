var request = require('request');
var basicAuth = require('basic-auth');

module.exports = function(req, res, next) {
  var apikey = basicAuth(req);

  function unauthorized(res) {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    return res.send(401);
  }

  if (!apikey || !apikey.name) {
    return unauthorized(res);
  }

  var keyValidationUrl = 'http://api.census.gov/data/?key=' + apikey.name;

  request.get(keyValidationUrl, function(error, response) {
    if (error) {
      return unauthorized(res);
    }

    // If the key is valid, then a JSON
    // response is sent back by the api.
    // Otherwise, the api sends a message
    // wrapped in HTML.
    try {
      JSON.parse(response.body);

      // Success, valid JSON was return
      // move on to the actual route requested
      // by the user.
      return next();
    } catch (e) {
      // HTML with error message returned.
      return unauthorized(res);
    }
  });
};