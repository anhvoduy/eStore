const _ = require('lodash');
const dbContext = require('../lib/dbContext');

// Constructor
const Factory = function () { 
}

Factory.prototype.getGroups = function (query) {
	var sql = `SELECT * FROM Group WHERE Deleted <> 1`;
	return dbContext.queryList(sql);
}

Factory.prototype.getGroupById = function (query) {
    var sql = `SELECT * FROM Group WHERE GroupId =:GroupId`;
	return dbContext.queryItem(sql, { GroupId: query.GroupId });
}

Factory.prototype.getGroupByKey = function (query) {
    var sql = `SELECT * FROM Group WHERE GroupKey =:GroupKey`;
	return dbContext.queryItem(sql, { GroupKey: query.GroupKey });
}

// Export
module.exports = new Factory;