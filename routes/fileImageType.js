const fileImageType = require('../controllers/fileImageTypeController')
const router = require('express').Router()

router.get('/file',fileImageType.getFileTypes)
router.patch('/file',fileImageType.updateFileTypes)

router.get('/image',fileImageType.getImageTypes)
router.patch('/image',fileImageType.updateImageTypes)

module.exports = router