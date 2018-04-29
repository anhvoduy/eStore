const router = require('express').Router();
const _ = require('lodash');
const auth = require('../config/auth');
const CONSTANT = require('../lib/constant');
const dbContext = require('../lib/dbContext');

// Router
router.get('/items', auth.checkAuthentication(), async function (req, res, next) {
	try
	{
		return res.status(200).json(true);
	}
	catch(err){
		next(err);
	}
});

router.get('/item', auth.checkAuthentication(), async function (req, res, next) {
	try
	{		
		return res.status(200).json(true);
	}
	catch(err){
		next(err);
	}
});

router.post('/create', auth.checkAuthentication(), async function (req, res, next) {
	try
	{
		return res.status(200).json(true);
	}
	catch(err){
		next(err);
	}
});

router.post('/update', auth.checkAuthentication(), async function (req, res, next) {
	try
	{
		return res.status(200).json(true);
	}
	catch(err){
		next(err);
	}		
});

router.post('/delete', auth.checkAuthentication(), async function (req, res, next) {
	try
	{
		return res.status(200).json(true);
	}
	catch(err){
		next(err);
	}
});

module.exports = router;