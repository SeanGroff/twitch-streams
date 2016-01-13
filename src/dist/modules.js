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

  angular.module('app.core').factory('getStreamsService', getStreamsService);

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

},{}],5:[function(require,module,exports){
'use strict';

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

},{}],6:[function(require,module,exports){
'use strict';

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

},{}],7:[function(require,module,exports){
'use strict';

(function () {
  'use strict';

  angular.module('app.streams').controller('StreamsController', StreamsController);

  StreamsController.$inject = ['$http', 'URL', 'TWITCH_URL', 'streamersService', 'getUsersService', 'getStreamsService'];

  function StreamsController($http, URL, TWITCH_URL, streamersService, getUsersService, getStreamsService) {
    var vm = this;

    vm.streams = streamersService.streams;

    streamersService.streams.map(function (twitchStream) {
      getUsersService.getUsers(twitchStream);
      getStreamsService.getStreams(twitchStream);
    });
  }
})();

},{}],8:[function(require,module,exports){
'use strict';

(function () {
  'use strict';

  angular.module('app.streams', []);
})();

},{}]},{},[1,2,3,4,5,6,7,8]);
