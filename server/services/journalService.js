// Dependencies
var Q = require('q');
var dbHelper = require('../config/dbHelper');

// Constructor
var journalService = function () { 
}

journalService.prototype.getJournals = function (ctx, conditions) {
	var sql = dbHelper.prepareQueryCommand('', [brandId]);
	return ctx.queryCommand(sql);
}

journalService.prototype.getJournalById = function (ctx, journalId) {
    var sql = dbHelper.prepareQueryCommand('', [journalId]);
    return ctx.queryCommand(sql);
}

journalService.prototype.createJournal = function (ctx, journal) {
    var sqlCreateReview = dbHelper.prepareQueryCommand("INSERT INTO tblreview(Rating, Comment, Created, ProductId, Email, Deleted)VALUES(?, ?, ?, ?, ?, 0)",
        [review.Rating, review.Comment, review.Created, review.ProductId, review.Email]);

    var sqlUpdateProduct = dbHelper.prepareQueryCommand("UPDATE tblProduct SET LatestReviewInfo = ? WHERE ProductId = ?",
        [JSON.stringify(review), review.ProductId]);
}

journalService.prototype.updateJournal = function (ctx, journal) {
	var sqlCreateReview = dbHelper.prepareQueryCommand("INSERT INTO tblreview(Rating, Comment, Created, ProductId, Email, Deleted)VALUES(?, ?, ?, ?, ?, 0)",
        [review.Rating, review.Comment, review.Created, review.ProductId, review.Email]);
	
	var sqlUpdateProduct = dbHelper.prepareQueryCommand("UPDATE tblProduct SET LatestReviewInfo = ? WHERE ProductId = ?",
        [JSON.stringify(review), review.ProductId]);    
}

journalService.prototype.deleteJournal = function (ctx, transactionId) {
	var sqlCreateReview = dbHelper.prepareQueryCommand("INSERT INTO tblreview(Rating, Comment, Created, ProductId, Email, Deleted)VALUES(?, ?, ?, ?, ?, 0)",
        [review.Rating, review.Comment, review.Created, review.ProductId, review.Email]);
	
	var sqlUpdateProduct = dbHelper.prepareQueryCommand("UPDATE tblProduct SET LatestReviewInfo = ? WHERE ProductId = ?",
        [JSON.stringify(review), review.ProductId]);    
}

// Export
module.exports = new journalService;
