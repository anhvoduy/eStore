var express = require('express');
var router = express.Router();
var Q = require('q');
var auth = require('../config/auth');
var constant = require('../lib/constant');
var dbContext = require('../lib/dbContext');
var errorHelper = require('../lib/errorHelper');
var inventoryService = require('../services/inventoryService');
var stockService = require('../services/stockService');

router.get('/items', Q.async(function* (req, res, next) {
    var ctx;
    try{
        ctx = yield dbContext.getConnection();
        var inventories = yield inventoryService.getItems(ctx);
        res.status(200).json(inventories);
    }
    catch(err){
        yield ctx.release();
        next(error);        
    }
}));

router.get('/item', Q.async(function* (req, res, next) {
    res.status(200).json(true);    
}));

router.get('/input/items', Q.async(function* (req, res, next) {    
    try
    {
        let query = _.pick(req.query, ['PageCurrent', 'PageSize']);
        let stocks = yield stockService.getStockIn(query);
        res.status(200).json(stocks);
    }
    catch(err){        
        next(error);        
    }
}));

router.get('/input/item', function (req, res, next) {
    res.status(200).json(true);
});

router.get('/input/create', function (req, res, next) {
    res.status(200).json(true);
});

router.post('/input/update', function (req, res, next) {
    res.status(200).json(true);
});

router.put('/input/delete', function (req, res, next) {
    res.status(200).json(true);
});



router.get('/output/items', Q.async(function* (req, res, next) {
    try
    {
        let query = _.pick(req.query, ['PageCurrent', 'PageSize']);
        let stocks = yield stockService.getStockOut(query);
        res.status(200).json(stocks);
    }
    catch(err){
        next(error);        
    }    
}));

router.get('/output/item', function (req, res, next) {
    res.status(200).json(true);
});

router.get('/output/create', function (req, res, next) {
    res.status(200).json(true);
});

router.get('/output/update', function (req, res, next) {
    res.status(200).json(true);
});

router.get('/output/delete', function (req, res, next) {
    res.status(200).json(true);
});


// return Router
module.exports = router;
