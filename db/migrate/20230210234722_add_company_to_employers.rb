class AddCompanyToEmployers < ActiveRecord::Migration[6.1]
  def change
    add_column :employers, :company, :string
  end
end
