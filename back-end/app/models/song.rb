class Song < ActiveRecord::Base
  belongs_to :artist
  belongs_to :genre
  
  validates :title, :url, presence: true
  validates :duration, numericality: true
end
