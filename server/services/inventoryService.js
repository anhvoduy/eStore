const dbContext = require('../lib/dbContext');

const Factory = function () { 
}

Factory.prototype.getItems = function (query) {
    // No need pagination
	let sql = `SELECT * FROM Inventory WHERE Deleted <> 1 ORDER BY InventoryId ASC`;
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
    try
    {
        let sql = `UPDATE Inventory SET InventoryName=:InventoryName, Location=:Location, Description=:Description WHERE InventoryKey =:InventoryKey`;
        return dbContext.queryExecute(sql, inventory);
    } catch(err){
        throw err;
    }
}

Factory.prototype.deleteInventory = function (inventoryId) {
    return true;
}

// Export
module.exports = new Factory;