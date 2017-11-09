// TO DO: deprecated & delete this file

// Dependencies
const mysql = require('mysql');

// Constructor
const dbHelper = function () { 
}

dbHelper.prototype.prepareQueryCommand = function (sql, params) {
 	return mysql.format(sql, params);
}

// Export
module.exports = new dbHelper;
