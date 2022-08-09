class V1::GreetingsController < ApplicationController
    def index
        greetings = Greeting.all
    end
end