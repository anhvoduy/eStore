// Dependencies
var express = require('express');
var router = express.Router();
var cache = require('express-redis-cache')();
var q = require('q');
var auth = require('../config/auth');
var constant = require('../config/constant');
var dbContext = require('../config/dbContext');
var errorHelper = require('../config/errorHelper');
var brandService = require('../services/brandService');

// Router
router.get('/items', auth.checkAuthentication(), cache.route(), function (req, res, next) {
	var ctx = {};
	
	q.when()
	.then(function () {
		return dbContext.getConnection();
	}).then(function (con) {
		ctx = con;
		return brandService.getBrands(ctx);
	}).then(function (brands) {
		res.status(200).json(brands);
	}).catch(function (error) {
		next(error);
	}).finally(function () {
		ctx.release();
	});
});

router.get('/items/:id', auth.checkAuthentication(), function (req, res, next) {
	var brandId = req.params.id;

	var ctx = {};
	q.when()
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
