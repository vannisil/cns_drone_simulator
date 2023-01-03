const {Router} = require("express");
const { getCu, saveCu, updateCu, deleteCu } = require("../controllers/cuController");
const router = Router()

router.get('/getCu', getCu)
router.post('/saveCu', saveCu)
router.post('/updateCu', updateCu)
router.post('/deleteCu', deleteCu)

module.exports = router;