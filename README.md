# Scaly Steals
Better and more secure alternative to Craigslist and Facebook Marketplace for fellow Gators.

## Functionality
- Communication between users (Chat)
  - email notficiation (configurable)
  - text suggestions
- Payment (TBD)
- Search bar
- Cart
- Public meetups only
- Log-in / profiles
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
  - React
  - Express
  - npm
 
- Home page
  - category listings
  - terms of service (we are not liable)

### Back-end
- Python
  - Relational db: MySQL v PostgreSQL
- Socket.io

### Workflow
- Endpoints
  - `/[username]`
  - `/cart`
  - `/checkout`
  - `/home`
  - `/[category]`
  - `/login`
