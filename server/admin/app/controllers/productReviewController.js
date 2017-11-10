(function () {
    'use strict';    
    app.controller('productReviewController', productReviewController);
    productReviewController.$inject = ['$scope', '$timeout', '$stateParams', 'appCommon', 'productService', 'reviewService'];
	function productReviewController($scope, $timeout, $stateParams, appCommon, productService, reviewService) {
		/* models */
		$scope.productKey = $stateParams.productKey;
		$scope.messageSuccess = [];
		$scope.messageError = [];
		$scope.review = {
			Rating: '',
			Comment: '',
			Created: new Date(),
			ProductKey: $scope.productKey,
			Email: ''
		};
		

		/* functions */
		function activate() {
			if(appCommon.isUndefined($scope.productKey)) return;

			productService.getProductByKey($scope.productKey).then(function (result) {
				$scope.product = result;
				if (appCommon.isUndefined($scope.product)){
					$scope.messageError.push(String.format("The productKey: {0} not found.", $scope.productKey));
				}
			}, function (error) {
				$scope.messageError.push(error);				
			});
		};
		
		// if create review success/failed -> reset status after 3s
		function resetFormStatus() {
			$timeout(function () {				
				$scope.messageSuccess = [];
				$scope.messageError = [];
			}, 3000);
		};
		
		
		/* buttons */
		$scope.save = function() {			
			reviewService.createReview($scope.review).then(function (result) {				
                $scope.messageSuccess.push(result);
                resetFormStatus();
			}, function (error) {
				$scope.messageError.push(error);
				resetFormStatus();
			});
		};
		
		
		/* start */
		activate();
	}
})();