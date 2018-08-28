class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :password_digest, null: false
      t.integer :role, default: 0
      t.string :full_name
      t.string :type
      t.string :token
      t.timestamps
    end
  end
end
