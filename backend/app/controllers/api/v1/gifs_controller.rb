class Api::V1::GifsController < ApplicationController
    def search_gifs
        @gifs = giphy.search(params[:search])
        if @gifs.nil?
            render json: { error: "Unable to process request" }, status: 400
        else
            render json: @gifs, status: 200
        end
    end

    private

    #create new giphy instance with api key
    def giphy
        @giphy = Giphy.new(Rails.application.credentials.giphy[:secret_access_key])
    end
end
