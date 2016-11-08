// Dependencies
var dbHelper = require('../config/dbHelper');

// Constructor
var userService = function () { 
}

userService.prototype.getUsers = function (ctx) {
    var sql = 'SELECT UserId, UserKey, UserType, UserName, DisplayName, Email, Mobile, Tel, Title, DateOfBirth FROM tbluser WHERE Deleted = 0 ORDER BY UserId DESC';
	return ctx.queryCommand(sql);    
}

userService.prototype.getUserById = function (ctx, userId) {
    var sql = dbHelper.prepareQueryCommand("SELECT UserId, UserKey, UserType, UserName, DisplayName, Email, Mobile, Tel, Title, DateOfBirth FROM tbluser WHERE UserId = ?", [userId]);
	return ctx.queryCommand(sql);
}

userService.prototype.getUserByName = function (ctx, userName) {
    var sql = dbHelper.prepareQueryCommand("SELECT UserId, UserType, UserName, Email, DateOfBirth, Deleted FROM tbluser WHERE UserName = ?", [userName]);
    return ctx.queryCommand(sql);
}

userService.prototype.getUserByEmail = function (ctx, email) {
	var sql = dbHelper.prepareQueryCommand("SELECT UserId, UserType, UserName, Email, DateOfBirth, Deleted FROM tbluser WHERE Email = ?", [email]);	
	return ctx.queryCommand(sql);
}

userService.prototype.authenticate = function (username, password) {
    return (username === 'admin' && password === '@dmin');
}

userService.prototype.getMenu = function () {
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
			code: 'help',
			name: 'Help'
		}
	];
	return navigation;
}

// Export
module.exports = new userService;
