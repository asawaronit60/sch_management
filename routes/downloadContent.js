const DownloadContentController = require('../controllers/downloadCenterController')
const router = require('express').Router()


router.get('/' , DownloadContentController.getDownloadContent)
router.post('/' , DownloadContentController.createDownloadContent)
router.get('/getFile/:id',DownloadContentController.getContent)
router.delete('/:id',DownloadContentController.deleteContent)

router.get('/assignment',DownloadContentController.getAssignment)
router.get('/otherDownloads',DownloadContentController.getOtherDownloads)
router.get('/studyMaterial',DownloadContentController.getStudyMaterial)
router.get('/syllabus',DownloadContentController.getSyllabus)

module.exports  = router