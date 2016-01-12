(function() {
  'use strict';

  angular
    .module('app.streams' )
    .controller('StreamsController', StreamsController);

    StreamsController.$inject = ['$http', 'URL', 'TWITCH_URL'];

    function StreamsController($http, URL, TWITCH_URL) {
      var vm = this;

      var streams = [
        {
          name: 'FreeCodeCamp',
          url: '',
          img: ''
        },
        {
          name: 'GeoffStorbeck',
          url: '',
          img: ''
        },
        {
          name: 'Medrybw',
          url: '',
          img: ''
        },
        {
          name: 'lirik',
          url: '',
          img: ''
        },
        {
          name: 'Forsenlol',
          url: '',
          img: ''
        },
        {
          name: 'AmazHS',
          url: '',
          img: ''
        },
        {
          name: 'LAGTVMaximusBlack',
          url: '',
          img: ''
        },
        {
          name: 'summit1g',
          url: '',
          img: ''
        },
      ];

      vm.streams = streams;

      streams.map(function(stream) {
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
