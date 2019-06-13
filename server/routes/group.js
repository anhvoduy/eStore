const router = require('express').Router();
const _ = require('lodash');
const auth = require('../config/auth');
const groupService = require('../services/groupService');

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

router.post('/create', auth.checkAuthentication(), async function (req, res, next) {
	try
    {
        let group = _.pick(req.body, ['GroupName','Description']);
        if(!group.GroupName)
            throw { code: 'MISSING_REQUIRED_FIELD', message: 'missing required field: GroupName' }      

        let result = await groupService.create(group);
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
        let group = _.pick(req.body, ['GroupId','GroupKey','GroupName','Description']);
        if(!group.GroupKey)
            throw CONSTANT.MISSING_FIELD_GROUPKEY;
        
        if(!group.GroupName)
            throw CONSTANT.MISSING_FIELD_GROUPNAME;

        if(!group.GroupId){
            us = await groupService.getUserByKey(group.GroupKey);
            if(!us)
                throw CONSTANT.INVALID_FIELD_GROUPKEY;
            else
                group.GroupId = us.GroupId;
        }

        let result = await groupService.update(group);
        if(result.affectedRows > 0) 
            res.status(200).json({ success: true });
        else 
            res.status(500).json({ success: false });
    }
    catch(err){
        next(err);
    }
});

module.exports = router;
