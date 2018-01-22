(function () {
    'use strict';        
    angular.module('index.controller', ['index.service']).controller('indexController', indexController);
	indexController.$inject = ['$q','indexService'];	
	function indexController($q, indexService) {
        /* view-model */
        var vm = this;		
		
		/* functions */
		function activate() {
			console.log('activating() ... indexController ...');
			return indexService.getProducts();
		};
		
		/* start */
		activate();
	}
})();