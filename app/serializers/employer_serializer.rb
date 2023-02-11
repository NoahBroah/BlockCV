class EmployerSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :password_digest, :is_employer, :company

  has_many :verifications
end
