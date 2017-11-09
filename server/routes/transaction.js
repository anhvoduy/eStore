// Dependencies
var express = require('express');
var router = express.Router();
var q = require('q');
var auth = require('../config/auth');
var constant = require('../lib/constant');
var dbContext = require('../lib/dbContext');
var errorHelper = require('../lib/errorHelper');
var transactionService = require('../services/transactionService');


// Routers
router.get('/items', async function (req, res, next) {
    try
    {
        let query = req.query;
        let transactions = await transactionService.getTransactions()
        res.status(200).json(transactions);
    }
    catch(err){
        next(err);
    }
});

router.get('/item', function (req, res, next) {
    try
    {
        let query = req.query;
        let transactions = await transactionService.getTransactionById(query)
        if (transactions.length == 0) {
            res.status(404).json(errorHelper.Error_Not_Exist_TransactionId);
        } else {
            res.status(200).json(transactions[0]);
        }        
    }
    catch(err){
        next(err);
    }
});

router.post('/create', function (req, res, next) {
    res.status(200).json(true);
});

router.put('/update', function (req, res, next) {
	res.status(200).json(true);
});

router.delete('/delete', function (req, res, next) {
    res.status(200).json(true);
});




/* --- CashIn  ---*/
router.get('/cashin/items', async function (req, res, next) {
    try
    {
        let query = req.query;
        let transactions = await transactionService.getCashIn(query);
        res.status(200).json(transactions);
    }
    catch (err) {
        next(err);
    }
});

router.get('/cashin/item', function (req, res, next) {
    res.status(200).json(true);
});

router.post('/cashin/create', function (req, res, next) {
    res.status(200).json(true);
});

router.post('/cashin/update', function (req, res, next) {
    res.status(200).json(true);
});

router.post('/cashin/delete', function (req, res, next) {
    res.status(200).json(true);
});



/* --- CashOut ---*/
router.get('/cashout/items', async function (req, res, next) {
    try
    {
        let query = req.query;
        let transactions = await transactionService.getCashOut(query);
        res.status(200).json(transactions);
    }
    catch (err) {
        next(err);
    }
});

router.get('/cashout/item', function (req, res, next) {
    res.status(200).json(true);
});

router.post('/cashout/create', function (req, res, next) {
    res.status(200).json(true);
});

router.post('/cashout/update', function (req, res, next) {
    res.status(200).json(true);
});

router.post('/cashout/delete', function (req, res, next) {
    res.status(200).json(true);
});

// Export
module.exports = router;
