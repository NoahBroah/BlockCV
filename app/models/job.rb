class Job < ApplicationRecord
    belongs_to :employee
    
#     validate :verify_employee_company_matches_employer_company, on: :create

#   private

#   def verify_employee_company_matches_employer_company
#     employer = employee.employers.find_by(company: company)
#     if employer.nil?
#       errors.add(:company, "must match employer company")
#     end
#   end
end
