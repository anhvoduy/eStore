// Dependencies
var Q = require('q');
var dbHelper = require('../config/dbHelper');

// Constructor
var factory = function () { 
}

factory.prototype.getCustomers = function (ctx) {
	var sql = dbHelper.prepareQueryCommand('', []);
	return ctx.queryCommand(sql);
}

factory.prototype.getCustomerById = function (ctx, customerId) {
	var sql = dbHelper.prepareQueryCommand('', [customerId]);
	return ctx.queryCommand(sql);
}

factory.prototype.createCustomer = function (ctx, customer) {
	var sql = dbHelper.prepareQueryCommand('', []);
	return ctx.queryCommand(sql);
}

factory.prototype.updateCustomer = function (ctx) {
	var sql = dbHelper.prepareQueryCommand('', []);
	return ctx.queryCommand(sql);
}

factory.prototype.deleteCustomer = function (ctx) {
	var sql = dbHelper.prepareQueryCommand('', []);
	return ctx.queryCommand(sql);
}
// Export
module.exports = new factory;