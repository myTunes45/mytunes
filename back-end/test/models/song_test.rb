require 'test_helper'

class SongTest < ActiveSupport::TestCase
  def setup
    @song = songs(:one)
  end

  test "the fixture is valid" do
    assert @song.valid?
  end

  test "belongs to genre" do
      assert_respond_to @song, :genre
      @song.genre = genres(:one)
      assert_instance_of Genre, @song.genre
    end

    test "belongs to artist" do
      assert_respond_to @song, :artist
      @song.artist = artists(:one)
      assert @song.artist.instance_of?(Artist)
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

  test "duration must be a number" do
    @song.duration = "120 seconds"
    refute @song.valid?
    assert @song.errors.keys.include?(:duration)
  end
end
