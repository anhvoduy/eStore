// Dependencies
var express = require('express');
var router = express.Router();
var q = require('q');
var auth = require('../config/auth');
var constant = require('../config/constant');
var dbContext = require('../config/dbContext');
var errorHelper = require('../config/errorHelper');

/* ------------ Cash In ------------ */
router.get('/cashin', function (req, res, next) {
    // get items
});

router.get('/cashin/:id', function (req, res, next) {
    // get item
});

router.post('/cashin/create', function (req, res, next) {
    // create cash
});

router.put('/cashin/update', function (req, res, next) {
    // edit cash
});

router.delete('/cashin/delete', function (req, res, next) {
    // delete cash
});

/* ------------ Cash Out ------------ */
router.get('/cashout', function (req, res, next) {
    // get items
});

router.get('/cashout/:id', function (req, res, next) {
    // create cash
});

router.post('/cashout/create', function (req, res, next) {
    // create cash
});

router.put('/cashout/update', function (req, res, next) {
    // edit cash
});

router.delete('/cashout/delete', function (req, res, next) {
    // delete cash
});

// return Router
module.exports = router;
