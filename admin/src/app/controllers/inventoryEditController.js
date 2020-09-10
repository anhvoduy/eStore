(function (){
    'use strict';
	app.controller('inventoryEditController', inventoryEditController);
	inventoryEditController.$inject = ['$scope', '$q', '$timeout', '$state', '$stateParams', 'appCommon', 'inventoryService'];

	function inventoryEditController($scope, $q, $timeout, $state, $stateParams, appCommon, inventoryService) {
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
			if(appCommon.isUndefined($scope.inventoryKey)) return;

			inventoryService.getItem($scope.inventoryKey).then(function(result){
				$scope.inventory = result;
				if (appCommon.isUndefined($scope.inventory)) {
					$scope.messageError.push(String.format('The inventory is not found'));
				}
			}, function(error){
				$scope.messageError.push(error);
			});
		};

		// if update inventory success/failed -> reset status after 3 seconds
		function resetFormStatus(delay) {
			if(!delay) delay = 3000;
			$timeout(function () {
				$scope.messageSuccess = [];
				$scope.messageError = [];
				$scope.messageProductSuccess = [];
				$scope.messageProductError = [];
				$scope.isSubmitted = false;
				$scope.isSubmitting = false;
			}, delay);
		};

		function validateMaster(master){
			if(!master){
				return false;
			}
			return true;
		};
		
		function updateInventory(inventory){
			return inventoryService.update(inventory).then(function (result) {
				if(result && result.success === true){
					$scope.messageSuccess.push('update inventory is success');
				} else {
					$scope.messageError.push('update inventory is failed');
				}
				resetFormStatus();
			}, function (error) {
				$scope.messageError.push(error);
				resetFormStatus(1000);
			});
		};

		function createInventory(inventory){
			return true;
		};
		

		/* buttons */
		// https://docs.angularjs.org/guide/forms
		$scope.save = function (inventory) {
			$scope.isSubmitted = true; // validate UI
			if(!inventory || !validateMaster(inventory)) // validate business rules
			{
				$scope.isSubmitted = false;
				return;
			}

			// start submit to server
			$scope.isSubmitting = true;
			if($scope.formStatus === appCommon.formStatus.isNew){
			 	return createInventory(inventory).then(function(){
			 		$timeout(function(){
			 			$state.go($state.current.parentState);
			 		}, 3000);
			 	});
			}
			else if($scope.formStatus === appCommon.formStatus.isEdit){
			 	return updateInventory(inventory);
			}
		};

		$scope.cancel = function() {
            $state.go($state.current.parentState);
        };
		
		/* start */
		activate();
	}
})();