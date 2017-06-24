// https://www.npmjs.com/package/mssql

// SqlServer
var configMsSql = {
    user: '...',
    password: '...',
    server: 'localhost', // You can use 'localhost\\instance' to connect to named instance 
    database: '...',
    options: {
        encrypt: true // Use this if you're on Windows Azure 
    }
}

// MySql
var configMySql = {
    host: 'localhost',
    user: 'root',
    password: 'P@ssw0rd',
    database: 'ndemo',
    connectionLimit: 10,
    secretKey: 'ilovejavascript',
	debugMode: true
};

module.exports = configMySql;