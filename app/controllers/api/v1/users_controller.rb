class Api::V1::UsersController < ApplicationController

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
    @user = User.find_by_email(user_params[:email])
    if @user.present? && @user.authenticate(user_params[:password])
      render json: @user
    else
      render json: {message: "Invalid credentials!"}, status: :unauthorized
    end
  end

  private

  def user_params
    params.require(:user).permit(:full_name, :email, :password, :role)
  end
end
