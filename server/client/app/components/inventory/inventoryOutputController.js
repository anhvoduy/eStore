(function () {
	'use strict';
	app.controller('InventoryOutputController', InventoryOutputController);
	InventoryOutputController.$inject = ['$q', '$state', '$stateParams'];
	function InventoryOutputController($q, $state, $stateParams) {
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