(function () {
    'use strict';        
    angular.module('thestore.controller', ['thestore.service']).controller('thestoreController', thestoreController);
	thestoreController.$inject = ['$q', '$location', 'thestoreService'];
	function thestoreController($q, $location, thestoreService) {
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
				return getProductByBrand(vm.brandlist[0].BrandId);
			}, function(error){
				console.log(error);
			});
		};

		function getRootLocation(location) {
			return $location.$$protocol + ':' + '//' + $location.$$host + ':' + $location.$$port;
		};

		function getProductByBrand(brandId){
			return thestoreService.getProductByBrand(brandId)
			.then(function(result){
				vm.products = result.PageData;
				angular.forEach(vm.products, function(item){
					item.ProductImageUrl = String.format('{0}/{1}/{2}/{3}', getRootLocation($location), 'uploads', 'products', item.ProductImage);
				});
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
			getProductByBrand(item.BrandId);
		};

		/* start */
		activate();
	}
})();