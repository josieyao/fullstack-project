require 'rails_helper'

RSpec.describe "Favorites", type: :request do

    before {get '/api/v1/favorites'}
    
    it 'returns status code 200' do
        expect(response).to have_http_status(:success)
    end

end
