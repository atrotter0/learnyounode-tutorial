// program.js
var myModule = require('./printFilesByExtension');
var filepath = process.argv[2];
var extension = process.argv[3];

myModule(filepath, extension, function(err, files) {
  if (err) return console.log(err);

  files.forEach(function(file) {
    console.log(file);
  });
});

// printFilesByExtension module:
var fs = require('fs');

module.exports = function(filepath, extension, callback) {
  fs.readdir(filepath, function(err, files) {
    if (err) return callback(err);

    var matchingFiles = [];
    files.forEach(function(file) {
      fileExtension = file.split('.')[1];
      if (fileExtension === extension) {
        matchingFiles.push(file);
      }
    });
    callback(null, matchingFiles);
  });
}
