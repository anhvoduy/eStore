const router = require('express').Router();
const _ = require('lodash');
const auth = require('../config/auth');
const CONSTANT = require('../lib/constant');
const dbContext = require('../lib/dbContext');
const brandService = require('../services/brandService');

// Router
router.get('/items', auth.checkAuthentication(), async function (req, res, next) {
	try
	{
		let query = _.pick(req.query, ['PageCurrent', 'PageSize']);
		
		if(!query.PageCurrent || parseInt(query.PageCurrent)<=0){
			query.PageCurrent = 1;
		}

		if(!query.PageSize || parseInt(query.PageSize)<=0){
			query.PageSize = 5000;
		}

		let data = await brandService.getList(query);
		return res.status(200).json(data);
	}
	catch(err){
		next(err);
	}
});

router.get('/item', auth.checkAuthentication(), async function (req, res, next) {
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

router.post('/create', auth.checkAuthentication(), async function (req, res, next) {
	try
	{
		let brand = _.pick(req.body, ["BrandName", "Description"]);
		if(!brand.BrandName)
			throw CONSTANT.MISSING_FIELD_BRANDNAME;

		let result = await brandService.create(brand);		
		if(result.affectedRows > 0) res.status(200).json({ InsertId: result.insertId, success: true });
		else res.status(500).json({ success: false });
	}
	catch(err){
		next(err);
	}
});

router.post('/update', auth.checkAuthentication(), async function (req, res, next) {
	try
	{
		let brand = _.pick(req.body, ["BrandId", "BrandKey", "BrandName", "Description"]);
		// if(!brand.BrandKey)
		// 	throw CONSTANT.MISSING_FIELD_BRANDKEY;

		if(!brand.BrandName)
			throw CONSTANT.MISSING_FIELD_BRANDNAME;

		if(!brand.BrandId){
			let br = await brandService.getBrandByKey(brand);
			if(!br)
				throw CONSTANT.INVALID_FIELD_BRANDKEY;
			else 
				brand.BrandId = br.BrandId;
		}

		let result = await brandService.update(brand);
		if(result.affectedRows > 0) res.status(200).json({ success: true });
		else res.status(500).json({ success: false });
	}
	catch(err){
		next(err);
	}		
});

router.post('/delete', auth.checkAuthentication(), async function (req, res, next) {
	try
	{
		let brand = _.pick(req.body, ["BrandKey"]);
		if(!brand.BrandKey)
			throw CONSTANT.MISSING_FIELD_BRANDKEY;

		if(!brand.BrandId){
			let br = await brandService.getBrandByKey(brand);
			if(!br)
				throw CONSTANT.INVALID_FIELD_BRANDKEY;
			else 
				brand.BrandId = br.BrandId;
		}

		let result = await brandService.delete(brand);
		res.status(200).json(result);		
	}
	catch(err){
		next(err);
	}
});

// Export
module.exports = router;