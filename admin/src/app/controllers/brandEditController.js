(function (){
    'use strict';
	app.controller('brandEditController', brandEditController);
	brandEditController.$inject = ['$scope', '$state', '$stateParams', '$timeout', 'appCommon', 'brandService', 'productService'];
	
	function brandEditController($scope, $state, $stateParams, $timeout, appCommon, brandService, productService) {
		/* models */
		$scope.brandKey = $stateParams.brandKey;
		$scope.pagination = appCommon.defaultPagination;
		$scope.formStatus = appCommon.isUndefined($scope.brandKey) 
			? appCommon.formStatus.isNew 
			: appCommon.formStatus.isEdit;
		$scope.formTitle = appCommon.setFormTitle($scope.formStatus, 'Brand');
		$scope.messageSuccess = [];
		$scope.messageError = [];
		$scope.messageProductSuccess = [];
		$scope.messageProductError = [];
		
		/* functions */
		function activate() {
			if(appCommon.isUndefined($scope.brandKey)) return;

			// get Brand
			brandService.getBrandByKey($scope.brandKey)
			.then(function (result) {
				$scope.brand = result;
				if (appCommon.isUndefined($scope.brand)) {
					$scope.messageError.push(String.format('The brand is not found'));
				}
			}, function (error) {
				$scope.messageError.push(error);
			});
			
			// get Product
			productService.getProductByBrand($scope.brandKey, $scope.pagination.pageCurrent, $scope.pagination.pageSize)
			.then(function (result) {
				$scope.products = result.PageData;
				$scope.pagination.pageCurrent = result.PageCurrent;
				$scope.pagination.pageSize = result.PageSize;
				$scope.pagination.pageTotal = result.PageTotal;
				$scope.pagination.hitsTotal = result.HitsTotal;
				$scope.pagination.maxSize = Math.ceil(result.HitsTotal/result.PageSize);

				if (appCommon.isUndefined($scope.products) || $scope.products.length === 0) {
					$scope.messageProductError.push('Products belongs to this brand is not found.');
				} 
				else {
					$scope.messageProductSuccess.push(String.format("Get Products is success. Total: {0} rows", $scope.products.length));
				}
			}, function (error) {
				$scope.messageProductError.push(error);
			});
		};
		
		// if update brand success/failed -> reset status after 3 seconds
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
		
		function updateBrand(brand){
			return brandService.update(brand).then(function (result) {
				if(result && result.success === true){
					$scope.messageSuccess.push('update brand is success');
				} else {
					$scope.messageError.push('update brand is failed');
				}
				resetFormStatus();
			}, function (error) {
				$scope.messageError.push(error);
				resetFormStatus(1000);
			});
		};

		function createBrand(brand){
			return brandService.create(brand).then(function (result) {
				if(result && result.success === true){
					$scope.messageSuccess.push('create brand is success');
					$scope.brand.BrandId = result.BrandId;
				} else {
					$scope.messageError.push('create brand is failed');
				}
				resetFormStatus();
			}, function (error) {
				$scope.messageError.push(error);
				resetFormStatus(1000);
			});
		};

		/* buttons */
		// https://docs.angularjs.org/guide/forms
		$scope.save = function (brand) {
			$scope.isSubmitted = true; // validate UI
			if(!brand || !validateMaster(brand)) // validate business rules
			{
				$scope.isSubmitted = false;
				return;
			}

			// start submit to server
			$scope.isSubmitting = true;
			if($scope.formStatus === appCommon.formStatus.isNew){
				return createBrand(brand).then(function(){
					$timeout(function(){
						$state.go($state.current.parentState);
					}, 3000);
				});
			}
			else if($scope.formStatus === appCommon.formStatus.isEdit){
				return updateBrand(brand);
			}
		};

		$scope.cancel = function() {
            $state.go($state.current.parentState);
        };
		
		/* start */
		activate();
	}
})();