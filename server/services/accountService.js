const _ = require('lodash');
const dbContext = require('../lib/dbContext');

// Constructor
const Factory = function () { 
}

Factory.prototype.getAccounts = function (query) {
	let sql = `
		SELECT AccountId, AccountKey, AccountNo, AccountName, Description 
		FROM Account 
		WHERE Deleted <> 1
		ORDER BY AccountNo ASC
	`;
	return dbContext.queryList(sql);
}

Factory.prototype.getAccountById = function (query) {	
	let sql = `
		SELECT AccountId, AccountKey, AccountNo, AccountName, Description 
		FROM Account 
		WHERE AccountId =:AccountId OR AccountKey =:AccountKey
	`;	
	return dbContext.queryItem(sql, { AccountId: query.AccountId, AccountKey: query.AccountKey });
}

Factory.prototype.createAccount = function (account) {
	var sql = `
		INSERT INTO Account(AccountKey, AccountNo, AccountName, Description)
		VALUES(uuid(), :AccountNo, :AccountName, :Description)
	`;
    return dbContext.queryExecute(sql, account);
}

Factory.prototype.updateAccount = function (account) {
	var sql = `
		UPDATE Account 
		SET AccountNo =:AccountNo, 
			AccountName =:AccountName, 
			Description =:Description
		WHERE AccountId =:AccountId
	`;
	return dbContext.queryExecute(sql, account);
}

Factory.prototype.deleteAccount = function (account) {
	var sql = `UPDATE Account SET Deleted = 1 WHERE AccountId =:AccountId`;
    return dbContext.queryExecute(sql, account);
}

// Export
module.exports = new Factory;
