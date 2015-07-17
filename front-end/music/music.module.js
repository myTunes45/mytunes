(function() {
  'use strict';

  angular
    .module('myTunes', [
      'ngRoute',
      'myTunes',
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
