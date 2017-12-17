(function () {
    'use strict';
    app.controller('cashOutEditController', cashOutEditController);
    cashOutEditController.$inject = ['appCommon', 'cashService', '$state', '$stateParams'];

    function cashOutEditController(appCommon, cashService, $state, $stateParams) {
        /* models */
        var vm = this;
        vm.transactionKey = $stateParams.transactionKey;
        vm.formStatus = appCommon.isUndefined(vm.transactionKey) 
            ? appCommon.formStatus.isNew 
            : appCommon.formStatus.isEdit;
        vm.formTitle = appCommon.setFormTitle(vm.formStatus, 'Cash Out');
        vm.messageSuccess = [];
        vm.messageError = [];
        
        
        /* functions */
        var activate = function () {
            // cashService.getCashById(vm.transactionId).then(function (result) {
            //     vm.transaction = result;
            //     if (vm.transaction === undefined) {
            //         vm.messageError = String.format("The transaction id: {0} not found.", vm.transactionId);
            //         vm.disabledButton = true;
            //     } else {
            //         vm.disabledButton = false;
            //     }
            // }, function (error) {
            //     vm.messageError.push(error);
            // });
        };
        
		
		vm.save = function() {
			return true;
		};
		
		vm.cancel = function() {
			$state.go($state.current.parentState);
		};

        /* start */
        activate();
    }
})();