Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: 'json'} do
    namespace :v1 do
      resources :messages, only: %i[index]
    end
  end

  # Defines the root path route ("/")
  # root "articles#index"
end
