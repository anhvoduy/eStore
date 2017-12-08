var express = require('express');
var router = require('express').Router();
var _ = require('lodash');
var auth = require('../config/auth');
var constant = require('../lib/constant');
var dbContext = require('../lib/dbContext');
var transactionService = require('../services/transactionService');


/* --- CashIn  ---*/
router.get('/cashin/items', async function (req, res, next) {
    try
    {
        let query = _.pick(req.query, ['PageCurrent', 'PageSize']);
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
        let query = _.pick(req.query, ['PageCurrent', 'PageSize']);
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
