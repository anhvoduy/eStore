const Q = require('q');
const _ = require('lodash');
const dbHelper = require('../config/dbHelper');

// Constructor
const Factory = function () { 
}

Factory.prototype.getStocks = function (ctx, stockType) {
    let sql = dbHelper.prepareQueryCommand(`
		SELECT StockId, StockNo, StockDate, StockType, Description, Currency,
			TotalAmount, CustomerId, CustomerName, InvoiceNo, InvoiceDate, InvoiceDesc,
    		Created, Author, Updated, Editor
		FROM tblstock
		WHERE StockType = ?
		ORDER BY StockId;
	`, [stockType]);
    return ctx.queryCommand(sql);
}

Factory.prototype.getStockById = function (ctx, stockId) {
    let sql = dbHelper.prepareQueryCommand('', []);
    return ctx.queryCommand(sql);
}

Factory.prototype.createStock = function (ctx, stock) {
	let sql = dbHelper.prepareQueryCommand('', []);
	return ctx.queryCommand(sql);
}

Factory.prototype.updateStock = function (ctx, stock) {
	let sql = dbHelper.prepareQueryCommand('', []);
	return ctx.queryCommand(sql);
}

Factory.prototype.deleteStock = function (ctx, stockId) {
	let sql = dbHelper.prepareQueryCommand('', []);
	return ctx.queryCommand(sql);
}

// Export
module.exports = new Factory;