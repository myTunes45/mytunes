(function() {
  'use strict';
  angular
    .module('addFile')
    .controller('addFileController', ['$rootScope','$scope','addService', '$location', '$routeParams',
    function($rootScope, $scope, addService, $location, $routeParams) {
      $scope.addSong = function(song) {
          addService.addSong(song);
          $location.path('/myTunes');
          $scope.song = '';
      };
      addService.getSongs().then(function (data) {
        $scope.songs = data;
      });
      $scope.deleteSong = function(id) {
        addService.deleteSong(id);
      };
      $scope.setPlayer = function(song) {
        $rootScope.player = song;
        console.log(song)
      };
      function resetInput() {
        $scope.input = "";
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
