(function() {
  'use strict';

  angular
    .module('addFile', [
      'ngRoute'
    ])
    .config(function ($routeProvider) {
      $routeProvider
      .when('/myTunes', {
        templateUrl: 'addFile/addFile.html',
        controller: 'addFileController'
      });
    });
}());
