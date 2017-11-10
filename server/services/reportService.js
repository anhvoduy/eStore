const _ = require('lodash');
const dbContext = require('../lib/dbContext');

// Constructor
const Factory = function () { 
}

Factory.prototype.reportCash = async function (query) {
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
            FROM Transaction T
            WHERE T.Deleted = 0
            ORDER BY T.TransactionDate DESC
		`;
		let totalRows = (await dbContext.queryItem(sqlTotal)).Total;
		
		// get data
		let sqlQuery = `
            SELECT T.TransactionNo, T.TransactionType, T.TransactionDate, T.Currency,
                (CASE WHEN T.TransactionType = 'CASHIN' THEN TotalAmount ELSE 0 END) DebitAmount,
                (CASE WHEN T.TransactionType = 'CASHOUT' THEN TotalAmount ELSE 0 END) CreditAmount
            FROM Transaction T
            WHERE T.Deleted = 0
            ORDER BY T.TransactionDate DESC
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

Factory.prototype.reportInventory = async function (query) {
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
            FROM Stock S INNER JOIN StockDetail SD ON S.StockId = SD.StockId
            WHERE S.Deleted = 0
            ORDER BY S.StockDate DESC
		`;
		let totalRows = (await dbContext.queryItem(sqlTotal)).Total;
		
		// get data
		let sqlQuery = `
            SELECT S.StockId AS StockNo, S.StockDate,	
                SD.ProductId, SD.ProductName,             
                (CASE WHEN S.StockType IN ('STOCKIN', 'INPUT') THEN SD.Quantity ELSE 0 END) InputQuantity,
                (CASE WHEN S.StockType IN ('STOCKOUT', 'OUTPUT') THEN SD.Quantity ELSE 0 END) OutputQuantity,
                S.Currency, SD.Price,
                (CASE WHEN S.StockType IN ('STOCKIN', 'INPUT') THEN SD.Amount ELSE 0 END) InputAmount,
                (CASE WHEN S.StockType IN ('STOCKOUT', 'OUTPUT') THEN SD.Amount ELSE 0 END) OutputAmount            
            FROM Stock S INNER JOIN StockDetail SD ON S.StockId = SD.StockId
            WHERE S.Deleted = 0
            ORDER BY S.StockDate DESC
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

Factory.prototype.reportAccount = function (query) {
    return true;
}

// Export
module.exports = new Factory;
