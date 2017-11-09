(function (){
    'use strict';
	app.controller('inventoryInputController', inventoryInputController);
    inventoryInputController.$inject = ['$scope', '$q', '$state', '$stateParams', 'inventoryService'];    
	function inventoryInputController($scope, $q, $state, $stateParams, inventoryService) {
		/* model */
		
		
		/* functions */
		function activate() {
			inventoryService.getStockIn().then(function(result){
				$scope.stocks = result;
			}, function(error){
				console.log(error);
			}); 
		}

		/* start */
		activate();
	}
})();