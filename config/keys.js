module.exports = {
    mongoUrl: `mongodb+srv://server1:${process.env.MONGO_PASSWORD}@cluster0.w78y5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    secretOrKey: process.env.SECRET,
}