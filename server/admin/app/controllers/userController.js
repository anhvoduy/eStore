(function () {
    'use strict';
    app.controller('UserController', UserController);
    UserController.$inject = ['userService'];
	function UserController(userService) {
		// models
		var vm = this;		
		vm.messageSuccess = [];
		vm.messageError = [];
		
		// functions
		var activate = function () {
			userService.getUsers().then(function (result) {
				vm.users = result;
				vm.messageSuccess.push(String.format("Get Users is successful. Total: {0} rows", vm.users.length));
			}, function (error) {
				vm.messageError.push(error);
			});
		};
		
		/* start */
		activate();
	}
})();