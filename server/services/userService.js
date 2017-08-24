// Dependencies
var Q = require('q');
var dbHelper = require('../config/dbHelper');

// Constructor
var Factory = function () { 
}

Factory.prototype.myProfile = function(){
	return {
		firstName: 'Eric',
		lastName: 'Cantona',
		number: '7',
		fullName: 'Eric Cantona',
		club: 'Manchester United'
	}
}

Factory.prototype.getUsers = function (ctx) {
    var sql = `
		SELECT UserId, UserKey, UserType, UserName, DisplayName, Email, Mobile, Tel, Title, DateOfBirth 
		FROM User 
		WHERE Deleted = 0 
		ORDER BY UserId DESC
	`;
	return ctx.queryCommand(sql);    
}

Factory.prototype.getUserById = function (ctx, userId) {
    var sql = dbHelper.prepareQueryCommand(`
		SELECT UserId, UserKey, UserType, UserName, DisplayName, Email, Mobile, Tel, Title, DateOfBirth 
		FROM User 
		WHERE UserId = ?`, [userId]);
	return ctx.queryCommand(sql);
}

Factory.prototype.getUserByName = function (ctx, userName) {
    var sql = dbHelper.prepareQueryCommand(`
		SELECT UserId, UserType, UserName, Email, DateOfBirth, Deleted 
		FROM User 
		WHERE UserName = ?`, [userName]);
    return ctx.queryCommand(sql);
}

Factory.prototype.getUserByEmail = function (ctx, email) {
	var sql = dbHelper.prepareQueryCommand(`
		SELECT UserId, UserType, UserName, Email, DateOfBirth, Deleted 
		FROM User 
		WHERE Email = ?`, [email]);	
	return ctx.queryCommand(sql);
}

Factory.prototype.authenticate = function (username, password) {
    return (username === 'admin' && password === '@dmin');
}

Factory.prototype.getMenu = function () {
	var navigation = [
		{
			code: 'cash',
			name: 'Cash',
			childNodes: [
				{ code: 'cashIn', name: 'Cash In' },
				{ code: 'cashOut', name: 'Cash Out' },
				{ code: 'cashReport', name: 'Cash Report' }
			]
		},
		{
			code: 'inventory',
			name: 'Inventory',
			childNodes: [
				{ code: 'stockIn', name: 'Stock In' },
				{ code: 'stockOut', name: 'Stock Out' },
				{ code: 'stockBalance', name: 'Stock Balance' },
				{ code: 'stockReport', name: 'Stock Reporting' }
			]
		},
		{
			code: 'list',
			name: 'List',
			childNodes: [
				{ code: 'brand', name: 'Brand' },
				{ code: 'product', name: 'Product' },
				{ code: 'account', name: 'Account' },
				{ code: 'user', name: 'User' }
			]
		},
		{
			code: 'search',
			name: 'Search'
		},
		{
			code: 'help',
			name: 'Help'
		},
		{
			code: 'sample',
			name: 'Sample'
		}
	];
	return navigation;
}

// Export
module.exports = new Factory;
