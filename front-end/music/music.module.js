(function() {
  'use strict';

  angular
    .module('myTunes', [
      'ngRoute'
    ])

    .config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/playlist.html',
          controller: 'MusicController'
        })

    });

})();
