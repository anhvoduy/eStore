'use strict';
var Q = require('q');
var mysql = require('mysql');
var config = require('../config/config').mySql;

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
        //console.log(results);
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
        //console.log(results);
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
		throw { code: 'ERROR_CONNECTION', message: 'Error: the current connection is closed or undefined.' }

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
        throw { code: 'ERROR_CONNECTION', message: 'Error: the current connection is closed or undefined.' }

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
		throw { code: 'ERROR_CONNECTION', message: 'Error: the current connection is closed or undefined.' }

    var sql = "COMMIT;";
    this.connection.query(sql, function (error, rows) {
        if (error) defer.reject(error);
        else defer.resolve(rows);
    });
    return defer.promise;
}


// Export
module.exports = new dbContext();
