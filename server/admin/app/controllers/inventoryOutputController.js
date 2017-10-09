(function () {
	'use strict';
	app.controller('inventoryOutputController', inventoryOutputController);
	inventoryOutputController.$inject = ['$scope', '$q', '$state', '$stateParams'];
	function inventoryOutputController($scope, $q, $state, $stateParams) {
		// models
		var vm = this;
		vm.messageSuccess = '';
		vm.messageError = '';
		vm.save = save;
		
		// functions
		function activate() { 
		}
		
		function save() {			
		}
		
		/* start */
		activate();
	}
})();