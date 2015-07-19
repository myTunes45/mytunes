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
      $scope.deleteSong = function(id) {
        addService.deleteSong(id);
      }

      function watchCallback() {
        addService.getSongs().then(function(songs) {
          $scope.songs = songs
        });
      }

      $scope.$on('song:added', watchCallback);
      $scope.$on('song:deleted', watchCallback);

    }]);
}());
