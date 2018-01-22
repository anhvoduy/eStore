var mySql = {
    host: 'localhost',
    user: 'user',
    password: 'password',
    database: 'database',
    connectionLimit: 10,    
	debugMode: true
};

var azure = {
    provider: "azureblob",
    azureblob: {
        container: "estore",
        accountName: "accountName",
        host: "estore.blob.core.windows.net",
        accessKey: "accessKey"
    }
};

var aws = {
    provider: "s3",
    s3: {
        accessKeyId: "accessKeyId",
        secretAccessKey: "secretAccessKey",
        bucket: "estore"
    }
};

var fs = {
    provider: 'fs',
    destination: './uploads'
};

module.exports = {
    mySql: mySql,
    secretKey: 'ilovejavascript',
};