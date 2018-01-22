var mySql = {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'estore',
    connectionLimit: 10,
    secretKey: 'ilovejavascript',
	debugMode: true
};

var azure = {
    provider: "azureblob",
    azureblob: {
        container: "estore",
        accountName: "accountName",
        host: "demo2017.blob.core.windows.net",
        accessKey: "v6Am7zLZK3xZUrqLhwfSEAil7pl0p9/qxhQCHeM3pY94Z0LSStU6lDAUAyF8ac/xaDMXmB0siuuCH3840z/xbw=="
    }
};

var aws = {
    provider: "s3",
    s3: {
        accessKeyId: "accessKeyId",
        secretAccessKey: "RTAOlLwMY2ZCT7cstEtYCm305B2d8hfq+qLCSlQF",
        bucket: "estore"
    }
};

var fs = {
    provider: 'fs',
    destination: './uploads'
};

module.exports = mySql;