// Dependencies
var dbHelper = require('../config/dbHelper');

// Constructor
var userService = function () { 
}

userService.prototype.getUsers = function (ctx) {
    var sql = 'SELECT UserId, UserType, UserName, Email, DateOfBirth, Deleted FROM tbluser WHERE Deleted = 0 ORDER BY UserId DESC';
	return ctx.queryCommand(sql);    
}

userService.prototype.getUserById = function (ctx, userId) {
    var sql = dbHelper.prepareQueryCommand("SELECT UserId, UserType, UserName, Email, DateOfBirth, Deleted FROM tbluser WHERE UserId = ?", [userId]);
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

// Export
module.exports = new userService;
