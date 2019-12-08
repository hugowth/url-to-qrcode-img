var lineReader = require("line-reader");
var qrcode = require("qrcode");
var express = require("express");
var uuidv4 = require("uuidv4");
var app = express();

app.listen(3000, function() {
  lineReader.eachLine("file.txt", function(line, last) {
    createImage(line);
    if (last) {
      console.log("done");
    }
  });
});

const createImage = line => {
  qrcode.toFile("image/" + uuidv4() + ".jpg", line, { width: 200 }, function(
    err
  ) {
    if (err) throw err;
  });
};
