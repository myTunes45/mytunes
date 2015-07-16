(function() {
  'use strict';

  angular
    .module('music', [
      'ngRoute',
      'underscore'
    ])

    .config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/playlist.html',
          controller: 'MusicController'
        })

    });

})();
