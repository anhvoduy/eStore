const router = require('express').Router();
const _ = require('lodash');
const auth = require('../config/auth');
const accountService = require('../services/accountService');

// Router
router.get('/items', auth.checkAuthentication(), async function (req, res, next) {
	try 
	{
		let query = _.pick(req.query,['PageCurrent', 'PageSize']);
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
			throw { code: 'MISSING_REQUIRED_FIELD', message: 'Missing required field: AccountNo' }
		
		if(!account.AccountName)
			throw { code: 'MISSING_REQUIRED_FIELD', message: 'Missing required field: AccountName' }

		if(!account.DebitOrCredit)
			throw { code: 'MISSING_REQUIRED_FIELD', message: 'Missing required field: DebitOrCredit' }
		
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
			throw { code: 'MISSING_REQUIRED_FIELD', message: 'Missing required field: AccountKey' }

		if(!account.AccountNo)
			throw { code: 'MISSING_REQUIRED_FIELD', message: 'Missing required field: AccountNo' }
		
		if(!account.AccountName)
			throw { code: 'MISSING_REQUIRED_FIELD', message: 'Missing required field: AccountName' }

		if(!account.DebitOrCredit)
			throw { code: 'MISSING_REQUIRED_FIELD', message: 'Missing required field: DebitOrCredit' }

		if(!account.AccountId){
			let acct = await accountService.getAccountById(account);
			if(!acct)
				throw { code: 'INVALID_FIELD_ACCOUNTKEY', message: 'Invalid field: AccountKey' };
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

// return Router
module.exports = router;
