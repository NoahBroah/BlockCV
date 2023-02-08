class AddIsEmployerToEmployers < ActiveRecord::Migration[6.1]
  def change
    add_column :employers, :is_employer, :boolean, default: true
  end
end
