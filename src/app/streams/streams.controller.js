(function() {
  'use strict';

  angular
    .module('app.streams')
    .controller('StreamsController', StreamsController);

    StreamsController.$inject = ['$http', 'URL', 'TWITCH_URL', 'streamersService', 'getUsersService', 'getStreamsService'];

    function StreamsController($http, URL, TWITCH_URL, streamersService, getUsersService, getStreamsService) {
      var vm = this;

      vm.streams = streamersService.streams;

      streamersService.streams.map(function(twitchStream) {
        getUsersService.getUsers(twitchStream);
        getStreamsService.getStreams(twitchStream);
      });
    }
})();
