(function () {
    angular.module('cargo.directives.pagination', [])
    .directive('ngPagination', ['$location', function($location){
        return {
            restrict: 'EA',
            replace: true,
            transclude: true,
            scope: {
                pagination: '=',
                onGetData: '&'
            },
            template: function() {
                var template =
                    '<div id="pagination">                      ' +
                    '    <ul uib-pagination                     ' +
                    '        boundary-links="true"              ' +
                    '        total-items="pagination.hitsTotal" ' +
                    '        ng-model="pagination.pageCurrent"  ' +
                    '        max-size="pagination.maxSize"      ' +
                    '        ng-change="changePageCurrent()"    ' +
                    '        class="pagination-sm"              ' +
                    '        previous-text="&lsaquo;"           ' +
                    '        next-text="&rsaquo;"               ' +
                    '        first-text="&laquo;"               ' +
                    '        last-text="&raquo;">               ' +
                    '    </ul>                                  ' +
                    '    <select name="pageSize"                ' +
                    '        class="form-control page-select"   ' +
                    '        ng-model="pagination.pageSize"     ' +
                    '        ng-change="changePageSize()"       ' +
                    '        ng-options="item as item for item in pagination.lstPageSize">  ' +
                    '    </select>                              ' +
                    '</div>                                     ';
                return template;
            },
            link: function (scope, element, attrs, modelCtrl) {
                scope.setPage = function (pageNo) {
                    scope.pagination.pageCurrent = pageNo;
                };

                scope.changePageCurrent = function() {
                    // console.log('- changePageCurrent(): ' + scope.pagination.pageCurrent);
                    if(scope.pagination.pageCurrent > scope.pagination.pageTotal){
                        scope.pagination.pageCurrent = scope.pagination.pageTotal
                        return;
                    }
                    else {
                        scope.onGetData();
                    }
                };
                
                scope.changePageSize = function(){
                    // console.log('- changePageSize(): ' + scope.pagination.pageSize);
                    scope.pagination.pageCurrent = 1; // reset pagination to top
                    scope.onGetData();
                };
            }
        };
    }]);
})();