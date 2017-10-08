(function () {
    'use strict';    
    app.controller('UserController', UserController);
    UserController.$inject = ['userService'];    
	function UserController(userService) {
		// models
		var vm = this;
		vm.lstUsers = [];
		vm.messageSuccess = '';
		vm.messageError = '';
		
		// functions
		var activate = function () {
			userService.getUsers().then(function (result) {
				vm.lstUsers = result;
				vm.messageSuccess = String.format("Get Users is successful. Total: {0} rows", vm.lstUsers.length);
			}, function (error) {
				vm.messageError = error.message;
			});
		};
		
		/* start */
		activate();
	}
})();