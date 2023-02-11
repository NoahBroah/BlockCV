class ChangeColumnNull < ActiveRecord::Migration[6.1]
  def change
    change_column_null :verifications, :employer_id, true
  end
end
