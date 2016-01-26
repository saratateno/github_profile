githubUserSearch.factory('Search', ['$http', function($http) {
  var queryUrl = "https://api.github.com/search/users";
  return {
    query: function(searchTerm) {
      return $http({
        url: queryUrl,
        method: "GET",
        params: {
          'access_token': "1d3248a38288cbd1f150ac55a3c721a890b21ca7",
          'q': searchTerm
        }
      });
    }
  };
}]);
