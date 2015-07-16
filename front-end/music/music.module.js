(function() {
  'use strict';

  angular
    .module('myTunes', [
      'ngRoute',
      'myTunes'
    ])

    .config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/playlist.html',
          controller: 'MusicController'
        })

    });

})();
