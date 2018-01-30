'use strict';
var expect  = require("chai").expect;
var supertest = require("supertest");
var server = 'http://localhost:8000';

describe("GET API: /api/user/", function () {
    it("Get List Users", function (done) {
        supertest(server)
			.get("/api/user/items")
			.expect(200)
			.end(function (error, response) {
            
            if (error) {
                return done(error);
            }
            
            response.body.forEach(function (user) {
                expect(user).property('UserId');
                expect(user).property('UserType');
                expect(user).property('UserName');
                expect(user).property('Email');
                
                expect(user.UserId).a('number');
                expect(user.UserType).a('string');
                expect(user.UserName).a('string');
                expect(user.Email).a('string');
            });
            done();
        })
    });
    
    var userId = 2;
    it("Get User with User Id = " + userId, function (done) {
        supertest(server)
			.get("/api/user/items/" + userId)
			.expect(200)
			.end(function (error, response) {
            
            if (error) {
                return done(error);
            }
            
            var user = response.body;
            expect(user).property('UserId');
            expect(user).property('UserType');
            expect(user).property('UserName');
            expect(user).property('Email');
            
            expect(user.UserId).a('number');
            expect(user.UserType).a('string');
            expect(user.UserName).a('string');
            expect(user.Email).a('string');
            done();
        })
    });
});