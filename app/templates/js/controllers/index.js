/* ===================================================================== 
    APP NAME 
======================================================================== */
  
var boilerplateApp =   angular.module('boilerplateApp',[]); 
  
              
/* ===================================================================== 
    SERVICE 
======================================================================== */
  
boilerplateApp.service('appService',function($http){ 
  
    // Private functions and vars  
  
    var foo = []; 
  
  
    // Exposed to controller vars 
  
    return { 
  
        getFoo: function() { 
            return foo; 
        }  
    }; 
  
}); 
  
  
/* ===================================================================== 
    CONTROLLER 
======================================================================== */
  
  
boilerplateApp.controller('appController',['$scope', '$http', 'appService', function ($scope, $http, appService) { 
  
  
    /* --------------------------------------------------------------------------  
        SCOPE VARIABLES  
    -------------------------------------------------------------------------- */
  
    $scope.bar = 100;

    $scope.myfunction = function(args) {  
  		console.log(args);
    }  
     
    $scope.init = function() { 
    	console.log('init!');
    } 
  
    $scope.init(); 
       
}]); 