(function () {
    'use strict';    
    app.controller('ProductController', ProductController);
    ProductController.$inject = ['$scope', 'appCommon', 'productService'];    
	function ProductController($scope, appCommon, productService) {
		/* models */
		$scope.paging = appCommon.defaultPagination;
		$scope.messageSuccess = [];
		$scope.messageError = [];

		
		/* functions */
		var activate = function () {
			productService.getList().then(function (result) {
				$scope.products = result;
				$scope.messageSuccess.push(String.format("Get Products is successful. Total: {0} rows", $scope.products.length));
			}, function (error) {
				$scope.messageError.push(error);
			});
		};

		
		/* start */
		activate();
	}
})();