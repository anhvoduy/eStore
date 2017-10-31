(function (){
    'use strict';
	app.controller('inventoryController', inventoryController);
    inventoryController.$inject = ['$scope', '$q', '$state', '$stateParams', 'inventoryService'];    
	function inventoryController($scope, $q, $state, $stateParams, inventoryService) {
		// models
		
		// functions
		function activate() {
			inventoryService.getItems().then(function(result){
				$scope.inventories = result;
			}, function(error){
				console.log(error);
			})
		}		
		
		/* start */
		activate();
	}
})();