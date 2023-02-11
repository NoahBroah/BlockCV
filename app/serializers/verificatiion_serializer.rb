class VerificatiionSerializer < ActiveModel::Serializer
  attributes :id, :is_verified
  has_one :employer
  has_one :employee
end
