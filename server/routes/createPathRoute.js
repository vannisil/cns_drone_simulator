const {Router} = require("express")
const router = Router()

router.get('/', (req, res) => {
    res.json({message: "OK..."})
})

module.exports = router;