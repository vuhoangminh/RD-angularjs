// app.js
// create our angular app and inject ngAnimate and ui-router 
// =============================================================================
angular.module('formApp', ['ngAnimate', 'ui.router'])

// configuring our routes 
// =============================================================================
.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
    
        // route to show our basic form (/form)
        .state('form', {
            url: '/form',
            templateUrl: 'form.html',
            controller: 'formController'
        })
        
        // nested states 
        // each of these sections will have their own view
        // url will be nested (/form/profile)
        .state('form.profile', {
            url: '/profile',
            templateUrl: 'form-profile.html'
        })
        
        // url will be /form/interests
        .state('form.interests', {
            url: '/interests',
            templateUrl: 'form-interests.html'
        })
        
        // url will be /form/payment
        .state('form.payment', {
            url: '/payment',
            templateUrl: 'form-payment.html'
        });
        
    // catch all route
    // send users to the form page 
    $urlRouterProvider.otherwise('/form/profile');
})






//
//// our controller for the form
//// =============================================================================
//.controller('formController', function($scope) {
//    
//    // we will store all of our form data in this object
//    $scope.formData = {};
//    
//    // function to process the form
//    $scope.processForm = function() { 
//    };
//});
//
//
//// Your app's root module...
//var MainCtrl = function($scope,$http) {
//$scope.loading = true;
//$http.put('http://192.168.1.14:8080/smartdatics-sora/restapi/room/', { id:"5",description:"hehe",floor:2 }).success(function(response) {
//        $scope.response = response;
//        $scope.loading = false;
//        alert("awesome");
//    });
//};
//
//
//// Your app's root module...
//angular.module('MyModule', [], function($httpProvider) {
//  // Use x-www-form-urlencoded Content-Type
//  $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
//
//  /**
//   * The workhorse; converts an object to x-www-form-urlencoded serialization.
//   * @param {Object} obj
//   * @return {String}
//   */ 
//  var param = function(obj) {
//    var query = '', name, value, fullSubName, subName, subValue, innerObj, i;
//      
//    for(name in obj) {
//      value = obj[name];
//        
//      if(value instanceof Array) {
//        for(i=0; i<value.length; ++i) {
//          subValue = value[i];
//          fullSubName = name + '[' + i + ']';
//          innerObj = {};
//          innerObj[fullSubName] = subValue;
//          query += param(innerObj) + '&';
//        }
//      }
//      else if(value instanceof Object) {
//        for(subName in value) {
//          subValue = value[subName];
//          fullSubName = name + '[' + subName + ']';
//          innerObj = {};
//          innerObj[fullSubName] = subValue;
//          query += param(innerObj) + '&';
//        }
//      }
//      else if(value !== undefined && value !== null)
//        query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
//    }
//      
//    return query.length ? query.substr(0, query.length - 1) : query;
//  };
//
//  // Override $http service's default transformRequest
//  $httpProvider.defaults.transformRequest = [function(data) {
//    return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
//  }];
//});





// our controller for the form
// =============================================================================
.controller('formController', function($scope,$http) {

    $scope.postdata = JSON.stringify({ "id": "3", "floor": 50, "description": "Deluxe Double Room" });

    // we will store all of our form data in this object
    $scope.formData = {};
    
    // function to process the form
    $scope.processForm = function() {
        $http({
            method  : $scope.formData.method,
            url     : $scope.formData.url,
            data    : $scope.formData.data,  // pass in data as strings
            headers : { 'Content-Type': 'application/json' }  // set the headers so angular passing info as form data (not request payload)
//            method  : 'POST',
//            url     : 'http://192.168.1.14:8080/smartdatics-sora/restapi/room/',
//            data    : {id:"ASDASsadasdDASDASSDA5",description:"hehe",floor:2},
////            data    : $scope.postdata,  
//            headers : { 'Content-Type': 'application/json' }  // set the headers so angular passing info as form data (not request payload)            
        })
        .success(function(response) {
            $scope.response = response;
            $scope.loading = false;
            alert("awesome");
        })
        .error(function(response) {
            $scope.response = response;
            $scope.loading = false;
            alert("Not awesome");
        });
        
//        alert($scope.formData.method);
//        alert($scope.formData.url);
//        alert($scope.formData.data);
//        $http.post('http://192.168.1.14:8080/smartdatics-sora/restapi/room/', { id:"11WER21dasasadsdasdasasdasdas22",description:"hehe",floor:2 }).success(function(response) {
//        $scope.response = response;
//        $scope.loading = false;
//        alert("awesome");
//    });
    };
});




// Your app's root module...
var MainCtrl = function($scope, $http) {
$scope.loading = true;
$http.post('http://192.168.1.14:8080/smartdatics-sora/restapi/room/', { id:"11WER21dasasdasdas22",description:"hehe",floor:2 }).success(function(response) {
        $scope.response = response;
        $scope.loading = false;
        alert("awesome");
    });
};


// Your app's root module...
angular.module('MyModule', [], function($httpProvider) {
  // Use x-www-form-urlencoded Content-Type
  $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

  /**
   * The workhorse; converts an object to x-www-form-urlencoded serialization.
   * @param {Object} obj
   * @return {String}
   */ 
  var param = function(obj) {
    var query = '', name, value, fullSubName, subName, subValue, innerObj, i;
      
    for(name in obj) {
      value = obj[name];
        
      if(value instanceof Array) {
        for(i=0; i<value.length; ++i) {
          subValue = value[i];
          fullSubName = name + '[' + i + ']';
          innerObj = {};
          innerObj[fullSubName] = subValue;
          query += param(innerObj) + '&';
        }
      }
      else if(value instanceof Object) {
        for(subName in value) {
          subValue = value[subName];
          fullSubName = name + '[' + subName + ']';
          innerObj = {};
          innerObj[fullSubName] = subValue;
          query += param(innerObj) + '&';
        }
      }
      else if(value !== undefined && value !== null)
        query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
    }
      
    return query.length ? query.substr(0, query.length - 1) : query;
  };

  // Override $http service's default transformRequest
  $httpProvider.defaults.transformRequest = [function(data) {
    return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
  }];
});


//var data = {id:"5",description:"hehe",floor:2}
//document.getElementById("json_default").innerHTML = JSON.stringify(data, undefined, 2);