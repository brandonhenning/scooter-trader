const mongoose = require('mongoose')

// Define our scooter schema
const ScooterSchema = new mongoose.Schema({
    brand: String,
    model: String,
    year: Number,
    image: String,
    price: Number
})

module.exports = mongoose.model('Scooter', ScooterSchema)