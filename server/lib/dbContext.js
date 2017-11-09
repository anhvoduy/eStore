var Q = require('q');
var _ = require('lodash');
var mysql = require('mysql');
var config = require('../config/config');
var errorHelper = require('./errorHelper');

// Connection Pool
var pool = mysql.createPool({
    host            : config.host,
    user            : config.user,
    password        : config.password,
    database        : config.database,
    connectionLimit : config.connectionLimit,    
});

var getConnection = function () {
	var defer = Q.defer();
	pool.getConnection(function (err, con) {
		if (err) defer.reject(err);
		else defer.resolve(new dbContext(con));
	});
	return defer.promise;
}

// Data Access Layer
var dbContext = function() {
    console.log('- initial dbContext: \n', config);

    // init ConnectionPool
    this.pool = mysql.createPool({
        host            : config.host,
        user            : config.user,
        password        : config.password,
        database        : config.database,
        connectionLimit : config.connectionLimit
    });
}

dbContext.prototype.getConnection = function () {
    var defer = Q.defer();
    var self = this;
	self.pool.getConnection(function (err, connection) {
		if (err) defer.reject(err);
		else defer.resolve(connection);
	});
	return defer.promise;
}

dbContext.prototype.release = function (connection) {
    var self = this;
    if(self.connection) 
        self.connection.release();
    connection.release();
}

dbContext.prototype.prepareSqlParameters = function(query, values){
    var self = this;
    return query.replace(/\:(\w+)/g, function (txt, key) {
        if (values.hasOwnProperty(key)) {
          return self.pool.escape(values[key]);
        }
        return txt;
    });
}

dbContext.prototype.queryItem = function (sql, obj) {
    var self = this;
    var deferred = Q.defer();    
    sql = `SELECT TMP.*  FROM (${sql}) TMP LIMIT 1`; // query one item
    var querySql = self.prepareSqlParameters(sql, obj);
    self.pool.query(querySql, function(error, results, fields){
        if (error){
            deferred.reject(error);
        }
        deferred.resolve(results[0]);
    });    
    return deferred.promise;
}

dbContext.prototype.queryList = function (sql, obj) {
    var deferred = Q.defer();
    var self = this;
    var querySql = self.prepareSqlParameters(sql, obj); // query many items
    self.pool.query(querySql, function(error, results, fields){
        if (error){
            deferred.reject(error);
        }        
        deferred.resolve(results);
    });
    return deferred.promise;
}

dbContext.prototype.queryExecute  = function (sql, obj) {
    var self = this;
    var deferred = Q.defer();
    var querySql = self.prepareSqlParameters(sql, obj);
    self.pool.query(querySql, function(error, results, fields){
        if (error){
            deferred.reject(error);
        }        
        deferred.resolve(results);
    });
    return deferred.promise;
}


// TO DO: deprecated this function
dbContext.prototype.queryCommand = function (sql) {
	var defer = Q.defer();
	this.connection.query(sql, function (error, rows) {
		if (error) defer.reject(error);
		else defer.resolve(rows);		
	});
	return defer.promise;
}


// TO DO: need to test this function
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

// TO DO: need to test this function
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

// TO DO: need to test this function
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
module.exports = new dbContext();
