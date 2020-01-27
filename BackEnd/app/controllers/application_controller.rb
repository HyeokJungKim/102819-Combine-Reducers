class ApplicationController < ActionController::API

  def all
    @goats = Goat.all
    @cakes = Cake.all
    render json: {goats: @goats, cakes: @cakes}
  end
end
