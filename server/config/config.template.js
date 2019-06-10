var mySql = {
    host: 'localhost', // For docker => docker inspect [containerid]
    user: 'user',
    password: 'password',
    database: 'database',
    connectionLimit: 10,    
	debugMode: true
};

var storage = {
    default: 'fs', // 'azure', 'aws'
    fs: {
        provider: 'fs',
        destination: './uploads'
    },
    azure: {
        provider: "azureblob",
        azureblob: {
            container: "estore",
            accountName: "accountName",
            host: "estore.blob.core.windows.net",
            accessKey: "accessKey"
        }
    },
    aws: {
        provider: "s3",
        s3: {
            accessKeyId: "accessKeyId",
            secretAccessKey: "secretAccessKey",
            bucket: "estore"
        }
    }
};

module.exports = {
    mySql: mySql,
    storage: storage,
    azureAuthenticate: true, // false
    secretKey: 'ilovejavascript'
};