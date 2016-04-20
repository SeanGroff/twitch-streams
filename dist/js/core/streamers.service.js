(function () {
  'use strict';

  angular.module('app.core').factory('streamersService', streamersService);

  function streamersService() {
    var streamers = {
      streams: [{
        name: 'FreeCodeCamp',
        url: '',
        img: '',
        desc: ''
      }, {
        name: 'GeoffStorbeck',
        url: '',
        img: '',
        desc: ''
      }, {
        name: 'Medrybw',
        url: '',
        img: '',
        desc: ''
      }, {
        name: 'lirik',
        url: '',
        img: '',
        desc: ''
      }, {
        name: 'Forsenlol',
        url: '',
        img: '',
        desc: ''
      }, {
        name: 'AmazHS',
        url: '',
        img: '',
        desc: ''
      }, {
        name: 'LAGTVMaximusBlack',
        url: '',
        img: '',
        desc: ''
      }, {
        name: 'summit1g',
        url: '',
        img: '',
        desc: ''
      }]
    };

    return streamers;
  }
})();