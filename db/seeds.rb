# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Product.destroy_all
Review.destroy_all
User.destroy_all

@admin = User.create(name: 'Shayne', username: 'snsebro', password: 'password', is_admin: true)

@customer = User.create(name: 'Nathan', username: 'kenji1001', password: 'password', is_admin: false)

@lipstick = Product.create(name: 'red lipstick', on_sale: false, new_in: true, product_shot: 'https://ibb.co/cr55qMN', alt_shot: 'https://ibb.co/SnQ9ngg', product_details: 'Ruby red lip stick', price: 35.51)

@lipstick_review = Review.create(stars: 5, content: 'wow so great', product_id: @lipstick.id, user_id: @customer.id)
