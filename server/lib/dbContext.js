const mssql = require('mssql');
const Q = require('q');
const config = require('../config/config');

const dbContext = function() {    
    this.mssql = mssql;
    console.log('system is running provider:', config);
}

dbContext.prototype.openConnection = function(){    
    return this.mssql.connect(config);
}

dbContext.prototype.closeConnection = function(pool){
    pool.close();
    return this.mssql.close();
}

// dbContext.prototype.queryData = function(tr, sql){
//     return tr.request()
//     .query(sql)
//     .then(function(data){
//         //console.log(data);
//         return data.recordset;
//     });
// };

dbContext.prototype.queryDatabase = function(pool, sql){
    let deferred  = Q.defer();
    
    Q.when()
    .then(function(){
        let req = new mssql.Request(pool, sql);
        return req.query(sql).then(function(data){
            return data.recordset;
        });
    })
    .then(function(recordset){        
        deferred.resolve(recordset);
    })
    .catch(function(err){        
        deferred.reject(err);
    });

    return deferred.promise;
};

// Export
module.exports = new dbContext;