var fs = require('fs');

function countNewlinesAsync(pathToFile) {
  fs.readFile(pathToFile, readAndCount);
}

function readAndCount(error, fileContents) {
  if (error) return console.log(error);

  var count = fileContents.toString().split('\n').length - 1;
  return console.log(count);
}

countNewlinesAsync(process.argv[2]);
