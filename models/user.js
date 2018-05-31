const mongoose = require('mongoose')

// Define our scooter schema
const UserSchema = new mongoose.Schema({
    username: String,
    password: String
})

module.exports = mongoose.model('User', UserSchema)