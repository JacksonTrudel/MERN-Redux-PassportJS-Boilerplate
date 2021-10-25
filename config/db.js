const mongoose = require('mongoose');
const config = require('config');
const db = `mongodb+srv://server1:${process.env.MONGO_PASSWORD}@cluster0.zf4b0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const connectDB = async function () {
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