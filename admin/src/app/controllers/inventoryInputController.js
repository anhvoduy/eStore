(function (){
    'use strict';
	app.controller('inventoryInputController', inventoryInputController);
	inventoryInputController.$inject = ['$scope', '$q', '$state', '$stateParams', 'inventoryService'];
	    
	function inventoryInputController($scope, $q, $state, $stateParams, inventoryService) {
		/* models */
		$scope.messageSuccess = [];
		$scope.messageError = [];
		
		/* functions */
		function activate() {
			inventoryService.getStockIn().then(function(result){
				$scope.stocks = result;
			}, function(error){
				$scope.messageError.push(error);
			}); 
		}

		/* start */
		activate();
	}
})();