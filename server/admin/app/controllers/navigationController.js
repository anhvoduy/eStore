(function () {
	'use strict';
	app.controller('navigationController', navigationController);
	navigationController.$inject = ['$rootScope', 'navigationService'];
	function navigationController($rootScope, navigationService) {
		// view-model
		var vm = this;
		
		// functions
		function activate() {
		}
		
		/* start */
		activate();
	}
})();