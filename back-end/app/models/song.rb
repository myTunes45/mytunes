class Song < ActiveRecord::Base
  validates :title, :url, :artist, presence: true
end
