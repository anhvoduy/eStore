var app = angular.module('cargo', [
	'ngCookies',
	'ui.router',
	'mega-menu',
	'cargo.directives.megaMenu',
	'cargo.directives.searchControl',
	'cargo.directives.customDirectives'
]);

app.config(function ($stateProvider) {
	$stateProvider
	.state('/', {
		url: '/',
		views: {
			'view': {
				templateUrl: 'app/views/home.tpl.html'
			}
		}
	})
	.state('login', {
		url: '/login',
		views: {
			'view': {
				templateUrl: 'app/views/login.tpl.html',
				controller: 'loginController'
			}
		},
		showMenus: false
	})
	.state('logout', {
		url: '/logout',
		views: {
			'view': {
				templateUrl: 'app/views/logout.tpl.html',
			}
		}
	})
	.state('dashboard', {
		url: '/dashboard',
		views: {
			'view': {
				templateUrl: 'app/views/dashboard.tpl.html',
				controller: 'dashboardController'
			}
		}
	})	
	.state('chart', {
		url: '/chart',
		views: {
			'view': {
				templateUrl: 'app/views/chart.tpl.html',
				controller: 'chartController'
			}
		}
	})
	.state('form', {
		url: '/form',
		views: {
			'view': {
				templateUrl: 'app/views/form.tpl.html',
				controller: 'formController'
			}
		}
	})	
	.state('otherwise', {
		url: '/error',
		views: {
			'view': {
				templateUrl: '/app/views/error.tpl.html'
			}
		}
	});
});