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

// common.createSalt=function ()
// {
// 	return crypto.randomBytes(16).toString('base64');
// }

// common.createHash=function (clearText,salt)
// {	
// 	return crypto.pbkdf2Sync(clearText, salt, 4096, 64, 'SHA1').toString('base64');
// }

common.imageFileFilter = function (req, file, callback) {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpg' && file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/gif') {
      var err = new Error();
      err.code = 'UNSUPPORTED_MEDIA_TYPE';
      return callback(err, false);
    }
    callback(null, true);
};

common.errorHandler = function (error) {
    let _error = {
        code: error.code,
        message: error.message
    }
    console.log(_error);
	return _error;
};

common.validateRating = function (rating) {
    var _rating = parseInt(rating);
    if (_rating > 0 && _rating < 10) return true;
    else return false;
};

common.validateEmail = function (email) {
    var regex = /\S+@\S+\.\S+/;
    if (regex.test(email)) return true;
    else return false;
};

common.validateNumber = function (value) {
    return true;
};

common.validateDate = function (value) {
    return true;
};

common.validateString = function (value) {
    return true;
};

module.exports = common;
