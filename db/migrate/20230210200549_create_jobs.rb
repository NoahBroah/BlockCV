class CreateJobs < ActiveRecord::Migration[6.1]
  def change
    create_table :jobs do |t|
      t.string :company
      t.string :position
      t.string :job_duties
      t.integer :employee_id

      t.timestamps
    end
  end
end
