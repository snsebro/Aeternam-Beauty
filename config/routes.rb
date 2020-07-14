Rails.application.routes.draw do
  resources :past_orders
  resources :reviews
  resources :collections
  resources :products
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
