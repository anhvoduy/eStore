// Dependencies
var Q = require('q');
var dbHelper = require('../config/dbHelper');

// Constructor
var factory = function () { 
}

factory.prototype.getInventoryById = function (ctx, inventoryId) {
    var sql = dbHelper.prepareQueryCommand('', []);
    return ctx.queryCommand(sql);
}

factory.prototype.createInventory = function (ctx, inventory) {
    var sql = dbHelper.prepareQueryCommand('', []);
	return ctx.queryCommand(sql);
}

factory.prototype.updateInventory = function (ctx, inventory) {
    var sql = dbHelper.prepareQueryCommand('', []);
	return ctx.queryCommand(sql);
}

factory.prototype.deleteInventory = function (ctx, inventoryId) {
    var sql = dbHelper.prepareQueryCommand('', []);
	return ctx.queryCommand(sql);
}

// Export
module.exports = new factory;