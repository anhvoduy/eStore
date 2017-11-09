const _ = require('lodash');
const dbContext = require('../lib/dbContext');

// Constructor
var Factory = function () { 
}

Factory.prototype.getJournals = function (ctx, conditions) {
    return true;
}

Factory.prototype.getJournalById = function (ctx, journalId) {
    return true;
}

Factory.prototype.createJournal = function (ctx, journal) {
    return true;
}

Factory.prototype.updateJournal = function (ctx, journal) {
    return true;
}

Factory.prototype.deleteJournal = function (ctx, transactionId) {
    return true;	
}

// Export
module.exports = new Factory;
