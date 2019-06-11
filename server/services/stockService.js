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

Factory.prototype.getStock = async function (query) {
	try
	{
		let sql = `SELECT * FROM Stock WHERE StockKey=:StockKey`;
		let stock = await dbContext.queryItem(sql, query);		
		return stock;
	}
	catch(err){
		throw err;
	}
}

Factory.prototype.getStockDetail = async function (query) {
	try
	{
		let sql = `SELECT * FROM StockDetail WHERE StockId =:StockId AND Deleted <> 1`;
		let stockDetail = await dbContext.queryList(sql, query);
		return stockDetail;
	}
	catch(err){
		throw err;
	}
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