var http = require('http');
var bl = require('bl');
var firstUrl = process.argv[2];
var secondUrl = process.argv[3];
var thirdUrl = process.argv[4];
var urlArray = [firstUrl, secondUrl, thirdUrl];
var results = [];
var count = 0;

function requestData(urlArray) {
  urlArray.forEach(function(url, index) {
    http.get(url, function(response) {
      response.pipe(bl(function(err, data) {
        results[index] = data.toString();
        count++;

        if (count === urlArray.length) {
          printResults();
        }
      }));
      response.on('error', console.error);
    }).on('error', console.error);
  });
}

function printResults() {
  results.forEach(function(result) {
    console.log(result);
  });
}

requestData(urlArray);
