(function () {
    'use strict';    
    app.controller('userEditController', userEditController);
    userEditController.$inject = ['$stateParams', 'userService'];    
	function userEditController($stateParams, userService) {
		// models		
		var vm = this;
		vm.userId = $stateParams.userID;
		vm.user = {};
		vm.messageSuccess = '';
		vm.messageError = '';
		vm.userTypes = [
			{ Key: 'CUSTOMER', Label: 'CUSTOMER' }, 
			{ Key: 'MERCHANT', Label: 'MERCHANT' }
		];
		
		// functions
		var activate = function () {
			userService.getUserById(vm.userId).then(function (result) {
				vm.user = result;
				if (vm.user === undefined) {
					vm.messageError = String.format("The User Id: {0} not found.", userId);
				}
			}, function (error) {
				vm.messageError = error.message;
			});
		};
		
		/* start */
		activate();
	}
})();