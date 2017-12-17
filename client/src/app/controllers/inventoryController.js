(function (){
    'use strict';
	app.controller('inventoryController', inventoryController);
    inventoryController.$inject = ['$scope', '$state', '$stateParams', 'appCommon', 'inventoryService'];    
	function inventoryController($scope, $state, $stateParams, appCommon, inventoryService) {
		/* models */
		$scope.paging = appCommon.defaultPagination;
		$scope.messageSuccess = [];
		$scope.messageError = [];

		
		/* functions */
		function activate() {
			inventoryService.getItems().then(function(result){
				$scope.inventories = result;
				$scope.messageSuccess.push(String.format("Get Inventories is success. Total: {0} rows", $scope.inventories.length));
			}, function(error){
				$scope.messageError.push(error);
			})
		};
		
		
		/* start */
		activate();
	}
})();