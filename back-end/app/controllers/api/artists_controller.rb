class Api::ArtistsController < ApplicationController
  def index
    @artists = Artist.all
      render json: @artists
  end

  def create
    @artist = Artist.new(artist_params)
      if @artist.save
        render json: @artist
      else
        render json: @artist.errors, status: :unprocessable_entity
      end
  end

  def show
    @artist = Artist.find(params[:id])
      render json: @artist
  end

  def update
    @artist = Artist.find(params[:id])
      if @artist.update_attributes(artist_params)
        render json: @artist
      else
        render json: @artist.errors, status: :unprocessable_entity
      end
  end

  def destroy
    @artist = Artist.find(params[:id])
    @artist.destroy
      render head: :no_content
  end

  private

  def artist_params
    params.require(:artist).permit(:name, :bio)
  end
end
