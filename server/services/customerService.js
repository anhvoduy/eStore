// Dependencies
var Q = require('q');
var dbHelper = require('../config/dbHelper');

// Constructor
var customerService = function () { 
}

customerService.prototype.getCustomers = function (ctx) {
	var sql = dbHelper.prepareQueryCommand('', []);
	return ctx.queryCommand(sql);
}

customerService.prototype.getCustomerById = function (ctx, customerId) {
	var sql = dbHelper.prepareQueryCommand('', [customerId]);
	return ctx.queryCommand(sql);
}

customerService.prototype.createCustomer = function (ctx, customer) {
	var sql = dbHelper.prepareQueryCommand('', []);
	return ctx.queryCommand(sql);
}

customerService.prototype.updateCustomer = function (ctx) {
	var sql = dbHelper.prepareQueryCommand('', []);
	return ctx.queryCommand(sql);
}

customerService.prototype.deleteCustomer = function (ctx) {
	var sql = dbHelper.prepareQueryCommand('', []);
	return ctx.queryCommand(sql);
}
// Export
module.exports = new customerService;