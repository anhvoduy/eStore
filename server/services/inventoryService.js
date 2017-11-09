const Q = require('q');
const _ = require('lodash');
const dbHelper = require('../lib/dbHelper');
const dbContext = require('../lib/dbContext');

// Constructor
const Factory = function () { 
}

Factory.prototype.getItems = function (ctx) {
	let sql = `SELECT * FROM Inventory WHERE Deleted = 0`;
	return ctx.queryCommand(sql);
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