var router = require('express').Router();
var _ = require('lodash');
var auth = require('../config/auth');
var constant = require('../lib/constant');
var dbContext = require('../lib/dbContext');
var errorHelper = require('../lib/errorHelper');
var brandService = require('../services/brandService');

// Router
router.get('/items', async function (req, res, next) {
	try
	{
		let query = req.query;
		let brands = await brandService.getBrands();
		return res.status(200).json(brands);
	}
	catch(err){
		next(err);
	}	
});

router.get('/item', async function (req, res, next) {
	try
	{
		var brandId = req.params.id;
		let brands = await brandService.getBrandById(brandId);

		if (brands.length == 0) 
			res.status(404).json(errorHelper.Error_Not_Exist_BrandId);
		else 
			res.status(200).json(brands[0]);				
	}
	catch(err){
		next(err);
	}	
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
	}).catch(function (err) {
		ctx.rollbackTransaction();
        next(err);
	})
	.done();
});

router.delete('/delete', auth.checkAuthentication(), function (req, res, next) {
	// create brand
});

// return Router
module.exports = router;
