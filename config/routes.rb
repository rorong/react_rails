Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  get 'hello_world/adminlogin', to: 'hello_world#adminlogin'
  get 'hello_world/userlogin', to: 'hello_world#userlogin'
  get 'hello_world/admin', to: 'hello_world#admin'
  get 'hello_world/user', to: 'hello_world#user'
  # devise_for :users

  namespace :api do
    namespace :v1 do
      resources :users do
        collection do
          post "login"
          put "update_user"
        end
      end
    end
  end
end
