const mongoose = require('mongoose');
const keys = require('./keys');
const db = keys.mongoUrl;

const connectDB = async function (app) {
    try {
        await mongoose.connect(
            db,
            {
                useNewUrlParser: true
            }
        );

        console.log('MongoDB is connected');
    }
    catch (err) {
        console.log(`Could not connect to database: ${err.message}`);
        process.exit(1);
    }
}

module.exports = connectDB;