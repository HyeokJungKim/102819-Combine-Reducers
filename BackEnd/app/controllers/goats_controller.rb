class GoatsController < ApplicationController

  def index
    @goats = Goat.all
    render json: @goats
  end

  def show
    @goat = Goat.find(params[:id])
    render json: @goat
  end

  def create
    @goat = Goat.create(goat_params)
    render json: @goat
  end

  private

  def goat_params
    params.permit(:name, :tail_length)
  end

end
