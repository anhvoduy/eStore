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
		};
		
		/* start */
		activate();
	}
})();
