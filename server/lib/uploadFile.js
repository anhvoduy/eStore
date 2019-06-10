'use strict';
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const storageAWS = require('../config/config').storage.aws;

/* upload file to AWS Storage S3 */
const s3 = new aws.S3({ 
    accessKeyId: storageAWS.accessKeyId,
	secretAccessKey: storageAWS.secretAccessKey,
	region: storageAWS.region,
});
const uploadFileS3 = multer({
  storage: multerS3({
    s3: s3,
    bucket: storageAWS.bucket,
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
});

module.exports = {
    uploadFileS3: uploadFileS3
};