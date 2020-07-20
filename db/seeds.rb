# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Review.destroy_all
Product.destroy_all
User.destroy_all

@admin = User.create!(name: 'Shayne', username: 'snsebro', password: 'password', is_admin: true)

@customer = User.create!(name: 'Nathan', username: 'kenji1001', password: 'password', is_admin: false)

@lipstick = Product.create!(name: 'red lipstick', on_sale: false, new_in: true, product_shot: 'https://i.ibb.co/vj559gJ/red-lipstick.png', alt_shot: 'https://i.ibb.co/vj559gJ/red-lipstick.png', product_details: 'ruby red lip stick', price: 35.50)

@toner = Product.create!(name: 'sea kelp toner', on_sale: true, new_in: true, product_shot: 'https://i.ibb.co/zfckGqV/cosmetic-product.jpg', alt_shot: 'https://i.ibb.co/zfckGqV/cosmetic-product.jpg', product_details: 'sea kelp toner', price: 30.50)

@facewash = Product.create!(name: 'cream facewash', on_sale: false, new_in: true, product_shot: 'https://i.ibb.co/myk3Z3r/facewash-product.jpg', alt_shot: 'https://i.ibb.co/myk3Z3r/facewash-product.jpg', product_details: 'cream face wash', price: 25.75)

@retinoil = Product.create!(name: 'lancome retinoil', on_sale: true, new_in: true, product_shot: 'https://i.ibb.co/njKZWcf/JO-LOVES-SHOT-3-SUPPLY.jpg', alt_shot: 'https://i.ibb.co/njKZWcf/JO-LOVES-SHOT-3-SUPPLY.jpg', product_details: 'lancome retinoil', price: 35.51)

@mascara = Product.create!(name: 'mascara', on_sale: false, new_in: true, product_shot: 'https://i.ibb.co/BZ4SZJJ/red-lipstick-alt.png', alt_shot: 'https://i.ibb.co/BZ4SZJJ/red-lipstick-alt.png', product_details: 'mascara', price: 20.15)

@lipstick_review1 = Review.create!(stars: 5, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sem leo, interdum eget lectus eget, volutpat efficitur lectus. Duis ac semper odio. Maecenas ex enim, eleifend eu elit ac, interdum posuere purus. Donec egestas eros eget turpis imperdiet, vitae ullamcorper sem tempus. Vestibulum ac porttitor lorem.', product_id: @lipstick.id, user_id: @customer.id)

@lipstick_review2 = Review.create!(stars: 5, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sem leo, interdum eget lectus eget, volutpat efficitur lectus. Duis ac semper odio. Maecenas ex enim, eleifend eu elit ac, interdum posuere purus. Donec egestas eros eget turpis imperdiet, vitae ullamcorper sem tempus. Vestibulum ac porttitor lorem.', product_id: @lipstick.id, user_id: @customer.id)

@lipstick_review3 = Review.create!(stars: 5, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sem leo, interdum eget lectus eget, volutpat efficitur lectus. Duis ac semper odio. Maecenas ex enim, eleifend eu elit ac, interdum posuere purus. Donec egestas eros eget turpis imperdiet, vitae ullamcorper sem tempus. Vestibulum ac porttitor lorem.', product_id: @lipstick.id, user_id: @customer.id)

@lipstick_review4 = Review.create!(stars: 5, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sem leo, interdum eget lectus eget, volutpat efficitur lectus. Duis ac semper odio. Maecenas ex enim, eleifend eu elit ac, interdum posuere purus. Donec egestas eros eget turpis imperdiet, vitae ullamcorper sem tempus. Vestibulum ac porttitor lorem.', product_id: @lipstick.id, user_id: @customer.id)

@lipstick_review5 = Review.create(stars: 5, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sem leo, interdum eget lectus eget, volutpat efficitur lectus. Duis ac semper odio. Maecenas ex enim, eleifend eu elit ac, interdum posuere purus. Donec egestas eros eget turpis imperdiet, vitae ullamcorper sem tempus. Vestibulum ac porttitor lorem.', product_id: @lipstick.id, user_id: @customer.id)

@lipstick_review6 = Review.create(stars: 5, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sem leo, interdum eget lectus eget, volutpat efficitur lectus. Duis ac semper odio. Maecenas ex enim, eleifend eu elit ac, interdum posuere purus. Donec egestas eros eget turpis imperdiet, vitae ullamcorper sem tempus. Vestibulum ac porttitor lorem.', product_id: @lipstick.id, user_id: @customer.id)

