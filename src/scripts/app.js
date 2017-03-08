(function(){
    var app = angular.module("githubViewer", ["ngRoute"]);

    // configures the route provider
    app.config(function($routeProvider) {
        $routeProvider
            .when('/main', {
                templateUrl: '/src/templates/main.html',
                controller: 'MainController'})
            .when('/user/:username', {
                templateUrl: '/src/templates/user.html',
                controller: 'UserController'})
            .otherwise({redirectTo: '/main'});
    });
}());