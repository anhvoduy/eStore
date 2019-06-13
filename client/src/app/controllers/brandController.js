(function () {
    'use strict';        
    app.controller('brandController', brandController);
	brandController.$inject = ['$scope', 'appCommon', 'brandService'];	
	function brandController($scope, appCommon, brandService) {
		/* view-model */
		$scope.pagination = appCommon.defaultPagination;
		$scope.messageSuccess = null;
		$scope.messageError = null;
		
		/* functions */
		function activate() {
			$scope.getBrands();
		};

		function cleanSuccessErrors() {
			$scope.messageSuccess = null;
			$scope.messageError = null;
		};

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
				$scope.messageSuccess = String.format("Get Brands is successful. Total: {0} rows", $scope.pagination.hitsTotal);
			}, function (error) {
				$scope.messageError = error;
			});
		};
		
		/* start */
		activate();
	}
})();