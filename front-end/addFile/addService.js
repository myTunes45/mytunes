(function() {
  'use strict';
  angular
    .module('addFile')
    .factory('addService', ['$http', '$rootScope', function($http, $rootScope) {
      var url = 'http://tiy-fee-rest.herokuapp.com/collections/myTunes1'
      return {
        addSong: addSong
      };
      function addSong(song) {
        $http.post(url, song).then(function (res) {
          $rootScope.$broadcast("song:added");
        });
      }

    }]);
}());
