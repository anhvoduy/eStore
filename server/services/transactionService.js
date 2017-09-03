const Q = require('q');
const _ = require('lodash');
const dbHelper = require('../lib/dbHelper');

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


Factory.prototype.getTransactions = function (ctx, conditions) {
    let sql = `
        SELECT TransactionId, TransactionNo, TransactionDate, TransactionType,
	           Description, DebitAcctNo, CreditAcctNo, Currency, TotalAmount,
               CustomerId, CustomerName, InvoiceNo, InvoiceDate, InvoiceDesc
        FROM Transaction
        WHERE Deleted = 0
        ORDER BY TransactionId DESC
        LIMIT 10;
    `;
    return ctx.queryCommand(sql);
}

Factory.prototype.getTransactionById = function (ctx, transactionId) {
    let sql = `   
        SELECT  TransactionId, TransactionNo, TransactionDate, TransactionType,
	            Description, DebitAcctNo, CreditAcctNo, Currency, TotalAmount,
                CustomerId, CustomerName, InvoiceNo, InvoiceDate, InvoiceDesc
        FROM Transaction
        WHERE TransactionId = ?;
    `;
    sql = dbHelper.prepareQueryCommand(sql, [transactionId]);
    return ctx.queryCommand(sql);
}

Factory.prototype.getCashIn = function (ctx) {
    let sql = `
        SELECT TransactionId, TransactionNo, TransactionDate, TransactionType,
	           Description, DebitAcctNo, CreditAcctNo, Currency, TotalAmount,
               CustomerId, CustomerName, InvoiceNo, InvoiceDate, InvoiceDesc
        FROM Transaction
        WHERE TransactionType = 'CASHIN' AND Deleted = 0
        ORDER BY TransactionId DESC
        LIMIT 10;
    `;
    return ctx.queryCommand(sql);
}

Factory.prototype.getCashOut = function (ctx) {
    let sql = `
        SELECT TransactionId, TransactionNo, TransactionDate, TransactionType,
	           Description, DebitAcctNo, CreditAcctNo, Currency, TotalAmount,
               CustomerId, CustomerName, InvoiceNo, InvoiceDate, InvoiceDesc
        FROM Transaction
        WHERE TransactionType = 'CASHOUT' AND Deleted = 0
        ORDER BY TransactionId DESC
        LIMIT 10;
    `;
    return ctx.queryCommand(sql);
}

// Export
module.exports = new Factory;
