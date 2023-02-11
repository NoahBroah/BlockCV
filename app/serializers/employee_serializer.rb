class EmployeeSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :password_digest, :is_employer, :jobs

  has_many :verifications
end
