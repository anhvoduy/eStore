// Dependencies
var q = require('q');
var dbHelper = require('../config/dbHelper');

// Constructor
var transactionService = function () { 
}

transactionService.prototype.getTransactions = function (ctx, conditions) {
    var sql = dbHelper.prepareQueryCommand('', [brandId]);
	return ctx.queryCommand(sql);
}

transactionService.prototype.getTransactionById = function (ctx, transactionId) {
    var sql = dbHelper.prepareQueryCommand('', [transactionId]);
    return ctx.queryCommand(sql);
}

transactionService.prototype.createTransaction = function (ctx, transaction) {
    //var sqlCreateReview = dbHelper.prepareQueryCommand("INSERT INTO tblreview(Rating, Comment, Created, ProductId, Email, Deleted)VALUES(?, ?, ?, ?, ?, 0)",
    //    [review.Rating, review.Comment, review.Created, review.ProductId, review.Email]);

    //var sqlUpdateProduct = dbHelper.prepareQueryCommand("UPDATE tblProduct SET LatestReviewInfo = ? WHERE ProductId = ?",
    //    [JSON.stringify(review), review.ProductId]);

    //return q.when()
    //    .then(function () {
    //        return ctx.beginTransaction();
    //    }).then(function () {
    //        return ctx.queryCommand(sqlCreateReview);
    //    }).then(function () {
    //        return ctx.queryCommand(sqlUpdateProduct);
    //    }).then(function () {
    //        return ctx.commitTransaction();
    //    }).catch(function (error) {
    //        ctx.rollbackTransaction();
    //        throw error;
    //    });
}

transactionService.prototype.updateTransaction = function (ctx, transaction) {
	//var sqlCreateReview = dbHelper.prepareQueryCommand("INSERT INTO tblreview(Rating, Comment, Created, ProductId, Email, Deleted)VALUES(?, ?, ?, ?, ?, 0)",
    //    [review.Rating, review.Comment, review.Created, review.ProductId, review.Email]);
	//
	//var sqlUpdateProduct = dbHelper.prepareQueryCommand("UPDATE tblProduct SET LatestReviewInfo = ? WHERE ProductId = ?",
    //    [JSON.stringify(review), review.ProductId]);
	//
    //return q.when()
    //    .then(function () {
    //        return ctx.beginTransaction();
    //    }).then(function () {
    //        return ctx.queryCommand(sqlCreateReview);
    //    }).then(function () {
    //        return ctx.queryCommand(sqlUpdateProduct);
    //    }).then(function () {
    //        return ctx.commitTransaction();
    //    }).catch(function (error) {
    //        ctx.rollbackTransaction();
    //        throw error;
    //    });
}

transactionService.prototype.deleteTransaction = function (ctx, transaction) {
    //var sqlCreateReview = dbHelper.prepareQueryCommand("INSERT INTO tblreview(Rating, Comment, Created, ProductId, Email, Deleted)VALUES(?, ?, ?, ?, ?, 0)",
    //       [review.Rating, review.Comment, review.Created, review.ProductId, review.Email]);

    //var sqlUpdateProduct = dbHelper.prepareQueryCommand("UPDATE tblProduct SET LatestReviewInfo = ? WHERE ProductId = ?",
    //       [JSON.stringify(review), review.ProductId]);

    //   return q.when()
    //       .then(function () {
    //           return ctx.beginTransaction();
    //       }).then(function () {
    //           return ctx.queryCommand(sqlCreateReview);
    //       }).then(function () {
    //           return ctx.queryCommand(sqlUpdateProduct);
    //       }).then(function () {
    //           return ctx.commitTransaction();
    //       }).catch(function (error) {
    //           ctx.rollbackTransaction();
    //           throw error;
    //       });
}

// Export
module.exports = new transactionService;
