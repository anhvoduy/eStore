(function () {
	'use strict';
	app.factory('mainService', mainService);
	mainService.$inject = ['$q', 'baseService'];
	
	function mainService($q, baseService) {
		// constructor
		var mainService = function () {
            //console.log('instance');
		}
		mainService.prototype = new baseService('api');
		mainService.prototype.constructor = mainService;
								
		return new mainService;
	};
})();