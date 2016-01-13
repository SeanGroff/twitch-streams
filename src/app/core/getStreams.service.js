(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('getStreamsService', getStreamsService);

    getStreamsService.$inject = ['$http', 'URL', 'TWITCH_URL'];

    function getStreamsService($http, URL, TWITCH_URL) {
      var tStreams = {
        getStreams: getStreams
      };

      function getStreams(twitchStream) {
        $http({
          method: 'GET',
          url: URL + 'streams/' + twitchStream.name
        }).then(function successCb(response) {
          console.log(response);
          if (response.data.stream) {
            twitchStream.desc = response.data.stream.channel.status;
          }
        }, function errorCb(response) {
          console.log('Error: ' + response);
        });
      }

      return tStreams;
    }
})();
