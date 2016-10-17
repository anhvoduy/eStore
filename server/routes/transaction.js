// Dependencies
var express = require('express');
var router = express.Router();
var dbContext = require('../config/dbContext');
var errorHelper = require('../config/errorHelper');
var brandService = require('../services/brandService');

// Router
router.get('/items', function (request, response, next) {
	dbContext.getConnection().then(function (result) {
		ctx = result;
		return brandService.getBrands(ctx);
	}).then(function (brands) {
		response.status(200).json(brands);
	}).catch(function (error) {
		next(error);
	}).done(function () {
		ctx.release();
	});
});

router.get('/items/:id', function (request, response, next) {
    var brandId = request.params.id;

	var ctx = {};        
	dbContext.getConnection().then(function (result) {
		ctx = result;
		return brandService.getBrandById(ctx, brandId);
	}).then(function (brands) {
		if (brands.length == 0) {
            response.status(404).json(errorHelper.Error_Existed_BrandId);
		} else {
			response.status(200).json(brands[0]);
		}
	}).catch(function (error) {
        next(error);
	}).done(function () {
		ctx.release();		
	});
});

// return Router
module.exports = router;
