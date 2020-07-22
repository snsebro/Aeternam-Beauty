# Aeternam-Beauty
E-commerce Beauty Platform

## Overview

**Aeternam Beauty** is an e-commerce beauty platform built using a React.js client with Ruby on rails powering the backend. Users on the frontend will be able to browse products, create shopping carts, and explore makeup inspiration. While shop owners will be able to manage their inventory on the backend, creating and editing various product attributes based on customer demand.

<br>

## MVP

The **Aeternam Beauty** MVP will consist of an easy to navigate frontend site, that will display all products within the current inventory database with users being able to filter products by various criteria (ex. price, collection, or sale). Additionally authentication will be provided allowing logged in users to create reviews for various products. Authentication will also allow logged in shop owners to create, edit, and delete products ultimately controlling what is rendered on the frontend.

<br>
****
### Goals

- Create a well designed easy to navigate frontend site
- Implement authentication to limit permissions on certain site interactions
- Allow customers to create reviews for products to be rendered on the individual product page

<br>

### Libraries and Dependencies


|    Library    | Description                                    |
| :-----------: | :--------------------------------------------- |
|     React     | Frontend client side rendering                 |
| React Router  | Rendering specific components given URL params |
| Ruby on Rails | Backend database management                    |
|     Axios     | API call management                            |

<br>

### Client (Front End)

#### Wireframes

[Adobe XD Link](https://xd.adobe.com/view/ae995890-0805-4880-47c4-471f98c883f9-d8a8/)

#### Component Hierarchy


``` structure

src
|__ assets/
      |__ icons
      |__ site_images
      |__ wireframes
      |__ ERD
|__ components/
      |__ Header
        |__ Header.jsx
        |__ Header.css
      |__ Footer  
        |__ Footer.jsx
        |__ Footer.css
      |__ HeroCTA
        |__ HeroCTA.jsx
        |__ HeroCTA.css
      |__ ProductList
        |__ProductList.jsx
        |__ProductList.css
      |__ Reviews
        |__ Reviews.jsx
        |__ Reviews.css
|__ pages/
      |__ Homepage
        |__ Homepage.jsx
        |__ Homepage.css
      |__ Shop
        |__ Shop.jsx
        |__ Shop.css
      |__ Login_Register
        |__ Login_Register.jsx
        |__ Login_Register.css
      |__ User_Profile
        |__ User_Profile.jsx
        |__ User_Profile.css
      |__ Inventory
        |__ Inventory.jsx
        |__ Inventory.css
      |__Products
        |__ Products.jsx
        |__ Products.css
      |__ Login-Register
        |__ Login-Register.jsx
        |__ Login-Register.css
      |__ UserProfile
        |__UserProfile.jsx
        |__ UserProfile.css
|__ services/

```

#### Component Breakdown


|  Component  |    Type    | state | props | Description                                                      |
| :---------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|   Header    |   class    |   y   |   n   | _The header will contain the navigation and logo._               |
|   Footer    | functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
| ProductList |   class    |   y   |   n   | _The gallery will render the posts using cards in flexbox._      |
|   Review    | functional |   y   |   y   | _The cards will render the post info via props._                 |
|   Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |
|  Inventory  |   class    |   n   |   n   | will render all products in current inventory._                  |

#### Time Estimates


| Task                       | Priority | Estimated Time | Time Invested | Actual Time |
| -------------------------- | :------: | :------------: | :-----------: | :---------: |
| Create CRUD Actions        |    H     |     2 hrs      |     0 hrs     |     TBD     |
| AUTH Functionality         |    H     |     5 hrs      |     0 hrs     |     TBD     |
| Create model relationships |    H     |     3 hrs      |     0 hrs     |     TBD     |
| CSS                        |    H     |     5 hrs      |     0 hrs     |     TBD     |
| React Functionality        |    H     |     7 hrs      |     0 hrs     |     TBD     |
| Collect site assets        |    M     |     2 hrs      |     0 hrs     |     TBD     |
| Add to portfolio site      |    L     |     1 hrs      |     0 hrs     |     TBD     |
| TOTAL                      |          |     25 hrs     |     0 hrs     |     TBD     |


<br>

### Server (Back End)

#### ERD Model

![Alt text](./assets/Aeternam-Final-ERD.jpg?raw=true "Optional Title")

<br>

***

## Post-MVP

- Implement Payment Verification
- Incorporate video tutorials with youtube API
- Create Inventory/Review Management system for Owners
- Create shade finding algo to determine a users hypothetical best tone match

***

## Code Showcase



## Code Issues & Resolutions


## Artist Credits
Much of the design impact of this project is achieved with the use of high quality photo assets. As such please see credits below for images used throughout the site and check out these artists' work!

**TO BE UPDATED**
