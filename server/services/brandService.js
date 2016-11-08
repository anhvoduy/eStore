// Dependencies
var q = require('q');
var dbHelper = require('../config/dbHelper');

// Constructor
var brandService = function () { 
}

brandService.prototype.getBrands = function (ctx) {
	var sql = 'SELECT BrandId, Name, Description FROM tblbrand WHERE deleted = 0 ORDER BY BrandId DESC';
	return ctx.queryCommand(sql);
}

brandService.prototype.getBrandById = function (ctx, brandId) {
	var sql = dbHelper.prepareQueryCommand('SELECT BrandId, Name, Description FROM tblbrand WHERE brandId = ?', [brandId]);
	return ctx.queryCommand(sql);    
}

brandService.prototype.updateBrand = function (ctx, brand) {
	var sql = dbHelper.prepareQueryCommand('UPDATE tblbrand SET Name = ?, Description = ? WHERE BrandId = ?', 
		[brand.Name, brand.Description, brand.BrandId]);
	return ctx.queryCommand(sql);
}

// Export
module.exports = new brandService;
