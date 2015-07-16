(function() {
  'use strict';

  angular
    .module('myTunes')
    .controller('MusicController', function($scope, MusicService, $routeParams, $location) {
        MusicService.getPlaylist().success(function (playlist) {
          $scope.playlist = playlist;
        });

        MusicService.getSong($routeParams.id).success(function (song) {
          $scope.song = song;
        });

        $scope.deleteSong = function (id) {
          MusicService.delete(id);
        };

        $scope.addSong = function (newSong) {
          MusicService.add(newSong);
          $location.path('/');
        };

        var watchCallback = function () {
          MusicService.get().success(function (playlist) {
            $scope.playlist = playlist;
          });
        };

        $scope.$on('playlist:updated', watchCallback);
        $scope.$on('song:deleted', watchCallback);
        $scope.$on('song:added', watchCallback);

    });
}());
