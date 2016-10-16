// Dependencies
var express = require('express');
var router = express.Router();
var dbContext = require('../config/dbContext');
var errorHelper = require('../config/errorHelper');
var brandService = require('../services/brandService');

// Router
router.get('/items', function (request, response, next) {
	
});

router.get('/items/:id', function (request, response, next) {
    
});

// return Router
module.exports = router;
