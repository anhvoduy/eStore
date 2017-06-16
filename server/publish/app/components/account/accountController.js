(function () {
	'use strict';
	app.controller('accountController', accountController);
	accountController.$inject = ['accountService'];
	function accountController(accountService) {
		// view-model
		var vm = this;
		
		// functions
		function activate() {
			accountService.getAccounts().then(function (result) {
				vm.lstAccounts = result;
				vm.messageSuccess = String.format("Get Accounts is successful. Total: {0} rows", vm.lstAccounts.length);
			}, function (error) {
				vm.messageError = error.message;
			});
		}
		
		/* start */
		activate();
	}
})();