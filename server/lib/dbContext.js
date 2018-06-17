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
    var self = this;

    var deferred = Q.defer();
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
    self.pool.query(querySql, function(error, result){
        if (error) deferred.reject(error);
        else deferred.resolve(result);
    });
    return deferred.promise;
}



/* functions support transaction level COMMITTED/UNCOMMITTED */
dbContext.prototype.beginTransaction = function (readCommitted) {
    var self = this;
	var defer = Q.defer();
	self.pool.getConnection(function (err, con) {
        if (err) 
            defer.reject(err);

        if(readCommitted)
            con.query('SET TRANSACTION ISOLATION LEVEL READ COMMITTED;');
        else
            con.query('SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;');

        defer.resolve(con);
	});
	return defer.promise;
}

dbContext.prototype.rollbackTransaction = function (tr) {
    var defer = Q.defer();
    tr.query('ROLLBACK;', function(err, res){
        if (err) defer.reject(err);
        defer.resolve(res);
    });
    return defer.promise;
}

dbContext.prototype.commitTransaction = function (tr) {
    return tr.query('COMMIT;');
}

dbContext.prototype.queryCommand = function (tr, sql, obj) {
    var self = this;
    var querySql = self.prepareSqlParameters(sql, obj);
	return tr.query(querySql);
}

// Export
module.exports = new dbContext();
