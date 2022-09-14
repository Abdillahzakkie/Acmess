
# ACME WIDGETS (A Web3 Widget Store)

To see the app in action, go to https://acme-widget.herokuapp.com/

> Web3 Shopping Store built with the MERN stack, Redux, and Solidity
![screenshot](https://github.com/LivingStone-Blockchain/acme-widget/blob/main/frontend/src/assets/images/screenshot/acme-landing-page.png)


## Features
- Built on Web3
- Wallet integration and payment
- Full featured shopping cart
- Product reviews and ratings
- User profile with orders
- Manager product management
- Manager user management
- Manager Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Database seeder (products & users)

### Libraries & Frameworks

- [Ethereum](https://www.ethereum.com/)
- [mongoDB](https://www.mongodb.com/)
- [express](https://expressjs.com/)
- [react](https://reactjs.org/)
- [node](https://nodejs.org/en/)
- [react-router-dom](https://reactrouter.com/web/guides/quick-start)
- [jwt](https://jwt.io/)
- [mongoose](http://mongoosejs.com/)
- [Heroku](https://www.heroku.com/)
- [Bootstrap](https://www.bootstap.com/)

### Env Variables

Create a .env file in the root and add the following

```
NODE_ENV = development
PORT = 3005
MONGO_URI = your mongodb uri
JWT_SECRET = putYourSecret
PAYPAL_CLIENT_ID = your paypal client id
```

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```
# Run frontend (:3000) & backend (:3005)
npm run dev
# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

There is a Heroku postbuild script, so if you push to Heroku, no need to build manually for deployment to Heroku

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import
# Destroy data
npm run data:destroy
```

### Users Login Details

```
# Warehouse Manager
email: manager@example.com
password: 123456
```

```
# Customer1
email: customer1@example.com
password: 123456
```

```
# Customer2
email: customer2@example.com
password: 123456
```
