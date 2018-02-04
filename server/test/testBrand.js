'use strict';
var chai = require('chai');
var expect  = chai.expect;
var supertest = require("supertest");
var server = require('../server');
//var chaiHttp = require('chai-http');
//chai.use(chaiHttp);

var mApiBrand = "/api/brand";
var mApiBrandItems = `${mApiBrand}/items`;
var mApiBrandItem = `${mApiBrand}/item`;
var mApiBrandUpdate = `${mApiBrand}/update`;

var mToken;
var brandId = 10;
var brand = {
    BrandId: 10,
    BrandName: 'Sony Vaio',
    Description: 'Sony Vaio'
};

describe(`@DEV: ${mApiBrand}`, function() {
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

    it(`GET: ${mApiBrandItems}`, function (done) {
        supertest(server)
			.get(mApiBrandItems)
			.expect(200)
			.end(function (err, res) {
            
            if (err) 
                return done(err);
            
            expect(res.status, 'Status').eql(200);
            expect(res.body, 'Body').all.keys('HitsTotal', 'PageTotal', 'PageSize', 'PageCurrent', 'PageData');            
            res.body.PageData.forEach(function (brand) {
                expect(brand).all.keys('BrandId', 'BrandKey', 'BrandName', 'Description');
                expect(brand.BrandId,'BrandId').a('number');
                expect(brand.BrandKey,'BrandKey').a('string');
                expect(brand.BrandName,'BrandName').a('string');
                expect(brand.Description,'Description').a('string');
            });
            done();
        })
    });
		
    it(`GET: ${mApiBrandItem}`, function (done) {
        supertest(server)
            .get(mApiBrandItem)
            .query({BrandId: brandId})
			.expect(200)
			.end(function (err, res) {
            
            if (err) 
                return done(err);
            
            expect(res.status, 'Status').eql(200);
            expect(res.body).all.keys('BrandId', 'BrandKey', 'BrandName', 'Description');
            expect(res.body.BrandId,'BrandId').a('number');
            expect(res.body.BrandKey,'BrandKey').a('string');
            expect(res.body.BrandName,'BrandName').a('string');
            expect(res.body.Description,'Description').a('string');
            done();
        })
    });
});

describe(`@DEV: ${mApiBrand}`, function () {
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

    afterEach(function() {
    });

    it(`POST: ${mApiBrandUpdate}`, function (done) {
        supertest(server)
            .post(mApiBrandUpdate)
            .send(brand)
            .expect(200)
            .end(function (err, res) {
            
            if (err) 
                return done(err);

            expect(res.status, 'Status').eql(200);
            expect(res.body.success, 'success').eq(true);
            done();            
        });
    });
});
