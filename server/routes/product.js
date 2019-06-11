const router = require('express').Router();
const _ = require('lodash');
const cors = require('cors');
const multer = require('multer');
const moment = require('moment');
const Excel = require('excel4node');

const auth = require('../config/auth');
const CONSTANTS = require('../lib/constants');
const brandService = require('../services/brandService');
const productService = require('../services/productService');

// bucket ProductImage
const bucket = './uploads/products';
const uploadProductImage = function(){
	const multerConfig = {
		dest: bucket,
		limits: { fileSize: CONSTANTS.UPLOAD_FILE.FILE_SIZE }
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
			throw { code: 'MISSING_REQUIRED_FIELD', message: 'missing required field: ProductId' }
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
		// let query = _.pick(req.query, ['PageCurrent', 'PageSize']);
		// if(!query.PageCurrent && !query.PageSize){
		// 	query.PageCurrent = 1;
		// 	query.PageSize = 5000;
		// }
		// let data = await productService.getProducts(query);
		// res.status(200).json(data);

		let fileName = `Export_Product_${moment(new Date()).format('YYYYMMDDHHmmss')}.xlsx`;
		res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
		res.setHeader("Content-Disposition", "attachment; filename=" + fileName);
		
		let workbook = new Excel.Workbook();
        let worksheet = workbook.addWorksheet('Sheet1');
        let style = workbook.createStyle({
			font: {
				color: '#FF0800',
				size: 12,
			},
			numberFormat: '$#,##0.00; ($#,##0.00); -',
		});
		worksheet.cell(1, 1).number(100).style(style);
		worksheet.cell(1, 2).number(200).style(style);
		worksheet.cell(1, 3).formula('A1 + B1').style(style);
		worksheet.cell(2, 1).string('string').style(style);
		worksheet.cell(3, 1).bool(true).style(style).style({font: {size: 14}});
		return workbook.write(fileName, res);
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
			throw { code: 'MISSING_REQUIRED_FIELD', message: 'missing required field: ProductKey' }
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
			throw { code: 'MISSING_REQUIRED_FIELD', message: 'Missing required field: BrandId or BrandKey.' };

		if(query.BrandKey){
			let brand = await brandService.getBrandByKey({ BrandKey: query.BrandKey });
			if(!brand || !brand.BrandId) throw { code: 'INVALID_DATA', message: 'Invalid data' };
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
			throw { code: 'MISSING_REQUIRED_FIELD', message: 'missing required field: ProductName' }

		if(!product.Status)
			product.Status = CONSTANTS.PRODUCT_STATUS.NEW;

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
			throw { code: 'MISSING_REQUIRED_FIELD', message: 'missing required field: ProductKey' }

		if(!product.ProductName)
			throw { code: 'MISSING_REQUIRED_FIELD', message: 'missing required field: ProductName' }

		if(!product.ProductId){
			let prod = await productService.getProductByKey(product);
			if(!prod)
				throw { code: 'INVALID_FIELD', message: 'Invalid field: ProductKey' }
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
			throw { code: 'MISSING_REQUIRED_FIELD', message: 'missing required field: ProductKey' }

		if(!product.ProductId){
			let prod = await productService.getProductByKey(product);
			if(!prod) throw { code: 'INVALID_FIELD', message: 'Invalid field: ProductKey' }
			else product.ProductId = prod.ProductId;
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