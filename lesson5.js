var fs = require('fs');
var filepath = process.argv[2];
var extension = process.argv[3];

function printFilesByExtension() {
  fs.readdir(filepath, readAndCount);
}

function readAndCount(err, files) {
  if (err) console.log(err);

  files.forEach(function(file) {
    fileExtension = file.split('.')[1];
    if (fileExtension === extension) {
      console.log(file);
    }
  });
}

printFilesByExtension();
