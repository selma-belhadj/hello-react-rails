class V1::GreetingsController < ApplicationController
  def index
    @greeting = Greeting.order('RANDOM()').first
    render json: { data: @greeting, status: 200 }
  end
end
