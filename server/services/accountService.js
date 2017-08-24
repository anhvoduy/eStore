// Dependencies
var Q = require('q');
var dbHelper = require('../config/dbHelper');

// Constructor
var Factory = function () { 
}

Factory.prototype.getAccounts = function (ctx, condition) {
	var sql = `
		SELECT AccountId, AccountNo, AccountName, Description 
		FROM Account 
		WHERE Deleted <> 1
		ORDER BY AccountId ASC
	`;
	return ctx.queryCommand(sql);
}

Factory.prototype.getAccountById = function (ctx, accountId) {
	var sql = dbHelper.prepareQueryCommand(`
		SELECT AccountId, AccountNo, AccountName, Description 
		FROM Account 
		WHERE AccountId = ?
	`, [accountId]);
	return ctx.queryCommand(sql);    
}

Factory.prototype.createAccount = function (ctx, account) {
	var sql = dbHelper.prepareQueryCommand(`
		UPDATE Account 
		SET Acct = ?, 
			Name = ?, 
			Description = ? 
		WHERE AccountId = ?`,
        [account.Acct, account.Name, account.Description, account.AccountId]);
    return ctx.queryCommand(sql);
}

Factory.prototype.updateAccount = function (ctx, account) {
	var sql = dbHelper.prepareQueryCommand(`
		UPDATE Account 
		SET Acct = ?, 
			Name = ?, 
			Description = ? 
		WHERE AccountId = ?`, 
		[account.Acct, account.Name, account.Description, account.AccountId]);
	return ctx.queryCommand(sql);
}

Factory.prototype.deleteAccount = function (ctx, account) {
	var sql = dbHelper.prepareQueryCommand(`
		UPDATE Account 
		SET Acct = ?, 
			Name = ?, 
			Description = ? 
		WHERE AccountId = ?`,
        [account.Acct, account.Name, account.Description, account.AccountId]);
    return ctx.queryCommand(sql);
}
// Export
module.exports = new Factory;
