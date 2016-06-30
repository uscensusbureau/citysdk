const request = require('request');
const basicAuth = require('basic-auth');

export function validateApiKey(req, res, next) {
  let apikey = basicAuth(req);

  function unauthorized(res) {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    return res.sendStatus(401);
  }

  if (!apikey || !apikey.name) {
    return unauthorized(res);
  }

  let keyValidationUrl = 'http://api.census.gov/data/?key=' + apikey.name;

  request.get(keyValidationUrl, (error, response) => {
    if (error) {
      return unauthorized(res);
    }

    // If the key is valid, then a JSON
    // response is sent back by the services.
    // Otherwise, the services sends a message
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
}

export function decodeAuthHeader(req) {
  // The value is in the format 'Basic <base64_api_key:>'
  // Just want the <base64_api_key> part
  let authHeader = req.header('Authorization').split(' ');
  let base64ApiKey = authHeader[1];

  // Decode base64 services key
  let stringBuffer = new Buffer(base64ApiKey, 'base64');

  // The auth format is in the format username:password but we don't
  // use password and the services key is used as the username.
  // Here we're just extracting the username (services key) part.
  return stringBuffer.toString().split(':')[0];
}
