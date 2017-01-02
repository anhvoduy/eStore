(function () {
	'use strict';
	app.controller('InventoryOutputDetailController', InventoryOutputDetailController);
	InventoryOutputDetailController.$inject = ['$scope', '$q', '$state', '$stateParams'];
	function InventoryOutputDetailController($scope, $q, $state, $stateParams) {
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