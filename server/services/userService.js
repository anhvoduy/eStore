const Q = require('q');
const _ = require('lodash');
const dbHelper = require('../lib/dbHelper');
const dbContext = require('../lib/dbContext');

// Constructor
const Factory = function () { 
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

Factory.prototype.getUserById = function (userId) {
    var sql = `
		SELECT UserId, UserKey, UserType, UserName, DisplayName, Email, Mobile, Tel, Title, DateOfBirth 
		FROM User 
		WHERE UserId =:UserId
	`;
	return dbContext.queryItem(sql, {UserId: userId});
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
				{ code: 'cashReport', name: 'Report' }
			]
		},
		{
			code: 'inventory',
			name: 'Inventory',
			childNodes: [
				{ code: 'inventoryInput', name: 'Input' },
				{ code: 'inventoryOutput', name: 'Output' },				
				{ code: 'inventoryReport', name: 'Report' }
			]
		},
		{
			code: 'list',
			name: 'List',
			childNodes: [
				{ code: 'brand', name: 'Brand' },
				{ code: 'product', name: 'Product' },
				{ code: 'inventory', name: 'Inventory' },
				{ code: 'account', name: 'Account' },
				{ code: 'user', name: 'User' }
			]
		},
		// {
		// 	code: 'search',
		// 	name: 'Search',
		// 	clickable: true
		// },
		{
			code: 'help',
			name: 'Help',
			clickable: true
		},
		{
			code: 'sample',
			name: 'Sample',
			clickable: true
		}
	];
	return navigation;
}

// Export
module.exports = new Factory;
