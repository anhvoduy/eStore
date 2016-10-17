(function () {
    'use strict';        
    app.controller('AccountController', AccountController);
    AccountController.$inject = ['accountService'];        
	function AccountController(accountService) {
		// models
		var vm = this;
		vm.lstAccounts = [];
		vm.messageSuccess = '';
		vm.messageError = '';
		
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