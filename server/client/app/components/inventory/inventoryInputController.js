(function () {
    'use strict';        
    app.controller('InventoryInputController', InventoryInputController);
	InventoryInputController.$inject = ['$q'];        
	function InventoryInputController($q) {
		// models
		var vm = this;		
		vm.messageSuccess = '';
		vm.messageError = '';
		
		// functions
		function activate() {
			
		}
		
		/* start */
		activate();
	}
})();