'use strict';
const _ = require('lodash');
const path = require('path');
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const amazonS3URI = require('amazon-s3-uri');
const config = require(path.resolve('./config/config'));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/uploads');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now());
    }
});
   
const upload = multer({ storage: storage })

module.exports = upload;