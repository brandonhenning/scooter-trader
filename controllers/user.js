const User = require('../models/user')

exports.postUsers = (request, response) => {
    // Create a new instance of the User model
    let user = new User()
    // Set the user properties that came from the POST data
    user.username = request.body.username
    user.password = request.body.password
    // Save the scooter and check for errors
    user.save(error => {
        if (error)
            response.send(error)
        response.json({ message: 'New user added' })
    })
}

exports.getUsers = (request, response) => {
    // Use the User model to find all the scooters
    User.find((error, users) => {
        if (error)
            response.send(error)
        response.json(users)
    })
}
