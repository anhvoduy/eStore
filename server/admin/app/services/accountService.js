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

            var q = $q.defer();
            this.getData(url, params).then(function (result) {
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            });
            return q.promise;            
        };

        accountService.prototype.getAccountById = function (accountId) {
            var url = String.format('{0}/item', this.api);
            var params = {
                AccountId: accountId
            }
            
            var q = $q.defer();
            this.getData(url, params).then(function (result) {
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            });
            return q.promise;
        };
        
        accountService.prototype.getAccountByKey = function (accountKey) {
            var url = String.format('{0}/item', this.api);
            var params = {
                AccountKey: accountKey
            }
            
            var q = $q.defer();
            this.getData(url, params).then(function (result) {
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            });
            return q.promise;
        };       
        
        accountService.prototype.updateAccount = function (Account) {
            var url = String.format('{0}/update', this.api);
            
            var q = $q.defer();
            this.update(url, Account).then(function (result) {
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            });
            return q.promise;
        };
        
        accountService.prototype.deleteAccount = function (accountKey) {
            var url = String.format('{0}/delete', this.api);
            
            var q = $q.defer();
            this.delete(url).then(function (result) {
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            });
            return q.promise;            
        };
        
        return new accountService;
    };
})();