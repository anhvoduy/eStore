(function (){
    'use strict';
	app.controller('accountDetailController', accountDetailController);
    accountDetailController.$inject = ['$timeout', 'accountService', '$state', '$stateParams'];    
    function accountDetailController($timeout, accountService, $state, $stateParams) {
		// models
		var vm = this;
        vm.accountId = $stateParams.accountID;		
		vm.disabledButton = false;
		vm.messageSuccess = '';
        vm.messageError = '';
		vm.save = save;
		vm.cancel = cancel;
		
		// functions
		function activate() {
            accountService.getAccountById(vm.accountId).then(function (result) {
                vm.account = result;
				if (vm.account === undefined) {
                    vm.messageError = String.format("The account: {0} not found.", vm.accountId);
					vm.disabledButton = true;
				} else {
					vm.disabledButton = false;
				}
			}, function (error) {
				vm.messageError = error.message;
				vm.disabledButton = true;
			});			
		}
		
		// if update brand success/failed -> reset status after 5s  
		function resetFormStatus() {
			$timeout(function () {
				vm.disabledButton = false;
				vm.messageSuccess = '';
				vm.messageError = '';
			}, 5000);
		}
		
		// buttons
        function save() {
            if (vm.account === undefined) return;

            vm.disabledButton = true;
            accountService.updateAccount(vm.account).then(function (result) {
                vm.messageSuccess = result.message;
                resetFormStatus();
            }, function (error) {
                vm.messageError = error.message;
                resetFormStatus();
            });
        }

		function cancel() {            
            $state.go($state.current.parentState);
        }
		
		/* start */
		activate();
	}
})();