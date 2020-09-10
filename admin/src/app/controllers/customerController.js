(function () {
	'use strict';
	app.controller('customerController', customerController);
	customerController.$inject = ['$scope', 'appCommon', 'customerService'];
	function customerController($scope, appCommon, customerService) {
		/* view-model */
		$scope.pagination = appCommon.defaultPagination;
		$scope.messageSuccess = [];
		$scope.messageError = [];
		
		/* functions */
		function activate() {
			$scope.getCustomers();			
		};

		function cleanSuccessErrors(){
			$scope.messageError = [];
            $scope.messageSuccess = [];
		};
		
		$scope.getCustomers = function(){
			cleanSuccessErrors();
			customerService.getList($scope.pagination.pageCurrent, $scope.pagination.pageSize)
			.then(function (data) {
				$scope.customers = data.PageData;
				$scope.pagination.pageCurrent = data.PageCurrent;
				$scope.pagination.pageSize = data.PageSize;
				$scope.pagination.pageTotal = data.PageTotal;
				$scope.pagination.hitsTotal = data.HitsTotal;
				$scope.pagination.maxSize = Math.ceil(data.HitsTotal/data.PageSize);
				// message
				$scope.messageSuccess.push(String.format("Get Customers is success. Total: {0} rows", $scope.customers.length));
			}, function (error) {				
				$scope.messageSuccess.push(error);
			});
		};
		
		/* start */
		activate();
	}
})();