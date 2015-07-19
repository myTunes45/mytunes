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

        $scope.playButton = function () {
          $scope.audio1.playPause();
        };

        var watchCallback = function () {
          MusicService.get().success(function (playlist) {
            $scope.playlist = playlist;
          });
        };

        var songs = [];

        songs = [
          {
           title: 'See You Again',
           artist: 'Wiz Khalif Feat. Charlie Puth',
           url: 'https://upload.wikimedia.org/wikipedia/commons/9/95/See_You_Again%28Feat._Charlie_Puth%29-Wiz_Khalif.ogg',
           genre: 'Hip Hop'
          }
          {
           title: 'Never Gonna Give You Up',
           artist: 'Rick Astley',
           url: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Rick_Astley_Never_Gonna_Give_You_Up.ogg',
           genre: 'Rickrolled'
          }
          {
           title: 'Desmond the Moonbear',
           artist: 'Dubstep',
           url: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Desmond_the_moonbear_dubstep_cut.ogg',
           genre: 'Dubstep'
          }
          {
           title: 'The Drop',
           artist: 'Dubstep',
           url: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Dubstep_drop_example.ogg'
           genre: 'Dubstep'
          }
          {
           title: 'Symphony 40',
           artist: 'Amadeus Mozart',
           url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Wolfgang_Amadeus_Mozart_-_Symphony_40_g-moll_-_2._Andante.ogg',
           genre: 'Classical'
          }
          {
           title: 'Moonlight Sonata',
           artist: 'Beethoven',
           url: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Beethoven_Moonlight_1st_movement.ogg',
           genre: 'Classical'
          }
          {
           title: 'The Wind that Shakes That Barley',
           artist: 'Dancing Willow',
           url: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Dancing_Willow_-_Demo-CD_2007_01_-_The_wind_that_shakes_that_Barley.ogg',
           genre: 'Celtic'
          }
          {
           title: 'Kailimai\'s hene',
           artist: 'Kailimai',
           url: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Ukelele_-_Kailimai%27s_hene_-_Ukepedia.ogg',
           genre: 'Hawaiian'
          }
          {
           title: 'Funkorama',
           artist: 'Kevin MacLeod',
           url: 'https://upload.wikimedia.org/wikipedia/commons/1/10/MacLeod%2C_Kevin_-_Funkorama.ogg',
           genre: 'Funk'
          }
          {
           title: 'Alone With You',
           artist: 'The Outfield',
           url: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/07_-_Alone_With_You.ogg',
           genre: 'Pop'
          }
        ];

        var options = {
          caseSensitive: false,
          shouldSort: true,
          keys: ['title']
        };

        var search = new search(songs, options);
        $scope.searchText = {};

        $scope.$watch('searchText.text', searchChange);
        function searchChange() {
          if ($scope.searchText.text) {
            var result = fuse.search($scope.searchText.text);
            $scope.songTitles = results;
          } else {
            $scope.songTitles = songs;
          }
        };

        $scope.$on('playlist:updated', watchCallback);
        $scope.$on('song:deleted', watchCallback);
        $scope.$on('song:added', watchCallback);

    });
}());
