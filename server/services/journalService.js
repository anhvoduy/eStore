const Q = require('q');
const _ = require('lodash');
const dbHelper = require('../lib/dbHelper');

// Constructor
var Factory = function () { 
}

Factory.prototype.getJournals = function (ctx, conditions) {
	var sql = dbHelper.prepareQueryCommand('', [brandId]);
	return ctx.queryCommand(sql);
}

Factory.prototype.getJournalById = function (ctx, journalId) {
    var sql = dbHelper.prepareQueryCommand('', [journalId]);
    return ctx.queryCommand(sql);
}

Factory.prototype.createJournal = function (ctx, journal) {
    var sqlCreateReview = dbHelper.prepareQueryCommand('',
        [review.Rating, review.Comment, review.Created, review.ProductId, review.Email]);

    var sqlUpdateProduct = dbHelper.prepareQueryCommand('',
        [JSON.stringify(review), review.ProductId]);
}

Factory.prototype.updateJournal = function (ctx, journal) {
	var sqlCreateReview = dbHelper.prepareQueryCommand('',
        [review.Rating, review.Comment, review.Created, review.ProductId, review.Email]);
	
	var sqlUpdateProduct = dbHelper.prepareQueryCommand('',
        [JSON.stringify(review), review.ProductId]);    
}

Factory.prototype.deleteJournal = function (ctx, transactionId) {
	var sqlCreateReview = dbHelper.prepareQueryCommand('',
        [review.Rating, review.Comment, review.Created, review.ProductId, review.Email]);
	
	var sqlUpdateProduct = dbHelper.prepareQueryCommand('',
        [JSON.stringify(review), review.ProductId]);    
}

// Export
module.exports = new Factory;
