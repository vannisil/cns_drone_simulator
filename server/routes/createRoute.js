const {Router} = require("express");
const { getPath, savePath, updatePath, deletePath } = require("../controllers/pathController");
const { getCu, saveCu, updateCu, deleteC } = require("../controllers/cuController");
const router = Router()

//CREATE PATH
router.get('/', getPath)
router.post('/save', savePath)
router.post('/update', updatePath)
router.post('/delete', deletePath)

//CREATE CU
router.get('/getCu', getCu)
router.post('/saveCu', saveCu)
router.post('/updateCu', updateCu)
router.post('/deleteCu', deleteC )

module.exports = router;