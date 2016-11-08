(function () {
	'use strict';
	app.factory('mainService', mainService);
	mainService.$inject = ['$q', 'baseService'];
	
	function mainService($q, baseService) {
		// constructor
		var mainService = function () {
            //console.log('instance');
		}
		mainService.prototype = new baseService('api');
		mainService.prototype.constructor = mainService;
		
		// methods
		mainService.prototype.getNavigation = function () {
			var navigation = [
				{
					code: 'cash',
					name: 'Cash',
					childNodes: [
						{ code: 'cashIn', name: 'Cash In' },
						{ code: 'cashOut', name: 'Cash Out' },
						{ code: 'cashReport', name: 'Cash Report' }
					]
				},
				{
					code: 'inventory',
					name: 'Inventory',
					childNodes: [
						{ code: 'stockIn', name: 'Stock In' },
						{ code: 'stockOut', name: 'Stock Out' },
						{ code: 'stockBalance', name: 'Stock Balance' },
						{ code: 'stockReport', name: 'Stock Report' }
					]
				},
				{
					code: 'list',
					name: 'List',
					childNodes: [
						{ code: 'brand', name: 'Brand' },
						{ code: 'product', name: 'Product' },
						{ code: 'account', name: 'Account' },
						{ code: 'user', name: 'User' }
					]
				},                
				{
					code: 'help',
					name: 'Help'
				}
			];
			
			return navigation;
		};
						
		return new mainService;
	};
})();