// Dependencies
var mysql = require('mysql');

// Constructor
var dbHelper = function () { 
}

dbHelper.prototype.prepareQueryCommand = function (sql, params) {
	return mysql.format(sql, params);
}

// Validate Logic
dbHelper.prototype.validateRating = function (rating) {
    var _rating = parseInt(rating);
    if (_rating > 0 && _rating < 10) return true;
    else return false;
}

dbHelper.prototype.validateEmail = function (email) {
    var regex = /\S+@\S+\.\S+/;
    if (regex.test(email)) return true
    else return false;
}

// Export
module.exports = new dbHelper;
