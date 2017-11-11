(function () {
    'use strict';    
    app.controller('productEditController', productEditController);
	productEditController.$inject = ['$scope', '$state', '$stateParams', 'appCommon', 
		'brandService', 'productService', 'reviewService'];
	function productEditController($scope, $state, $stateParams, appCommon, 
		brandService, productService, reviewService) {
		/* models */
		$scope.productKey = $stateParams.productKey;
		$scope.formStatus = appCommon.isUndefined($scope.productKey) 
			? appCommon.formStatus.isNew 
			: appCommon.formStatus.isEdit;
		$scope.formTitle = appCommon.setFormTitle($scope.formStatus, 'Product');
		$scope.messageSuccess = [];
        $scope.messageError = [];        
		$scope.master = {}; // https://docs.angularjs.org/guide/forms
		
		
		/* functions */
		var activate = function () {
			if(appCommon.isUndefined($scope.productKey)) return;

			productService.getProductByKey($scope.productKey)
			.then(function (result) {
				$scope.product = result;
				if (appCommon.isUndefined($scope.product)) {
					$scope.messageError.push(String.format("The Product Key: {0} not found.", $scope.productKey));
				}
			}, function (error) {
				$scope.messageError.push(error);
			});
			
			brandService.getList()
			.then(function (data) {
				$scope.brands = data.PageData;				
			}, function (error) {
				$scope.messageError.push(error);
			});
			
		};
		
		$scope.changeSelectedBrand = function(){

		};

		/* buttons */
        $scope.submit = function (product) {
			$scope.isSubmitted = true; // validate UI
			$scope.master = angular.copy(product); // clone new object
			if(!$scope.master || !validateMaster($scope.master)) // validate business rules
			{ 
				$scope.isSubmitted = false;
				return;
			}
			// start submit to server
			$scope.isSubmitting = true;
			productService.update($scope.master).then(function(result){
				//console.log(result);
				if($scope.formStatus === appCommon.formStatus.isNew){
					$state.go($state.current.parentState);
				} else if($scope.formStatus === appCommon.formStatus.isEdit){
					$scope.isSubmitted = false;
					$scope.isSubmitting = false;
				}
			}, function(error){
				//console.log(error);
				$scope.isSubmitted = false;
				$scope.isSubmitting = false;
			});
		}

        $scope.cancel = function() {
            $state.go($state.current.parentState);
        };
		
		/* start */
		activate();
	}
})();