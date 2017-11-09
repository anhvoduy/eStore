var app = angular.module('cargo', [
	'ngCookies',
	'ui.router',
	'mega-menu',
	'cargo.directives',
	'cargo.directives.megaMenu',
	'cargo.directives.searchControl'	
]);

app.config(function ($stateProvider) {
	$stateProvider
	.state('/', {
		url: '/',
		views: {
			'view': {
				templateUrl: '/app/views/home.tpl.html'
			}
		}
	})
	.state('brand', {
		url: '/brand',
		views: {
			'view': {
				templateUrl: '/app/views/brand.tpl.html',
				controller: 'brandController'
			}
		}
	})	
	.state('brandEdit', {
        url: '/brand/:brandKey',
        parentState: 'brand',
		views: {
			'view': {
				templateUrl: '/app/views/brandEdit.tpl.html',
				controller: 'brandEditController'
			}
		}
	})
	.state('product', {
		url: "/product",
		views: {
			"view": {
				templateUrl: "/app/views/product.tpl.html",
				controller: "ProductController",
				controllerAs: 'vm'
			}
		}
	})
	.state('productEdit', {
        url: "/product/:productId",
        parentState: 'product',
		views: {
			"view": {
				templateUrl: "/app/views/productEdit.tpl.html",
				controller: "productEditController",
				controllerAs: 'vm'
			}
		}
	})
	.state('inventory', {
		url: "/inventory",
		views: {
			"view": {
				templateUrl: "/app/views/inventory.tpl.html",
				controller: "inventoryController"
			}
		}
	})
	.state('inventoryEdit', {
        url: "/inventory/:inventoryKey",
        parentState: 'inventory',
		views: {
			"view": {
				templateUrl: "/app/views/inventoryEdit.tpl.html",
				controller: "inventoryEditController"
			}
		}
	})
	.state('reviewProduct', {
		url: "/review/:productId",
		views: {
			"view": {
				templateUrl: "/app/views/productReview.tpl.html",
				controller: "productReviewController",
				controllerAs: 'vm'
			}
		}
	})
    .state('cashIn', {
        url: "/cash/cashIn",
        views: {
            "view": {
                templateUrl: "/app/views/cashIn.tpl.html",
                controller: "cashInController",
                controllerAs: 'vm'
            }
        }
    })
    .state('cashInDetail', {
        url: "/cash/cashIn/:transactionId",
        parentState: 'cashIn',
        views: {
            "view": {
                templateUrl: "/app/views/cashInDetail.tpl.html",
                controller: "cashInDetailController",
                controllerAs: 'vm'
            }
        }
    })
	.state('cashOut', {
		url: "/cash/cashOut",
		views: {
			"view": {
				templateUrl: "/app/views/cashOut.tpl.html",
				controller: "cashOutController",
				controllerAs: 'vm'
			}
		}
    })
    .state('cashOutDetail', {
        url: "/cash/cashOut/:transactionId",
        parentState: 'cashOut',
        views: {
            "view": {
                templateUrl: "/app/views/cashOutDetail.tpl.html",
                controller: "cashOutDetailController",
                controllerAs: 'vm'
            }
        }
	})
	.state('cashReport', {
		url: "/cashReport",
		views: {
			"view": {
				templateUrl: "/app/views/cashReport.tpl.html",
				controller: "cashReportController",
                controllerAs: 'vm'
			}
		}
	})	
	.state('inventoryInput', {
		url: "/inventoryInput",
		views: {
			"view": {
				templateUrl: "/app/views/inventoryInput.tpl.html",
				controller: "inventoryInputController"
			}
		}
	})
	.state('inventoryInputDetail', {
		url: "/inventoryInputDetail",
		views: {
			"view": {
				templateUrl: "/app/views/inventoryInputDetail.tpl.html",
				controller: "inventoryInputDetailController"
			}
		}
	})
	.state('inventoryOutput', {
		url: "/inventoryOutput",
		views: {
			"view": {
				templateUrl: "/app/views/inventoryOutput.tpl.html",
				controller: "inventoryOutputController"
			}
		}
	})
	.state('inventoryOutputDetail', {
		url: "/inventoryOutputDetail",
		views: {
			"view": {
				templateUrl: "/app/views/inventoryOutputDetail.tpl.html",
				controller: "inventoryOutputDetailController"
			}
		}
	})	
	.state('inventoryReport', {
		url: "/inventoryReport",
		views: {
			"view": {
				templateUrl: "/app/views/inventoryReport.tpl.html",
				controller: "inventoryReportController",
				controllerAs: "vm"
			}
		}
	})
	.state('account', {
		url: "/account",
		views: {
			"view": {
				templateUrl: "/app/views/account.tpl.html",
				controller: "accountController",
				controllerAs: 'vm'
			}
		}
	})
	.state('accountDetail', {
		url: '/account/:accountID',
		parentState: 'account',
		views: {
			"view": {
				templateUrl: "/app/views/accountDetail.tpl.html",
				controller: "accountDetailController",
				controllerAs: 'vm'
			}
		}
	})
	.state('user', {
		url: "/user",
		views: {
			"view": {
				templateUrl: "/app/views/user.tpl.html",
				controller: "UserController",
				controllerAs: 'vm'
			}
		}
	})
	.state('userDetail', {
		url: '/user/:userID',
		views: {
			"view": {
				templateUrl: "/app/views/userDetail.tpl.html",
				controller: "UserDetailController",
				controllerAs: 'vm'
			}
		}
	})
	.state('login', {
		url: '/login',
		views: {
			"view": {
				templateUrl: "/app/views/login.tpl.html",
				controller: "loginController"
			}
		},
		showMenus: false
	})
	.state('logout', {
		url: '/logout',
		views: {
			"view": {
				templateUrl: "/app/views/logout.tpl.html",
			}
		}
	})
	.state("search", {
		url: "/search",
		views: {
			"view": {
				templateUrl: "/app/views/search.tpl.html",
				controller: "searchController",
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
	.state("sample", {
		url: "/sample",
		views: {
			"view": {
				templateUrl: "/app/views/sample.tpl.html",
				controller: "sampleController",
				controllerAs: 'vm'
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