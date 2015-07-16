class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.string :title, null: false
      t.integer :duration
      t.string :url, null: false
      t.integer :artist_id, null: false
      t.integer :genre_id, null: false

      t.timestamps null: false
    end
    add_index :songs, :artist_id
    add_index :songs, :genre_id
  end
end
