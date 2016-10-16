// Dependencies
var express = require('express');
var router = express.Router();
var dbContext = require('../config/dbContext');
var errorHelper = require('../config/errorHelper');

// Router
router.put('/input', function (request, response, next) {
    // cash receive
});

router.put('/output', function (request, response, next) {
    // cash payment
});

router.get('/items/:id', function (request, response, next) {
    // view cash
});

// return Router
module.exports = router;
