const _ = require('lodash');
const common = require('../lib/commonlib');
const CONSTANT = require('../lib/constant');
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

Factory.prototype.getUsers = function(query){
	// No need pagination
	let sql = `
		SELECT 	UserId, UserKey, UserType, UserName, DisplayName, Email, Mobile, Title, Description, DateOfBirth 
		FROM User 
		WHERE Deleted = 0 
		ORDER BY UserId DESC
	`;
	return dbContext.queryList(sql);
}

Factory.prototype.getUserById = function (query) {
	let sql = `
		SELECT 	UserId, UserKey, UserType, UserName, DisplayName, Email, Mobile, Title, Description, DateOfBirth 
		FROM User 
		WHERE UserId =:UserId
	`;
	return dbContext.queryItem(sql, { UserId: query.UserId });
}

Factory.prototype.getUserByKey = function (query) {
	let sql = `
		SELECT 	UserId, UserKey, UserType, UserName, DisplayName, Email, Mobile, Title, Description, DateOfBirth 
		FROM User 
		WHERE UserKey =:UserKey
	`;
	return dbContext.queryItem(sql, { UserKey: query.UserKey });
}

Factory.prototype.getUserByName = function (query) {
	let	sql = `
		SELECT UserId, UserKey, UserType, UserName, DisplayName, Email, Mobile, Title, Description, DateOfBirth 
		FROM User 
		WHERE UserName =:UserName
	`;
	return dbContext.queryItem(sql, { UserName: query.UserName });
}

Factory.prototype.getUserByEmail = function (query) {
	let sql = `
		SELECT UserId, UserKey, UserType, UserName, DisplayName, Email, Mobile, Title, Description, DateOfBirth
		FROM User 
		WHERE Email =:Email
	`;
	return dbContext.queryItem(sql, { Email: query.Email });	
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

Factory.prototype.changePassword = async function (userId, hash) {
	try
	{
		let sql = 'UPDATE User SET Hash=:Hash WHERE UserId=:UserId';
		return dbContext.queryExecute(sql,{ UserId: userId, Hash: hash });
	}
	catch(err){
		throw err;
	}
}

Factory.prototype.create = async function (user) {
	try
	{
		user.Hash = common.encoded(user.UserName);
		user.UserType = CONSTANT.USERTYPES.USER;
		var sql = `
			INSERT INTO User(UserKey,UserType,UserName,Hash,DisplayName,Email,Mobile,Title,Description)
			VALUES(uuid(),:UserType,:UserName,:Hash,:DisplayName,:Email,:Mobile,:Title,:Description)
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
				DateOfBirth=:DateOfBirth,
				Description=:Description
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
