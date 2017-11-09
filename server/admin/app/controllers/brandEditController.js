(function (){
    'use strict';
	app.controller('brandEditController', brandEditController);
	brandEditController.$inject = ['$scope', '$state', '$stateParams', '$timeout', 'appCommon', 'brandService', 'productService'];

	function brandEditController($scope, $state, $stateParams, $timeout, appCommon, brandService, productService) {
		/* models */
		$scope.brandKey = $stateParams.brandKey;
		$scope.formStatus = angular.isUndefined($scope.brandKey) ? appCommon.formStatus.isNew : appCommon.formStatus.isEdit;
		$scope.formTitle = appCommon.setFormTitle($scope.formStatus);
				
		$scope.disabledButton = false;
		$scope.messageSuccess = [];
		$scope.messageError = [];
		
		/* functions */		
		function activate() {
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