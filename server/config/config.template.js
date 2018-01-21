var configMySql = {
    host: 'localhost',
    user: 'root',
    password: 'P@ssw0rd',
    database: 'estore',
    connectionLimit: 10,
    secretKey: 'ilovejavascript',
	debugMode: true
};

var azure = {
    provider: "azureblob",
    azureblob: {
        container: "estore",
        accountName: "demo2017",
        host: "demo2017.blob.core.windows.net",
        accessKey: "r4Am7zLZK3xZUrqLhwfSEAil7pl0p7/qxhQCHeN3pY94Z0LSStU6lDAUAyF8ac/xaDMXmB0siccCH3840z/xbw==",
        maximumExecutionTimeInMs: 30000
    }
};

var aws = {
    provider: "s3",
    s3: {
        accessKeyId: "AKIAI6CZ5U4AFRNZJBKQ",
        secretAccessKey: "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",
        bucket: "estore"
    }
};

var localhost = {
    provider: 'fs',
    destination: './uploads'
};

module.exports = configMySql;