(function () {
    'use strict';        
    app.controller('LoginController', LoginController);
    LoginController.$inject = ['$scope', '$rootScope', '$location', 'AuthenticationService'];        
	function LoginController($scope, $rootScope, $location, AuthenticationService) {
		// reset login status
		AuthenticationService.ClearCredentials();
		
		$scope.login = function () {
			$scope.dataLoading = true;
			AuthenticationService.Login($scope.username, $scope.password, function (response) {
				if (response.success) {
					AuthenticationService.SetCredentials($scope.username, $scope.password);
					$location.path('/');
				} else {
					$scope.error = response.message;
					$scope.dataLoading = false;
				}
			});
		};
	}
})();