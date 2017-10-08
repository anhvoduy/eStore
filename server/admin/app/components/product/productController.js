(function () {
    'use strict';    
    app.controller('ProductController', ProductController);
    ProductController.$inject = ['productService'];    
	function ProductController(productService) {
		// models
		var vm = this;
		vm.lstProducts = [];
		vm.paging = {
			prevIndex: 0,
			nextIndex: 0,
			pageSize: 10
		};
		vm.messageSuccess = '';
		vm.messageError = '';
		
		// functions
		var getProductsPaging = function (pageIndex) {
			productService.getProductsPaging(pageIndex).then(function (result) {
				vm.lstProducts = result;
				vm.messageSuccess = String.format("Get Products is successful. Total: {0} rows", vm.lstProducts.length);
				
				// vm.paging.nextIndex = vm.lstProducts[vm.lstProducts.length - 1].ProductId;
				// vm.paging.prevIndex = (vm.lstProducts[0].ProductId + vm.paging.pageSize + 1); // review code with this magic number later                                                
			}, function (error) {
				vm.messageError = error.message;
			});
		};
		
		// list Products paging
		vm.nextItem = function () {
			if (vm.paging.nextIndex == 1) return;
			getProductsPaging(vm.paging.nextIndex);
		};
		
		vm.prevItem = function () {
			getProductsPaging(vm.paging.prevIndex);
		};
		
		/* start */
		getProductsPaging(vm.paging.nextIndex);   // default paging top 10 latest
	}
})();