class V1::ThingsController < ApplicationController
    def index
        render json: { :things => [
            {
                :name => 'thing 1',
                :guide => 'thing 1 guide'
            },
            {
                :name => 'thing 2',
                :guide => 'thing 2 guide'
            }
        ] }.to_json
    end
end