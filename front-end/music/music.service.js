(function() {
  'use strict';

  angular
    .module('myTunes')
    .factory('MusicService', function ($http, $rootScope) {

      var url = 'https://shrouded-sierra-3476.herokuapp.com/api/songs';

      var getPlaylist = function() {
        return $http.get(url);
      };

      var getSong = function() {
        return $http.get(url + '/' + id);
      };

      var addSong = function(newSong) {
        $http.post(url, newSong).success(function(resp) {
          $rootScope.$broadcast('song:added');
        });
      };

      var updatedPlaylist = function(id, song) {
        $http.put(url + '/' + id).success(function() {
          $rootScope.$broadcast('playlist:updated');
        });
      };

      var deleteSong = function() {
        $http.delete(url + '/' + id).success(function(resp) {
          $rootScope.$broadcast('song:deleted');
        });
      };

      return {
        addSong: addSong,
        updatedPlaylist: updatedPlaylist,
        deleteSong: deleteSong,
        getPlaylist: getPlaylist,
        getSong: getSong,
      };

    });

})();
