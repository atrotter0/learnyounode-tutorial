var http = require('http');
var bl = require('bl');
var url = process.argv[2];

http.get(url, function(response) {
  response.pipe(bl(function(err, data) {
    var stringData = data.toString();
    var charCount = stringData.split('').length;
    console.log(charCount);
    console.log(stringData);
  }));
  response.on('error', console.error);
}).on('error', console.error);
