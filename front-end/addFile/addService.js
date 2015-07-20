(function() {
  'use strict';
  angular
    .module('addFile')
    .factory('addService', ['$http', '$rootScope', function($http, $rootScope) {
      var url = 'https://shrouded-sierra-3476.herokuapp.com/api/songs'
      function addSong(song) {
        $http.post(url, song).then(function (res) {
          $rootScope.$broadcast("song:added");
          alert('Song Added!');
        });
      };
      function getSongs() {
        return $http.get(url).then(function(songs){
          return songs.data;
        })
      };
      function deleteSong(id) {
        return $http.delete(url + '/' + id + '.json').then(function(song){
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
