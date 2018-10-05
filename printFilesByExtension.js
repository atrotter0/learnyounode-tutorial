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
