const Q = require('q');
const _ = require('lodash');
const dbHelper = require('../lib/dbHelper');

// Constructor
const Factory = function () { 
}

Factory.prototype.reportCash = function () {
    var sql = `
        SELECT T.TransactionNo, T.TransactionDate, T.Currency,
            (CASE WHEN T.TransactionType = 'CASHIN' THEN TotalAmount ELSE 0 END) DebitAmount,
            (CASE WHEN T.TransactionType = 'CASHOUT' THEN TotalAmount ELSE 0 END) CreditAmount
        FROM Transaction T
        WHERE T.Deleted = 0
        ORDER BY T.TransactionDate DESC;
    `;
    return true;
}

Factory.prototype.reportInventory = function () {
    return true;
}

Factory.prototype.reportAccount = function (query) {
    return true;
}

// Export
module.exports = new Factory;
