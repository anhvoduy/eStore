const _ = require('lodash');
const dbContext = require('../lib/dbContext');

// Constructor
const Factory = function () { 
}

Factory.prototype.getTrucks = function(){
    return true;
}

Factory.prototype.getTruckById = function(){
    return true;
}

Factory.prototype.createTruck = function(){
    return true;
}

Factory.prototype.updateTruck = function(){
    return true;
}

Factory.prototype.deleteTruck = function(){
    return true;
}

// Export
module.exports = new Factory;
