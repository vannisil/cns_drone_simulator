const mongoose = require('mongoose')

const vehicleSchema = new mongoose.Schema({
    text: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Vehicle', vehicleSchema)