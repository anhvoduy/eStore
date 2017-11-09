const _ = require('lodash');
const dbContext = require('../lib/dbContext');

// Constructor
const Factory = function () { 
}

Factory.prototype.getCustomers = function (query) {
	var sql = `
		SELECT CustomerId, CustomerName, Description, Email, Mobile, Tel, Fax, Title, Address
		FROM Customer
		WHERE Deleted <> 1
		ORDER BY CustomerId DESC
	`;
	return dbContext.queryList(sql);
}

Factory.prototype.getCustomerById = function (query) {
	var sql = `
		SELECT CustomerId, CustomerName, Description, Email, Mobile, Tel, Fax, Title, Address
		FROM Customer 
		WHERE CustomerId =:CustomerId AND Deleted <> 1
		ORDER BY CustomerId DESC
	`;
	return dbContext.queryItem(sql, query);
}

Factory.prototype.createCustomer = function (ctx, customer) {
	return true;
}

Factory.prototype.updateCustomer = function (ctx) {
	return true;
}

Factory.prototype.deleteCustomer = function (ctx) {
	return true;
}
// Export
module.exports = new Factory;