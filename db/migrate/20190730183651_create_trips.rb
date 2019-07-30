class CreateTrips < ActiveRecord::Migration[5.2]
  def change
    create_table :trips do |t|
      t.string :departure_station
      t.string :arrival_station
      t.datetime :from_date
      t.datetime :to_date

      t.timestamps
    end
  end
end
