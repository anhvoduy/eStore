var mySql = {
    host: 'localhost', // For docker => docker inspect [containerid]
    user: 'user',
    password: 'password',
    database: 'database',
    connectionLimit: 10,    
	debugMode: true
};

var storage = {
    fs: {
        provider: "fs",
        destination: "./uploads"
    },
    azure: {
        provider: "azureblob",
        container: "container",
        accountName: "accountName",
        host: "host.blob.core.windows.net",
        accessKey: "accessKey"
        
    },
    aws: {
        provider: "s3",
        accessKeyId: "accessKeyId",
        secretAccessKey: "secretAccessKey",
        bucket: "bucket",
        region: "region"
    }
};

module.exports = {
    mySql: mySql,
    storage: storage,
    azureAuthenticate: true, // false
    secretKey: 'ilovejavascript'
};