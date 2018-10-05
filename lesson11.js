var http = require('http');
var fs = require('fs');
var portNumber = process.argv[2];
var fileToServe = process.argv[3];

http.createServer(function(req, res) {
  res.writeHead(200, { 'content-type' : 'text/plain' });
  fs.createReadStream(fileToServe).pipe(res);
}).listen(portNumber);
