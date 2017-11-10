var router = require('express').Router();
var _ = require('lodash');
var auth = require('../config/auth');
var constant = require('../lib/constant');
var dbContext = require('../lib/dbContext');
var errorHelper = require('../lib/errorHelper');
var accountService = require('../services/accountService');

// Router
router.get('/items', auth.checkAuthentication(), async function (req, res, next) {
	try 
	{
		let query = req.query;
		let accounts = await accountService.getAccounts(query);
		res.status(200).json(accounts);
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
	res.status(200).json(true);
});

router.put('/update', auth.checkAuthentication(), async function (req, res, next) {
	res.status(200).json(true);
});

router.delete('/delete', auth.checkAuthentication(), async function (req, res, next) {
	res.status(200).json(true);
});

// return Router
module.exports = router;
