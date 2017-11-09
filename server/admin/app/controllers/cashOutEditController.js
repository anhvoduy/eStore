(function () {
    'use strict';
    app.controller('cashOutEditController', cashOutEditController);
    cashOutEditController.$inject = ['cashService', '$state', '$stateParams'];
    function cashOutEditController(cashService, $state, $stateParams) {
        // models		
        var vm = this;
        vm.transactionId = $stateParams.transactionID;
		vm.save = save;
		vm.cancel = cancel;

        // functions
        var activate = function () {
            cashService.getCashById(vm.transactionId).then(function (result) {
                vm.transaction = result;
                if (vm.transaction === undefined) {
                    vm.messageError = String.format("The transaction id: {0} not found.", vm.transactionId);
                    vm.disabledButton = true;
                } else {
                    vm.disabledButton = false;
                }
            }, function (error) {
                vm.messageError = error.message;
                vm.disabledButton = true;
            });
		};
		
		function save() {			
			cashService.updateCash(vm.transaction).then(function (result) { 
				console.log('save() ....');
			}, function (error) { 
				console.log(error);
			});
		}
		
		function cancel() {
			$state.go($state.current.parentState);
		}

        /* start */
        activate();
    }
})();