(function () {
    'use strict';        
    angular.module('index.controller').controller('indexController', indexController);
	indexController.$inject = ['$q'];	
	function brandController($q) {
        /* view-model */
        var vm = this;		
		
		/* functions */
		function activate() {
		};
		
		/* start */
		activate();
	}
})();