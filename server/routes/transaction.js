var router = require('express').Router();
var _ = require('lodash');
var transactionService = require('../services/transactionService');


/**
 * Cash In
 */
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

/**
 * Cash Out
 */
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

module.exports = router;
