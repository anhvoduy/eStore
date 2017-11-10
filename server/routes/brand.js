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
		let query = _.pick(req.query,['BrandId', 'BrandKey']);
		let brand;
		if(query.BrandId)
			brand = await brandService.getBrandById(query);
		else if(query.BrandKey)
			brand = await brandService.getBrandByKey(query);		
		res.status(200).json(brand);
	}
	catch(err){
		next(err);
	}
});

router.post('/create', auth.checkAuthentication(), function (req, res, next) {	
	res.status(200).json(true);
});

router.put('/update', auth.checkAuthentication(), function (req, res, next) {    
    var brand = {
        BrandId: req.body.BrandId,
        Name: req.body.Name,
        Description: req.body.Description
    };
	res.status(200).json({ code: 'UPDATE_BRAND_SUCCESS', message: "Update Brand is success." });		
});

router.delete('/delete', auth.checkAuthentication(), function (req, res, next) {
	res.status(200).json(true);
});

// Export
module.exports = router;