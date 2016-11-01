var app = angular.module('cargo', [
    'ngCookies',
    'ui.router',
    'cargo.directives.searchControl',
    'cargo.directives.customDirectives'
]);

app.config(function ($stateProvider) {	
	$stateProvider	
	.state('/', {
		url: '/',
        views: {
            "view": {
                templateUrl: "/app/views/home.tpl.html"
            }
        }
	})	
	.state('brand', {
		url: "/brand",
		views: {
			"view": {
                templateUrl: "/app/components/brand/views/brand.tpl.html",
				controller: "brandController",
				controllerAs: 'vm'
			}
		}
	})
	.state('brandDetail', {
		url: '/brand/:brandID',
		views: {
			"view": {
                templateUrl: "/app/components/brand/views/brandDetail.tpl.html",
				controller: "BrandDetailController",
				controllerAs: 'vm'
			}
		}
	})
	.state('product', {
		url: "/product",
		views: {
			"view": {
				templateUrl: "/app/components/product/views/product.tpl.html",
				controller: "ProductController",
				controllerAs: 'vm'
			}
		}
	}).state('productDetail', {
		url: "/product/:productID",
		views: {
			"view": {
				templateUrl: "/app/components/product/views/productDetail.tpl.html"
			}
		}
	}).state('reviewProduct', {
		url: "/review/:productID",
		views: {
			"view": {
				templateUrl: "/app/components/product/views/productReview.tpl.html"
			}
		}
	})
	.state('inventory', {
		url: "/inventory",
		views: {
			"view": {
				templateUrl: "/app/components/inventory/views/inventory.tpl.html"
			}
		}
	})	
	.state('account', {
		url: "/account",
		views: {
			"view": {
                templateUrl: "/app/components/account/views/account.tpl.html",
				controller: "accountController",
				controllerAs: 'vm'
			}
		}
	})
	.state('accountDetail', {
		url: '/account/:accountID',
		views: {
			"view": {
                templateUrl: "/app/components/account/views/accountDetail.tpl.html",
				controller: "accountDetailController",
				controllerAs: 'vm'
			}
		}
	})
	.state('user', {
		url: "/user",
		views: {
			"view": {
                templateUrl: "/app/components/user/views/user.tpl.html",
				controller: "UserController",
				controllerAs: 'vm'
			}
		}
	})
	.state('userDetail', {
		url: '/user/:userID',
		views: {
			"view": {
                templateUrl: "/app/components/user/views/userDetail.tpl.html",
				controller: "UserDetailController",
				controllerAs: 'vm'
			}
		}
	})
	.state('login', {
		url: '/login',
		views: {
			"view": {
				templateUrl: "/app/components/authentication/views/login.tpl.html",
				controller: "loginController"				
			}
		},
		showMenus: false
	})
	.state('logout', {
		url: '/logout',
		views: {
			"view": {
                templateUrl: "/app/components/authentication/views/logout.tpl.html",
			}
		}
	})
	.state("help", {
		url: "/help",
		views: {
			"view": {
                templateUrl: "/app/views/help.tpl.html"
			}
		}
	})
	.state("otherwise", {
		url: '/error',
		views: {
			"view": {
				templateUrl: "/app/views/error.tpl.html"
			}
		}
	});	
});

app.run(['$rootScope', '$location', '$cookieStore', '$http', 'authenticationService',
	function ($rootScope, $location, $cookieStore, $http, authenticationService) {
		// keep user logged in after page refresh
		$rootScope.globals = $cookieStore.get('globals') || {};
		if ($rootScope.globals.currentUser) {			
			$http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
		}
			
		$rootScope.logout = function(){
			authenticationService.clearCredentials();
		};
		
		$rootScope.$on('$locationChangeStart', function (event, next, current) {
			console.log('$locationChangeStart');			
			// redirect to login page if not logged in
			if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
				$location.path('/login');
			}else if($location.path() === ''){
				$location.path('/login');
			}
		});
	}
]);