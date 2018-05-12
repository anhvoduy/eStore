(function () {
    'use strict';        
    angular.module('thestore.controller', ['thestore.service']).controller('thestoreController', thestoreController);
	thestoreController.$inject = ['$q', 'thestoreService'];
	function thestoreController($q, thestoreService) {
        /* view-model */
		var vm = this;
		var thestoreService = new thestoreService();
		
		/* functions */
		function activate() {
			return thestoreService.getTopBrand()
			.then(function(result){
				vm.brandlist = result;
				angular.forEach(vm.brandlist, function(brand) {
					brand.active = false;
				});

				// get products for default brand
				vm.brandlist[0].active = true;
				return thestoreService.getProductByBrand(vm.brandlist[0].BrandId);
			}, function(error){
				console.log(error);
			})
			.then(function(result){
				vm.products = result.PageData;
			}, function(error){
				console.log(error);
			});
		};
		
		vm.setActiveBrand = function(item) {
			angular.forEach(vm.brandlist, function(brand) {
			    brand.active = false;
			});
			item.active = true;

			// get products for selected brand
			return thestoreService.getProductByBrand(item.BrandId)
			.then(function(result){
				vm.products = result.PageData;
			}, function(error){
				console.log(error);
			});
		}

		/* start */
		activate();
	}
})();