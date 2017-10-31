const Q = require('q');
const _ = require('lodash');
const dbHelper = require('../lib/dbHelper');

// Constructor
const Factory = function () { 
}

Factory.prototype.reportCash = function (ctx, query) {
    var sql = `
        SELECT T.TransactionNo, T.TransactionDate, T.Currency,
            (CASE WHEN T.TransactionType = 'CASHIN' THEN TotalAmount ELSE 0 END) DebitAmount,
            (CASE WHEN T.TransactionType = 'CASHOUT' THEN TotalAmount ELSE 0 END) CreditAmount
        FROM Transaction T
        WHERE T.Deleted = 0
        ORDER BY T.TransactionDate DESC;
    `;
    return ctx.queryCommand(sql);
}

Factory.prototype.reportInventory = function (ctx, query) {
    var sql = `
        SELECT S.StockId AS StockNo, S.StockDate,	
            SD.ProductId, SD.ProductName,             
            (CASE WHEN S.StockType IN ('STOCKIN', 'INPUT') THEN SD.Quantity ELSE 0 END) InputQuantity,
            (CASE WHEN S.StockType IN ('STOCKOUT', 'OUTPUT') THEN SD.Quantity ELSE 0 END) OutputQuantity,
            S.Currency, SD.Price,
            (CASE WHEN S.StockType IN ('STOCKIN', 'INPUT') THEN SD.Amount ELSE 0 END) InputAmount,
            (CASE WHEN S.StockType IN ('STOCKOUT', 'OUTPUT') THEN SD.Amount ELSE 0 END) OutputAmount            
        FROM Stock S INNER JOIN StockDetail SD ON S.StockId = SD.StockId
        WHERE S.Deleted = 0
        ORDER BY S.StockDate DESC;
    `;
    return ctx.queryCommand(sql);
}

Factory.prototype.reportAccount = function (query) {
    return true;
}

// Export
module.exports = new Factory;
