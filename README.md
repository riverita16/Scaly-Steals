# Scaly Steals
Better and more secure alternative to Craigslist and Facebook Marketplace for fellow Gators.

# Setup
### First Time
1. Install `npm` or `npx`
2. Run `npm install -g yarn`
3. `cd` to ./scaly-steals-admin/
4. Run `yarn install`
5. Ensure `.env` file is set up with proper credentials
6. Run `yarn dev`
7. Redo steps 4-6 in another terminal for ./scaly-steals-client/

### To start app on localhost
`yarn dev`

## General Overview
Admin panel:
- sign up with Google for simplicity of use
- used to manage everything on the MongoDB database that is relayed to the client front

Client front:
- shows all available product lisings
- filter by category
- log in and sign up
- like listings and add to cart
- view profile to see name of logged in user and their listings
- create a listing from the profile page
- view cart items and total

## TODOS
Client front:
- allow managing of sort and limit in server side props
- add profile ratings
- fix text display fitting on listing
- apply template
- fix clothing and vehicle svgs

Admin panel:
- allow removing images
- fix photo preview for products (refresh for initial upload)

## Latest Updates (latest first)
Sign up backend:
- implement sign in with other credentials
  - check for ufl email
  - add verify password field

- make like button change on click etc
- create listing button
- saved, cart page
- add to cart functionality
- added like button
- fixed issue accessing profile page
- profile page displays user info and listings
- add user id to product schema
- add product id to list in user schema
- implement see more pages
- add price
- display all listings
- client has navbar and search bar template set up
- displays one of the listings
- can sign out (admin panel)
- fix edit and delete buttons in categories and products page (admin panel)
- backend communicates with AWS bucket for image storage
- Some proof of concept stuff completed:
  - mongodb set up
  - web app communicates with db
  - admin panel view in the works (scaly-steals-admin)
    - can create categories
  - client view template in progress (scaly-steals-client)

*Important Notes*
Functionality requires Google Cloud credentials and MongoDB URI which are not pushed to the repository.

Also requires AWS for image persistent storage.

## Functionality (original)
- Communication between users (Chat)
  - email notficiation (configurable)
  - text suggestions
- Payment (TBD)
- Search bar
- Cart
  - Must sign in to add to cart
- Public meetups only
- Log-in / profiles
  - Unique username
- Save a listing
  - personal lists
- Listing cards
- Upload listing (picture + description + price)
- Filtering & sorting
  - date added
  - price
  - category
  - listings per page (default TBD)
- Trust rating (seller & buyer)
  - report a user
  - block a user
- Only ufl emails at acc creation
  - email verification
- Listing verification
  - blacklisting words

### Front-end
- JavaScript
  - Next.js
  - npm
 
- Home page
  - category listings
  - terms of service (we are not liable)

### Back-end
- Mongodb
- Axios
- Socket.io

### Workflow
- Endpoints
  - `/[username]`
  - `/cart`
  - `/checkout`
  - `/home`
  - `/[category]`
  - `/login`

### Figma Website Design
https://www.figma.com/file/BqcMwD0KCsIroRfv1jHqg3/Scaly-Steals?type=design&node-id=4%3A164&mode=design&t=RpGB0S8eBBPITFwf-1
