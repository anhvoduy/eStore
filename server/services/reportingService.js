// Dependencies
var dbHelper = require('../config/dbHelper');
var q = require('q');

// Constructor
var inventoryService = function () { 
}

inventoryService.prototype.inputProducts = function (ctx, message) {
	var sql = dbHelper.prepareQueryCommand(" ", []);
	return ctx.queryCommand(sql);
}

inventoryService.prototype.outputProducts = function (ctx, message) {
	var sql = dbHelper.prepareQueryCommand(" ", []);
	return ctx.queryCommand(sql);
}

inventoryService.prototype.calculateInventory = function (ctx) {
	var sql = dbHelper.prepareQueryCommand("", []);
	return ctx.queryCommand(sql);
}

// Export
module.exports = new inventoryService;
