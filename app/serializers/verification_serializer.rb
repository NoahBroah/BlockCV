class VerificationSerializer < ActiveModel::Serializer
  attributes :id, :is_verified, :employer_id, :employee_id
  has_one :employer
  has_one :employee
end
