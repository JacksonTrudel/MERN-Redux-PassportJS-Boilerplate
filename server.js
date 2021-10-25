// Jackson Trudel
// server.js

const express = require('express');
const connectDB = require('./config/db');
const ideas = require('./routes/api/ideas');

const app = express();

// set up routes
app.use('/ideas', ideas);

// connect DB
connectDB();

const PORT = process.env.PORT || 8082;

app.get('/', (req, res) => res.send('Hello world!'));

app.get('/', (req, res) => res.send('Hello world!'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
