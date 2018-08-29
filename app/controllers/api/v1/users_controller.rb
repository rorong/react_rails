class Api::V1::UsersController < ApplicationController

  before_action :authenticate_api_user, only: :update_user
  before_action :selected_user, only: %w(update show)

  def create
    if params[:user][:role].eql? "admin"
      @user = Admin.new(user_params)
    else
      @user = User.new(user_params)
    end
    @user.password_hash = user_params[:password]
    if @user.save
      render json: @user
    else
      render json: {message: @user.try(:errors).try(:full_messages)}, status: :bad_request
    end
  end

  def login
    user = User.find_by_email(user_params[:email])
    if user.present? && user.authenticate(user_params[:password])
      if user.admin?
        render json: {users: User.where(role: 'user')}
      else
        render json: {users: user}
      end
    else
      render json: {message: "Invalid credentials!"}, status: :unauthorized
    end
  end


  def show
    render json: @user
  end

  def update
    if @user.present? && @user.update(user_params)
      render json: {users: User.where(role: 'user')}
    end
  end

  def update_user
    if @current_api_user.update(user_params)
      render json: @current_api_user
    end
  end

  def index
  end

  private

  def selected_user
    @user = User.find_by(id: params[:id])
  end

  def user_params
    params.require(:user).permit(:full_name, :email, :password, :role)
  end
end
