(function () {
    'use strict';        
    app.controller('loginController', loginController);
    loginController.$inject = ['$scope', '$rootScope', '$location', '$state', 'authService'];        
    function loginController($scope, $rootScope, $location, $state, authService) {
		// reset login status
		authService.clearCredentials();
			
		$scope.activate = function(){			
			//console.log('activate()...');			
		};
		
		$scope.login = function () {
			$scope.dataLoading = true;
			authService.login($scope.username, $scope.password).then(function (result) {
                if (result.success) {
                    authService.setCredentials(result.user);					
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