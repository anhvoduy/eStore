(function (){
    'use strict';
	app.controller('inventoryInputEditController', inventoryInputEditController);
    inventoryInputEditController.$inject = ['$scope', '$q', '$state', '$stateParams'];    
	function inventoryInputEditController($scope, $q, $state, $stateParams) {
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