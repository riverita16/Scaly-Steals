# Scaly Steals
Better and more secure alternative to Craigslist and Facebook Marketplace for fellow Gators.

## Latest Updates
- Some proof of concept stuff completed:
  - mongodb set up
  - web app communicates with db
  - admin panel view in the works (scaly-steals-admin)
    - can create categories
  - client view template in progress (scaly-steals-client)

*Important Notes*
Functionality requires Google Cloud credentials and MongoDB URI which are not pushed to the repository.

## Functionality
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
