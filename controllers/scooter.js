const Scooter = require('../models/scooter')

// Create a new instance of the Scooter model
exports.postScooters = (request, response) => {
    let scooter = new Scooter()
    scooter.brand = request.body.brand
    scooter.model = request.body.model
    scooter.year = request.body.year
    scooter.image = request.body.image
    scooter.price = request.body.price
    scooter.save(error => {
        if (error)
            response.send(error)
        response.json({ message: 'Scooter added to the listings!' })
    })
}

// Create endpoint /scooters for GET
exports.getScooters = (request, response) => {
    Scooter.find((error, scooters) => {
        if (error)
            response.send(error)
        response.json(scooters)
    })
}

// Create endpoint scooters/:scooter_id for GET
exports.getScooter = (request, response) => {
    Scooter.findById(request.params.scooter_id, (error, scooter) => {
        if (error)
            response.send(error)
        response.json(scooter)
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