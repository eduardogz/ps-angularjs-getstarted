(function() {

    var app = angular.module("githubViewer");

    var RepoController = function($scope, github, $routeParams) {

        var username = $routeParams.username;
        var reponame = $routeParams.reponame;

        console.log(username + ' ' + reponame);

        github.getRepoDetails(username, reponame)
            .then(onRepo, onError);

        var onRepo = function(data) {
            $scope.repo = data;
        };

        var onError = function(reason) {
            $scope.error = "Could not fetch data: " + reason.statusText;
        };

    }

    // register controller
    app.controller('RepoController', RepoController);

})();