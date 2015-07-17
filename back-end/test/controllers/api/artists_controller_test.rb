require 'test_helper'

class Api::ArtistsControllerTest < ActionController::TestCase
  def setup
    @artists = Artist.all
  end

  test 'GET #index' do
    get :index
    returned = JSON.parse(response.body, symbolize_names: true)
    @artists.each do |artist|
      returned_artist = returned.select { |s| s[:id] == artist.id }.first
      [:id, :name, :bio].each do |attr|
        assert_equal artist.send(attr), returned_artist[attr]
      end
    end
    assert_response :success
  end

  test "POST create an artist" do
    attributes = { name: 'test artist', bio: 'test info' }
    assert_difference('Artist.count', 1) do
    post :create, format: :json, artist: attributes
    end
    assert_response :success
  end

  test "GET show an artist" do
    get :show, id: @artist, format: :json
    response_item = JSON.parse(response.body)
    ['id', 'name', 'bio'].each do |attr|
      assert_equal @artist.send(attr), response_item[attr]
    end
    assert_response :success
  end

  test "PATCH update an artist" do
    patch :update, format: :json, id: @artist, artist: { name: 'test', bio: 'testing' }
    assert_response :success
  end

  test "DELETE an artist" do
    assert_difference('Artist.count', -1) do
    delete :destroy, format: :json, id: @artist
    end
  end
end
