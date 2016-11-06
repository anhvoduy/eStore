app.run(['$rootScope', '$location', '$cookieStore', '$http', 'mainService', 'userService', 'authenticationService',
    function ($rootScope, $location, $cookieStore, $http, mainService, userService, authenticationService) {		
		// keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        $rootScope.settings = $cookieStore.get('settings') || {};
        if ($rootScope.globals.currentUser) {            
            $http.defaults.headers.common['Authorization'] = $rootScope.globals.currentUser.authdata; // jshint ignore:line            
		}
		// navigation
        $rootScope.navigation = mainService.getNavigation();        
		
		// user profile        
		userService.getProfile().then(function (result) {
			$rootScope.settings = result;
		}, function (error) {
			console.log(error);			
		});

		// logout
		$rootScope.logout = function(){
			authenticationService.clearCredentials();
		};
		
		$rootScope.$on('$locationChangeStart', function (event, next, current) {
			console.log('$locationChangeStart');			
			// redirect to login page if not logged in
			if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
				$location.path('/login');
			} else if ($location.path() === '') {
				$location.path('/login');
			}
		});
	}
]);