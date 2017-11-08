var Q = require('q');
var _ = require('lodash');
var mysql = require('mysql');
var config = require('../config/config');
var errorHelper = require('./errorHelper');

// Connection Pool
var getConnection = function () {
	var defer = q.defer();
	pool.getConnection(function (err, con) {
		if (err) defer.reject(err);
		else defer.resolve(new dbContext(con));
	});
	return defer.promise;
}

// Data Access Layer
function dbContext(connection) {
    this.connection = connection;
    this.logSql = false;

    this.pool = mysql.createPool({
        host            : config.host,
        user            : config.user,
        password        : config.password,
        database        : config.database,
        connectionLimit : config.connectionLimit,    
    });
}

dbContext.prototype.release = function () {    
	this.connection.release();
}

// TO DO: make queryOne
dbContext.prototype.queryOne = function (sql) {
    return true;
}

// TO DO: make queryMany
dbContext.prototype.queryMany = Q.async(function* (sql, obj) {
    try    
    {
        if(this.logSql) console.log(sql);
        // prepare command
        let parameterNames = _.keys(obj);
        let parameterValues = _.values(obj);
        
        // query database        
        this.prepareInputParameters(request, parameterNames, parameterValues);
        let result = yield this.pool.query(sql);
        return result.recordset;
    }
    catch(err)
    {
        throw err;
    }
    finally
    {
        //console.log('finally');
    }
});

// TO DO: make queryCommand
dbContext.prototype.queryCommand = function (sql) {
	var defer = Q.defer();
	this.connection.query(sql, function (error, rows) {
		if (error) defer.reject(error);
		else defer.resolve(rows);		
	});
	return defer.promise;
}

dbContext.prototype.beginTransaction = function () {
    var defer = Q.defer();

	if (this.connection == null || this.connection == undefined)
		throw errorHelper.Error_Connection;

    var sql = "START TRANSACTION;";
    this.connection.query(sql, function (error, rows) {
        if (error) defer.reject(error);
        else defer.resolve(rows);
    });
    return defer.promise;
}

dbContext.prototype.rollbackTransaction = function () {
    var defer = Q.defer();

    if (this.connection == null || this.connection == undefined)
        throw errorHelper.Error_Connection;

    var sql = "ROLLBACK;";
    this.connection.query(sql, function (error, rows) {
        if (error) defer.reject(error);
        else defer.resolve(rows);
    });
    return defer.promise;
}

dbContext.prototype.commitTransaction = function () {
    var defer = Q.defer();

	if (this.connection == null || this.connection == undefined)
		throw errorHelper.Error_Connection;

    var sql = "COMMIT;";
    this.connection.query(sql, function (error, rows) {
        if (error) defer.reject(error);
        else defer.resolve(rows);
    });
    return defer.promise;
}

// Export
var dataConnection = {
	getConnection: getConnection
}
module.exports = dataConnection;
