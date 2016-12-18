// Dependencies
var Q = require('q');
var dbHelper = require('../config/dbHelper');

// Constructor
var transactionService = function () { 
}

transactionService.prototype.createTransaction = function (ctx, transaction) {
    
}

transactionService.prototype.updateTransaction = function (ctx, transaction) {	
	var sql = dbHelper.prepareQueryCommand("UPDATE tblTransaction SET TransactionNo = ?, TransactionDate = ?, TransactionType = ?, Description = ?, DebitAcctNo = ?, CreditAcctNo = ?, Currency = ?, TotalAmount = ?, Updated = ?, Editor = ? WHERE TransactionId = ?;",
		[transaction.TransactionNo, transaction.TransactionDate, transaction.TransactionType, transaction.Description, transaction.DebitAcctNo, transaction.CreditAcctNo, transaction.Currency, transaction.TotalAmount, transaction.Updated, transaction.Editor, transaction.TransactionId]);
	return ctx.queryCommand(sql);	
}

transactionService.prototype.deleteTransaction = function (ctx, transaction) {
    
}


transactionService.prototype.getTransactions = function (ctx, conditions) {
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

transactionService.prototype.getTransactionById = function (ctx, transactionId) {
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

transactionService.prototype.getCashIn = function (ctx) {
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

transactionService.prototype.getCashOut = function (ctx) {
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
module.exports = new transactionService;
