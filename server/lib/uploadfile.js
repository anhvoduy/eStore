const _ = require('lodash');
const path = require('path');
const multer = require('multer');
const crypto = require('crypto');

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