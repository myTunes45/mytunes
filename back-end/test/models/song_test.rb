require 'test_helper'

class SongTest < ActiveSupport::TestCase
  def setup
    @song = songs(:one)
  end

  test "the fixture is valid" do
    assert @song.valid?
  end

  test "title cannot be blank" do
    @song.title = nil
    refute @song.valid?
    assert @song.errors.keys.include?(:title)
  end

  test "url cannot be blank" do
    @song.url = nil
    refute @song.valid?
    assert @song.errors.keys.include?(:url)
  end

  test "artist cannot be blank" do
    @song.artist = nil
    refute @song.valid?
    assert @song.errors.keys.include?(:artist)
  end

end
