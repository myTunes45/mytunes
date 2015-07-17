(function() {
  'use strict';

  angular
    .module('addFile', [
      'ngRoute'
    ])
    .config(function ($routeProvider) {
      $routeProvider
      .when('/addFile', {
        templateUrl: 'addFile/addFile.html',
        controller: 'addFileController'
      });
    });
}());
