(function () {
    'use strict';    
    app.controller('ProductController', ProductController);
    ProductController.$inject = ['$scope', 'productService'];    
	function ProductController($scope, productService) {
		// models
		$scope.paging = {
			prevIndex: 0,
			nextIndex: 0,
			pageSize: 10
		};
		$scope.messageSuccess = '';
		$scope.messageError = '';
		
		// functions
		var activate = function () {
			productService.getList(0).then(function (result) {
				$scope.products = result;
				$scope.messageSuccess = String.format("Get Products is successful. Total: {0} rows", $scope.products.length);
				
				// vm.paging.nextIndex = vm.lstProducts[vm.lstProducts.length - 1].ProductId;
				// vm.paging.prevIndex = (vm.lstProducts[0].ProductId + vm.paging.pageSize + 1); // review code with this magic number later                                                
			}, function (error) {
				$scope.messageError = error.message;
			});
		};				
		
		/* start */
		activate();
	}
})();