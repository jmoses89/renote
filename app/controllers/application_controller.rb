class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def logged_in?
    !!current_user
  end

  def log_in(user)
    flash[:info] = "Welcome back!"
    session[:user_id] = user.id
  end

  def log_out
    session.delete(:user_id)
    flash[:info] = "You have been logged out."
    @current_user = nil
  end

  def current_user
    @current_user || User.find(session[:user_id]) if session[:user_id]
  end

  helper_method :current_user, :logged_in?
end
