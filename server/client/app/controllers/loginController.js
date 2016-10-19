(function () {
    'use strict';        
    app.controller('loginController', loginController);
    loginController.$inject = ['$scope', '$rootScope', '$location', 'authenticationService'];        
    function loginController($scope, $rootScope, $location, authenticationService) {
		// reset login status
        authenticationService.clearCredentials();
		
		$scope.login = function () {
			$scope.dataLoading = true;
			authenticationService.login($scope.username, $scope.password).then(function (result) {
                if (result.success) {
                    authenticationService.setCredentials($scope.username, $scope.password);
                    $location.path('/home');
                } else {
                    $scope.error = result.message;
                    $scope.dataLoading = false;
                }
            }, function (result) {
                $scope.error = result.message;
                $scope.dataLoading = false;
            });
		};
	}
})();