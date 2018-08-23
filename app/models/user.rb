require 'bcrypt'
class User < ApplicationRecord
  # include BCrypt
  has_secure_password
  validates :role, presence: true
  validates :email, presence: true, uniqueness: true
  validates_format_of :email,:with => /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/

  before_create :generate_token

  # ROLE = %w(user admin)
  enum role: %w(user admin)

  def password
    @password ||= Password.new(password_hash)
  end

  def password_hash=(new_password)
    @password = BCrypt::Password.create(new_password)
    self.password_digest = @password
  end

  private

  def generate_token
    payload = { data: Time.now }
    self.token = JWT.encode payload, nil, 'none'
  end
end
