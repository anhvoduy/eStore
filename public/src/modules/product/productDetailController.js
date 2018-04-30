(function () {
    'use strict';
	angular.module('product.detail.controller', ['product.service']).controller('productDetailController', productDetailController);
	productDetailController.$inject = ['$rootScope','$location','$q','productService'];
	function productDetailController($rootScope,$location,$q,productService) {
		/* view-model */
		var vm = this;
		var productService = new productService();
		
		/* functions */
		function activate() {
			var productKey = getProductKey($location.$$absUrl);
			if(angular.isUndefined(productKey) || productKey == ''){
				return productService.getProductMostLikedOne().then(function(result){
					vm.product = result;
					vm.product.ProductImageUrl = String.format('{0}/{1}/{2}/{3}', getRootLocation($location), 'uploads', 'products', vm.product.ProductImage);

					// TO TO REVIEW: why call to getProductMostLikedOne() ??? 
					$rootScope.$broadcast('product-selected-brand', { BrandId: vm.product.BrandId });
				}, function(err){
					console.log(err);
				});
			}
			else{
				return productService.getProductItem(productKey).then(function(result){
					vm.product = result;
					vm.product.ProductImageUrl = String.format('{0}/{1}/{2}/{3}', getRootLocation($location), 'uploads', 'products', vm.product.ProductImage);

					// broadcast
					$rootScope.$broadcast('product-selected-brand', { BrandId: vm.product.BrandId });
				}, function(err){
					console.log(err);
				});
			}
		};

		function getRootLocation(location) {
			return $location.$$protocol + ':' + '//' + $location.$$host + ':' + $location.$$port;
		}

		function getProductKey(url) {
			var array = url.split('/');
			var params = filterArray(array);
			var productKey = params[params.length-1];
			if(angular.isUndefined(productKey)) return '';
			else return productKey;
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


(function () {
    'use strict';
	angular.module('product.related.controller', ['product.service']).controller('productRelatedController', productRelatedController);
	productRelatedController.$inject = ['$rootScope','productService'];
	function productRelatedController($rootScope,productService) {
		/* view-model */
		var vm = this;
		var productService = new productService();
		
		/* functions */
		function activate(brandId) {
			return productService.getProductsByBrand(brandId).then(function(data){
				if(data && data.PageData){
					vm.relatedProducts = data.PageData;
				}
			}, function(err){
				console.log(err);
			})
		};

		/* start: only activate after get brandId exactly */
		$rootScope.$on('product-selected-brand', function(event, data) {
			if(data && data.BrandId){
				activate(data.BrandId);
			}
		});
	}
})();