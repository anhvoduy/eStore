(function () {
    'use strict';
    app.controller('cashInEditController', cashInEditController);
    cashInEditController.$inject = ['appCommon', 'cashService', '$state', '$stateParams'];
    function cashInEditController(appCommon, cashService, $state, $stateParams) {
        // models		
        var vm = this;
		vm.transactionKey = $stateParams.transactionKey;
		vm.save = save;
        vm.cancel = cancel;
        vm.messageSuccess = [];
        vm.messageError = [];

        // functions
        var activate = function () {
            cashService.getCashById(vm.transactionId).then(function (result) {
                vm.transaction = result;
                if (appCommon.isUndefined(vm.transaction)) {
                    vm.messageError.push(String.format("The transaction {0} not found.", vm.transactionKey));                    
                }
            }, function (error) {
                vm.messageError = error.message;
                vm.disabledButton = true;
            });
		};
		
		function save() {
			return true;
		}
		
		function cancel() {
			$state.go($state.current.parentState);
		}

        /* start */
        activate();
    }
})();
