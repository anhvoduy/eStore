const _ = require('lodash');
const dbContext = require('../lib/dbContext');

// Constructor
const Factory = function () { 
}

Factory.prototype.getItems = function (query) {
	let sql = `SELECT * FROM Inventory WHERE Deleted = 0`;
	return dbContext.queryList(sql, query);
}

Factory.prototype.getInventoryDetail = function (query) {
    try
    {
        let sql = `SELECT * FROM Inventory WHERE InventoryId =:InventoryId OR InventoryKey =:InventoryKey`;
        return dbContext.queryItem(sql, { InventoryId: query.InventoryId, InventoryKey: query.InventoryKey });
    } catch(err){
        throw err;
    }    
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