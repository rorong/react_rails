class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token

  def authenticate_api_user
    begin
      puts request.headers
      @current_api_user = User.find_by_token(request.headers["HTTP_APISECRET"])
      raise "user_not_found" if @current_api_user.nil?
    rescue Exception => @e
      puts "error_exception #{Time.now} #{@e.message}"
      err_hash={}
      err_hash[:error]=@e.message
      status = :unauthorized
      render json: err_hash.to_json, status: status
    end
  end

end
