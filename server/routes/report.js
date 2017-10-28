const express = require('express');
const router = express.Router();
const Q = require('q');
const auth = require('../config/auth');
const CONSTANT = require('../lib/constant');
const errorHelper = require('../lib/errorHelper');

router.get('/cash', function (req, res, next) {
	res.status(200).json({ code: 'OK', message: "Success." });
});

router.get('/inventory', function (req, res, next) {
    res.status(200).json({ code: 'OK', message: "Success." });
});

module.exports = router;
