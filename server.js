const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const router = express.Router()
const scooterController = require('./controllers/scooter')
const userController = require('./controllers/user')
const cors = require('cors')

app.use(cors())
app.use(bodyParser())
app.use(router)

mongoose.connect('mongodb://localhost:27017/scooter-gang')

// Create endpoint handlers for /scooters
router.route('/scooters')
    .post(scooterController.postScooters)
    .get(scooterController.getScooters)

// Create endpoint handlers for /users
router.route('/users')
    .post(userController.postUsers)
    .get(userController.getUsers)

// Create endpoint handlers for /scooters/:scooter_id
router.route('/scooters/:scooter_id')
    .get(scooterController.getScooter)
    .delete(scooterController.deleteScooter)


app.listen(port)
