(function () {
    'use strict';    
    app.controller('cashInController', cashInController);
    cashInController.$inject = ['cashService'];    
	function cashInController(cashService) {
		// models
		var vm = this;
		vm.messageError = '';
		vm.messageSuccess = '';

		// functions
        var activate = function () {
            cashService.getCashIn().then(function (result) {
                vm.transactions = result;
            }, function (error) {
                vm.messageError = error.message;
            });
        };
		
		/* start */
		activate();
	}
})();