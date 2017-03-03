(function() {

    var app = angular.module('githubViewer', []);

    var MainController = function($scope, $http) {
        var onUserComplete = function(response) {
            $scope.user = response.data;
        };
        var onError = function(reason) {
            $scope.error = 'Could not fetch data';
        };
        $http.get('https://api.github.com/users/eduardogz')
            .then(onUserComplete, onError);

        $scope.message = 'Hey Ubi!';
    }
    app.controller('MainController', ['$scope', '$http', MainController]);

})();