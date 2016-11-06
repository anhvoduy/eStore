// Dependencies
var express = require('express');
var router = express.Router();
var q = require('q');
var auth = require('../config/auth');
var constant = require('../config/constant');
var dbContext = require('../config/dbContext');
var errorHelper = require('../config/errorHelper');

/* ------------ Stock In ------------ */
router.get('/stockin', function (request, response, next) {
    // get items
});

router.get('/stockin/:id', function (request, response, next) {
    // create stock
});

router.post('/stockin/:id', function (request, response, next) {
    // create stock
});

router.put('/stockin/:id', function (request, response, next) {
    // edit stock
});


/* ------------ Stock Out ------------ */
router.get('/stockout', function (request, response, next) {
    // get items
});

router.get('/stockout/:id', function (request, response, next) {
    // create stock
});

router.post('/stockout/:id', function (request, response, next) {
    // create stock
});

router.put('/stockout/:id', function (request, response, next) {
    // edit stock
});

// return Router
module.exports = router;
