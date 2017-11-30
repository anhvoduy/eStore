var router = require('express').Router();
var _ = require('lodash');
var auth = require('../config/auth');
const CONSTANT = require('../lib/constant');
var dbContext = require('../lib/dbContext');
var errorHelper = require('../lib/errorHelper');
var accountService = require('../services/accountService');

// Router
router.get('/items', auth.checkAuthentication(), async function (req, res, next) {
	try 
	{
		let query = _.pick(req.query, ['PageCurrent', 'PageSize']);
		let data = await accountService.getList(query);
		res.status(200).json(data);
	}
	catch(err){
		next(err);
	}
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

router.post('/create', auth.checkAuthentication(), async function (req, res, next) {
	try
	{
		let account = _.pick(req.body,['AccountNo', 'AccountName', 'Description', 'DebitOrCredit']);
		if(!account.AccountNo)
			throw CONSTANT.MISSING_FIELD_ACCOUNTNO;
		
		if(!account.AccountName)
			throw CONSTANT.MISSING_FIELD_ACCOUNTNAME;

		if(!account.DebitOrCredit)
			throw CONSTANT.MISSING_FIELD_DEBITORCREDIT;
		
		let result = await accountService.create(account);
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
		let account = _.pick(req.body,['AccountId', 'AccountKey', 'AccountNo', 'AccountName', 'Description', 'DebitOrCredit']);		
		if(!account.AccountKey)
			throw CONSTANT.MISSING_FIELD_ACCOUNTKEY;

		if(!account.AccountNo)
			throw CONSTANT.MISSING_FIELD_ACCOUNTNO;
		
		if(!account.AccountName)
			throw CONSTANT.MISSING_FIELD_ACCOUNTNAME;

		if(!account.DebitOrCredit)
			throw CONSTANT.MISSING_FIELD_DEBITORCREDIT;

		if(!account.AccountId){
			let acct = await accountService.getAccountById(account);
			if(!acct)
				throw CONSTANT.INVALID_FIELD_ACCOUNTKEY;
			else 
				account.AccountId = acct.AccountId;
		}

		let result = await accountService.update(account);
		if(result.affectedRows > 0) 
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
		res.status(200).json(true);
	}
	catch(err){
		next(err);
	}
});

// return Router
module.exports = router;
