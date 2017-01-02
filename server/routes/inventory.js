// Dependencies
var express = require('express');
var router = express.Router();
var Q = require('q');
var auth = require('../config/auth');
var constant = require('../config/constant');
var dbContext = require('../config/dbContext');
var errorHelper = require('../config/errorHelper');
var stockService = require('../services/stockService');

/* ------------ Stock In ------------ */
router.get('/stockin', function (req, res, next) {
    var ctx = {};
    Q.when()
        .then(function () {
            return dbContext.getConnection();
        }).then(function (con) {
            ctx = con;
            return stockService.getStocks(ctx, constant.transactionType.STOCKIN);
        }).then(function (stocks) {
            res.status(200).json(stocks);
        }).catch(function (error) {
            next(error);
        }).finally(function () {
            ctx.release();
        });
});

router.get('/stockin/:id', function (req, res, next) {
    // create stock
});

router.post('/stockin/:id', function (req, res, next) {
    // create stock
});

router.put('/stockin/:id', function (req, res, next) {
    // edit stock
});


/* ------------ Stock Out ------------ */
router.get('/stockout', function (req, res, next) {
    var ctx = {};
    Q.when()
        .then(function () {
            return dbContext.getConnection();
        }).then(function (con) {
            ctx = con;
            return stockService.getStocks(ctx, constant.transactionType.STOCKOUT);
        }).then(function (stocks) {
            res.status(200).json(stocks);
        }).catch(function (error) {
            next(error);
        }).finally(function () {
            ctx.release();
        });
});

router.get('/stockout/:id', function (req, res, next) {
    // create stock
});

router.post('/stockout/:id', function (req, res, next) {
    // create stock
});

router.put('/stockout/:id', function (req, res, next) {
    // edit stock
});

// return Router
module.exports = router;
