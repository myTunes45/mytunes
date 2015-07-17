require 'test_helper'

class Api::SongsControllerTest < ActionController::TestCase
  def setup
    @songs = Song.all
  end

  test 'GET #index' do
    get :index
    returned = JSON.parse(response.body, symbolize_names: true)
    @songs.each do |song|
      returned_song = returned.select { |s| s[:id] == song.id }.first
      [:id, :title, :duration, :album, :url, :artist_id, :genre_id].each do |attr|
        assert_equal song.send(attr), returned_song[attr]
      end
    end
    assert_response :success
  end

  test "POST create an song" do
    attributes = { title: 'test', duration: 130, album: 'test album', url: 'www.google.com' }
    assert_difference('Song.count', 1) do
    post :create, song: attributes, format: :json
    end
    puts attributes.inspect
    assert_response :success
  end

  test "GET show an song" do
    get :show, id: @song, format: :json
    response_item = JSON.parse(response.body)
    ['id', 'title', 'duration', 'album', 'url'].each do |attr|
      assert_equal @song.send(attr), response_item[attr]
    end
    assert_response :success
  end

  test "PATCH update an song" do
    patch :update, format: :json, id: @song, song: { title: 'test', duration: 130, album: 'test album', url: 'www.google.com' }
    assert_response :success
  end

  test "DELETE an song" do
    assert_difference('Song.count', -1) do
    delete :destroy, format: :json, id: @song
    end
  end
end
