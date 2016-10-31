(function () {
    'use strict';        
    app.controller('mainController', mainController);
    mainController.$inject = ['$scope', '$rootScope'];        
	function mainController($scope, $rootScope) {
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