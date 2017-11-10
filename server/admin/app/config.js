var app = angular.module('cargo', [
	'ngCookies',
	'ui.router',
	'mega-menu',
	'cargo.directives',
	'cargo.directives.megaMenu',
	'cargo.directives.footer',
	'cargo.directives.pagination'
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
				controller: "productController"
			}
		}
	})
	.state('productEdit', {
        url: "/product/:productKey",
        parentState: 'product',
		views: {
			"view": {
				templateUrl: "/app/views/productEdit.tpl.html",
				controller: "productEditController"
			}
		}
	})	
	.state('productReview', {
		url: "/review/:productKey",
		parentState: 'product',
		views: {
			"view": {
				templateUrl: "/app/views/productReview.tpl.html",
				controller: "productReviewController"
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
    .state('cashInEdit', {
        url: "/cash/cashIn/:transactionKey",
        parentState: 'cashIn',
        views: {
            "view": {
                templateUrl: "/app/views/cashInEdit.tpl.html",
                controller: "cashInEditController",
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
    .state('cashOutEdit', {
        url: "/cash/cashOut/:transactionKey",
        parentState: 'cashOut',
        views: {
            "view": {
                templateUrl: "/app/views/cashOutEdit.tpl.html",
                controller: "cashOutEditController",
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
	.state('inventoryInput', {
		url: "/inventoryInput",
		views: {
			"view": {
				templateUrl: "/app/views/inventoryInput.tpl.html",
				controller: "inventoryInputController"
			}
		}
	})
	.state('inventoryInputEdit', {
		url: "/inventoryInput/:stockKey",
		parentState: 'inventoryInput',
		views: {
			"view": {
				templateUrl: "/app/views/inventoryInputEdit.tpl.html",
				controller: "inventoryInputEditController"
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
	.state('inventoryOutputEdit', {
		url: "/inventoryOutput/:stockKey",
		parentState: 'inventoryOutput',
		views: {
			"view": {
				templateUrl: "/app/views/inventoryOutputEdit.tpl.html",
				controller: "inventoryOutputEditController"
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
				controller: "accountController"
			}
		}
	})
	.state('accountEdit', {
		url: '/account/:accountKey',
		parentState: 'account',
		views: {
			"view": {
				templateUrl: "/app/views/accountEdit.tpl.html",
				controller: "accountEditController"
			}
		}
	})
	.state('user', {
		url: "/user",
		views: {
			"view": {
				templateUrl: "/app/views/user.tpl.html",
				controller: "userController"
			}
		}
	})
	.state('userEdit', {
		url: '/user/:userKey',
		parentState: 'user',
		views: {
			"view": {
				templateUrl: "/app/views/userEdit.tpl.html",
				controller: "userEditController"
			}
		}
	})
	.state('group', {
		url: "/group",
		views: {
			"view": {
				templateUrl: "/app/views/group.tpl.html",
				controller: "groupController"
			}
		}
	})
	.state('groupEdit', {
		url: '/group/:groupKey',
		parentState: 'group',
		views: {
			"view": {
				templateUrl: "/app/views/groupEdit.tpl.html",
				controller: "groupEditController"
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