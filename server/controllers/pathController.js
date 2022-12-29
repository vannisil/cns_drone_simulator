const pathModel = require('../models/pathModel')

module.exports.getPath = async (req, res) => {
    const path = await pathModel.find()
    res.send(path)
}

module.exports.savePath = async (req, res) => {

    const { text } = req.body

    pathModel
    .create({text})
    .then((data) => {
        console.log("Aggiunto con successo...");
        res.send(data)
    })
}

module.exports.updatePath = async (req, res) => {
    const {_id, text} = req.body
    pathModel
    .findByIdAndUpdate(_id, {text})
    .then(() => res.set(201).send("Modificato con successo..."))
    .catch((err) => console.log(err))
}

module.exports.deletePath = async (req, res) => {
    const {_id} = req.body
    pathModel
    .findByIdAndDelete(_id)
    .then(() => res.set(201).send("Eliminato con successo..."))
    .catch((err) => console.log(err))
}