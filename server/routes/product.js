const router = require('express').Router();
const _ = require('lodash');
const cors = require('cors');
const multer = require('multer');
const moment = require('moment');
const excel = require('../lib/excelHelper');

const auth = require('../config/auth');
const CONSTANT = require('../lib/constant');
const dbContext = require('../lib/dbContext');
const uploadFile = require('../lib/uploadFile');
const brandService = require('../services/brandService');
const productService = require('../services/productService');

// bucket ProductImage
const bucket = './uploads/products';
const uploadProductImage = function(){
	const multerConfig = {
		dest: bucket,
		limits: { fileSize: CONSTANT.UPLOAD_FILE.FILE_SIZE }
	};
	return multer(multerConfig).single('ProductImage');
};

// Routers
router.post('/upload', uploadProductImage(), auth.checkAuthentication(), async function(req, res, next){
	try
	{
		if(!req.file){
			res.status(500).json({ Success: false });
		}

		if(!req.body.ProductId){
			throw CONSTANT.MISSING_FIELD_PRODUCTID;
		}
		
		let productId = req.body.ProductId;
		let fileName = req.file.filename;
		let data = await productService.saveImage(productId, fileName);
		res.status(200).json({ Success: true, ProductId: productId, FileName: fileName });
	}
	catch(err){
		next(err);
	}
});


router.get('/export', async function(req, res, next){
	try
	{
		let query = _.pick(req.query, ['PageCurrent', 'PageSize']);
		if(!query.PageCurrent && !query.PageSize){
			query.PageCurrent = 1;
			query.PageSize = 5000;
		}
		let header = ['ProductId','ProductName','SizeList','Description','Price','ColorCode','Status','LatestReviewInfo','ProductImage'];
		//let { PageData } = await productService.getProducts(query);
		let fileName = `Export_Product_${moment(new Date()).format('YYYYMMDDHHmmss')}.xlsx`;
		return excel.exportFile(res, header, fileName);
	}
	catch(err){
		next(err);
	}
});

/**
 * API: using for Back End
 */
router.get('/items', auth.checkAuthentication(), async function (req, res, next) {
	try
	{
		let query = _.pick(req.query, ['PageCurrent', 'PageSize']);
		if(!query.PageCurrent && !query.PageSize){
			query.PageCurrent = 1;
			query.PageSize = 5000;
		}

		let data = await productService.getProducts(query);
		res.status(200).json(data);
	}
	catch(err){
		next(err);
	}
});


/**
 * API: using for Front End
 * return: list items
 */
router.get('/fe/items', cors(), async function (req, res, next) {
	try
	{
		let query = _.pick(req.query, ['PageCurrent', 'PageSize']);
		if(!query.PageCurrent && !query.PageSize){
			query.PageCurrent = 1;
			query.PageSize = 5000;
		}

		let data = await productService.getProducts(query);
		res.status(200).json(data);
	}
	catch(err){
		next(err);
	}
});

/**
 * API: using for Front End
 * return: item
 */
router.get('/fe/item', cors(), async function (req, res, next) {
	try
	{
		let query = _.pick(req.query, ['ProductKey']);
		if(!query.ProductKey){
			throw CONSTANT.MISSING_FIELD_PRODUCTKEY;
		}

		let data = await productService.getProductByKey(query);
		res.status(200).json(data);
	}
	catch(err){
		next(err);
	}
});

/**
 * API: using for Front End
 */
router.get('/fe/mostliked', cors(), async function (req, res, next) {
	try
	{		
		let query = _.pick(req.query, ['PageCurrent', 'PageSize']);		
		let data = await productService.getProductMostLiked();
		res.status(200).json(data);
	}
	catch(err){
		next(err);
	}
});


/**
 * API: using for Back End
 */
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

/**
 * API: using for Front End & Back End
 */
router.get('/brand/items', 
	//auth.checkAuthentication(), 
	async function (req, res, next) {
	try
	{
		let query = _.pick(req.query, ['BrandId', 'BrandKey','PageCurrent','PageSize']);
		if(!query.PageCurrent && !query.PageSize){
			query.PageCurrent = 1;
			query.PageSize = 5000;
		}
		
		if(!query.BrandKey && !query.BrandId)
			throw CONSTANT.MISSING_FIELD_BRANDID_BRANDKEY;

		if(query.BrandKey){
			let brand = await brandService.getBrandByKey({ BrandKey: query.BrandKey });
			if(!brand || !brand.BrandId) throw CONSTANT.INVALID_FIELD_BRANDKEY;
			else query.BrandId = brand.BrandId;
		}

		let products = await productService.getProductsByBrand(query);
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