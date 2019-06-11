const dbContext = require('../lib/dbContext');

const Factory = function () { 
}

Factory.prototype.getGroups = function (query) {
	// No need pagination
	var sql = "SELECT * FROM `Group` WHERE Deleted <> 1";
	return dbContext.queryList(sql);
}

Factory.prototype.getGroupById = function (query) {
    var sql = "SELECT * FROM `Group` WHERE GroupId =:GroupId";
	return dbContext.queryItem(sql, { GroupId: query.GroupId });
}

Factory.prototype.getGroupByKey = function (query) {
    var sql = 'SELECT * FROM `Group` WHERE GroupKey =:GroupKey';
	return dbContext.queryItem(sql, { GroupKey: query.GroupKey });
}

Factory.prototype.create = async function (group) {
	try
	{
		var sql = "INSERT INTO `Group`(GroupKey,GroupName,Description) VALUES(uuid(),:GroupName,:Description)";
		return dbContext.queryExecute(sql, group);
	}
	catch(err){
		throw err;
	}	
}

Factory.prototype.update = async function (group) {
	try
	{
		var sql = "UPDATE `Group` SET GroupName=:GroupName, Description=:Description WHERE GroupId=:GroupId";
		return dbContext.queryExecute(sql, group);
	}
	catch(err){
		throw err;
	}
}

Factory.prototype.delete = async function (groupId) {
	try
	{
		var sql = "UPDATE `Group` SET Deleted=1 WHERE GroupId=:GroupId";
		return dbContext.queryExecute(sql, {GroupId: groupId});
	}
	catch(err){
		throw err;
	}
}

// Export
module.exports = new Factory;
