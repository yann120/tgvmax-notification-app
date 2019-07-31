# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Trip.create(departure_station:"Paris", arrival_station: "Nice", from_date:DateTime.parse("04/08/2019 6:00"), to_date:DateTime.parse("04/08/2019 18:00"))
Trip.create(departure_station:"Nice", arrival_station: "Bordeaux", from_date:DateTime.parse("05/08/2019 6:00"), to_date:DateTime.parse("05/08/2019 18:00"))
Trip.create(departure_station:"Toulouse", arrival_station: "Paris", from_date:DateTime.parse("06/08/2019 6:00"), to_date:DateTime.parse("06/08/2019 18:00"))
Trip.create(departure_station:"Paris", arrival_station: "Lyon", from_date:DateTime.parse("07/08/2019 6:00"), to_date:DateTime.parse("07/08/2019 18:00"))

