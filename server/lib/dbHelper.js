// Dependencies
const mssql = require('mssql');

// Constructor
const dbHelper = function () { 
}

dbHelper.prototype.prepareQueryCommand = function (sql, params) {
 	return mssql.format(sql, params);
}

// // Validate Logic
// dbHelper.prototype.validateRating = function (rating) {
//     var _rating = parseInt(rating);
//     if (_rating > 0 && _rating < 10) return true;
//     else return false;
// }

// dbHelper.prototype.validateEmail = function (email) {
//     var regex = /\S+@\S+\.\S+/;
//     if (regex.test(email)) return true;
//     else return false;
// }

// dbHelper.prototype.validateNumber = function (value) {
//     return true;
// }

// dbHelper.prototype.validateDate = function (value) {
//     return true;
// }

// dbHelper.prototype.validateString = function (value) {
//     return true;
// }

// Export
module.exports = new dbHelper;
