(function () {
	'use strict';
    app.controller('profileController', profileController);
	profileController.$inject = ['$rootScope'];	
	function profileController($rootScope) {
		var vm = this;

		function activate(){
			if($rootScope.settings && $rootScope.settings.profile) {
				vm.profile = $rootScope.settings.profile;
			}
		};
		
		activate();
	}
})();