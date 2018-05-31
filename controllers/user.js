const User = require('../models/user')

// Create a new instance of the User model
exports.postUsers = (request, response) => {
    let user = new User()
    user.username = request.body.username
    user.password = request.body.password
    user.save(error => {
        if (error)
            response.send(error)
        response.json({ message: 'New user added' })
    })
}

exports.getUsers = (request, response) => {
    User.find((error, users) => {
        if (error)
            response.send(error)
        response.json(users)
    })
}
