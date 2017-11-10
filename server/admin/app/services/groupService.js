(function () {
    'use strict';
    app.factory('groupService', groupService);
    groupService.$inject = ['$http', '$q', 'baseService'];
    function groupService($http, $q, baseService) {                
        // constructor
        var groupService = function () {            
        }
        groupService.prototype = new baseService('api/group');
        groupService.prototype.constructor = groupService;
        
        // methods
        groupService.prototype.getGroups = function () {
            var url = String.format('{0}/items', this.api);
            
            var q = $q.defer();
            this.getData(url).then(function (result) {                
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            })
            return q.promise;
        }
        
        groupService.prototype.getGroupById = function (groupId) {
            var url = String.format('{0}/item', this.api);
            return true;                                    
        }                

        groupService.prototype.getGroupByKey = function (groupKey) {
			var url = String.format('{0}/profile', this.api);			
			return true;
		}
				
        return new groupService;
    };
})();