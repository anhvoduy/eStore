(function (){
    'use strict';
	app.controller('brandEditController', brandEditController);
	brandEditController.$inject = ['$scope', '$state', '$stateParams', '$timeout', 'appCommon', 'brandService', 'productService'];
	
	function brandEditController($scope, $state, $stateParams, $timeout, appCommon, brandService, productService) {
		/* models */
		$scope.brandKey = $stateParams.brandKey;
		$scope.formStatus = appCommon.isUndefined($scope.brandKey) 
			? appCommon.formStatus.isNew 
			: appCommon.formStatus.isEdit;
		$scope.formTitle = appCommon.setFormTitle($scope.formStatus, 'Brand');
		$scope.messageSuccess = [];
		$scope.messageError = [];
		
		/* functions */		
		function activate() {
			if(appCommon.isUndefined($scope.brandKey)) return;

			brandService.getBrandByKey($scope.brandKey).then(function (result) {
				$scope.brand = result;
				if (appCommon.isUndefined($scope.brand)) {
					$scope.messageError.push(String.format('The brand is not found'));
				}
			}, function (error) {
				$scope.messageError.push(error);
			});
			
			productService.getProductByBrand($scope.brandKey).then(function (result) {
				$scope.products = result;
				if (appCommon.isUndefined($scope.products) || $scope.products.length === 0) {
					$scope.messageError.push(String.format("Products belongs to this brand is not found.", $scope.brandId));
				} else {
					$scope.messageSuccess.push(String.format("Get Products is success. Total: {0} rows", $scope.products.length));
				}
			}, function (error) {
				$scope.messageError.push(error);
			});
		};
		
		// if update brand success/failed -> reset status after 3 seconds
		function resetFormStatus() {
			$timeout(function () {				
				$scope.messageSuccess = [];
				$scope.messageError = [];
			}, 3000);
		};
		
		/* buttons */
		$scope.save = function () {
			if ($scope.brand === undefined) return;

			brandService.updateBrand($scope.brand).then(function (result) {
				$scope.messageSuccess.push(result);
				resetFormStatus();
			}, function (error) {
				$scope.messageError.push(error);
				resetFormStatus();
			});
		};

		$scope.cancel = function() {
            $state.go($state.current.parentState);
        };
		
		/* start */
		activate();
	}
})();