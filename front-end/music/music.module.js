(function() {
  'use strict';

  angular
    .module('myTunes', [
      'ngRoute',
      'addFile'
    ])
    .config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/playlist.html',
          controller: 'MusicController'
        })
    });

})();
