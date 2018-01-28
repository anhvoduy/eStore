(function () {
    'use strict';        
	angular.module('product.detail.controller', ['product.service']).controller('productDetailController', productDetailController);

	productDetailController.$inject = ['$location', '$q','productService'];
	function productDetailController($location, $q, productService) {
		/* view-model */
		var vm = this;
		var productService = new productService();		
		
		/* functions */
		function activate() {			
			var productId = getProductId($location.$$absUrl);
			console.log('- productId:', productId);
			return productService.getProducts().then(function(result){
				if(result){
					vm.products = result.PageData;
					vm.hello = 'hello product';
				}
				console.log('productDetailController ....');				
			}, function(err){
				console.log(err);
			});
		};


		function getProductId(url) {
			var array = url.split('/');
			var params = filterArray(array);
			return params[params.length-1];
		}

		function filterArray(array) {
			var index = -1,
				arr_length = array ? array.length : 0,
				resIndex = -1,
				result = [];	
			while (++index < arr_length) {
				var value = array[index];		
				if (value) {
					result[++resIndex] = value;
				}
			}		
			return result;
		}		
		
		/* start */
		activate();
	}
})();