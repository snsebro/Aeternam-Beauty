Rails.application.routes.draw do
  resources :past_orders
  resources :reviews
  resources :collections
  resources :products do
    resources :reviews
  end
  resources :users do
    resources :reviews
    resources :past_orders
  end

  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
