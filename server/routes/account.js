var router = require('express').Router();
var _ = require('lodash');
var auth = require('../config/auth');
var constant = require('../lib/constant');
var dbContext = require('../lib/dbContext');
var errorHelper = require('../lib/errorHelper');
var accountService = require('../services/accountService');

// Router
router.get('/items', auth.checkAuthentication(), function (req, res, next) {
	dbContext.getConnection().then(function (result) {
		ctx = result;
		return accountService.getAccounts(ctx);
	}).then(function (accounts) {
		res.status(200).json(accounts);
	}).catch(function (error) {
		next(error);
	}).done(function () {
		ctx.release();
	});
});

router.get('/item', auth.checkAuthentication(), async function (req, res, next) {
	try
	{
		let query = _.pick(req.query,['AccountId', 'AccountKey']);
		let account = await accountService.getAccountById(query);		
		res.status(200).json(account);
	}
	catch(err){
		next(err);
	}	
});

router.post('/create', auth.checkAuthentication(), function (req, res, next) {
	// validate data at server side	
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
		return accountService.updateBrand(ctx, brand);
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
	// validate data at server side	
});

// return Router
module.exports = router;
