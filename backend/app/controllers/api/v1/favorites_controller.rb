class Api::V1::FavoritesController < ApplicationController
    def index
        @favorites = Favorite.all 
        render json: @favorites 
    end

    def create
        @favorite = Favorite.new(favorite_params)
        if @favorite.save
            render json: @favorite
        else
            render error: { error: 'Unable to favorite' }, status: 400
        end
    end

    def favorite_params
        params.require(:favorite).permit(:giphy_id, :title, :url)
    end
end
