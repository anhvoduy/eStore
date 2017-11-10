const router = require('express').Router();
const _ = require('lodash');
const auth = require('../config/auth');
const dbContext = require('../lib/dbContext');
const userService = require('../services/userService');

// Routers
router.get('/items', auth.checkAuthentication(), async function (req, res, next) {
    try
    {
        let query = req.query;
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
        var user = await userService.getUserById(1);
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
	res.status(200).json(true);
});

router.post('/update', auth.checkAuthentication(), async function (req, res, next) {
	res.status(200).json(true);
});

router.post('/delete', auth.checkAuthentication(), async function (req, res, next) {
	res.status(200).json(true);
});

// Export
module.exports = router;
