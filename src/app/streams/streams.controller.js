(function() {
  'use strict';

  angular
    .module('app.streams')
    .controller('StreamsController', StreamsController);

    StreamsController.$inject = ['$http', 'URL', 'TWITCH_URL', 'streamersService'];

    function StreamsController($http, URL, TWITCH_URL, streamersService) {
      var vm = this;
      var test = 'Test';

      vm.streams = streamersService.streams;

      streamersService.streams.map(function(stream) {
        $http({
          method: 'GET',
          url: URL + 'users/' + stream.name
        }).then(function successCb(response) {
          stream.url = TWITCH_URL + response.data.name;
          stream.img = response.data.logo;
        }, function errorCb(reponse) {
          console.log('Error: ' + reponse);
        });
      });

    }
})();
