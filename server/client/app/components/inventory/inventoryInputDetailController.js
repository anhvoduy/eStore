(function (){
    'use strict';
	app.controller('InventoryInputDetailController', InventoryInputDetailController);
    InventoryInputDetailController.$inject = ['$q', '$state', '$stateParams'];    
	function InventoryInputDetailController($q, $state, $stateParams) {
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