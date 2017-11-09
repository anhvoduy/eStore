const _ = require('lodash');
const dbContext = require('../lib/dbContext');

// Constructor
const Factory = function () { 
}

Factory.prototype.getItems = function (query) {
	let sql = `SELECT * FROM Inventory WHERE Deleted = 0`;
	return dbContext.queryList(sql, query);
}

Factory.prototype.getInventoryById = function (query) {
    let sql = `SELECT * FROM Inventory WHERE InventoryKey =:InventoryKey AND Deleted = 0`;
	return dbContext.queryItem(sql, query);
}

Factory.prototype.createInventory = function (inventory) {
    return true;
}

Factory.prototype.updateInventory = function (inventory) {
    return true;
}

Factory.prototype.deleteInventory = function (inventoryId) {
    return true;
}

// Export
module.exports = new Factory;