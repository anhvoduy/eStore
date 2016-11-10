(function () {
	'use strict';
	app.controller('cashOutController', cashOutController);
	cashOutController.$inject = ['cashService'];
	function cashOutController(cashService) {
		// models
		var vm = this;
		vm.messageError = '';
		vm.messageSuccess = '';

		// functions
		var activate = function () {
			cashService.getCashOut().then(function (result) {
				vm.cashOuts = result;
			}, function (error) {
				vm.messageError = error.message;
			});
		};
		
		/* start */
		activate();
	}
})();
