(function () {
    'use strict';        
    app.controller('homeController', homeController);
	homeController.$inject = ['$scope', '$rootScope'];

	function homeController($scope, $rootScope) {
		// declare models
		var vm = this;
		vm.messageSuccess = '';
		vm.messageError = '';
		
		// activate
		activate();
		
		// declare functions
		function activate() {
			//console.log('activate');
		}
	}
})();