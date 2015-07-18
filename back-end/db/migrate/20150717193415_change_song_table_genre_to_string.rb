class ChangeSongTableGenreToString < ActiveRecord::Migration
  def change
    change_column :songs, :genre, :string
  end
end
