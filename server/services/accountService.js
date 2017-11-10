const _ = require('lodash');
const dbContext = require('../lib/dbContext');

// Constructor
const Factory = function () { 
}

Factory.prototype.getList = async function (query) {
	try
	{
		let TotalSize = 0;
        let PageTotal = 0;
        let PageCurrent = parseInt(query.PageCurrent) - 1;
        let PageSize = parseInt(query.PageSize);
		let PageOffset = PageCurrent * PageSize;
		
		// get hits total
        let sqlTotal = `
			SELECT COUNT(*) AS Total
			FROM Account 
			WHERE Deleted <> 1
		`;
		let totalRows = (await dbContext.queryItem(sqlTotal)).Total;
		
		// get data
		let sqlQuery = `
			SELECT AccountId, AccountKey, AccountNo, AccountName, Description 
			FROM Account 
			WHERE Deleted <> 1
			ORDER BY AccountNo ASC
			LIMIT :Offset, :Limit
		`;
		let data = await dbContext.queryList(sqlQuery, {
			Offset: PageOffset,
            Limit: PageSize
		});

		let result = {
            HitsTotal: parseInt(totalRows),
            PageTotal: parseInt(Math.ceil(totalRows / PageSize)),
            PageSize: parseInt(PageSize),
            PageCurrent: parseInt(PageCurrent) + 1,
            PageData: data
        }
        return result;
	}
	catch(err){
		throw err;
	}
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
