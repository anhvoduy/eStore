const router = require('express').Router();
const _ = require('lodash');
const auth = require('../config/auth');
const CONSTANTS = require('../lib/constants');
const customerService = require('../services/customerService');

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

router.post('/create', auth.checkAuthentication(), async function (req, res, next) {
	try
	{
		let customer = _.pick(req.body, ["CustomerName","Description","Email","Mobile","Tel","Fax","Representative","Title","Address","ImageKey"]);
		
		if(!customer.CustomerName)
			throw { code: 'MISSING_REQUIRED_FIELD', message: 'missing required field: CustomerName' }

		if(!customer.Address)
			throw { code: 'MISSING_REQUIRED_FIELD', message: 'missing required field: Address' }
		
		if(!customer.Email)
			throw { code: 'MISSING_REQUIRED_FIELD', message: 'missing required field: Email' }

		let result = await customerService.create(customer);		
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
		let customer = _.pick(req.body, ["CustomerId","CustomerKey","CustomerName","Description","Email","Mobile","Tel","Fax","Representative","Title","Address","ImageKey"]);
		
		if(!customer.CustomerKey)
			throw { code: 'MISSING_REQUIRED_FIELD', message: 'missing required field: CustomerKey' };

		if(!customer.CustomerName)
			throw { code: 'MISSING_REQUIRED_FIELD', message: 'missing required field: CustomerName' };

		if(!customer.Address)
			throw { code: 'MISSING_REQUIRED_FIELD', message: 'missing required field: Address' };
		
		if(!customer.Email)
			throw { code: 'MISSING_REQUIRED_FIELD', message: 'missing required field: Email' };

		if(!customer.CustomerId){
			let cus = await customerService.getCustomerByKey(customer);
			if(!cus) throw { code: 'INVALID_FIELD', message: 'Invalid field: Customer Key' };
			else customer.CustomerId = cus.CustomerId;
		}

		let result = await customerService.update(customer);
		if(result.affectedRows > 0) 
			res.status(200).json({ success: true });
		else
			res.status(500).json({ success: false });
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
