const mongoose = require('mongoose')

const pathSchema = new mongoose.Schema({
    text: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Path', pathSchema)