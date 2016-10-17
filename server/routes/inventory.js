// Dependencies
var express = require('express');
var router = express.Router();
var dbContext = require('../config/dbContext');
var errorHelper = require('../config/errorHelper');

// Router
router.put('/input', function (request, response, next) {
    // stock input
});

router.put('/output', function (request, response, next) {
    // stock output
});

router.get('/items/:id', function (request, response, next) {
    // view stock by id
});

// return Router
module.exports = router;
