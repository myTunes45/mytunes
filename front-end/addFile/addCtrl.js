(function() {
  'use strict';
  angular
    .module('addFile')
    .controller('addFileController', ['$scope','addService', '$location', '$routeParams',
    function($scope, addService, $location, $routeParams) {
      $scope.addSong = function(song) {
          addService.addSong(song);
          $location.path('/addFile');
      };
      addService.getSongs().then(function (data) {
        $scope.songs = data;
      });

    }]);
}());
