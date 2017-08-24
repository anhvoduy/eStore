const Q = require('q');
const _ = require('lodash');
var dbHelper = require('../config/dbHelper');

// Constructor
var Factory = function () { 
}

Factory.prototype.createTransaction = function (ctx, transaction) {
    
}

Factory.prototype.updateTransaction = function (ctx, transaction) {	
	var sql = dbHelper.prepareQueryCommand("UPDATE tblTransaction SET TransactionNo = ?, TransactionDate = ?, TransactionType = ?, Description = ?, DebitAcctNo = ?, CreditAcctNo = ?, Currency = ?, TotalAmount = ?, Updated = ?, Editor = ? WHERE TransactionId = ?;",
		[transaction.TransactionNo, transaction.TransactionDate, transaction.TransactionType, transaction.Description, transaction.DebitAcctNo, transaction.CreditAcctNo, transaction.Currency, transaction.TotalAmount, transaction.Updated, transaction.Editor, transaction.TransactionId]);
	return ctx.queryCommand(sql);	
}

Factory.prototype.deleteTransaction = function (ctx, transaction) {
    
}


Factory.prototype.getTransactions = function (ctx, conditions) {
    var sql = `
        SELECT TransactionId, TransactionNo, TransactionDate, TransactionType,
	           Description, DebitAcctNo, CreditAcctNo, Currency, TotalAmount,
               CustomerId, CustomerName, InvoiceNo, InvoiceDate, InvoiceDesc
        FROM tblTransaction
        WHERE Deleted = 0
        ORDER BY TransactionId DESC
        LIMIT 10;
    `;
    return ctx.queryCommand(sql);
}

Factory.prototype.getTransactionById = function (ctx, transactionId) {
    var sql = `   
        SELECT  TransactionId, TransactionNo, TransactionDate, TransactionType,
	            Description, DebitAcctNo, CreditAcctNo, Currency, TotalAmount,
                CustomerId, CustomerName, InvoiceNo, InvoiceDate, InvoiceDesc
        FROM tblTransaction
        WHERE TransactionId = ?;
    `;
    sql = dbHelper.prepareQueryCommand(sql, [transactionId]);
    return ctx.queryCommand(sql);
}

Factory.prototype.getCashIn = function (ctx) {
    var sql = `
        SELECT TransactionId, TransactionNo, TransactionDate, TransactionType,
	           Description, DebitAcctNo, CreditAcctNo, Currency, TotalAmount,
               CustomerId, CustomerName, InvoiceNo, InvoiceDate, InvoiceDesc
        FROM tblTransaction
        WHERE TransactionType = 'CASHIN' AND Deleted = 0
        ORDER BY TransactionId DESC
        LIMIT 10;
    `;
    return ctx.queryCommand(sql);
}

Factory.prototype.getCashOut = function (ctx) {
    var sql = `
        SELECT TransactionId, TransactionNo, TransactionDate, TransactionType,
	           Description, DebitAcctNo, CreditAcctNo, Currency, TotalAmount,
               CustomerId, CustomerName, InvoiceNo, InvoiceDate, InvoiceDesc
        FROM tblTransaction
        WHERE TransactionType = 'CASHOUT' AND Deleted = 0
        ORDER BY TransactionId DESC
        LIMIT 10;
    `;
    return ctx.queryCommand(sql);
}

// Export
module.exports = new Factory;
