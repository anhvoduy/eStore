(function () {
    'use strict';        
    angular.module('index.controller', ['index.service']).controller('indexController', indexController);
	indexController.$inject = ['$q','indexService'];
	function indexController($q, indexService) {
		/* view-model */
		var vm = this;
		var indexService = new indexService();		
		
		/* functions */
		function activate() {
			return indexService.getProducts().then(function(result){
				if(result){
					vm.products = result.PageData;
					vm.hello = 'hello world';
				}
			}, function(err){
				console.log(err);
			});
		};
		
		/* start */
		activate();
	}
})();