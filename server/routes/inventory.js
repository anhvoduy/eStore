var router = require('express').Router();
var Q = require('q');
var _ = require('lodash');
var auth = require('../config/auth');
var constant = require('../lib/constant');
var dbContext = require('../lib/dbContext');
var errorHelper = require('../lib/errorHelper');
var inventoryService = require('../services/inventoryService');
var stockService = require('../services/stockService');

// Routes
router.get('/items', async function(req, res, next) {
    try
    {
        var query = req.query;
        var inventories = await inventoryService.getItems(query);
        res.status(200).json(inventories);
    }
    catch(err){
        next(error);
    }
});

router.get('/item', Q.async(function* (req, res, next) {
    res.status(200).json(true);
}));



/* --- Stock ---*/
router.get('/stock/item', async function (req, res, next) {
    try
    {
        let query = _.pick(req.query, ['StockKey']);        
        let stock = await stockService.getStock(query);
        let stockDetail = await stockService.getStockDetail(stock);
        let data = {
            Stock: stock,
            StockDetail: stockDetail
        }
        res.status(200).json(data);
    }
    catch(err){        
        next(err);        
    }
});


/* --- Input ---*/
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

router.post('/input/create', function (req, res, next) {
    res.status(200).json(true);
});

router.post('/input/update', function (req, res, next) {
    res.status(200).json(true);
});

router.post('/input/delete', function (req, res, next) {
    res.status(200).json(true);
});



/* --- Output ---*/
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

router.post('/output/create', function (req, res, next) {
    res.status(200).json(true);
});

router.post('/output/update', function (req, res, next) {
    res.status(200).json(true);
});

router.post('/output/delete', function (req, res, next) {
    res.status(200).json(true);
});


// Export
module.exports = router;
