const express = require('express');
const router = express.Router();
const q = require('q');
const auth = require('../config/auth');
const constant = require('../lib/constant');
const dbContext = require('../lib/dbContext');
const errorHelper = require('../lib/errorHelper');

// Router
router.get('/getdata', function (req, res, next) {
    res.status(200).json(true);
});

// return Router
module.exports = router;