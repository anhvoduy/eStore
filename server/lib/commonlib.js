var path = require("path");
var base64 = require("base-64");
var utf8 = require("utf8");

var common = {};

common.encoded = function(text){    
    var bytes = utf8.encode(text);
    var encoded = base64.encode(bytes); 
    return encoded;
};

module.exports = common;
