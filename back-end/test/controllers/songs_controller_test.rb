require 'test_helper'

class Api::SongsControllerTest < ActionController::TestCase
  def setup
    @songs = Song.all
    @song = songs(:one)
  end

  test 'GET #index' do
    get :index
    returned = JSON.parse(response.body, symbolize_names: true)
    @songs.each do |song|
      returned_song = returned.select { |s| s[:id] == song.id }.first
      [:id, :title, :duration, :album, :url, :artist, :genre].each do |attr|
        assert_equal song.send(attr), returned_song[attr]
      end
    end
    assert_response :success
  end

  test "POST create a song" do
    assert_difference('Song.count', 1) do
      post :create, format: :json, song: { title: 'test', duration: '130', album: 'test album', url: 'www.google.com', artist: 'test artist1', genre: 'test genre' }
    end
    assert_response :success
  end

  test "GET show a song" do
      get :show, id: @song, format: :json
      response_item = JSON.parse(response.body)
      ['id', 'title', 'duration', 'album', 'url', 'artist', 'genre'].each do |attr|
        assert_equal @song.send(attr), response_item[attr]
    end
    assert_response :success
  end

  test "PATCH update a song" do
    patch :update, format: :json, id: @song, song: { title: 'test', duration: 130, album: 'test album', url: 'www.google.com', artist: 'test artist1', genre: 'test genre' }
    assert_response :success
  end

  test "DELETE a song" do
    assert_difference('Song.count', -1) do
    delete :destroy,  id: @song, format: :json
    end
  end
end
