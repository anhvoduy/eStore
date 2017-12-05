const router = require('express').Router();
const _ = require('lodash');
const multer = require('multer');
const auth = require('../config/auth');
const CONSTANT = require('../lib/constant');
const commonlib = require('../lib/commonlib');
const dbContext = require('../lib/dbContext');
const errorHelper = require('../lib/errorHelper');
const brandService = require('../services/brandService');
const productService = require('../services/productService');

// sample file upload
const multerConfig = {
	dest: './uploads/products',
	limits: { fileSize: CONSTANT.UPLOAD_FILE.FILE_SIZE }
};
const uploadProductImage = multer(multerConfig).single('ProductImage');

router.post('/upload', auth.checkAuthentication(), uploadProductImage, async function(req, res, next){	
	try
	{
		if(req.file)
			res.status(200).json({ Success: true, FileName: req.file.filename });
		else
			res.status(500).json({ Success: false });
	}
	catch(err){
		next(err);
	}
});

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

router.post('/create', auth.checkAuthentication(), async function (req, res, next) {
	try
	{
		let product = _.pick(req.body, ["ProductCode", "ProductName", "ProductImage", "Description", 
			"BrandId", "Price", "ColorCode", "Status"]);
		
		if(!product.ProductName)
			throw CONSTANT.MISSING_FIELD_PRODUCTNAME;

		if(!product.Status)
			product.Status = CONSTANT.PRODUCT_STATUS.NEW;

		let result = await productService.create(product);		
		if(result.affectedRows > 0) 
			res.status(200).json({ InsertId: result.insertId, success: true });
		else 
			res.status(500).json({ success: false });
	}
	catch(err){
		next(err);
	}
});

router.post('/update', auth.checkAuthentication(), async function (req, res, next) {
	try
	{
		let product = _.pick(req.body, ["ProductKey", "ProductCode", "ProductName", "ProductImage", "Description", 
			"BrandId", "Price", "ColorCode", "Status"]);
		
		if(!product.ProductKey)
			throw CONSTANT.MISSING_FIELD_PRODUCTKEY;

		if(!product.ProductName)
			throw CONSTANT.MISSING_FIELD_PRODUCTNAME;

		if(!product.ProductId){
			let prod = await productService.getProductByKey(product);
			if(!prod)
				throw CONSTANT.INVALID_FIELD_PRODUCTKEY;
			else 
				product.ProductId = prod.ProductId;
		}

		let r1 = await productService.update(product);
		let r2 = await productService.saveImage(product.ProductId, product.ProductImage);
		if(r1.affectedRows > 0) 
			res.status(200).json({ success: true });
		else 
			res.status(500).json({ success: false });
	}
	catch(err){
		next(err);
	}		
});

router.post('/delete', auth.checkAuthentication(), async function (req, res, next) {
	try
	{
		let product = _.pick(req.body, ["ProductId","ProductKey"]);
		
		if(!product.ProductKey)
			throw CONSTANT.MISSING_FIELD_PRODUCTKEY;		

		if(!product.ProductId){
			let prod = await productService.getProductByKey(product);
			if(!prod)
				throw CONSTANT.INVALID_FIELD_PRODUCTKEY;
			else 
				product.ProductId = prod.ProductId;
		}

		let result = await productService.delete(product.ProductId);
		if(result.affectedRows > 0) 
			res.status(200).json({ success: true });
		else 
			res.status(500).json({ success: false });
	}
	catch(err){
		next(err);
	}		
});

// Export
module.exports = router;