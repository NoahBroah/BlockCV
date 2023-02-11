class Employer < ApplicationRecord
    has_secure_password

    validates :email, uniqueness: true, presence: true
    validates :password, :first_name, :last_name, presence: true

    has_many :employees, through: :verifications
    has_many :verifications
end