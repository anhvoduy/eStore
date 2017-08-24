const express = require('express');
const router = express.Router();
const q = require('q');
const auth = require('../config/auth');
const constant = require('../lib/constant');
const dbContext = require('../lib/dbContext');
const dbHelper = require('../lib/dbHelper');
const userService = require('../services/userService');

// Routers
router.get('/items', auth.checkAuthentication(), function (req, res, next) {
	var ctx = {};
    dbContext.getConnection()
    .then(function (result) {
		ctx = result;
        return userService.getUsers(ctx);
    }).then(function (users) {
		res.status(200).json(users);
    }).catch(function (error) {        
        next(error);
    }).done(function () {
		ctx.release();
    });
});

router.get('/items/:id', auth.checkAuthentication(), function (req, res, next) {
    var userId = req.params.id
    
	var ctx = {};
    dbContext.getConnection().then(function (result) {
		ctx = result;
        return userService.getUserById(ctx, userId);
	}).then(function (users) {
		if (users.length == 0) {
            res.status(404).json(errorHelper.Error_Not_Exist_UserId);
		} else {
			res.status(200).json(users[0]);
		}
    }).catch(function (error) {        
        next(error);
    }).done(function () {
		ctx.release();
    });
});

var getPromise = function(item){
    return dbContext.getConnection().then(function(con){
        console.log('- item.name:', item.name, ' --- ', item.sex);
    });
}

router.get('/profile', auth.checkAuthentication(), function (req, res, next) {
    var peoples = [
        {name: '11', sex: false},
        {name: '12', sex: false},
        {name: '13', sex: false},
        {name: '14', sex: false},
        {name: '15', sex: true},
        {name: '16', sex: false},
        {name: '20', sex: true},
        {name: '22', sex: true}
    ];

    var user = {};
    var ctx = {};
    //console.log('get current user profile ...');
    dbContext.getConnection()
    .then(function (con) {
        ctx = con;
        return userService.getUserById(ctx, 1);
    })
    .then(function (users) {
        user = users[0];		
    })
    // .then(function(){
    //     var promises = peoples.map(throat(1, function(item){
    //         var timeout = item.sex === true? 0: 1000;
    //         return q.delay(timeout).then(function(){
    //             //console.log('- item.name:', item.name);
    //             return getPromise(item);
    //         }).done();            
    //     }));
    //     return q.allSettled(promises);
    // })
    .then(function(){
        res.status(200).json(user);
    })
    .catch(function (error) {
        next(error);
    })
    .done(function () {
        ctx.release();
    });
});

router.get('/menu', auth.checkAuthentication(), function (req, res, next) {
	//console.log('get current menu ...');
	var menu = userService.getMenu();
	res.status(200).json(menu);	
});

router.post('/create', auth.checkAuthentication(), function (req, res, next) {
	// create user;
});

router.put('/update', auth.checkAuthentication(), function (req, res, next) {
	// edit user;
});

router.delete('/delete', auth.checkAuthentication(), function (req, res, next) {
	// edit user;
});

// return Router
module.exports = router;
