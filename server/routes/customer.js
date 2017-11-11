var router = require('express').Router();
var _ = require('lodash');
var auth = require('../config/auth');
var CONSTANT = require('../lib/constant');
var dbContext = require('../lib/dbContext');
var errorHelper = require('../lib/errorHelper');
var customerService = require('../services/customerService');

// Router
router.get('/items', async function (req, res, next) {
	try
	{
		let query = _.pick(req.query, ['PageCurrent', 'PageSize']);
		
		if(!query.PageCurrent && !query.PageSize){
			query.PageCurrent = 1;
			query.PageSize = 5000;
		}
		
		let data = await customerService.getList(query);		
		res.status(200).json(data);
	}
	catch(err){
		next(err);
	}
});

router.get('/item', async function (req, res, next) {
	try
	{
		let query = _.pick(req.query,['CustomerId', 'CustomerKey']);
		let customer;
		if(query.CustomerId)
			customer = await customerService.getCustomerById(query);
		else if(query.CustomerKey)
			customer = await customerService.getCustomerByKey(query);		
		res.status(200).json(customer);
	}
	catch(err){
		next(err);
	}
});

router.get('/create', async function (req, res, next) {
	try
	{
		res.status(200).json(true);
	}
	catch(err){
		next(err);
	}
});

router.get('/update', async function (req, res, next) {
	try
	{
		res.status(200).json(true);
	}
	catch(err){
		next(err);
	}
});

router.get('/delete', async function (req, res, next) {
	try
	{
		res.status(200).json(true);
	}
	catch(err){
		next(err);
	}
});

// Export
module.exports = router;