const Q = require('q');
const _ = require('lodash');
const dbHelper = require('../config/dbHelper');

var Factory = function () { 
}

Factory.prototype.getCustomers = function (ctx) {
	var sql = dbHelper.prepareQueryCommand(`
		SELECT CustomerId, CustomerName, Description, Email, Mobile, Tel, Fax, Title, Address
		FROM Customer 
		WHERE Deleted <> 1 
		ORDER BY CustomerId DESC
	`, []);
	return ctx.queryCommand(sql);
}

Factory.prototype.getCustomerById = function (ctx, customerId) {
	var sql = dbHelper.prepareQueryCommand(`
		SELECT CustomerId, CustomerName, Description, Email, Mobile, Tel, Fax, Title, Address
		FROM Customer 
		WHERE Deleted <> 1 AND
			  CustomerId = 1
		ORDER BY CustomerId DESC
	`, [customerId]);
	return ctx.queryCommand(sql);
}

Factory.prototype.createCustomer = function (ctx, customer) {
	var sql = dbHelper.prepareQueryCommand('', []);
	return ctx.queryCommand(sql);
}

Factory.prototype.updateCustomer = function (ctx) {
	var sql = dbHelper.prepareQueryCommand('', []);
	return ctx.queryCommand(sql);
}

Factory.prototype.deleteCustomer = function (ctx) {
	var sql = dbHelper.prepareQueryCommand('', []);
	return ctx.queryCommand(sql);
}
// Export
module.exports = new Factory;