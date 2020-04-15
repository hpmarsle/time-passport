class CreateTimers < ActiveRecord::Migration[6.0]
  def change
    create_table :timers do |t|
      t.string :name
      t.string :elapsed_time
      t.string :date
      t.belongs_to :category
      t.timestamps
    end
  end
end
