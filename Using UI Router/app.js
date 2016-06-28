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

// our controller for the form
// =============================================================================
.controller('formController', function($scope) {
    
    // we will store all of our form data in this object
    $scope.formData = {};
    
    // function to process the form
    $scope.processForm = function() {
        
        $http.jsonp('http://www.example.com?callback=JSON_CALLBACK')
        .success (function('{"id":"3","description":"xx","floor":2}') {})
        
//        var xhttp = new XMLHttpRequest();
//        xhttp.open("POST", "http://192.168.1.12:8080/smartdatics-sora/restapi/room", false);
//        xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//        xhttp.send('{"id":"3","description":"xx","floor":2}');
//        alert(parseJson(xhttp.responseText).mainMessage);
//        console.log(xhttp.status);
    };
});

//    function parseJson(str) {
//        try {
//		  return JSON.parse(str);
//		} catch (ex) {
//		  console.error(ex);
//		}
//    }

//function jsonCallback(json){
//  console.log(json);
//}
//
//$.ajax({
//  url: "http://run.plnkr.co/plunks/v8xyYN64V4nqCshgjKms/data-2.json",
//  dataType: "jsonp"
//});


//$http.jsonp('http://www.example.com?callback=JSON_CALLBACK')
//  .success (function(data) {
//    data='{"id":"3","description":"xx","floor":2}';
//  })