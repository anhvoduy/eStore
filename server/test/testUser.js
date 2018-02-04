'use strict';
var expect  = require("chai").expect;
var supertest = require("supertest");
var server = require('../server');
//var chaiHttp = require('chai-http');
//chai.use(chaiHttp);

var mApiUser = "/api/user";
var mApiUserItems = `${mApiUser}/items`;
var mApiUserItem = `${mApiUser}/item`;

var mToken;
var mUserId = 10;
describe(`@DEV: ${mApiUser}`, function () {
    beforeEach(function(done) {
        supertest(server)
            .post('/api/login')
            .send({ username: 'admin', password: '@dmin' })
			.end(function (err, res) {
                if (err){                    
                    return done(err);
                }
                mToken = res.body.user.token;                
                done();          
            });
    });

    afterEach(function(done) {
        done();
    });

    it(`GET: ${mApiUserItems}`, function (done) {        
        supertest(server)
            .get(mApiUserItems)
            .set('Authorization', mToken)
			.expect(200)
			.end(function (err, res) {
            
            if (err) 
                return done(err);            
            
            expect(res.status, 'Status').eql(200);            
            //expect(res.body, 'Body').all.keys('HitsTotal', 'PageTotal', 'PageSize', 'PageCurrent', 'PageData');
            res.body.forEach(function (user) {
                expect(user, 'user').all.keys('UserId', 'UserKey', 'UserType', 'UserName', 'DisplayName', 'Email', 'Mobile', 'Title', 'Description', 'DateOfBirth');
            });
            done();
        })
    });
        
    it(`GET: ${mApiUserItem}`, function (done) {
        supertest(server)
            .get(mApiUserItem)
            .query({UserId: mUserId})
            .set('Authorization', mToken)
			.expect(200)
			.end(function (err, res) {
            
            if (err) 
                return done(err);            
            
            expect(res.status, 'Status').eql(200);
            expect(res.body, 'user').all.keys('UserId', 'UserKey', 'UserType', 'UserName', 'DisplayName', 'Email', 'Mobile', 'Title', 'Description', 'DateOfBirth');           
            done();
        })
    });
});