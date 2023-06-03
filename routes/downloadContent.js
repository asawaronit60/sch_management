const DownloadContentController = require('../controllers/downloadCenterController')
const router = require('express').Router()


router.get('/' , DownloadContentController.getDownloadContent)
router.post('/' , DownloadContentController.createDownloadContent)
router.get('/getFile/:id',DownloadContentController.getFile)
router.delete('/:id',DownloadContentController.deleteContent)

/**
 * @param content_type_id - id of the content
 */
router.get('/content/:content_type_id',DownloadContentController.getcontents)


module.exports  = router