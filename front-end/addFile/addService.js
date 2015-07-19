(function() {
  'use strict';
  angular
    .module('addFile')
    .factory('addService', ['$http', '$rootScope', function($http, $rootScope) {
      var url = 'http://tiy-fee-rest.herokuapp.com/collections/myTunes1'

      function addSong(song) {
        $http.post(url, song).then(function (res) {
          $rootScope.$broadcast("song:added");
        });
      };
      function getSongs() {
        return $http.get(url).then(function(songs){
          return songs.data;
        })
      };
      function deleteSong(id) {
        return $http.delete(url + '/' + id).then(function(song){
          $rootScope.$broadcast('song:deleted');
        })
      }

      return {
        addSong: addSong,
        getSongs: getSongs,
        deleteSong: deleteSong
      };

    }]);
}());
