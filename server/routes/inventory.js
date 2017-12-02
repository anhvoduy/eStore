var router = require('express').Router();
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
        let query = _.pick(req.query, ['PageCurrent', 'PageSize']);
        if(!query.PageCurrent && !query.PageSize){
			query.PageCurrent = 1;
			query.PageSize = 5000;			
        }
        var inventories = await inventoryService.getItems(query);
        res.status(200).json(inventories);
    }
    catch(err){
        next(error);
    }
});

router.get('/item', async function (req, res, next) {
    try
    {
        let query = _.pick(req.query,['InventoryId', 'InventoryKey']);
		let inventory = await inventoryService.getInventoryDetail(query);		
		res.status(200).json(inventory);
    }
    catch(err){
        next(err);
    }    
});

router.post('/update', async function (req, res, next) {
    try
    {
        let inventory = _.pick(req.body,['InventoryId', 'InventoryKey','InventoryName','Location','Description']);
        if(!inventory.InventoryKey)
            throw CONSTANT.MISSING_FIELD_INVENTORYKEY;

        if(!inventory.InventoryName)
            throw CONSTANT.MISSING_FIELD_INVENTORYNAME;

        if(!inventory.Location)
            throw CONSTANT.MISSING_FIELD_LOCATION;

        let result = await inventoryService.updateInventory(inventory);
		if(result.affectedRows > 0) res.status(200).json({ success: true });
		else res.status(500).json({ success: false });
    }
    catch(err){
        next(err);
    }
});



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
router.get('/input/items', async function (req, res, next) {
    try
    {
        let query = _.pick(req.query, ['PageCurrent', 'PageSize']);
        let stocks = await stockService.getStockIn(query);
        res.status(200).json(stocks);
    }
    catch(err){        
        next(error);        
    }
});

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
router.get('/output/items', async function (req, res, next) {
    try
    {
        let query = _.pick(req.query, ['PageCurrent', 'PageSize']);
        let stocks = await stockService.getStockOut(query);
        res.status(200).json(stocks);
    }
    catch(err){
        next(error);        
    }
});

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
