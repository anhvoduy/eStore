var express = require('express');
var router = express.Router();
var auth = require('../config/auth');
var journalService = require('../services/journalService');

// Router
router.get('/items', auth.checkAuthentication(), function (req, res, next) {
	res.status(200).json(true);
});

router.get('/item', auth.checkAuthentication(), function (req, res, next) {
	res.status(200).json(true);
});

router.post('/create', auth.checkAuthentication(), function (req, res, next) {
	res.status(200).json(true);
});

router.put('/update', auth.checkAuthentication(), function (req, res, next) {	
	res.status(200).json(true);
});

router.delete('/delete', auth.checkAuthentication(), function (req, res, next) {
	res.status(200).json(true);
});

// return Router
module.exports = router;
