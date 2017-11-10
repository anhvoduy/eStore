(function () {
    'use strict';        
    app.controller('brandController', brandController);
	brandController.$inject = ['$scope', 'brandService'];	
	function brandController($scope, brandService) {
		/* view-model */
		$scope.paging = appCommon.defaultPagination;
		$scope.messageSuccess = [];
		$scope.messageError = [];
		
		/* functions */
		function activate() {
			brandService.getBrands().then(function (result) {
				$scope.brands = result;
				$scope.messageSuccess.push(String.format("Get Brands is successful. Total: {0} rows", $scope.brands.length));
			}, function (error) {
				$scope.messageError.push(error);
			});
		}
		
		/* start */
		activate();
	}
})();