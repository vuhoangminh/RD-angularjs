function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/user_registration");
    $stateProvider
        .state('user_registration', {
            url: "/user_registration",
            templateUrl: "views/user_registration.html",
            data: {
                pageTitle: 'user_registration'
            }
        })
        .state('role', {
            url: "/role",
            templateUrl: "views/role.html",
            data: {
                pageTitle: 'role'
            }
        })		
		.state('api', {
            url: "/api",
            templateUrl: "views/api.html",
            data: {
                pageTitle: 'api'
            }
        })		
		.state('user_role', {
            url: "/user_role",
            templateUrl: "views/user_role.html",
            data: {
                pageTitle: 'user_role'
            }
        })
		.state('role_action', {
            url: "/role_action",
            templateUrl: "views/role_action.html",
            data: {
                pageTitle: 'role_action'
            }
        })		
}
angular
    .module('smartdatics')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });
