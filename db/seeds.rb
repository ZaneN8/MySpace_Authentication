require "faker"



Person.destroy_all

User.create(
    name: "Zane",
    age: 27,
    location: 'Home'
    avatar: Faker::Avatar.image(slug: name, size: '50x50'),
    email: 'tester@test.com',
    password: "123456"
)


50.times do |i|

    name = Faker::Movies::LordOfTheRings.character
    location = Faker::Movies::LordOfTheRings.location
    age = rand(21...100)
    avatar = Faker::Avatar.image(slug: name, size: '100x100', format:"png")
  
    Person.create(name: name, location: location, age: age, avatar: avatar)

end

puts "seeded"
puts Person.all.length

# Random.rand(1...10)
