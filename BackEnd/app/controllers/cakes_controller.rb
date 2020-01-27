class CakesController < ApplicationController

  def index
    @cakes = Cake.all
    render json: @cakes
  end

  def show
    @cake = Cake.find(params[:id])
    render json: @cake
  end

  def create
    @cake = Cake.create(cake_params)
    render json: @cake
  end

  private

  def cake_params
    params.permit(:name, :flavor)
  end
  
end
