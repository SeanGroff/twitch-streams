(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

(function () {
  'use strict';

  angular.module('app', ['app.core', 'app.streams']);
})();

},{}],2:[function(require,module,exports){
'use strict';

(function () {
  'use strict';

  angular.module('app.core').constant('URL', 'https://api.twitch.tv/kraken/').constant('TWITCH_URL', 'https://twitch.tv/');
})();

},{}],3:[function(require,module,exports){
'use strict';

(function () {
  'use strict';

  angular.module('app.core', []);
})();

},{}],4:[function(require,module,exports){
'use strict';

(function () {
  'use strict';

  angular.module('app.core').factory('streamersService', streamersService);

  function streamersService() {
    var streamers = {
      streams: [{
        name: 'FreeCodeCamp',
        url: '',
        img: ''
      }, {
        name: 'GeoffStorbeck',
        url: '',
        img: ''
      }, {
        name: 'Medrybw',
        url: '',
        img: ''
      }, {
        name: 'lirik',
        url: '',
        img: ''
      }, {
        name: 'Forsenlol',
        url: '',
        img: ''
      }, {
        name: 'AmazHS',
        url: '',
        img: ''
      }, {
        name: 'LAGTVMaximusBlack',
        url: '',
        img: ''
      }, {
        name: 'summit1g',
        url: '',
        img: ''
      }]
    };

    return streamers;
  }
})();

},{}],5:[function(require,module,exports){
'use strict';

(function () {
  'use strict';

  angular.module('app.streams').controller('StreamsController', StreamsController);

  StreamsController.$inject = ['$http', 'URL', 'TWITCH_URL', 'streamersService'];

  function StreamsController($http, URL, TWITCH_URL, streamersService) {
    var vm = this;

    vm.streams = streamersService.streams;

    streamersService.streams.map(function (stream) {
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

},{}],6:[function(require,module,exports){
'use strict';

(function () {
  'use strict';

  angular.module('app.streams', []);
})();

},{}]},{},[1,2,3,4,5,6]);
