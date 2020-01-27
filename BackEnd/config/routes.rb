Rails.application.routes.draw do
  resources :cakes
  resources :goats

  get '/all', to: 'application#all'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
