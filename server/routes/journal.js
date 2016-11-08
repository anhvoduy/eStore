// Dependencies
var express = require('express');
var router = express.Router();
var q = require('q');
var auth = require('../config/auth');
var constant = require('../config/constant');
var dbContext = require('../config/dbContext');
var errorHelper = require('../config/errorHelper');
var journalService = require('../services/journalService');

// Router
router.get('/items', auth.checkAuthentication(), function (req, res, next) {
	//	
});

router.get('/items/:id', auth.checkAuthentication(), function (req, res, next) {
	//	
});

router.post('/create', auth.checkAuthentication(), function (req, res, next) {
	//
});

router.put('/update', auth.checkAuthentication(), function (req, res, next) {	
	// 
});

router.delete('/delete', auth.checkAuthentication(), function (req, res, next) {
	//
});

// return Router
module.exports = router;
