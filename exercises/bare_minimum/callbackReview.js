/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('needle');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  fs.readFile(filePath, (err, fileData) => {
    if (err) {
      console.error(err);
      callback(err);
    } else {
      fileData = fileData.toString().split('\n');
      callback(null, fileData[0]);
    }
  })

};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO
  request.get(url, (err, response) => {
    if (err) {
      console.error(err);
      callback(err);
    } else {
      // console.log("response object: ", response);
      callback(null, response.statusCode);
    }

  })

};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
