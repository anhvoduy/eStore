(function () {
    'use strict';        
    app.controller('brandController', brandController);
    brandController.$inject = ['$scope', 'brandService'];        
	function brandController($scope, brandService) {
		// models		
		$scope.lstBrands = [];
		$scope.messageSuccess = '';
		$scope.messageError = '';
		
		// functions
		function activate() {
			brandService.getBrands().then(function (result) {
				$scope.lstBrands = result;
				$scope.messageSuccess = String.format("Get Brands is successful. Total: {0} rows", $scope.lstBrands.length);
			}, function (error) {
				$scope.messageError = error.message;
			});
		}
		
		/* start */
		activate();
	}
})();