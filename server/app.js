const express = require('express')
const mongoose = require('mongoose')
const routeCreatePath = require('./routes/createRoute')
const cors = require("cors")

require('dotenv').config()
var obj = new Object
obj.latitude = "41.088051597226894";
obj.longitude = "16.839490137794275";

const app = express()
const PORT = process.env.port || 5000

app.use(express.json())
app.use(cors())

app.get("/getPosition", (req, res) => {
    res.send(obj);
})

mongoose
    .connect(process.env.MONGODB_URL)
    .then(()=> console.log('Connected...'))
    .catch((err) => console.log(err))

    app.use(routeCreatePath)

app.listen(PORT, ()=> console.log('Listening on:' + PORT))