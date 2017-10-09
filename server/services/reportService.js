const Q = require('q');
const _ = require('lodash');
const dbHelper = require('../lib/dbHelper');

// Constructor
const Factory = function () { 
}

Factory.prototype.reportCashIn = function () {
    return true;
}

Factory.prototype.reportCashOut = function () {
    return true;
}

Factory.prototype.reportInventoryBalance = function () {
    return true;
}

// Export
module.exports = new Factory;
