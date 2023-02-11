class CreateVerifications < ActiveRecord::Migration[6.1]
  def change
    create_table :verifications do |t|
      t.references :employer, null: false, foreign_key: true
      t.references :employee, null: false, foreign_key: true
      t.boolean :is_verified

      t.timestamps
    end
  end
end
