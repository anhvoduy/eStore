'use strict';
var chai = require('chai');
//var chaiHttp = require('chai-http');
var expect  = require("chai").expect;
var supertest = require("supertest");
var server = require('../server');
//chai.use(chaiHttp);

var brandId = 10;
var brand = {
    BrandId: 10,
    BrandName: 'Sony Vaio',
    Description: 'Sony Vaio'
};

describe("GET API: /api/brand/", function() {
    beforeEach(function() {
    });

    afterEach(function() {
    });

    it("Get List Brands", function (done) {
        supertest(server)
			.get("/api/brand/items")
			.expect(200)
			.end(function (err, res) {
            
            if (err) {
                return done(err);
            }            
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
		
    it("Get Brand with BrandId: " + brandId, function (done) {
        supertest(server)
            .get("/api/brand/item")
            .query({BrandId: brandId})
			.expect(200)
			.end(function (err, res) {
            
            if (err) {
                return done(err);
            }
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

describe("POST API: /api/brand/", function () {
    beforeEach(function() {
    });

    afterEach(function() {
    });

    it('POST: update Brand with BrandId = 10', function (done) {
        supertest(server)
            .post("/api/brand/update")
            .send(brand)
            .expect(200)
            .end(function (err, res) {
            
            if (err) {
                return done(err);
            }

            expect(res.status, 'Status').eql(200);
            expect(res.body.success, 'success').eq(true);
            done();            
        });
    });
});
