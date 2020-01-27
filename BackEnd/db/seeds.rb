10.times do
  Goat.create(name: Faker::Superhero.name, tail_length: rand(100))
end

5.times do
  Cake.create(name: Faker::Food.dish, flavor: Faker::Food.description)
end
