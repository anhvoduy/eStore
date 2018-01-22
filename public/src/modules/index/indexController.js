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
			console.log('activating() ... indexController ...');
			return indexService.getProducts().then(function(result){
				console.log(result);
			}, function(err){
				console.log(err);
			});
		};
		
		/* start */
		activate();
	}
})();