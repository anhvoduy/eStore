// Dependencies
var Q = require('q');
var dbHelper = require('../config/dbHelper');

// Constructor
var stockService = function () { 
}

stockService.prototype.getStocks = function (ctx, stockType) {
    var sql = dbHelper.prepareQueryCommand(`
		SELECT StockId, StockNo, StockDate, StockType, Description, Currency,
			TotalAmount, CustomerId, CustomerName, InvoiceNo, InvoiceDate, InvoiceDesc,
    		Created, Author, Updated, Editor
		FROM tblstock
		WHERE StockType = ?
		ORDER BY StockId;
	`, [stockType]);
    return ctx.queryCommand(sql);
}

stockService.prototype.getStockById = function (ctx, stockId) {
    var sql = dbHelper.prepareQueryCommand('', []);
    return ctx.queryCommand(sql);
}

stockService.prototype.createStock = function (ctx, stock) {
	var sql = dbHelper.prepareQueryCommand('', []);
	return ctx.queryCommand(sql);
}

stockService.prototype.updateStock = function (ctx, stock) {
	var sql = dbHelper.prepareQueryCommand('', []);
	return ctx.queryCommand(sql);
}

stockService.prototype.deleteStock = function (ctx, stockId) {
	var sql = dbHelper.prepareQueryCommand('', []);
	return ctx.queryCommand(sql);
}

// Export
module.exports = new stockService;