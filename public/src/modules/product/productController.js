(function () {
    'use strict';        
    angular.module('product.controller', ['product.service']).controller('productController', productController);
	productController.$inject = ['$q','productService'];
	function productController($q, productService) {
		/* view-model */
		var vm = this;
		var productService = new productService();		
		
		/* functions */
		function activate() {
			return productService.getProducts().then(function(result){
				if(result){
					vm.products = result.PageData;
					vm.hello = 'hello product';
				}
			}, function(err){
				console.log(err);
			});
		};
		
		/* start */
		activate();
	}
})();