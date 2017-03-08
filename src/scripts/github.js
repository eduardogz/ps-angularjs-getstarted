(function() {

    var github = function($http) {

        var getUser = function(username) {
            return $http.get("https://api.github.com/users/" + username)
                .then(function(response) {
                    return response.data;
                }); // returns a promise that represents the completion of the http call and the response data
        };

        var getRepos = function(user) {
            return $http.get(user.repos_url)
                .then(function(response) {
                    return response.data
                });
        };

        return {
            getUser: getUser,
            getRepos: getRepos
        };
    }

    // register the service
    var module = angular.module("githubViewer");
    module.factory("github", github);
}());