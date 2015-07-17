require 'test_helper'

class Api::GenresControllerTest < ActionController::TestCase
  def setup
    @genres = Genre.all
  end

  test 'GET #index' do
    get :index
    returned = JSON.parse(response.body, symbolize_names: true)
    @genres.each do |genre|
      returned_genre = returned.select { |s| s[:id] == genre.id }.first
      [:id, :name].each do |attr|
        assert_equal genre.send(attr), returned_genre[attr]
      end
    end
    assert_response :success
  end

  test "POST create an genre" do
    attributes = { name: 'test genre' }
    assert_difference('Genre.count', 1) do
    post :create, format: :json, genre: attributes
    end
    assert_response :success
  end

  test "GET show an genre" do
    get :show, id: @genre, format: :json
    response_item = JSON.parse(response.body)
    ['id', 'name'].each do |attr|
      assert_equal @genre.send(attr), response_item[attr]
    end
    assert_response :success
  end

  test "PATCH update an genre" do
    patch :update, format: :json, id: @genre, genre: { name: 'test' }
    assert_response :success
  end

  test "DELETE an genre" do
    assert_difference('Genre.count', -1) do
    delete :destroy, format: :json, id: @genre
    end
  end
end
