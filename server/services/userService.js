const Q = require('q');
const _ = require('lodash');
const dbHelper = require('../lib/dbHelper'); // TO DO: remove
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

Factory.prototype.getUsers = function () {
    var sql = `
		SELECT 	UserId, UserKey, UserType, UserName, DisplayName, Email, Mobile, Tel, 
			Title, DateOfBirth 
		FROM User 
		WHERE Deleted = 0 
		ORDER BY UserId DESC
	`;
	return dbContext.queryList(sql);    
}

Factory.prototype.getUserById = function (userId) {
    var sql = `
		SELECT 	UserId, UserKey, UserType, UserName, DisplayName, Email, Mobile, Tel, 
			Title, DateOfBirth 
		FROM User 
		WHERE UserId =:UserId
	`;
	return dbContext.queryItem(sql, {UserId: userId});
}

Factory.prototype.getUserByKey = function (userKey) {
    var sql = `
		SELECT 	UserId, UserKey, UserType, UserName, DisplayName, Email, Mobile, Tel, 
			Title, DateOfBirth 
		FROM User 
		WHERE UserId =:UserKey
	`;
	return dbContext.queryItem(sql, {UserKey: userKey});
}

Factory.prototype.getUserByName = function (userName) {
    var sql = `
		SELECT UserId, UserKey, UserType, UserName, DisplayName, Email, Mobile, Tel, 
			Title, DateOfBirth 
		FROM User 
		WHERE UserName =:UserName
	`;
    return dbContext.queryItem(sql, {UserName: userName});
}

Factory.prototype.getUserByEmail = function (email) {
	var sql = `
		SELECT UserId, UserKey, UserType, UserName, DisplayName, Email, Mobile, Tel, 
			Title, DateOfBirth
		FROM User 
		WHERE Email =:Email
	`;
	return dbContext.queryItem(sql, {Email: email});
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
