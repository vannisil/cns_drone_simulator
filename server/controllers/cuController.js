const cuModel = require('../models/cuModel')

module.exports.getCu = async (req, res) => {
    const cu = await cuModel.find()
    res.send(cu)
}

module.exports.saveCu = async (req, res) => {

    const { text } = req.body

    cuModel
    .create({text})
    .then((data) => {
        console.log("Cu Aggiunta con successo...");
        res.send(data)
    })
}

module.exports.updateCu = async (req, res) => {
    const {_id, text} = req.body
    cuModel
    .findByIdAndUpdate(_id, {text})
    .then(() => res.set(201).send("Cu Modificata con successo..."))
    .catch((err) => console.log(err))
}

module.exports.deleteC = async (req, res) => {
    const {_id} = req.body
    cuModel
    .findByIdAndDelete(_id)
    .then(() => res.set(201).send("Eliminato con successo..."))
    .catch((err) => console.log(err))
}