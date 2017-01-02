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
router.get('/stockin', Q.async(function* (req, res, next) {
    var ctx = yield dbContext.getConnection();
    try{
        var stocks = yield stockService.getStocks(ctx, constant.transactionType.STOCKIN);
        res.status(200).json(stocks);
    }catch(err){
        yield ctx.release();
        next(error);        
    }    
}));

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
router.get('/stockout', Q.async(function* (req, res, next) {
    var ctx = yield dbContext.getConnection();
    try{
        var stocks = yield stockService.getStocks(ctx, constant.transactionType.STOCKOUT);
        res.status(200).json(stocks);
    }catch(err){
        yield ctx.release();
        next(error);        
    }
}));

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
