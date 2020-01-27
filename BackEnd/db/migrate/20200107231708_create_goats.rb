class CreateGoats < ActiveRecord::Migration[6.0]
  def change
    create_table :goats do |t|
      t.string :name
      t.integer :tail_length

      t.timestamps
    end
  end
end
