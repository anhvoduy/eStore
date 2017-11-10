(function () {
	'use strict';
	app.controller('accountController', accountController);
	accountController.$inject = ['$scope', 'appCommon', 'accountService'];
	function accountController($scope, appCommon, accountService) {
		/* view-model */		
		$scope.messageSuccess = [];
		$scope.messageError = [];
		
		/* functions */
		function activate() {
			accountService.getAccounts().then(function (result) {
				$scope.accounts = result;
				$scope.messageSuccess.push(String.format("Get Accounts is success. Total: {0} rows", $scope.accounts.length));
			}, function (error) {				
				$scope.messageSuccess.push(error);
			});
		};
		
		/* start */
		activate();
	}
})();