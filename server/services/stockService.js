const Q = require('q');
const _ = require('lodash');
const dbContext = require('../lib/dbContext');

// Constructor
const Factory = function () { 
}

Factory.prototype.getStockIn = function (query) {
    let sql = `
		SELECT * 
		FROM Stock 
		WHERE StockType IN ('STOCKIN','INPUT') AND Deleted = 0 
		ORDER BY StockDate DESC;
	`;	
	return dbContext.queryList(sql);
}

Factory.prototype.getStockOut = function (query) {
    let sql = `
		SELECT * 
		FROM Stock 
		WHERE StockType IN ('STOCKOUT','OUTPUT') AND Deleted = 0 
		ORDER BY StockDate DESC;
	`;
    return dbContext.queryList(sql);
}

Factory.prototype.getStockById = function (query) {
	let sql = `
		SELECT * 
		FROM Stock
		WHERE StockId =:StockId
		ORDER BY StockDate DESC;
	`;
    return dbContext.queryItem(sql);
}

Factory.prototype.createStock = function (stock) {
	return true;
}

Factory.prototype.updateStock = function (ctx, stock) {
	return true;
}

Factory.prototype.deleteStock = function (ctx, stockId) {
	return true;
}

// Export
module.exports = new Factory;