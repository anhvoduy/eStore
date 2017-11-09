const Q = require('q');
const dbHelper = require('../lib/dbHelper');
const dbContext = require('../lib/dbContext');

// Constructor
const Factory = function () { 
}

Factory.prototype.getAccounts = function (query) {
	var sql = `
		SELECT AccountId, AccountNo, AccountName, Description 
		FROM Account 
		WHERE Deleted <> 1
		ORDER BY AccountId DESC
	`;
	return dbContext.queryList(sql);
}

Factory.prototype.getAccountById = function (query) {
	var sql = `
		SELECT AccountId, AccountNo, AccountName, Description 
		FROM Account 
		WHERE AccountId =:AccountId
	`;
	return dbContext.queryItem(sql, query);
}

Factory.prototype.createAccount = function (account) {
	var sql = `
		INSERT INTO Account(Acct, Name, Description)
		VALUES(:Acct, :Name, :Description)
	`;
    return dbContext.queryExecute(sql, account);
}

Factory.prototype.updateAccount = function (account) {
	var sql = `
		UPDATE Account 
		SET Acct =:Acct, 
			Name =:Name, 
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
