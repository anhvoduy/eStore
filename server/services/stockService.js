const Q = require('q');
const _ = require('lodash');
const dbHelper = require('../lib/dbHelper');

// Constructor
const Factory = function () { 
}

Factory.prototype.getStockIn = function (ctx) {
    let sql = `
		SELECT * 
		FROM Stock 
		WHERE StockType IN ('STOCKIN','INPUT') AND Deleted = 0 
		ORDER BY StockDate DESC;
	`;
    return ctx.queryCommand(sql);
}

Factory.prototype.getStockOut = function (ctx) {
    let sql = `
		SELECT * 
		FROM Stock 
		WHERE StockType IN ('STOCKOUT','OUTPUT') AND Deleted = 0 
		ORDER BY StockDate DESC;
	`;
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