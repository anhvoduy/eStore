var app = angular.module('cargo', ['ui.router', 'cargo.directives.customDirectives']);

app.config(function ($stateProvider) {
	$stateProvider.state('/', {
		url: "",
		views: {
			"view": {
				templateUrl: "/app/views/home.html"
			}
		}
	}).state('home', {
		url: "/home",
		views: {
			"view": {
				templateUrl: "/app/views/home.html"
			}
		}
	}).state('brand', {
		url: "/brand",
		views: {
			"view": {
				templateUrl: "/app/views/brands.html",
				controller: "BrandController as vm"
			}
		}
	}).state('brandDetail', {
		url: '/brand/:brandID',
		views: {
			"view": {
				templateUrl: "/app/views/brandDetail.html",
				controller: "BrandDetailController as vm"
			}
		}
	}).state('product', {
		url: "/product",
		views: {
			"view": {
				templateUrl: "/app/views/products.html",
				controller: "ProductController as vm"
			}
		}
	}).state('productDetail', {
		url: "/product/:productID",
		views: {
			"view": {
				templateUrl: "/app/views/productDetail.html",
				controller: "ProductDetailController as vm"
			}
		}
	}).state('reviewProduct', {
		url: "/review/:productID",
		views: {
			"view": {
				templateUrl: "/app/views/reviewProduct.html",
				controller: "ReviewProductController as vm"
			}
		}
	}).state('account', {
		url: "/account",
		views: {
			"view": {
				templateUrl: "/app/views/accounts.html",
				controller: "AccountController as vm"
			}
		}
	}).state('user', {
		url: "/user",
		views: {
			"view": {
				templateUrl: "/app/views/users.html",
				controller: "UserController as vm"
			}
		}
	}).state('userDetail', {
		url: '/user/:userID',
		views: {
			"view": {
				templateUrl: "/app/views/userDetail.html",
				controller: "UserDetailController as vm"
			}
		}
	}).state('login', {
		url: '/login',
		views: {
			"view": {
				templateUrl: "/app/views/login.html",
				controller: "LoginController as vm"
			}
		}
	}).state("otherwise", {
		url: "/home",
		views: {
			"view": {
				templateUrl: "/app/views/home.html"
			}
		}
	});
});