(function () {
    'use strict';    
    app.controller('ReviewProductController', ReviewProductController);
    ReviewProductController.$inject = ['$timeout', '$stateParams', 'productService', 'reviewService'];    
	function ReviewProductController($timeout, $stateParams, productService, reviewService) {
		// models
		var vm = this;		
		vm.productId = $stateParams.productID;		
		vm.product = {};
		vm.disabledButton = false;
		vm.messageSuccess = '';
		vm.messageError = '';
		vm.review = {
			Rating: '',
			Comment: '',
			Created: new Date(),
			ProductId: vm.productId,
			Email: ''
		};
		vm.save = save;
		
		// functions
		function getProductById() {
			productService.getProductById(vm.productId).then(function (result) {
				vm.product = result;
				if (vm.product === undefined) {
					vm.messageError = String.format("The product id: {0} not found.", vm.productId);
					vm.disabledButton = true;
				} else {
					vm.disabledButton = false;
				}
			}, function (error) {
				vm.messageError = error.message;
				vm.disabledButton = true;
			});
		};
		
		// if create review success/failed -> reset status after 5s
		function resetFormStatus() {
			$timeout(function () {
				vm.disabledButton = false;
				vm.messageSuccess = '';
				vm.messageError = '';
			}, 5000);
		};
		
		// buttons
		function save() {
			vm.disabledButton = true;
			reviewService.createReview(vm.review).then(function (result) {				
                vm.messageSuccess = result.message;
                resetFormStatus();
			}, function (error) {
				vm.messageError = error.message;
				resetFormStatus();
			});
		};
		
		/* start */
		getProductById();
	}
})();