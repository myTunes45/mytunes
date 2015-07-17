class AddAlbumToSongsTable < ActiveRecord::Migration
  def change
    add_column :songs, :album, :string
  end
end
