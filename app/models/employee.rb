class Employee < ApplicationRecord
    has_secure_password

    
    validates :email, uniqueness: true, presence: true
    validates :password, :first_name, :last_name, presence: true
    has_many :jobs, dependent: :destroy
end