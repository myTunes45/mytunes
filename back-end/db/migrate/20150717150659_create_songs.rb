class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.string  :title,  null: false
      t.integer :duration
      t.string  :url,    null: false
      t.string  :album
      t.string  :artist, null: false
      t.string  :genre

      t.timestamps null: false
    end
  end
end
