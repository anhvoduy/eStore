const router = require('express').Router();
const _ = require('lodash');
const multer = require('multer');
const moment = require('moment');
const auth = require('../config/auth');
const CONSTANT = require('../lib/constant');
const dbContext = require('../lib/dbContext');
const userService = require('../services/userService');

// upload file config
const uploadUserImage = function(){
    let multerConfig = {
        dest: './uploads/users',
        limits: { fileSize: CONSTANT.UPLOAD_FILE.FILE_SIZE }
    };
    return multer(multerConfig).single('UserImage');
};

// Routers
router.post('/upload', auth.checkAuthentication(), uploadUserImage(), async function(req, res, next){
	try
	{
		if(req.file)
			res.status(200).json({ Success: true, FileName: req.file.filename });
		else
			res.status(500).json({ Success: false });
	}
	catch(err){
		next(err);
	}
});

router.get('/items', auth.checkAuthentication(), async function (req, res, next) {
    try
    {
        let query = _.pick(req.query, ['PageCurrent', 'PageSize']);
        if(!query.PageCurrent && !query.PageSize){
			query.PageCurrent = 1;
			query.PageSize = 5000;			
        }
        let users = await userService.getUsers(query);
        res.status(200).json(users);
    }
    catch(err){
        next(err);
    }	
});

router.get('/item', auth.checkAuthentication(), async function (req, res, next) {
    try
    {
        let query = _.pick(req.query, ['UserId', 'UserKey']);
        let users;
        if(query.UserId) 
            users = await userService.getUserById(query);
        else if(query.UserKey)
            users = await userService.getUserByKey(query);
        res.status(200).json(users);
    }
    catch(err){
        next(err);
    }    
});

router.get('/profile', auth.checkAuthentication(), async function (req, res, next) {    
    try
    {
        let query = _.pick(req.query, ['UserKey']);
        if(!query.UserKey)
            throw CONSTANT.MISSING_FIELD_USERKEY;

        let user = await userService.getUserByKey(query);
        res.status(200).json(user);
    }
    catch(err){
        next(err);
    }
});

router.get('/menu', auth.checkAuthentication(), async function (req, res, next) {	
	var menu = userService.getMenu();
	res.status(200).json(menu);
});

router.post('/create', auth.checkAuthentication(), async function (req, res, next) {
	try
    {
        let user = _.pick(req.body, ['UserName','Password','DisplayName','ImageKey','Email','Mobile','Tel','Title','DateOfBirth','Description']);
        if(!user.UserName)
            throw CONSTANT.MISSING_FIELD_USERNAME;

        // if(!user.Password)
        //     throw CONSTANT.MISSING_FIELD_PASSWORD;
            
        if(user.DateOfBirth)
            user.DateOfBirth = moment(user.DateOfBirth).format('YYYY-MM-DD');

        let result = await userService.create(user);
        if(result.affectedRows > 0) 
            res.status(200).json({ InsertId: result.insertId, success: true });
        else 
            res.status(500).json({ success: false });
    }
    catch(err){
        next(err);
    }
});

router.post('/update', auth.checkAuthentication(), async function (req, res, next) {
	try
    {
        let user = _.pick(req.body, ['UserId','UserKey','UserName','DisplayName','ImageKey','Email','Mobile','Tel','Title','DateOfBirth','Description']);
        if(!user.UserKey)
            throw CONSTANT.MISSING_FIELD_USERKEY;
        
        if(!user.UserName)
            throw CONSTANT.MISSING_FIELD_USERNAME;

        if(!user.UserId){
            us = await userService.getUserByKey(user.UserKey);
            if(!us)
                throw CONSTANT.INVALID_FIELD_USERKEY;
            else
                user.UserId = us.UserId;
        }

        if(user.DateOfBirth)
            user.DateOfBirth = moment(user.DateOfBirth).format('YYYY-MM-DD');

        let result = await userService.update(user);
        if(result.affectedRows > 0) 
            res.status(200).json({ success: true });
        else 
            res.status(500).json({ success: false });
    }
    catch(err){
        next(err);
    }
});

router.post('/delete', auth.checkAuthentication(), async function (req, res, next) {
    try
    {
        res.status(200).json(true);
    }
    catch(err){
        next(err);
    }	
});

// Export
module.exports = router;
