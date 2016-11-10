(function () {
    'use strict';
    app.controller('cashInDetailController', cashInDetailController);
    cashInDetailController.$inject = ['cashService', '$state', '$stateParams'];
    function cashInDetailController(cashService, $state, $stateParams) {
        // models		
        var vm = this;
        vm.transactionId = $stateParams.transactionID;

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

        /* start */
        activate();
    }
})();
