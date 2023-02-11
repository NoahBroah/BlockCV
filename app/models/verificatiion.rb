class Verificatiion < ApplicationRecord
  belongs_to :employer
  belongs_to :employee

  before_create :set_verified_to_false

  private
    def set_verified_to_false
      self.verified ||= false
    end
    
end
