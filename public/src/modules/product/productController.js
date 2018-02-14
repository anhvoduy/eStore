(function () {
    'use strict';        
    angular.module('product.controller', ['product.service']).controller('productController', productController);
	productController.$inject = ['$q', '$location', 'productService'];
	function productController($q, $location, productService) {
		/* view-model */
		var vm = this;
		var productService = new productService();		
		
		/* functions */
		function activate() {
			return productService.getProducts().then(function(result){
				if(result){
					vm.products = result.PageData;
					angular.forEach(vm.products, function(item){
						item.ProductImageUrl = String.format('{0}/{1}/{2}/{3}', getRootLocation($location), 'uploads', 'products', item.ProductImage);
					});
				}				
			}, function(err){
				console.log(err);
			});
		};

		function getRootLocation(location) {
			return $location.$$protocol + ':' + '//' + $location.$$host + ':' + $location.$$port;
		}
		
		/* start */
		activate();
	}
})();