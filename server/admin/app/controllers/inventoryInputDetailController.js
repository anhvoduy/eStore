(function (){
    'use strict';
	app.controller('inventoryInputDetailController', inventoryInputDetailController);
    inventoryInputDetailController.$inject = ['$scope', '$q', '$state', '$stateParams'];    
	function inventoryInputDetailController($scope, $q, $state, $stateParams) {
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