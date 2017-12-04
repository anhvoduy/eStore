(function () {
    'use strict';    
    app.controller('productEditController', productEditController);
	productEditController.$inject = ['$scope', '$timeout', '$state', '$stateParams', 'appCommon', 'brandService', 'productService'];
	function productEditController($scope, $timeout, $state, $stateParams, appCommon, brandService, productService) {
		/* models */
		$scope.productKey = $stateParams.productKey;
		$scope.formStatus = appCommon.isUndefined($scope.productKey) 
			? appCommon.formStatus.isNew 
			: appCommon.formStatus.isEdit;
		$scope.formTitle = appCommon.setFormTitle($scope.formStatus, 'Product');
		$scope.rootLocation = appCommon.getRootLocation();
		$scope.colorList = appCommon.colorList;
		$scope.messageSuccess = [];
        $scope.messageError = [];
		
		
		/* functions */
		var activate = function () {
			// isNew
			brandService.getList().then(function (data) {
				$scope.brands = data.PageData;
			}, function (error) {
				$scope.messageError.push(error);
			});
			
			if(!appCommon.isUndefined($scope.productKey)){
				productService.getProductByKey($scope.productKey).then(function (result) {
					$scope.product = result;
					if(!appCommon.isUndefined($scope.product.ProductImage)){
						$scope.product.ProductImageUrl = String.format('{0}/{1}/{2}/{3}', $scope.rootLocation, 'uploads', 'products', $scope.product.ProductImage);
					}

					if (appCommon.isUndefined($scope.product)) {
						$scope.messageError.push(String.format("The Product Key: {0} not found.", $scope.productKey));
					}
				}, function (error) {
					$scope.messageError.push(error);
				});
			}
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

		function createProduct(product){
			return productService.create(product).then(function (result) {
				if(result && result.success === true){
					$scope.messageSuccess.push('create product is success');
					$scope.product.ProductId = result.ProductId;
				} else {
					$scope.messageError.push('create product is failed');
				}
				resetFormStatus();
			}, function (error) {
				$scope.messageError.push(error);
				resetFormStatus(1000);
			});
		};

		function updateProduct(product){
			return productService.update(product).then(function (result) {
				if(result && result.success === true){
					$scope.messageSuccess.push('update product is success');
				} else {
					$scope.messageError.push('update product is failed');
				}
				resetFormStatus();
			}, function (error) {
				$scope.messageError.push(error);
				resetFormStatus(1000);
			});
		};
		

		/* buttons */
		// https://docs.angularjs.org/guide/forms
        $scope.save = function (product) {
			$scope.isSubmitted = true; // validate UI			
			if(!product || !validateMaster(product)) // validate business rules
			{ 
				$scope.isSubmitted = false;
				return;
			}

			// start submit to server
			$scope.isSubmitting = true;
			if($scope.formStatus === appCommon.formStatus.isNew){
				return createProduct(product).then(function(){
					$timeout(function(){
						$state.go($state.current.parentState);
					}, 3000);
				});
			}
			else if($scope.formStatus === appCommon.formStatus.isEdit){
				return updateProduct(product);
			};			
		};

        $scope.cancel = function() {
            $state.go($state.current.parentState);
		};
		
		$scope.changeSelectedBrand = function(item){
			console.log(item);
		};

		$scope.changeSelectedColor = function(item){
			console.log(item);
		};
		
		/* start */
		activate();
	}
})();