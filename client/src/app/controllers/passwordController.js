(function () {
	'use strict';
    app.controller('passwordController', passwordController);
	passwordController.$inject = ['$rootScope', 'userService'];	
	function passwordController($rootScope, userService) {
		/* models */
		var vm = this;
		vm.formTitle = 'Change Password';
		vm.user = {};
		
		/* functions */
		function activate(){
			
		};
		

		/* start */
		activate();
	}
})();