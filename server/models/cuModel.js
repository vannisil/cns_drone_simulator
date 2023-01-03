const mongoose = require('mongoose')

const cuSchema = new mongoose.Schema({
    text: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Cu', cuSchema)