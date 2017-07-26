(function () {
	'use strict';
	app.controller('inventoryBalanceController', inventoryBalanceController);
	inventoryBalanceController.$inject = ['$q', '$state', '$stateParams'];
	function inventoryBalanceController($q, $state, $stateParams) {
		// models
		var vm = this;		
		vm.messageSuccess = '';
		vm.messageError = '';
		vm.search = search;
		
		// functions
		function activate() {			
		}
		
		function search() { 
		}
		
		/* start */
		activate();
	}
})();