const Scooter = require('../models/scooter')

exports.postScooters = (request, response) => {
    // Create a new instance of the Scooter model
    let scooter = new Scooter()
    // Set the scooter properties that came from the POST data
    scooter.brand = request.body.brand
    scooter.model = request.body.model
    scooter.year = request.body.year
    scooter.image = request.body.image
    scooter.price = request.body.price
    // Save the scooter and check for errors
    scooter.save(error => {
        if (error)
            response.send(error)
        response.json({ message: 'Scooter added to the listings!' })
    })
}

// Create endpoint /scooters for GET
exports.getScooters = (request, response) => {
    // Use the Scooter model to find all the scooters
    Scooter.find((error, scooters) => {
        if (error)
            response.send(error)
        response.json(scooters)
    })
}

// Create endpoint scooters/:scooter_id for GET
exports.getScooter = (request, response) => {
    Scooter.findById(request.params.scooter_id, (error, beer) => {
        if (error)
            response.send(error)
        response.json(beer)
    })
}

// Create endpoint /scooters/scooter_id for DELETE
exports.deleteScooter = (request, response) => {
    Scooter.findByIdAndRemove(request.params.scooter_id, error => {
        if (error)
            response.send(error)
        response.json({ message: 'Scooter removed from listings!' })
    })
}