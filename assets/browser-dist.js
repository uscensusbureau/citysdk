const census = require('citysdk');

global.censusPromise = function(args) {
    return new Promise(function(resolve, reject) {
        census(args, function(err, json) {
            if (!err) {
                //console.log(json);
                resolve(json);
            } else {
                reject(err);
            }
        });
    });
};

global.census = census