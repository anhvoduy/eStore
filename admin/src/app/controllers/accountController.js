(function () {
	'use strict';
	app.controller('accountController', accountController);
	accountController.$inject = ['$scope', 'appCommon', 'accountService'];
	function accountController($scope, appCommon, accountService) {
		/* view-model */
		$scope.pagination = appCommon.defaultPagination;
		$scope.messageSuccess = [];
		$scope.messageError = [];
		
		/* functions */
		function activate() {
			$scope.getAccounts();
		};

		function cleanSuccessErrors() {
			$scope.messageSuccess = [];
			$scope.messageError = [];
		};

		$scope.getAccounts = function(){
			cleanSuccessErrors();
			accountService.getAccounts($scope.pagination.pageCurrent, $scope.pagination.pageSize)
			.then(function (data) {
				$scope.accounts = data.PageData;
				$scope.pagination.pageCurrent = data.PageCurrent;
				$scope.pagination.pageSize = data.PageSize;
				$scope.pagination.pageTotal = data.PageTotal;
				$scope.pagination.hitsTotal = data.HitsTotal;
				$scope.pagination.maxSize = Math.ceil(data.HitsTotal/data.PageSize);
				// message
				$scope.messageSuccess.push(String.format("Get Accounts is success. Total: {0} rows", $scope.accounts.length));
			}, function (error) {				
				$scope.messageSuccess.push(error);
			});
		};
		
		/* start */
		activate();
	}
})();