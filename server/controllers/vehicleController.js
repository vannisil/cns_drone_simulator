
const vehicleModel = require('../models/vehicleModel')

module.exports.getVehicle = async (req, res) => {
    const vehicle = await vehicleModel.find()
    res.send(vehicle)
}

module.exports.saveVehicle = async (req, res) => {

    const { text } = req.body

    vehicleModel
    .create({text})
    .then((data) => {
        console.log("Vehicle Aggiunto con successo...");
        res.send(data)
    })
}

module.exports.updateVehicle = async (req, res) => {
    const {_id, text} = req.body
    vehicleModel
    .findByIdAndUpdate(_id, {text})
    .then(() => res.set(201).send("Vehicle Modificato con successo..."))
    .catch((err) => console.log(err))
}

module.exports.deleteVehicle = async (req, res) => {
    const {_id} = req.body
    vehicleModel
    .findByIdAndDelete(_id)
    .then(() => res.set(201).send("Eliminato con successo..."))
    .catch((err) => console.log(err))
}