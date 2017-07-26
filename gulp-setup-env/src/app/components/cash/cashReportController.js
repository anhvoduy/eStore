(function () {
	'use strict';
	app.controller('cashReportController', cashReportController);
	cashReportController.$inject = ['cashService'];
	function cashReportController(cashService) {
		// models
		var vm = this;
		vm.messageError = '';
		vm.messageSuccess = '';

		// functions
		var activate = function () {
			cashService.getCashOut().then(function (result) {
				vm.transactions = result;
			}, function (error) {
				vm.messageError = error.message;
			});
		};
		
		/* start */
		activate();
	}
})();
