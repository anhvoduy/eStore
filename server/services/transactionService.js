const _ = require('lodash');
const dbContext = require('../lib/dbContext');

// Constructor
const Factory = function () { 
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


Factory.prototype.getTransactions = function (query) {
    let sql = `
        SELECT TransactionId, TransactionKey, TransactionNo, TransactionDate, TransactionType,
	           Description, DebitAcctNo, CreditAcctNo, Currency, TotalAmount,
               CustomerId, CustomerName, InvoiceNo, InvoiceDate, InvoiceDesc
        FROM Transaction
        WHERE Deleted = 0
        ORDER BY TransactionId DESC
        LIMIT 5000
    `;
    return dbContext.queryList(sql, query);
}

Factory.prototype.getTransactionById = function (query) {
    let sql = `   
        SELECT  TransactionId, TransactionKey, TransactionNo, TransactionDate, TransactionType,
	            Description, DebitAcctNo, CreditAcctNo, Currency, TotalAmount,
                CustomerId, CustomerName, InvoiceNo, InvoiceDate, InvoiceDesc
        FROM Transaction
        WHERE TransactionId =:TransactionId
    `;
    return dbContext.queryItem(sql, query);
}

Factory.prototype.getCashIn = function (query) {
    let sql = `
        SELECT TransactionId, TransactionKey, TransactionNo, TransactionDate, TransactionType,
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
        SELECT TransactionId, TransactionKey, TransactionNo, TransactionDate, TransactionType,
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
