(function (){
    'use strict';
	app.controller('accountEditController', accountEditController);
    accountEditController.$inject = ['$timeout', 'accountService', '$state', '$stateParams'];    
    function accountEditController($timeout, accountService, $state, $stateParams) {
		/* models */
		var vm = this;
        vm.accountId = $stateParams.accountId;
		vm.disabledButton = false;
		vm.messageSuccess = [];
        vm.messageError = [];		
		
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
        vm.save = function() {
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

		vm.cancel = function() {            
            $state.go($state.current.parentState);
        }
		
		/* start */
		activate();
	}
})();