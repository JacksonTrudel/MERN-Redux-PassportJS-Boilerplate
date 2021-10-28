# MERN Webapp Template with Passport user authentication
This template can be used to build a webapp requiring user authentication. Trustworthy Passport NodeJS package is used with Local Strategy to authenticate users. The user schema is bare, with just a username, hash, and salt. The hash and salt are used to validate passwords on login attempts. 

# Database
This project works with MongoDB. The Mongo connection URL must be specified in ```./config/keys.js```. I decided to pass the password as a parameter to the program (see below, in 'Run the app' section).

# Run the app
To run the express app, execute in the root directory:
```cmd
MONGO_PASSWORD=<mongo-db-password> SECRET=<secret> npm run server
```
* <secret> : a long, randomly generated string used to sign session cookies.

To run the react project:
```cmd
npm start
```

