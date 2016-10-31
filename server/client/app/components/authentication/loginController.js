(function () {
    'use strict';        
    app.controller('loginController', loginController);
    loginController.$inject = ['$scope', '$rootScope', '$location', '$state', 'authenticationService'];        
    function loginController($scope, $rootScope, $location, $state, authenticationService) {
		// reset login status
		authenticationService.clearCredentials();
			
		$scope.activate = function(){			
			console.log('activate()...');			
		};
		
		$scope.login = function () {
			$scope.dataLoading = true;
			authenticationService.login($scope.username, $scope.password).then(function (result) {
                if (result.success) {
                    authenticationService.setCredentials($scope.username, $scope.password);
					$rootScope.globals.authorized = true;
                    $location.path('/');
                } else {
                    $scope.error = result.message;
                    $scope.dataLoading = false;
                }
            }, function (result) {
                $scope.error = result.message;
                $scope.dataLoading = false;
            });
		};
		
		$scope.activate();
	}
})();