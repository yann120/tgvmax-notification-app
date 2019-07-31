class AddPassedToTrip < ActiveRecord::Migration[5.2]
  def change
    add_column :trips, :passed, :boolean, default: false
  end
end
