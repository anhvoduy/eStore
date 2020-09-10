(function () {
    'use strict';    
    app.controller('productReviewController', productReviewController);
    productReviewController.$inject = ['$scope', '$timeout', '$state', '$stateParams', 'appCommon', 'productService', 'reviewService'];
	function productReviewController($scope, $timeout, $state, $stateParams, appCommon, productService, reviewService) {
		/* models */
		$scope.productId = $stateParams.productId;
		$scope.messageSuccess = [];
		$scope.messageError = [];
		$scope.review = {
			Rating: '',
			Comment: '',
			Created: new Date(),
			ProductId: $scope.productId,
			Email: ''
		};
		

		/* functions */
		function activate() {
			if(appCommon.isUndefined($scope.productId)) return;

			productService.getProductById($scope.productId).then(function (result) {
				$scope.product = result;
				if (appCommon.isUndefined($scope.product)){
					$scope.messageError.push(String.format("The Product Id: {0} not found.", $scope.productId));
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
		
		$scope.cancel = function() {
            $state.go($state.current.parentState);
        };
		
		/* start */
		activate();
	}
})();