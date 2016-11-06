// Dependencies
var express = require('express');
var router = express.Router();
var q = require('q');
var auth = require('../config/auth');
var constant = require('../config/constant');
var dbContext = require('../config/dbContext');
var errorHelper = require('../config/errorHelper');
var brandService = require('../services/brandService');

// Router
router.get('/items', auth.checkAuthentication(), function (request, response, next) {
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

router.get('/items/:id', auth.checkAuthentication(), function (request, response, next) {
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

router.post('/create', auth.checkAuthentication(), function (request, response, next) {
	// create brand
});

router.put('/update', auth.checkAuthentication(), function (request, response, next) {
    // validate data at server side
    var brand = {
        BrandId: request.body.BrandId,
        Name: request.body.Name,
        Description: request.body.Description
    };
    
	var ctx = {};
	dbContext.getConnection().then(function (result) {
		ctx = result;
		return ctx.beginTransaction();
	}).then(function () {
		return brandService.updateBrand(ctx, brand);
	}).then(function () {
		return ctx.commitTransaction();
	}).then(function () {
        response.status(200).json({ code: 'UPDATE_BRAND_SUCCESS', message: "Update Brand is success." });
	}).catch(function (error) {
		ctx.rollbackTransaction();        
        next(error);
	}).done(function () {
		ctx.release();		
	});
});

router.delete('/delete', auth.checkAuthentication(), function (request, response, next) {
	// create brand
});

// return Router
module.exports = router;
