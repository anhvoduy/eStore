// Dependencies
const mssql = require('mssql');

// Constructor
const dbHelper = function () { 
}

dbHelper.prototype.prepareQueryCommand = function (sql, params) {
 	return mssql.format(sql, params);
}

// Export
module.exports = new dbHelper;
