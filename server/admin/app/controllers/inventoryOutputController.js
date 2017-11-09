(function () {
	'use strict';
	app.controller('inventoryOutputController', inventoryOutputController);
	inventoryOutputController.$inject = ['$scope', '$q', '$state', '$stateParams', 'inventoryService'];
	function inventoryOutputController($scope, $q, $state, $stateParams, inventoryService) {
		/* model */
		
		
		/* functions */
		function activate() {
			inventoryService.getStockOut().then(function(result){
				$scope.stocks = result;
			}, function(error){
				console.log(error);
			});
		}			
		
		/* start */
		activate();
	}
})();