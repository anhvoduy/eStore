(function (){
    'use strict';
	app.controller('brandDetailController', brandDetailController);
	brandDetailController.$inject = ['$scope', '$state', '$stateParams', '$timeout', 'appCommon', 'brandService', 'productService'];

	function brandDetailController($scope, $state, $stateParams, $timeout, appCommon, brandService, productService) {
		/* models */
		$scope.brandKey = $stateParams.brandKey;		
		$scope.formStatus = appCommon.isUndefined($scope.brandKey)
			? appCommon.formStatus.isNew
			: $stateParams.formStatus;

		$scope.disabledButton = false;
		$scope.messageSuccess = [];
		$scope.messageError = [];		
		
		/* functions */
		function setFormTitle(){
			if($scope.formStatus === appCommon.formStatus.isNew) 
				return 'Create Brand';
			else if ($scope.formStatus === appCommon.formStatus.isEdit) 
				return 'Edit Brand';
			else 
				return 'Display Brand';
		};

		function activate() {
			$scope.formTitle = setFormTitle();

			brandService.getBrandByKey($scope.brandKey).then(function (result) {
				$scope.brand = result;
				if (angular.isUndefined($scope.brand)) {
					$scope.messageError = String.format('The brand is not found');					
				}
			}, function (error) {
				$scope.messageError.push(error);				
			});
			
			// productService.getProductByBrand($scope.brandId).then(function (result) {
			// 	$scope.lstProducts = result;
			// 	if (angular.isUndefined($scope.lstProducts) || $scope.lstProducts.length === 0) {
			// 		$scope.messageErrorProduct = String.format("The list of products belongs to brand id: {0} not found.", $scope.brandId);
			// 	} else {
			// 		$scope.messageSuccessProduct = String.format("Get Products is successful. Total: {0} rows", $scope.lstProducts.length);
			// 	}
			// }, function (error) {
			// 	$scope.messageError.push(error);
			// 	$scope.disabledButton = true;
			// });
		}
		
		// if update brand success/failed -> reset status after 5s  
		function resetFormStatus() {
			$timeout(function () {
				$scope.disabledButton = false;
				$scope.messageSuccess = '';
				$scope.messageError = '';
			}, 5000);
		}
		
		// buttons
		$scope.save = function () {
			if ($scope.brand === undefined) return;
			
			$scope.disabledButton = true;
			brandService.updateBrand($scope.brand).then(function (result) {
				$scope.messageSuccess = result.message;
				resetFormStatus();
			}, function (error) {
				$scope.messageError = error.message;
				resetFormStatus();
			});
		}

		$scope.cancel = function() {            
            $state.go($state.current.parentState);
        }
		
		/* start */
		activate();
	}
})();