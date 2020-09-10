(function () {
	'use strict';
	app.controller('inventoryOutputController', inventoryOutputController);
	inventoryOutputController.$inject = ['$scope', '$q', '$state', '$stateParams', 'inventoryService'];
	
	function inventoryOutputController($scope, $q, $state, $stateParams, inventoryService) {
		/* model */
		$scope.messageSuccess = [];
		$scope.messageError = [];
		
		/* functions */
		function activate() {
			inventoryService.getStockOut().then(function(result){
				$scope.stocks = result;
			}, function(error){
				$scope.messageError.push(error);
			});
		}			
		
		/* start */
		activate();
	}
})();