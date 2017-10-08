(function () {
	'use strict';
	app.controller('inventoryOutputDetailController', inventoryOutputDetailController);
	inventoryOutputDetailController.$inject = ['$scope', '$q', '$state', '$stateParams'];
	function inventoryOutputDetailController($scope, $q, $state, $stateParams) {
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