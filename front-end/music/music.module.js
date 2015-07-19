(function() {
  'use strict';

  angular
    .module('myTunes', [
      'ngRoute',
      'myTunes',
      'addFile'
    ])
    .config(function($routeProvider, $sceProvider) {
      $sceProvider.enabled(false);
      $routeProvider
        .when('/', {
          templateUrl: 'views/playlist.html',
          controller: 'MusicController'
        })
    });

})();
