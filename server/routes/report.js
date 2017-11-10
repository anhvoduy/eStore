const express = require('express');
const router = express.Router();
const _ = require('lodash');
const auth = require('../config/auth');
const constant = require('../lib/constant');
const dbContext = require('../lib/dbContext');
const errorHelper = require('../lib/errorHelper');
const reportService = require('../services/reportService');

// Router
router.get('/cash', async function(req, res, next) {    
    try
    {
        let query = _.pick(req.query, ['PageCurrent', 'PageSize', 'FromDate', 'ToDate']);
        let data = await reportService.reportCash(query);
        res.status(200).json(data);
    }
    catch(err){        
        next(err)
    }
});


router.get('/inventory', async function(req, res, next) {    
    try
    {
        let query = _.pick(req.query, ['PageCurrent', 'PageSize', 'InventoryId', 'FromDate', 'ToDate']);
        let data = await reportService.reportInventory(query);
        res.status(200).json(data);
    }
    catch(err){        
        next(err)
    }
});

router.get('/account', async function(req, res, next) {
    try
    {
        let query = _.pick(req.query, ['PageCurrent', 'PageSize', 'InventoryId', 'FromDate', 'ToDate']);
        let data = await reportService.reportAccount(query);
        res.status(200).json(true);
    }
    catch(err){        
        next(err)
    }
});

// return Router
module.exports = router;