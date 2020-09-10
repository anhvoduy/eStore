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
            return this.getData(url);
        };
        
        groupService.prototype.getGroupById = function (groupId) {
            var url = String.format('{0}/item', this.api);
            var params = {
                GroupId: groupId
            };
            return this.getData(url, params);
        };

        groupService.prototype.getGroupByKey = function (groupKey) {
            var url = String.format('{0}/item', this.api);
            var params = {
                GroupKey: groupKey
            };
            return this.getData(url, params);
        };
        
        groupService.prototype.create = function (group) {
            var url = String.format('{0}/create', this.api);
            return this.postData(url, group);
        };
        
        groupService.prototype.update = function (group) {
            var url = String.format('{0}/update', this.api);
            return this.postData(url, group);
        };
        
        groupService.prototype.delete = function (groupId) {
            var url = String.format('{0}/delete', this.api);
            var params = {
                GroupId: groupId
            };
            return this.postData(url, params);
        };
        
        return new groupService;
    };
})();