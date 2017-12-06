'use strict';
var path = require("path");
var base64 = require("base-64");
var utf8 = require("utf8");

var common = {};

common.encoded = function(text){    
    var bytes = utf8.encode(text);
    var encoded = base64.encode(bytes); 
    return encoded;
};

common.imageFileFilter = function (req, file, callback) {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpg' && file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/gif') {
      var err = new Error();
      err.code = 'UNSUPPORTED_MEDIA_TYPE';
      return callback(err, false);
    }
    callback(null, true);
};

module.exports = common;
