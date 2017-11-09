(function () {
    'use strict';    
    app.controller('productEditController', productEditController);
    productEditController.$inject = ['productService', 'reviewService', '$state', '$stateParams'];    
    function productEditController(productService, reviewService, $state, $stateParams) {
		// models
		var vm = this;
		vm.productId = $stateParams.productID;
		vm.product = {};
		vm.review = {};
		vm.isSaving = false;
		vm.messageSuccess = '';
        vm.messageError = '';
        vm.save = save;
        vm.cancel = cancel;
		
		// functions
		var activate = function () {
			productService.getProductById(vm.productId).then(function (result) {
				vm.product = result;
				if (vm.product === undefined) {
					vm.messageError = String.format("The Product Id: {0} not found.", vm.productId);
				}
			}, function (error) {
				vm.messageError = error.message;
			});
        };

        function save() {
            console.log('save() ....');
        }

        function cancel() {            
            $state.go($state.current.parentState);
        }
		
		/* start */
		activate();
	}
})();