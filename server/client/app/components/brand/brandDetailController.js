(function (){
    'use strict';
	app.controller('BrandDetailController', BrandDetailController);
	BrandDetailController.$inject = ['$scope', '$state', '$stateParams', '$timeout', 'appContext', 'brandService', 'productService'];

	function BrandDetailController($scope, $state, $stateParams, $timeout, appContext, brandService, productService) {
		// models		
		$scope.brandId = $stateParams.brandId;
		$scope.brand = {};
		$scope.lstProducts = [];
		$scope.disabledButton = false;
		$scope.formStatus = appContext.isUndefined($scope.brandId) ? appContext.formStatus.isNew : appContext.formStatus.isEdit;
				
		// functions
		function activate() {
			$scope.formTitle = setFormTitle();

			brandService.getBrandById($scope.brandId).then(function (result) {
				$scope.brand = result;
				if ($scope.brand === undefined) {
					$scope.messageError = String.format("The brand id: {0} not found.", $scope.brandId);
					$scope.disabledButton = true;
				} else {
					$scope.disabledButton = false;
				}
			}, function (error) {
				$scope.messageError = error.message;
				$scope.disabledButton = true;
			});
			
			productService.getProductByBrand($scope.brandId).then(function (result) {
				$scope.lstProducts = result;
				if ($scope.lstProducts === undefined || $scope.lstProducts.length === 0) {
					$scope.messageErrorProduct = String.format("The list of products belongs to brand id: {0} not found.", $scope.brandId);
				} else {
					$scope.messageSuccessProduct = String.format("Get Products is successful. Total: {0} rows", $scope.lstProducts.length);
				}
			}, function (error) {
				$scope.messageErrorProduct = error.message;
				$scope.disabledButton = true;
			});
		}

		function setFormTitle(){
			if($scope.formStatus === appContext.formStatus.isNew) return 'Create Brand';
			else if ($scope.formStatus === appContext.formStatus.isEdit) return 'Edit Brand';
			else return 'Display Brand';			
		};
		
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