(function() {

    var module = angular.module("githubViewer");

    // github is an angular service whose concern is to retrieve data from github.com
    var github = function($http) {

        var githubURL = 'https://api.github.com/'

        var getUser = function(username) {
            return $http.get(githubURL + 'users/' + username)
                .then(function(response) {
                    console.log(username);                    
                    return response.data;
                }); // returns a promise that represents the completion of the http call and the response data
        };

        var getRepos = function(user) {
            return $http.get(user.repos_url)
                .then(function(response) {
                    return response.data
                });
        };

        var getRepoDetails = function(username, reponame) {
            var repo;
            var repoUrl = githubURL + 'repos/' + username + '/' + reponame;
            return $http.get(repoUrl)
                .then(function(response) {
                    repo = response.data;
                    return $http.get(repoUrl + '/contributors')
                })
                .then(function(response){
                    repo.contributors = response.data;
                    return repo;
                });
        };

        return {
            getUser: getUser,
            getRepos: getRepos,
            getRepoDetails: getRepoDetails
        };
    }

    // register service
    module.factory("github", github);
}());