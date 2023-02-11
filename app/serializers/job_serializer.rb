class JobSerializer < ActiveModel::Serializer
  attributes :id, :company, :position, :job_duties, :employee_id
  has_one :employee
end
