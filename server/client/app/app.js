var app = angular.module('cargo', ['ngCookies', 'ui.router', 'cargo.directives.customDirectives']);

app.config(function ($stateProvider) {
	$stateProvider.state('/', {
		url: "",
		views: {
			"view": {
				templateUrl: "/app/views/home.html",
				controller: "homeController",
				controllerAs: 'vm'
			}
		}
	})
	.state('home', {
		url: "/home",
		views: {
			"view": {
				templateUrl: "/app/views/home.html",
				controller: "homeController",
				controllerAs: "vm"
			}
		}
	})
	.state('brand', {
		url: "/brand",
		views: {
			"view": {
				templateUrl: "/app/views/brands.html",
				controller: "brandController",
				controllerAs: 'vm'
			}
		}
	})
	.state('brandDetail', {
		url: '/brand/:brandID',
		views: {
			"view": {
				templateUrl: "/app/views/brandDetail.html",
				controller: "BrandDetailController",
				controllerAs: 'vm'
			}
		}
	})
	.state('product', {
		url: "/product",
		views: {
			"view": {
				templateUrl: "/app/views/products.html",
				controller: "ProductController",
				controllerAs: 'vm'
			}
		}
	}).state('productDetail', {
		url: "/product/:productID",
		views: {
			"view": {
				templateUrl: "/app/views/productDetail.html",
				controller: "ProductDetailController",
				controllerAs: 'vm'
			}
		}
	}).state('reviewProduct', {
		url: "/review/:productID",
		views: {
			"view": {
				templateUrl: "/app/views/reviewProduct.html",
				controller: "ReviewProductController",
				controllerAs: 'vm'
			}
		}
	})
	.state('inventory', {
		url: "/inventory",
		views: {
			"view": {
				templateUrl: "/app/views/inventory.html",
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
				templateUrl: "/app/views/account.html",
				controller: "accountController",
				controllerAs: 'vm'
			}
		}
	})
	.state('accountDetail', {
		url: '/account/:accountID',
		views: {
			"view": {
				templateUrl: "/app/views/accountDetail.html",
				controller: "accountDetailController",
				controllerAs: 'vm'
			}
		}
	})
	.state('user', {
		url: "/user",
		views: {
			"view": {
				templateUrl: "/app/views/users.html",
				controller: "UserController",
				controllerAs: 'vm'
			}
		}
	})
	.state('userDetail', {
		url: '/user/:userID',
		views: {
			"view": {
				templateUrl: "/app/views/userDetail.html",
				controller: "UserDetailController",
				controllerAs: 'vm'
			}
		}
	})
	.state('login', {
		url: '/login',
		views: {
			"view": {
				templateUrl: "/app/views/login.html",
				controller: "loginController",                
				hideMenus: true
			}
		}
	})
	.state("help", {
		url: "/help",
		views: {
			"view": {
				templateUrl: "/app/views/help.html"
			}
		}
	})
	.state("otherwise", {
		url: "/help",
		views: {
			"view": {
				templateUrl: "/app/views/help.html"
			}
		}
	});
});