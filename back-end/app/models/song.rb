class Song < ActiveRecord::Base
  validates :title, :url, :artist, presence: true
  validates :duration, numericality: true
end
