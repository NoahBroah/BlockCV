class AddIsEmployerToEmployees < ActiveRecord::Migration[6.1]
  def change
    add_column :employees, :is_employer, :boolean
  end
end
