// Dependencies
const express = require('express');
const router = express.Router();
const q = require('q');
const auth = require('../config/auth');
const constant = require('../lib/constant');
const dbContext = require('../lib/dbContext');
const errorHelper = require('../lib/errorHelper');
const brandService = require('../services/brandService');

// Router
router.get('/items', function (request, response, next) {
	
});

router.get('/items/:id', function (request, response, next) {
    
});

// return Router
module.exports = router;
