(function () {
	'use strict';
	app.controller('cashOutController', cashOutController);
	cashOutController.$inject = ['cashService'];
	
	function cashOutController(cashService) {
		/* models */
		var vm = this;
		vm.messageError = [];
		vm.messageSuccess = [];

		/* functions */
		var activate = function () {
			cashService.getCashOut().then(function (result) {
				vm.transactions = result;
				vm.messageSuccess.push(String.format("Get Transactions is successful. Total: {0} rows", vm.transactions.length));
			}, function (error) {
				vm.messageError.push(error);
			});
		};
		
		/* start */
		activate();
	}
})();
