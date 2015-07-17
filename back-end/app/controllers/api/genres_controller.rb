class Api::GenresController < ApplicationController
  def index
    @genres = Genre.all
      render json: @genres
  end

  def create
    @genre = Genre.new(genre_params)
      if @genre.save
        render json: @genre
      else
        render json: @genre.errors, status: :unprocessable_entity
      end
  end

  def show
    @genre = Genre.find(params[:id])
      render json: @genre
  end

  def update
    @genre = Genre.find(params[:id])
      if @genre.update_attributes(genre_params)
        render json: @genre
      else
        render json: @genre.errors, status: :unprocessable_entity
      end
  end

  def destroy
    @genre = Genre.find(params[:id])
    @genre.destroy
      render head: :no_content
  end

  private

  def genre_params
    params.require(:genre).permit(:name)
  end
end
