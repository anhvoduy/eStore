// Dependencies
var dbHelper = require('../config/dbHelper');
var q = require('q');

// Constructor
var transactionService = function () { 
}

transactionService.prototype.createCash = function (ctx, cash) {
	var sql = dbHelper.prepareQueryCommand(" ", []);
	return ctx.queryCommand(sql);
}

transactionService.prototype.editCash = function (ctx, cash) {
	var sql = dbHelper.prepareQueryCommand(" ", []);
	return ctx.queryCommand(sql);
}

transactionService.prototype.deleteCash = function (ctx, cashId) {
	var sql = dbHelper.prepareQueryCommand("", []);
	return ctx.queryCommand(sql);
}

// Export
module.exports = new transactionService;
