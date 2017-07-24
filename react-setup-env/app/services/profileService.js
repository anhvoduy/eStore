var ProfileService = (function(){
  'use strict';
  var ProfileService = function(){
  }

  ProfileService.getData = function(){
    var deferred = $.Deferred();

    $.get('http://localhost:8080/api/myprofile', function(data){
        console.log(data);
        data.age = 40;
        deferred.resolve(data);
    });

    return deferred.promise();
  }

  return ProfileService;
})();