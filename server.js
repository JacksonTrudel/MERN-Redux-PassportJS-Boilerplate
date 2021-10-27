// Jackson Trudel
// server.js

const express = require('express');
const session = require('express-session');
var passport = require('passport');
const MongoStore = require('connect-mongo')(session);
const keys = require('./config/keys');
var LocalStrategy = require('passport-local').Strategy;
const passwordValidation = require('./validation/password-validation');
const User = require('./models/User');
const connectDB = require('./config/db');
const ideas = require('./routes/api/ideas');
const accounts = require('./routes/api/accounts');
const cors = require('cors');

const app = express();

// connect DB
connectDB(app);

// Init middleware
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true }));

// cors
app.use(cors({ origin: true, credentials: true }));

// Sessions
// This function is called when `passport.authenticate()` is called.
passport.use(new LocalStrategy(
    function (username, password, done) {
        User.findOne({ username: username })
            .then((user) => {
                if (!user) { return done(null, false) }

                const isValid = passwordValidation.validPassword(password, user.hash, user.salt);

                if (isValid) {
                    return done(null, user);
                }
                else {
                    return done(null, false);
                }
            })
            .catch((err) => {
                done(err);
            });
    }
));

// passport serialization using user ID from database
passport.serializeUser(function (user, cb) {
    cb(null, user.id);
});
passport.deserializeUser(function (id, cb) {
    User.findById(id, function (err, user) {
        if (err) { return cb(err); }
        cb(null, user);
    });
});

// setup sessions
app.use(session({
    secret: keys.secretOrKey,
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ url: keys.mongoUrl, collection: 'sessions' }),
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60 * 24, // 1 day
    }
}));

app.use(passport.initialize());
app.use(passport.session());

const PORT = process.env.PORT || 8082;


// set up routes
app.use('/ideas', ideas);
app.use('/accounts', accounts);

app.get('/', (req, res) => res.send('Hello world!'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
