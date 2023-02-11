class Job < ApplicationRecord
    belongs_to :employee
    # has_one :verification
end
