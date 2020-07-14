class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.boolean :on_sale
      t.boolean :new_in
      t.string :product_shot, null: false
      t.string :alt_shot, null: false
      t.string :product_details, null: false
      t.integer :price, null: false

      t.timestamps
    end
  end
end
