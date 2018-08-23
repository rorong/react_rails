Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  get 'hello_world/adminlogin', to: 'hello_world#adminlogin'
  get 'hello_world/userlogin', to: 'hello_world#userlogin'
  get 'hello_world/admin', to: 'hello_world#admin'
  get 'hello_world/user', to: 'hello_world#user'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
