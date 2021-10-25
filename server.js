// Jackson Trudel
// server.js

const express = require('express');
const connectDB = require('./config/db');
const ideas = require('./routes/api/ideas');
const cors = require('cors');

const app = express();

// connect DB
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init middleware
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 8082;


// set up routes
app.use('/ideas', ideas);

app.get('/', (req, res) => res.send('Hello world!'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
