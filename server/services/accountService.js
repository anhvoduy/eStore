const dbContext = require('../lib/dbContext');

const Factory = function () { 
}

Factory.prototype.getList = async function (query) {
	try
	{
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
			SELECT AccountId, AccountKey, AccountNo, AccountName, Description, DebitOrCredit 
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
		SELECT AccountId, AccountKey, AccountNo, AccountName, Description, DebitOrCredit 
		FROM Account 
		WHERE (AccountId =:AccountId OR AccountKey =:AccountKey) AND Deleted <> 1
	`;	
	return dbContext.queryItem(sql, { AccountId: query.AccountId, AccountKey: query.AccountKey });
}

Factory.prototype.create = function (account) {
	var sql = `
		INSERT INTO Account(AccountKey, AccountNo, AccountName, Description, DebitOrCredit)
		VALUES(uuid(), :AccountNo, :AccountName, :Description, :DebitOrCredit)
	`;
    return dbContext.queryExecute(sql, account);
}

Factory.prototype.update = function (account) {
	var sql = `
		UPDATE Account 
		SET AccountNo =:AccountNo, 
			AccountName =:AccountName, 
			DebitOrCredit =:DebitOrCredit,
			Description =:Description
		WHERE AccountId =:AccountId
	`;
	return dbContext.queryExecute(sql, account);
}

Factory.prototype.delete = function (account) {
	var sql = `UPDATE Account SET Deleted = 1 WHERE AccountId =:AccountId`;
    return dbContext.queryExecute(sql, account);
}

// Export
module.exports = new Factory;
