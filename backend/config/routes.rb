Rails.application.routes.draw do
  resources :favorites
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      get 'gifs/search', to: 'gifs#search_gifs'
      # get 'favorites', to: 'favorites#index'
      # post 'favorites', to: 'favorites#create'
      resources :favorites
    end
  end
end
