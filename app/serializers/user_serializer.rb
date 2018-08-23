class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :password_digest, :full_name, :type, :token
end
