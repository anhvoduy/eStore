(function (){
    'use strict';
	app.controller('InventoryController', InventoryController);
	InventoryController.$inject = ['$q', '$state', '$stateParams'];
	function InventoryController($q, $state, $stateParams) {
		// models
		var vm = this;
		vm.inventoryId = $stateParams.inventoryID;
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