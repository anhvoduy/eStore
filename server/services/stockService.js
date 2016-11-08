// Dependencies
var q = require('q');
var dbHelper = require('../config/dbHelper');

// Constructor
var stockService = function () { 
}

stockService.prototype.getStocks = function (ctx, condition) {
    var sql = dbHelper.prepareQueryCommand('', []);
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