const express = require('express');
const router = express.Router();
const Q = require('q');
const auth = require('../config/auth');
const constant = require('../lib/constant');
const dbContext = require('../lib/dbContext');
const errorHelper = require('../lib/errorHelper');
const reportService = require('../services/reportService');

// Router
router.get('/cash', Q.async(function* (req, res, next) {
    let ctx;
    try{
        ctx = yield dbContext.getConnection();
        let data = yield reportService.reportCash(ctx, req.query);
        res.status(200).json(data);
    }
    catch(err){
        yield ctx.release();
        next(err)
    }    
}));


router.get('/inventory', Q.async(function* (req, res, next) {
    let ctx;
    try{
        ctx = yield dbContext.getConnection();
        let data = yield reportService.reportInventory(ctx, req.query);
        res.status(200).json(data);
    }
    catch(err){
        yield ctx.release();
        next(err)
    }    
}));

// return Router
module.exports = router;