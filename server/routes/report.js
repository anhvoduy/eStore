const express = require('express');
const router = express.Router();
const Q = require('q');
//const auth = require('../config/auth');
const CONSTANT = require('../lib/constant');
const errorHelper = require('../lib/errorHelper');

// Router
router.get('/reportCashIn', function (req, res, next) {
	res.status(200).json({ code: 'OK', message: "Success." });
});

router.get('/reportCashOut', function (req, res, next) {
    res.status(200).json({ code: 'OK', message: "Success." });
});

router.get('/cashBalance', function (req, res, next) {
    res.status(200).json({ code: 'OK', message: "Success." });
});

router.get('/inventoryBalance', function (req, res, next) {
    res.status(200).json({ code: 'OK', message: "Success." });
});

// return Router
module.exports = router;
