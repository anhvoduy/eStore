var sampleData = function () { 
}

sampleData.prototype.User = function () {
    var user = {
		userName: 'admin',
		firstName: 'David',
		lastName: 'Beckham',
		displayName: 'David Beckham'
	}
	return user;
}

// Export
module.exports = new sampleData;
