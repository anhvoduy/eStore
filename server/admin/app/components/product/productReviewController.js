(function () {
    'use strict';    
    app.controller('productReviewController', productReviewController);
    productReviewController.$inject = ['$scope', '$timeout', '$stateParams', 'productService', 'reviewService'];    
	function productReviewController($scope, $timeout, $stateParams, productService, reviewService) {				
		$scope.productId = $stateParams.productID;		
		$scope.product = {};
		$scope.disabledButton = false;
		$scope.messageSuccess = '';
		$scope.messageError = '';
		$scope.review = {
			Rating: '',
			Comment: '',
			Created: new Date(),
			ProductId: $scope.productId,
			Email: ''
		};
		
		// functions
		function initialize() {
			productService.getProductById($scope.productId).then(function (result) {
				$scope.product = result;
				if ($scope.product === undefined) {
					$scope.messageError = String.format("The product id: {0} not found.", $scope.productId);
					$scope.disabledButton = true;
				} else {
					$scope.disabledButton = false;
				}
			}, function (error) {
				$scope.messageError = error.message;
				$scope.disabledButton = true;
			});
		};
		
		// if create review success/failed -> reset status after 5s
		function resetFormStatus() {
			$timeout(function () {
				$scope.disabledButton = false;
				$scope.messageSuccess = '';
				$scope.messageError = '';
			}, 5000);
		};
		
		// buttons
		$scope.save = function() {
			$scope.disabledButton = true;
			reviewService.createReview($scope.review).then(function (result) {				
                $scope.messageSuccess = result.message;
                resetFormStatus();
			}, function (error) {
				$scope.messageError = error.message;
				resetFormStatus();
			});
		};
		
		/* start */
		initialize();
	}
})();