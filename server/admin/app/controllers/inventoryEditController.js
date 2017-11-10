(function (){
    'use strict';
	app.controller('inventoryEditController', inventoryEditController);
	inventoryEditController.$inject = ['$scope', '$q', '$state', '$stateParams', 'appCommon', 'inventoryService'];
	
	function inventoryEditController($scope, $q, $state, $stateParams, appCommon, inventoryService) {
		/* models */
		$scope.inventoryKey = $stateParams.inventoryKey;
		$scope.formStatus = appCommon.isUndefined($scope.inventoryKey) 
			? appCommon.formStatus.isNew 
			: appCommon.formStatus.isEdit;
		$scope.formTitle = appCommon.setFormTitle($scope.formStatus, 'Inventory');						
		$scope.messageSuccess = [];
		$scope.messageError = [];

		
		/* functions */
		function activate() {
			inventoryService.getItem().then(function(result){
				$scope.inventory = result;
			}, function(error){
				$scope.messageError.push(error);
			});
		};		

		// if update inventory success/failed -> reset status after 3 seconds
		function resetFormStatus() {
			$timeout(function () {
				$scope.messageSuccess = [];
				$scope.messageError = [];
			}, 3000);
		};
		

		/* buttons */
		$scope.cancel = function() {
            $state.go($state.current.parentState);
        };
		
		/* start */
		activate();
	}
})();