(function (){
    'use strict';
	app.controller('inventoryInputController', inventoryInputController);
    inventoryInputController.$inject = ['$scope', '$q', '$state', '$stateParams'];    
	function inventoryInputController($scope, $q, $state, $stateParams) {
		// models
		var vm = this;
		vm.messageSuccess = '';
		vm.messageError = '';		
		
		// functions
		function activate() { 
		}

		function save() {			
		}
		
		/* start */
		activate();
	}
})();