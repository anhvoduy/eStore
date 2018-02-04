'use strict';
var chai = require('chai');
var expect  = chai.expect;
var supertest = require("supertest");
var server = require('../server');
//var chaiHttp = require('chai-http');
//chai.use(chaiHttp);

var mApiProduct = "/api/product";
var mApiProductFeItems = `${mApiProduct}/fe/items`;
var mApiProductFeItem = `${mApiProduct}/fe/item`;

var mToken;
var pageIndex = 0;
var productId = 10;
var review = {
    Rating: 2,
    Comment: 'Test Rating 2xx - Product Id = 2',
    Created: '',
    ProductId: 2,
    Email: 'anhvod@hvn.com',						
};

describe(`@DEV: ${mApiProduct}`, function () {
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

    it(`GET: ${mApiProductFeItems}`, function (done) {
        supertest(server)
        .get(mApiProductFeItems)
		.expect(200)
		.end(function (err, res) {
            if (err) 
                return done(err);

            expect(res.status, 'Status').eql(200);
            expect(res.body, 'Body').all.keys('HitsTotal', 'PageTotal', 'PageSize', 'PageCurrent', 'PageData');
            res.body.PageData.forEach(function (product) {
                expect(product).all.keys('ProductId', 'ProductKey', 'ProductName', 'Description', 'ColorCode', 'Price', 'LatestReviewInfo', 'ProductImage', 'SizeList', 'Status', 'Created');
                expect(product.ProductId,'ProductId').a('number');
                expect(product.ProductKey,'ProductKey').a('string');
                expect(product.ProductName,'ProductName').a('string');
                expect(product.Description,'Description').a('string');
            });
            done();
        })
    });
        
    it(`GET: ${mApiProductFeItem}`, function (done) {
        supertest(server)
            .get(mApiProductFeItem)
            .query({ProductId: productId})
			.expect(200)
			.end(function (err, res) {
            
            if (err) 
                return done(err);
                        
            expect(res.status, 'Status').eql(200);            
            expect(res.body).all.keys('BrandId', 'BrandName','ProductId', 'ProductKey', 'ProductName', 'Description', 'ColorCode', 'Price', 'LatestReviewInfo', 'ProductImage', 'SizeList', 'Status', 'Created');
            done();
        })
    });
});
