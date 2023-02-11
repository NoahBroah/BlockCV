# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_02_11_044155) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "employees", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "is_employer", default: false
  end

  create_table "employers", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "is_employer", default: true
    t.string "company"
  end

  create_table "jobs", force: :cascade do |t|
    t.string "company"
    t.string "position"
    t.string "job_duties"
    t.integer "employee_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "verificatiions", force: :cascade do |t|
    t.bigint "employer_id", null: false
    t.bigint "employee_id", null: false
    t.boolean "is_verified"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["employee_id"], name: "index_verificatiions_on_employee_id"
    t.index ["employer_id"], name: "index_verificatiions_on_employer_id"
  end

  create_table "verifications", force: :cascade do |t|
    t.bigint "employer_id"
    t.bigint "employee_id", null: false
    t.boolean "is_verified", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["employee_id"], name: "index_verifications_on_employee_id"
    t.index ["employer_id"], name: "index_verifications_on_employer_id"
  end

  add_foreign_key "verificatiions", "employees"
  add_foreign_key "verificatiions", "employers"
  add_foreign_key "verifications", "employees"
  add_foreign_key "verifications", "employers"
end
