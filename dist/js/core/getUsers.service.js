(function () {
  'use strict';

  angular.module('app.core').factory('getUsersService', getUsersService);

  getUsersService.$inject = ['$http', 'URL', 'TWITCH_URL'];

  function getUsersService($http, URL, TWITCH_URL) {
    var users = {
      getUsers: getUsers
    };

    function getUsers(twitchStream) {
      $http({
        method: 'GET',
        url: URL + 'users/' + twitchStream.name
      }).then(function successCb(response) {
        twitchStream.url = TWITCH_URL + response.data.name;
        twitchStream.img = response.data.logo;
      }, function errorCb(reponse) {
        console.log('Error: ' + reponse);
      });
    }

    return users;
  }
})();