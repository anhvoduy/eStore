// Dependencies
var Q = require('q');
var dbHelper = require('../config/dbHelper');

// Constructor
var inventoryService = function () { 
}

inventoryService.prototype.getInventoryById = function (ctx, inventoryId) {
    var sql = dbHelper.prepareQueryCommand('', []);
    return ctx.queryCommand(sql);
}

inventoryService.prototype.createInventory = function (ctx, inventory) {
    var sql = dbHelper.prepareQueryCommand('', []);
	return ctx.queryCommand(sql);
}

inventoryService.prototype.updateInventory = function (ctx, inventory) {
    var sql = dbHelper.prepareQueryCommand('', []);
	return ctx.queryCommand(sql);
}

inventoryService.prototype.deleteInventory = function (ctx, inventoryId) {
    var sql = dbHelper.prepareQueryCommand('', []);
	return ctx.queryCommand(sql);
}

// Export
module.exports = new inventoryService;