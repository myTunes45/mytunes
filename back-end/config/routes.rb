Rails.application.routes.draw do
  namespace :api do
    resources :songs, except: [:new, :edit]
    resources :artists, except: [:new, :edit]
    resources :genres, except: [:new, :edit]
  end
end
