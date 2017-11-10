const router = require('express').Router();
const _ = require('lodash');
const auth = require('../config/auth');
const constant = require('../lib/constant');
const dbContext = require('../lib/dbContext');
const errorHelper = require('../lib/errorHelper');
const brandService = require('../services/brandService');
const productService = require('../services/productService');

// Router
router.get('/items', auth.checkAuthentication(), async function (req, res, next) {
	try
	{
		let query = _.pick(req.query, ['PageCurrent', 'PageSize']);
		let data = await productService.getProducts(query);
		res.status(200).json(data);
	}
	catch(err){
		next(err);
	}
});

router.get('/item', auth.checkAuthentication(), async function (req, res, next) {
	try
	{
		let query = _.pick(req.query, ['ProductId', 'ProductKey']);
		let products;
		if(query.ProductId)		
			 products = await productService.getProductById(query);
		else if(query.ProductKey)
			products = await productService.getProductByKey(query);
		res.status(200).json(products);
	}
	catch(err){
		next(err);
	}	
});

router.get('/brand/items', auth.checkAuthentication(), async function (req, res, next) {
	try
	{
		let query = _.pick(req.query, ['BrandId', 'BrandKey']);		
		let brand = await brandService.getBrandByKey({ BrandKey: query.BrandKey });		
		let products = await productService.getProductsByBrand({ BrandId: brand.BrandId });		
		res.status(200).json(products);
	}
	catch(err){
		next(err);
	}	
});

// Export
module.exports = router;