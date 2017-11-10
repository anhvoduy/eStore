(function () {
    'use strict';        
    app.controller('brandController', brandController);
	brandController.$inject = ['$scope', 'appCommon', 'brandService'];	
	function brandController($scope, appCommon, brandService) {
		/* view-model */
		$scope.pagination = appCommon.defaultPagination;
		$scope.messageSuccess = [];
		$scope.messageError = [];
		
		/* functions */
		function activate() {
			$scope.getBrands();
		};

		function cleanSuccessErrors() {
			$scope.messageSuccess = [];
			$scope.messageError = [];
		}

		$scope.getBrands = function() {
			cleanSuccessErrors();
			brandService.getList($scope.pagination.pageCurrent, $scope.pagination.pageSize)
			.then(function (data) {
				$scope.brands = data.PageData;
				$scope.pagination.pageCurrent = data.PageCurrent;
				$scope.pagination.pageSize = data.PageSize;
				$scope.pagination.pageTotal = data.PageTotal;
				$scope.pagination.hitsTotal = data.HitsTotal;
				$scope.pagination.maxSize = Math.ceil(data.HitsTotal/data.PageSize);
				// message
				$scope.messageSuccess.push(String.format("Get Brands is successful. Total: {0} rows", $scope.brands.length));
			}, function (error) {
				$scope.messageError.push(error);
			});
		};
		
		/* start */
		activate();
	}
})();