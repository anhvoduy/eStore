const dbContext = require('../lib/dbContext');

const Factory = function () { 
}

Factory.prototype.getTransactionById = async function (query) {
    let sql = `   
        SELECT  TransactionId, TransactionKey, TransactionNo, TransactionDate, TransactionType,
	            Description, DebitAcctNo, CreditAcctNo, Currency, TotalAmount,
                CustomerId, CustomerName, InvoiceNo, InvoiceDate, InvoiceDesc
        FROM Transaction
        WHERE TransactionId =:TransactionId
    `;
    return dbContext.queryItem(sql, { TransactionId: query.TransactionId });
}

Factory.prototype.getTransactionByKey = async function (query) {
    let sql = `   
        SELECT  TransactionId, TransactionKey, TransactionNo, TransactionDate, TransactionType,
	            Description, DebitAcctNo, CreditAcctNo, Currency, TotalAmount,
                CustomerId, CustomerName, InvoiceNo, InvoiceDate, InvoiceDesc
        FROM Transaction
        WHERE TransactionKey =:TransactionKey
    `;
    return dbContext.queryItem(sql, { TransactionKey: query.TransactionKey });
}

Factory.prototype.getCashIn = async function (query) {
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
			FROM Transaction
			WHERE TransactionType IN ('CASHIN') AND Deleted <> 1
		`;
        let totalRows = (await dbContext.queryItem(sqlTotal)).Total;
        
        // get data
		let sqlQuery = `
            SELECT TransactionId, TransactionKey, TransactionNo, TransactionDate, TransactionType,
                    Description, DebitAcctNo, CreditAcctNo, Currency, TotalAmount,
                    CustomerId, CustomerName, InvoiceNo, InvoiceDate, InvoiceDesc
            FROM Transaction
            WHERE TransactionType IN ('CASHIN') AND Deleted <> 1
            ORDER BY TransactionId DESC
            LIMIT :Offset, :Limit;
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

Factory.prototype.getCashOut = async function (query) {
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
			FROM Transaction
			WHERE TransactionType IN ('CASHOUT') AND Deleted <> 1
		`;
        let totalRows = (await dbContext.queryItem(sqlTotal)).Total;
        
        // get data
		let sqlQuery = `
            SELECT TransactionId, TransactionKey, TransactionNo, TransactionDate, TransactionType,
                    Description, DebitAcctNo, CreditAcctNo, Currency, TotalAmount,
                    CustomerId, CustomerName, InvoiceNo, InvoiceDate, InvoiceDesc
            FROM Transaction
            WHERE TransactionType IN ('CASHOUT') AND Deleted <> 1
            ORDER BY TransactionId DESC
            LIMIT :Offset, :Limit;
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



Factory.prototype.createTransaction = function (transaction) {
    return true;
}

Factory.prototype.updateTransaction = function (transaction) {
    let sql = `
        UPDATE Transaction 
        SET TransactionNo =:TransactionNo,
            TransactionDate =:TransactionDate,
            TransactionType =:TransactionType,
            Description =:Description,
            DebitAcctNo =:DebitAcctNo,
            CreditAcctNo =:CreditAcctNo,
            Currency =:Currency,
            TotalAmount =:TotalAmount            
        WHERE TransactionId =:TransactionId
    `;
	return dbContext.queryExecute(sql, query);
}

Factory.prototype.deleteTransaction = function (ctx, transaction) {
    return true;
}


// Export
module.exports = new Factory;
