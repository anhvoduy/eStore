var app = angular.module('cargo', ['ngCookies', 'ui.router', 'cargo.directives.customDirectives']);

app.config(function ($stateProvider) {
	$stateProvider
	.state('/', {
		url: '/',
        views: {
            "view": {
                templateUrl: "/app/components/home/views/home.tpl.html",
                controller: "homeController",
                controllerAs: "vm"
            }
        }
	})
	.state('home', {
		url: '/home',
        views: {
            "view": {
                templateUrl: "/app/components/home/views/home.tpl.html",
                controller: "homeController",
                controllerAs: "vm"
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
				templateUrl: "/app/components/product/views/productDetail.tpl.html",
				controller: "ProductDetailController",
				controllerAs: 'vm'
			}
		}
	}).state('reviewProduct', {
		url: "/review/:productID",
		views: {
			"view": {
				templateUrl: "/app/components/product/views/productReview.html",
				controller: "ReviewProductController",
				controllerAs: 'vm'
			}
		}
	})
	.state('inventory', {
		url: "/inventory",
		views: {
			"view": {
				templateUrl: "/app/components/inventory/views/inventory.tpl.html",
				controller: "InventoryController",
				controllerAs: "vm"
			}
		}
	})
	//.state('inventory', {
	//	url: '/inventory/input/:inventoryID',
	//	views: {
	//		"view": {
	//			templateUrl: "/app/views/inventoryInputDetail.html",
	//			controller: "InventoryInputDetail",
	//			controllerAs: "vm"
	//		}
	//	}
	//}).state('inventory', {
	//	url: '/inventory/output/:inventoryID',
	//	views: {
	//		"view": {
	//			templateUrl: "/app/views/inventoryOutputDetail.html",
	//			controller: "InventoryOutputDetail",
	//			controllerAs: "vm"
	//		}
	//	}
	//})
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
				templateUrl: "/app/components/authentication/views/login.html",
				controller: "loginController"
			}
		}
	})
	.state('logout', {
		url: '/logout',
		views: {
			"view": {
                templateUrl: "/app/components/authentication/views/logout.html"
			}
		}
	})	
	.state("help", {
		url: "/help",
		views: {
			"view": {
                templateUrl: "/app/components/help/views/help.html"
			}
		}
	})
	.state("otherwise", {
		url: '/login',
		views: {
			"view": {
				templateUrl: "/app/components/authentication/views/login.html",
				controller: "loginController",
				hideMenus: true
			}
		}
	});
});

app.run(['$rootScope', '$location', '$cookieStore', '$http', 
	function ($rootScope, $location, $cookieStore, $http) {
		// keep user logged in after page refresh
		$rootScope.globals = $cookieStore.get('globals') || {};
		if ($rootScope.globals.currentUser) {
			$http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
		}
		
		$rootScope.$on('$locationChangeStart', function (event, next, current) {
			// redirect to login page if not logged in
			//if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
			//	$location.path('/login');
			//}
		});
	}
]);