// Dependencies
var express = require('express');
var router = express.Router();
var Q = require('q');
var auth = require('../config/auth');
var constant = require('../config/constant');
var dbContext = require('../config/dbContext');
var errorHelper = require('../config/errorHelper');
var brandService = require('../services/brandService');

// Router
router.get('/items', function (req, res, next) {
	var brands;
	var ctx;

	return Q.when()
	.then(function(){
		return dbContext.getConnection();
	})
	.then(function(ctx){
		return brandService.getBrands(ctx).then(function(data){
			brands = data;
		});
	})
	.then(function(){
		res.status(200).json(brands);
	})
	.catch(function(err){
		ctx.release();
		next(error);
	})
	.done();
});

router.get('/items/:id', function (req, res, next) {
	var brandId = req.params.id;
	var ctx = {};

	return Q.when()
	.then(function () {
		return dbContext.getConnection();
	}).then(function (con) {
		ctx = con;
		return brandService.getBrands(ctx);
	}).then(function (brands) {
		if (brands.length == 0) {
			res.status(404).json(errorHelper.Error_Not_Exist_BrandId);
		} else {
			res.status(200).json(brands[0]);
		}
	}).catch(function (error) {
		next(error);
	}).finally(function () {
		ctx.release();
	});
});

router.post('/create', auth.checkAuthentication(), function (req, res, next) {
	// create brand
});

router.put('/update', auth.checkAuthentication(), function (req, res, next) {
    // validate data at server side
    var brand = {
        BrandId: req.body.BrandId,
        Name: req.body.Name,
        Description: req.body.Description
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
        res.status(200).json({ code: 'UPDATE_BRAND_SUCCESS', message: "Update Brand is success." });
	}).catch(function (error) {
		ctx.rollbackTransaction();        
        next(error);
	}).done(function () {
		ctx.release();		
	});
});

router.delete('/delete', auth.checkAuthentication(), function (req, res, next) {
	// create brand
});

// return Router
module.exports = router;
