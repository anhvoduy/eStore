// Dependencies
var express = require('express');
var router = express.Router();
var q = require('q');
var auth = require('../config/auth');
var constant = require('../config/constant');
var dbContext = require('../config/dbContext');
var errorHelper = require('../config/errorHelper');
var transactionService = require('../services/transactionService');

// Routers
router.get('/items', function (req, res, next) {
    var ctx = {};
    q.when()
        .then(function () {
            return dbContext.getConnection();
        }).then(function (con) {
            ctx = con;
            return transactionService.getCashIn(ctx);
        }).then(function (cashIns) {
            res.status(200).json(cashIns);
        }).catch(function (error) {
            next(error);
        }).finally(function () {
            ctx.release();
        });
});

router.get('/items/:id', function (req, res, next) {
    // get item
});

/* ------------ Cash In ------------ */
router.get('/cashin', function (req, res, next) {
    var ctx = {};
    q.when()
        .then(function () {
            return dbContext.getConnection();
        }).then(function (con) {
            ctx = con;
            return transactionService.getCashIn(ctx);
        }).then(function (cashIns) {
            res.status(200).json(cashIns);
        }).catch(function (error) {
            next(error);
        }).finally(function () {
            ctx.release();
        });
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
    var ctx = {};
    q.when()
        .then(function () {
            return dbContext.getConnection();
        }).then(function (con) {
            ctx = con;
            return transactionService.getCashOut(ctx);
        }).then(function (cashOuts) {
            res.status(200).json(cashOuts);
        }).catch(function (error) {
            next(error);
        }).finally(function () {
            ctx.release();
        });
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
