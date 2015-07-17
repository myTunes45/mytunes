class Api::SongsController < ApplicationController
  def index
    @songs = Song.all
      render json: @songs
  end

  def create
    @song = Song.new(song_params)
      if @song.save
        render json: @song
      else
        render json: @song.errors, status: :unprocessable_entity
      end
  end

  def show
    @song = Song.find(params[:id])
      render json: @song
  end

  def update
    @song = Song.find(params[:id])
      if @song.update_attributes(song_params)
        render json: @song
      else
        render json: @song.errors, status: :unprocessable_entity
      end
  end

  def destroy
    @song = Song.find(params[:id])
    @song.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private

  def song_params
    params.require(:song).permit(:title, :duration, :url, :album, :artist, :genre)
  end
end
