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

Factory.prototype.getUsers = async function(query){
	try
	{
		// No need pagination
		let sql = `
			SELECT 	UserId, UserKey, UserType, UserName, DisplayName, Email, Mobile, Title, DateOfBirth 
			FROM User 
			WHERE Deleted = 0 
			ORDER BY UserId DESC
		`;
		return dbContext.queryList(sql);
	}
	catch(err){
		throw err;
	}
}

Factory.prototype.getUserById = async function (query) {
	try
	{
		let sql = `
			SELECT 	UserId, UserKey, UserType, UserName, DisplayName, Email, Mobile, Title, DateOfBirth 
			FROM User 
			WHERE UserId =:UserId
		`;
		return dbContext.queryItem(sql, { UserId: query.UserId });
	}
	catch(err){
		throw err;
	}
}

Factory.prototype.getUserByKey = async function (query) {
	try
	{
		let sql = `
			SELECT 	UserId, UserKey, UserType, UserName, DisplayName, Email, Mobile, Title, DateOfBirth 
			FROM User 
			WHERE UserKey =:UserKey
		`;
		return dbContext.queryItem(sql, { UserKey: query.UserKey });
	}
	catch(err){
		throw err;
	}
}

Factory.prototype.getUserByName = async function (query) {
	try
	{
		let	sql = `
			SELECT UserId, UserKey, UserType, UserName, DisplayName, Email, Mobile, Title, DateOfBirth 
			FROM User 
			WHERE UserName =:UserName
		`;
		return dbContext.queryItem(sql, { UserName: query.UserName });
	}
	catch(err){
		throw err;
	}
}

Factory.prototype.getUserByEmail = async function (query) {
	try
	{
		let sql = `
			SELECT UserId, UserKey, UserType, UserName, DisplayName, Email, Mobile, Title, DateOfBirth
			FROM User 
			WHERE Email =:Email
		`;
		return dbContext.queryItem(sql, { Email: query.Email });
	}
	catch(err){
		throw err;
	}	
}

Factory.prototype.authenticate = async function (username, password) {
	try
	{		
		if((username === 'admin' && password === '@dmin')){
			let sql = 'SELECT UserName, UserKey FROM User WHERE UserName=:UserName';
			let data = await dbContext.queryItem(sql, { UserName: username });
			if(!data){
				return { success: false};
			}
			return { success: true, username: data.UserName, userkey: data.UserKey };
		}
		return { success: false};
	}
	catch(err){
		throw err;
	}
}


Factory.prototype.create = async function (user) {
	try
	{
		var sql = `
			INSERT INTO User(UserKey,UserType,UserName,Hash,DisplayName,ImageKey,Email,Mobile,Title)
			VALUES(uuid(),:UserType,:UserName,:Hash,:DisplayName,:ImageKey,:Email,:Mobile,:Title)
		`;
		return dbContext.queryExecute(sql, user);
	}
	catch(err){
		throw err;
	}	
}

Factory.prototype.update = async function (user) {
	try
	{
		var sql = `
			UPDATE User
			SET UserName=:UserName,
				DisplayName=:DisplayName, 
				Email=:Email, 
				Mobile=:Mobile, 				
				Title=:Title, 
				DateOfBirth=:DateOfBirth
			WHERE UserId=:UserId			
		`;
		return dbContext.queryExecute(sql, user);
	}
	catch(err){
		throw err;
	}
}

Factory.prototype.delete = async function (userId) {
	try
	{
		var sql = `UPDATE User SET Deleted=1 WHERE UserId=:UserId`;
		return dbContext.queryExecute(sql, {UserId: userId});
	}
	catch(err){
		throw err;
	}
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
				{ code: 'customer', name: 'Customer' },
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
