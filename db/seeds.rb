# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Review.destroy_all
User.destroy_all
Product.destroy_all

@admin = User.create!(name: 'Shayne', username: 'snsebro', password: 'password', is_admin: true)

# @customer = User.create!(name: 'Nathan', username: 'kenji1001', password: 'password', is_admin: false)

@night_repair = Product.create!(name: 'Estee Lauder Advanced Night Repair', on_sale: false, new_in: true, product_shot: 'https://i.ibb.co/f2zgqR5/night-repair.jpg', alt_shot: 'https://i.ibb.co/RgN3J9r/Screen-Shot-2020-07-20-at-4-13-47-PM.png', product_details: 'What it is: A powerful serum that significantly helps reduce the look of aging.

Skin Type: Normal, Dry, Combination, and Oily

Skincare Concerns: Fine Lines and Wrinkles, Dryness, and Dullness and Uneven Texture

Formulation: Serum

Ingredient Callouts: This product contains less than one percent of synthetic fragrances. It’s also dermatologist and ophthalmologist-tested and non-acnegenic.

What Else You Need to Know: Advanced Night Repair Synchronized Recovery Complex II hydrates and adds radiance for more youthful-looking skin. This powerful nighttime renewal uses Exclusive ChronoluxCB™ Technology to significantly reduce the look of key signs of aging.

Clinical Results: After 4 weeks of using Advanced Night Repair Synchronized Recovery Complex II:
- 75% agreed their skin looked more youthful
- 75% agreed their skin feels smoother, hydrated, and stronger
- 82% agreed their skin was more radiant and evenly toned
- 83% agreed their skin looked healthier and fresher', price: 75)

@nars_concealer = Product.create!(name: 'Nars Soft Matte Complete Concealer', on_sale: false, new_in: true, product_shot: 'https://i.ibb.co/DMsx87d/nars-concealer.jpg', alt_shot:'https://i.ibb.co/xGTYNmb/Screen-Shot-2020-07-20-at-4-21-15-PM.png', product_details: 'What it is: A full-coverage, oil-free concealer that conceals and blurs imperfections with a soft-matte, natural-looking finish.

Coverage: Full

Finish: Matte

Formulation: Cream

Skin Type: Normal, Dry, Combination, and Oily

Highlighted Ingredients:
- Peptides: Reduce appearance of wrinkles and pores over time.
- Hyaluronic Acid: Reduce appearance of wrinkles and pores.
- Antioxidants (Vitamins A, C, and E): Deliver Daily Defense.

Ingredient Callouts: Free of sulfates SLS and SLES, parabens, formaldehydes, formaldehyde-releasing agents, phthalates, oil, mineral oil, oxybenzone, coal tar, hydroquinone, triclosan, and triclocarban, and contains less than one percent of synthetic fragrances. This product is also vegan and gluten-free.

What Else You Need to Know: NARS’s Soft-Focus Smoothing Complex contains Optimal Diffusion Powder, which transforms the look of skin by blurring imperfections with light-diffusing spheres. The formula delivers all-day wear and high coverage that’s non-cakey, and won’t settle into fine lines and pores.', price: 30)

@eyeliner = Product.create!(name:'Nars Precision Lip Liner', on_sale: false, new_in: true, product_shot:'https://i.ibb.co/TTDw7LH/chanel-liner.jpg', alt_shot:'https://i.ibb.co/5L4krZ1/Screen-Shot-2020-07-20-at-4-25-05-PM.png', product_details:'What it is:
A highly pigmented wooden lip liner pencil that sharply defines lips with smooth, comfortable, budge-proof, laser-focus precision.

What it does:
The Precision Lip Liner offers laser-focus precision sharply defines with comfort. Highly pigmented matte color glides on smoothly to create shape, definition and various lip effects. Wooden sharpenable pencil allows for clean, well-defined application. Wide shade range to ensure a perfect match.

What else you need to know:
Precision Lip Liner precisely defines and fills in lips with its high pigmented, matte formula. Artistry precision with rich color payoff allows for various creative lip liner effects. Long-wearing color stays true while vitamin E, silk powder, and mango seed oil leave lips feeling smooth and soft. Laser-focus precision sharply defines with maximum comfort and budge-proof color. They’re available in a wide shade range to mix, match, line, and layer to create any lip look.

"I see the strength of rich, smoldering lips against a fresh face."—François Nars, Founder and Creative Director of NARS Cosmetics', price: 24)

@top_shop_eyeliner = Product.create!(name: 'TopShop Multipurpose Primer Pencil', on_sale: false, new_in: false, product_shot:'https://i.ibb.co/rcQ70hx/topshop-eye-liner.jpg', alt_shot:'https://i.ibb.co/j6SNz6g/Screen-Shot-2020-07-20-at-4-32-38-PM.png', product_details:'What it is:
A clear, creamy, and long-lasting primer pencil with a thick barrel.

What it does:
This all-in-one Primer Pencil features a thick-barreled design. It works to hide blemishes, prevent lip color feathering, correct mistakes, and even fill in fine lines in just one swipe. Inspired by the bestselling slim-barreled Ozone 24/7 Glide-On Lip Pencil, Ultimate Ozone is an indispensable primer in pencil form. Its thick shape makes it easy to apply, and this creamy, long-lasting formula glides on clear to prevent your most embarrassing beauty nightmares. Enriched with jojoba oil, it nourishes the skin, ensuring a smooth application, and the moisturizing formula never feels dry or cakey.

What it is formulated WITHOUT:
- Parabens',price: 37)

@countour = Product.create!(name: 'Nars HD Contour Palette', on_sale: false, new_in: true, product_shot: 'https://i.ibb.co/XZgg6SH/nars-collection.jpg', alt_shot: 'https://i.ibb.co/vd7CqJH/Screen-Shot-2020-07-20-at-6-07-43-PM.png', product_details: 'What it is:
A selection of 12 essential concealer cream shades that camouflage, conceal, correct, or contour the skin tone.

What it does:
These palettes feature 12 essential cream shades in one palette that let you camouflage, conceal, correct, and contour the complexion. These weightless formulas go on flawlessly and seamlessly, and their refined, plant-based ingredients are infused with a sensitive skin formula. Reliable HD film industry standard, these palettes are a kit staple worldwide. The Corrector, Contour, Camouflage HD Palette: 01 can be used on eyes and face for highlighting, neutralizing, contouring, achieving buildable fine coverage, concealing tattoos, hyper-pigmentation, scars, and balancing pigmentation. The palette includes a range of shades with yellow, salmon, green, orange and pink undertones in a range for all skin tones.

The sister collection, Corrector, Contour, Camouflage HD Palette: 02, is known as an HD film industry standard, for its ability to “white out” imperfections and is the go-to palette for a number of makeup artists. It offers a range of shades in pale yellow, dark salmon, pale green, medium orange, pink, and yellow undertones for a range of skin tones.

What it is formulated WITHOUT:
- Parabens

What else you need to know:
The 01 palette features 12 cream shades face for highlighting, neutralizing, contouring, buildable fine coverage, concealing tattoos, hyperpigmentation, scars, and balancing pigmentation. This palette offers a range of shades in yellow, salmon, green, orange and pink undertones for all skin tones The 02 palette features 12 cream shades that work to camouflage, conceal, correct, and contour skin tones.

These products contain organic ingredients, and they are not tested on animals and are free of silicone, petrochemicals, and mineral oil.
', price: 65.50)

@toner = Product.create!(name: 'Cover FX Glitter Drops', on_sale: true, new_in: true, product_shot: 'https://i.ibb.co/bJv0k9H/coverfx.jpg', alt_shot: 'https://i.ibb.co/Pm87BTq/Screen-Shot-2020-07-20-at-6-31-23-PM.png', product_details: 'What it is:
A multidimensional glitter highlighter that imparts a high impact, light-reflective finish.

What it does:
Ultra-concentrated and customizable, these liquid glitters can be used alone, under or over makeup, or mixed into your favorite beauty product for an incredibly luxe glitter effect on the cheeks, eyes, lips, and body.

What it is formulated WITHOUT:
- Parabens

What else you need to know:
This product is cruelty-free and vegan.

Clean at Sephora
When you spot our Clean seal, you can be sure we’ve checked that this brand’s product is made without the ingredients you told us you’d most like to avoid. 

Clean at Sephora™ is formulated without: 
Sulfates SLS and SLES, parabens, formaldehydes, formaldehyde-releasing agents, phthalates, mineral oil, retinyl palmitate, oxybenzone, coal tar, hydroquinone, triclosan, triclocarban. All skincare, hair, and makeup brands with the Clean Seal have less than one percent of synthetic fragrances.', price: 20.50)

@facewash = Product.create!(name: 'KKW Contour Stick Set', on_sale: false, new_in: true, product_shot: 'https://i.ibb.co/QPS0ydd/kkw.png', alt_shot: 'https://i.ibb.co/cwJFG3V/kkw-biege.jpg', product_details: 'What it is:
A multidimensional glitter highlighter that imparts a high impact, light-reflective finish.

What it does:
Ultra-concentrated and customizable, these liquid glitters can be used alone, under or over makeup, or mixed into your favorite beauty product for an incredibly luxe glitter effect on the cheeks, eyes, lips, and body.

What it is formulated WITHOUT:
- Parabens

What else you need to know:
This product is cruelty-free and vegan.

Clean at Sephora
When you spot our Clean seal, you can be sure we’ve checked that this brand’s product is made without the ingredients you told us you’d most like to avoid. 

Clean at Sephora™ is formulated without: 
Sulfates SLS and SLES, parabens, formaldehydes, formaldehyde-releasing agents, phthalates, mineral oil, retinyl palmitate, oxybenzone, coal tar, hydroquinone, triclosan, triclocarban. All skincare, hair, and makeup brands with the Clean Seal have less than one percent of synthetic fragrances.', price: 75.50)

@blush = Product.create!(name: 'Lamer Bronzed Blush Palette', on_sale: true, new_in: true, product_shot: 'https://i.ibb.co/cN9kgRK/soliel-de-la-mer.jpg', alt_shot: 'https://i.ibb.co/ZHGJfwy/Screen-Shot-2020-07-20-at-6-37-59-PM.png', product_details: 'What it is:
A groundbreaking hybrid that combines the customized lighting effects of Ambient Lighting Powder or Strobe Powder with a spectrum of breathtakingly modern hues.

What it does:
While traditional blush tends to be flat, the Ambient® Lighting Blush Collection uses Photoluminescent Technology to exhibit depth and dimension with seamless blending. The handmade powders are formulated using an advanced miscelare technique—which means "to mix" in Italian—creating the perfect balance of pigment and powder. No two look alike.

The Ambient® Lighting Blush Collection features airy, lightweight blushes to flatter a range of skin tones. Hourglass’s original collection of Ambient® Lighting Blush fuses universally flattering Ambient Lighting Powders with vivid cheek colors for soft-focus, multidimensional color with a naturally radiant finish. The new collection of Ambient Strobe Lighting Blush fuses the illuminating effects of Ambient Strobe Lighting Powder with modern color to brighten cheeks for glowing, lit-from-within color with a shimmer finish.

What it is formulated WITHOUT:
- Parabens
- Sulfates
- Phthalates

What else you need to know:
The optically transparent particles alter the appearance of the skin by manipulating and refracting favorable light. The result is skin that looks smooth, even, and enhanced—not masked. The soft-focus technology helps to minimize the look of wrinkles and imperfections, neutralize discoloration, and emulate the appearance of young, healthy skin.

"Traditional blush can read as flat, and so I was inspired to create something that was far more seamless. The Ambient Lighting Blush Collection fuses two advanced formulas to create something entirely new. It’s unlike any other product on the market."—Carisa Janes, Hourglass Brand Founder

Hourglass products are 100 percent cruelty-free.', price: 45.50)

@toner = Product.create!(name: 'Huile Ecalt Visage Petail Toner', on_sale: false, new_in: true, product_shot: 'https://i.ibb.co/TthMTmm/pink-flowers.jpg', alt_shot: 'https://i.ibb.co/cbjgtLF/Screen-Shot-2020-07-20-at-6-41-38-PM.png', product_details: 'What it is: A three-in-one setting spray that preps, sets, and refreshes makeup—available in two translucent shades for fair-to-medium and medium-to-deep skin tones.

What Else You Need to Know: This long-lasting setting spray is inspired by backstage makeup techniques at Dior’s runway shows. A genuine glow booster and skin perfector, Airflash Radiance Mist gives the complexion a look of radiance and vitality. The formula uses a micro-diffusion technique to set makeup. Light-enhancing pigments help revive the complexion’s natural glow, while hyaluronic acid supports skin’s natural hydration with each use.

Clinical Results: In a consumer test of 64 subjects over 1 week, used with their normal foundation:
- 100% of testers reported that their makeup was more resistant to melting, cracking, sliding, and fading', price: 20.10)

# @lipstick_review1 = Review.create!(stars: 5, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sem leo, interdum eget lectus eget, volutpat efficitur lectus. Duis ac semper odio. Maecenas ex enim, eleifend eu elit ac, interdum posuere purus. Donec egestas eros eget turpis imperdiet, vitae ullamcorper sem tempus. Vestibulum ac porttitor lorem.', product_id: @lipstick.id, user_id: @customer.id)

# @lipstick_review2 = Review.create!(stars: 5, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sem leo, interdum eget lectus eget, volutpat efficitur lectus. Duis ac semper odio. Maecenas ex enim, eleifend eu elit ac, interdum posuere purus. Donec egestas eros eget turpis imperdiet, vitae ullamcorper sem tempus. Vestibulum ac porttitor lorem.', product_id: @lipstick.id, user_id: @customer.id)

# @lipstick_review3 = Review.create!(stars: 5, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sem leo, interdum eget lectus eget, volutpat efficitur lectus. Duis ac semper odio. Maecenas ex enim, eleifend eu elit ac, interdum posuere purus. Donec egestas eros eget turpis imperdiet, vitae ullamcorper sem tempus. Vestibulum ac porttitor lorem.', product_id: @lipstick.id, user_id: @customer.id)

# @lipstick_review4 = Review.create!(stars: 5, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sem leo, interdum eget lectus eget, volutpat efficitur lectus. Duis ac semper odio. Maecenas ex enim, eleifend eu elit ac, interdum posuere purus. Donec egestas eros eget turpis imperdiet, vitae ullamcorper sem tempus. Vestibulum ac porttitor lorem.', product_id: @lipstick.id, user_id: @customer.id)

# @lipstick_review5 = Review.create(stars: 5, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sem leo, interdum eget lectus eget, volutpat efficitur lectus. Duis ac semper odio. Maecenas ex enim, eleifend eu elit ac, interdum posuere purus. Donec egestas eros eget turpis imperdiet, vitae ullamcorper sem tempus. Vestibulum ac porttitor lorem.', product_id: @lipstick.id, user_id: @customer.id)

# @lipstick_review6 = Review.create(stars: 5, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sem leo, interdum eget lectus eget, volutpat efficitur lectus. Duis ac semper odio. Maecenas ex enim, eleifend eu elit ac, interdum posuere purus. Donec egestas eros eget turpis imperdiet, vitae ullamcorper sem tempus. Vestibulum ac porttitor lorem.', product_id: @lipstick.id, user_id: @customer.id)

