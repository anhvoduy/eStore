const Q = require('q');
const _ = require('lodash');
const dbHelper = require('../lib/dbHelper');
const dbContext = require('../lib/dbContext');

// Constructor
const Factory = function () { 
}

Factory.prototype.createTransaction = function (ctx, transaction) {
    return true;    
}

Factory.prototype.updateTransaction = function (ctx, transaction) {	
    let sql = dbHelper.prepareQueryCommand(`
        UPDATE Transaction 
        SET TransactionNo = ?, 
            TransactionDate = ?, 
            TransactionType = ?, 
            Description = ?, 
            DebitAcctNo = ?, 
            CreditAcctNo = ?, 
            Currency = ?, 
            TotalAmount = ?, 
            Updated = ?, 
            Editor = ? 
        WHERE TransactionId = ?`,
		[transaction.TransactionNo, transaction.TransactionDate, transaction.TransactionType, transaction.Description, transaction.DebitAcctNo, transaction.CreditAcctNo, transaction.Currency, transaction.TotalAmount, transaction.Updated, transaction.Editor, transaction.TransactionId]);
	return ctx.queryCommand(sql);	
}

Factory.prototype.deleteTransaction = function (ctx, transaction) {
    return true;
}


Factory.prototype.getTransactions = function (query) {
    let sql = `
        SELECT TransactionId, TransactionNo, TransactionDate, TransactionType,
	           Description, DebitAcctNo, CreditAcctNo, Currency, TotalAmount,
               CustomerId, CustomerName, InvoiceNo, InvoiceDate, InvoiceDesc
        FROM Transaction
        WHERE Deleted = 0
        ORDER BY TransactionId DESC
        LIMIT 10
    `;
    return dbContext.queryList(sql, query);
}

Factory.prototype.getTransactionById = function (query) {
    let sql = `   
        SELECT  TransactionId, TransactionNo, TransactionDate, TransactionType,
	            Description, DebitAcctNo, CreditAcctNo, Currency, TotalAmount,
                CustomerId, CustomerName, InvoiceNo, InvoiceDate, InvoiceDesc
        FROM Transaction
        WHERE TransactionId =:TransactionId
    `;
    return dbContext.queryItem(sql, query);
}

Factory.prototype.getCashIn = function (query) {
    let sql = `
        SELECT TransactionId, TransactionNo, TransactionDate, TransactionType,
	           Description, DebitAcctNo, CreditAcctNo, Currency, TotalAmount,
               CustomerId, CustomerName, InvoiceNo, InvoiceDate, InvoiceDesc
        FROM Transaction
        WHERE TransactionType = 'CASHIN' AND Deleted = 0
        ORDER BY TransactionId DESC
        LIMIT 10;
    `;
    return dbContext.queryList(sql);
}

Factory.prototype.getCashOut = function (query) {
    let sql = `
        SELECT TransactionId, TransactionNo, TransactionDate, TransactionType,
	           Description, DebitAcctNo, CreditAcctNo, Currency, TotalAmount,
               CustomerId, CustomerName, InvoiceNo, InvoiceDate, InvoiceDesc
        FROM Transaction
        WHERE TransactionType = 'CASHOUT' AND Deleted = 0
        ORDER BY TransactionId DESC
        LIMIT 10;
    `;
    return dbContext.queryList(sql);
}

// Export
module.exports = new Factory;
