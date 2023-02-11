class ChangeDefaultValue < ActiveRecord::Migration[6.1]
  def change
    change_column :verifications, :is_verified, :boolean, default: false
  end
end
