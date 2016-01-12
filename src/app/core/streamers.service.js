(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('streamersService', streamersService);

    function streamersService() {
      var streamers = {
        streams: [
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
          }
        ]
      };

      return streamers;
    }
})();
