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
router.get('/items', function (req, res, next) {
    var ctx = {};
    q.when()
        .then(function () {
            return dbContext.getConnection();
        }).then(function (con) {
            ctx = con;
            return transactionService.getTransactions(ctx);
        }).then(function (transactions) {
            res.status(200).json(transactions);
        }).catch(function (error) {
            next(error);
        }).finally(function () {
            ctx.release();
        });
});

router.get('/items/:id', function (req, res, next) {
    var transactionId = req.params.id;

    var ctx = {};
    q.when()
        .then(function () {
            return dbContext.getConnection();
        }).then(function (con) {
            ctx = con;
            return transactionService.getTransactionById(ctx, transactionId);
        }).then(function (transactions) {
            if (transactions.length == 0) {
                res.status(404).json(errorHelper.Error_Not_Exist_TransactionId);
            } else {
                res.status(200).json(transactions[0]);
            }
        }).catch(function (error) {
            next(error);
        }).finally(function () {
            ctx.release();
        });
});

router.post('/create', function (req, res, next) {
    // create cash
});

router.put('/update', function (req, res, next) {
	var transaction = req.body;
	transaction.TransactionDate = new Date();
	transaction.Updated = new Date();
	transaction.Editor = 'ANH';

	var ctx = {};
	q.when().then(function () {
		return dbContext.getConnection();
	}).then(function (con) {
		ctx = con;		
		return transactionService.updateTransaction(ctx, transaction);
	}).then(function (result) {
		res.status(200).json(constant.Success_Cash_Update);
	}).catch(function (error) {
		next(error);
	}).finally(function () {
		ctx.release();
	});
});

router.delete('/delete', function (req, res, next) {
    // delete cash
});



/* --- Get CashIn & CashOut ---*/
router.get('/cashin', async function (req, res, next) {
    try
    {
        let transactions = await transactionService.getCashIn();
        res.status(200).json(transactions);
    }
    catch (err) {        
        next(err);
    }    
});

router.get('/cashout', async function (req, res, next) {
    try
    {
        let transactions = await transactionService.getCashOut();
        res.status(200).json(transactions);
    }
    catch (err) {        
        next(err);
    }
});

// Export
module.exports = router;
