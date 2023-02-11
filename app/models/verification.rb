class Verification < ApplicationRecord
  belongs_to :employer, optional: true
  belongs_to :employee

 
end
