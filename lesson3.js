var fs = require('fs');

function countNewlines(pathToFile) {
  var numOfNewlines = fs.readFileSync(pathToFile).toString().split('\n').length - 1;
  return numOfNewlines;
}

console.log(countNewlines(process.argv[2]));
