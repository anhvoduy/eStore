(function (){
    'use strict';
	app.controller('inventoryReportController', inventoryReportController);
    inventoryReportController.$inject = ['$scope', '$q', '$state', '$stateParams'];    
	function inventoryReportController($scope, $q, $state, $stateParams) {
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