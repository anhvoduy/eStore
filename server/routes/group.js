const router = require('express').Router();
const _ = require('lodash');
const auth = require('../config/auth');
const dbContext = require('../lib/dbContext');
const groupService = require('../services/groupService');

// Routers
router.get('/items', auth.checkAuthentication(), async function (req, res, next) {
    try
    {
        let query = req.query;
        let groups = await groupService.getGroups(query);
        res.status(200).json(groups);
    }
    catch(err){
        next(err);
    }	
});

router.get('/item', auth.checkAuthentication(), async function (req, res, next) {
    try
    {
        let query = _.pick(req.query,['GroupId', 'GroupKey']);
        let groups;
        if(query.GroupId) 
            groups = await groupService.getGroupById(query);
        else if(query.GroupKey)
            groups = await groupService.getGroupByKey(query);
        res.status(200).json(groups);
    }
    catch(err){
        next(err);
    }    
});

// Export
module.exports = router;
