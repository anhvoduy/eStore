(function () {
    'use strict';    
    app.controller('productEditController', productEditController);
    productEditController.$inject = ['$scope', '$state', '$stateParams', 'appCommon', 'productService', 'reviewService'];
    function productEditController($scope, $state, $stateParams, appCommon, productService, reviewService) {
		/* models */
		$scope.productKey = $stateParams.productKey;
		$scope.formStatus = appCommon.isUndefined($scope.productKey) 
			? appCommon.formStatus.isNew 
			: appCommon.formStatus.isEdit;
		$scope.messageSuccess = [];
        $scope.messageError = [];        
		
		
		/* functions */
		var activate = function () {
			if(appCommon.isUndefined($scope.productKey)) return;

			productService.getProductById($scope.productKey).then(function (result) {
				$scope.product = result;
				if (appCommon.isUndefined($scope.product)) {
					$scope.messageError.push(String.format("The Product Key: {0} not found.", $scope.productKey));
				}
			}, function (error) {
				$scope.messageError.push(error);
			});
        };


		/* buttons */
        $scope.save = function() {
            console.log('save() ....');
        }

        $scope.cancel = function() {            
            $state.go($state.current.parentState);
        }
		
		/* start */
		activate();
	}
})();