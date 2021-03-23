Rails.application.routes.draw do
  resources :favorites
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      get 'gifs/search', to: 'gifs#search_gifs'
      resources :favorites
    end
  end
end
