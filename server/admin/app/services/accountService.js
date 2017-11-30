(function () {
    'use strict';
    app.factory('accountService', accountService);
    accountService.$inject = ['$q', 'baseService'];
    function accountService($q, baseService) {
        // constructor
        var accountService = function () {
        }
        accountService.prototype = new baseService('api/account');
        accountService.prototype.constructor = accountService;

        // methods
        accountService.prototype.getAccounts = function (pageCurrent, pageSize) {
            var url = String.format('{0}/items', this.api);
            var params = {
                PageCurrent: pageCurrent,
                PageSize: pageSize
            };
            return this.getData(url, params);
        };

        accountService.prototype.getAccountById = function (accountId) {
            var url = String.format('{0}/item', this.api);
            var params = {
                AccountId: accountId
            };
            return this.getData(url, params);
        };

        accountService.prototype.getAccountByKey = function (accountKey) {
            var url = String.format('{0}/item', this.api);
            var params = {
                AccountKey: accountKey
            };
            return this.getData(url, params);
        };

        accountService.prototype.create = function (account) {
            var url = String.format('{0}/create', this.api);
            return this.postData(url, account);
        };
        
        accountService.prototype.update = function (account) {
            var url = String.format('{0}/update', this.api);
            return this.postData(url, account);
        };
        
        accountService.prototype.delete = function (accountKey) {
            var url = String.format('{0}/delete', this.api);
            var params = {
                AccountKey: accountKey
            };
            return this.postData(url, params);
        };
        
        return new accountService;
    };
})();