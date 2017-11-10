const _ = require('lodash');
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

Factory.prototype.getUsers = function (query) {
    var sql = `
		SELECT 	UserId, UserKey, UserType, UserName, DisplayName, Email, Mobile, Tel, 
			Title, DateOfBirth 
		FROM User 
		WHERE Deleted = 0 
		ORDER BY UserId DESC
	`;
	return dbContext.queryList(sql);    
}

Factory.prototype.getUserById = function (query) {
    var sql = `
		SELECT 	UserId, UserKey, UserType, UserName, DisplayName, Email, Mobile, Tel, 
			Title, DateOfBirth 
		FROM User 
		WHERE UserId =:UserId
	`;
	return dbContext.queryItem(sql, { UserId: query.UserId });
}

Factory.prototype.getUserByKey = function (query) {
    var sql = `
		SELECT 	UserId, UserKey, UserType, UserName, DisplayName, Email, Mobile, Tel, 
			Title, DateOfBirth 
		FROM User 
		WHERE UserId =:UserKey
	`;
	return dbContext.queryItem(sql, { UserKey: query.UserKey });
}

Factory.prototype.getUserByName = function (query) {
    var sql = `
		SELECT UserId, UserKey, UserType, UserName, DisplayName, Email, Mobile, Tel, 
			Title, DateOfBirth 
		FROM User 
		WHERE UserName =:UserName
	`;
    return dbContext.queryItem(sql, { UserName: query.UserName });
}

Factory.prototype.getUserByEmail = function (query) {
	var sql = `
		SELECT UserId, UserKey, UserType, UserName, DisplayName, Email, Mobile, Tel, 
			Title, DateOfBirth
		FROM User 
		WHERE Email =:Email
	`;
	return dbContext.queryItem(sql, { Email: query.Email });
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
				{ code: 'user', name: 'User' },
				{ code: 'group', name: 'Group' }
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
