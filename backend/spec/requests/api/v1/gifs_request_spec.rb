require 'rails_helper'
require 'giphy'

RSpec.describe "Api::V1::Gifs", type: :request do

    before {get '/api/v1/gifs/search'}
    
    it 'returns status code 200' do
        expect(response).to have_http_status(:success)
    end

end
