const DownloadContentController = require('../controllers/downloadCenterController')
const router = require('express').Router()


router.get('/' , DownloadContentController.getDownloadContent)
router.post('/' , DownloadContentController.createDownloadContent)
router.get('/getFile/:id',DownloadContentController.getFile)
router.delete('/:id',DownloadContentController.deleteContent)

router.get('/content/:fileType',DownloadContentController.getcontents)


module.exports  = router