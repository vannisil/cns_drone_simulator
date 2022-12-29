const {Router} = require("express");
const { getPath, savePath, updatePath, deletePath } = require("../controllers/pathController");
const router = Router()

router.get('/', getPath)
router.post('/save', savePath)
router.post('/update', updatePath)
router.post('/delete', deletePath)

module.exports = router;