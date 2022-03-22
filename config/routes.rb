Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  root to: 'statics#index'
  namespace :api, defaults: {format: 'json'} do
    namespace :v1 do
      resources :messages, only: %i[index]
    end
  end

  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end

  # Defines the root path route ("/")
  # root "articles#index"
end
