const Q = require('q');
const _ = require('lodash');
const dbHelper = require('../config/dbHelper');

// Constructor
var Factory = function () { 
}

Factory.prototype.getInventoryById = function (ctx, inventoryId) {
    var sql = dbHelper.prepareQueryCommand('', []);
    return ctx.queryCommand(sql);
}

Factory.prototype.createInventory = function (ctx, inventory) {
    var sql = dbHelper.prepareQueryCommand('', []);
	return ctx.queryCommand(sql);
}

Factory.prototype.updateInventory = function (ctx, inventory) {
    var sql = dbHelper.prepareQueryCommand('', []);
	return ctx.queryCommand(sql);
}

Factory.prototype.deleteInventory = function (ctx, inventoryId) {
    var sql = dbHelper.prepareQueryCommand('', []);
	return ctx.queryCommand(sql);
}

// Export
module.exports = new Factory;