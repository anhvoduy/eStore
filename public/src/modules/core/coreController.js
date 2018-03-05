(function () {
    'use strict';
	angular.module('core.controller', ['core.service'])
	.controller('sliderController', sliderController);
	
	// sliderController
	sliderController.$inject = ['$q', '$location', 'coreService'];
	function sliderController($q, $location, coreService) {
		/* view-model */
		var vm = this;
		var coreService = new coreService();
		
		/* functions */
		function activate() {
			coreService.getProductMostLiked().then(function(result){
				vm.productMostLiked = result;
				angular.forEach(vm.productMostLiked, function(item){
					item.ProductImageUrl = String.format('{0}/{1}/{2}/{3}', getRootLocation($location), 'uploads', 'products', item.ProductImage);
				});
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