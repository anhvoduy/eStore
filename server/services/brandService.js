const _ = require('lodash');
const dbContext = require('../lib/dbContext');

// Constructor
const Factory = function(){	
}

Factory.prototype.getBrands = function (query) {
	let sql = `
		SELECT BrandId, BrandKey, BrandName, Description
		FROM Brand
		WHERE Deleted <> 1
		ORDER BY BrandId DESC
	`;
	return dbContext.queryList(sql, query);
}

Factory.prototype.getBrandById = function (query) {
	let sql = `
		SELECT BrandId, BrandKey, BrandName, Description
		FROM Brand 
		WHERE BrandId=:BrandId AND Deleted <> 1		
	`;
	return dbContext.queryItem(sql, query);
}

Factory.prototype.getBrandByKey = function (query) {
	let sql = `
		SELECT BrandId, BrandKey, BrandName, Description
		FROM Brand 
		WHERE BrandKey=:BrandKey AND Deleted <> 1		
	`;
	return dbContext.queryItem(sql, query);
}

Factory.prototype.createBrand = function (brand) {
	return true;
}

Factory.prototype.updateBrand = function (brand) {
	return true;
}

Factory.prototype.deleteBrand = function (brand) {
	return true;
}

// Export
module.exports = new Factory;
