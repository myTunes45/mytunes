(function() {
  'use strict';

  angular
    .module('myTunes', [
      'ngRoute',
      'addFile'
    ])
    .config(function($routeProvider, $sceProvider) {
      $sceProvider.enabled(false);
      $routeProvider
        .when('/', {
          redirectTo: '/myTunes',
          templateUrl: 'views/playlist.html',
          controller: 'MusicController'
        })
    });

})();
