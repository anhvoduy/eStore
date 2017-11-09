(function () {
	'use strict';
	app.controller('accountController', accountController);
	accountController.$inject = ['appCommon', 'accountService'];
	function accountController(appCommon, accountService) {
		/* view-model */
		var vm = this;
		vm.messageSuccess = [];
		vm.messageError = [];
		
		/* functions */
		function activate() {
			accountService.getAccounts().then(function (result) {
				vm.accounts = result;
				vm.messageSuccess.push(String.format("Get Accounts is success. Total: {0} rows", vm.accounts.length));
			}, function (error) {				
				vm.messageSuccess.push(error);
			});
		};
		
		/* start */
		activate();
	}
})();