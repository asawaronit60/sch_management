const zoomLiveClassController = require('../controllers/zoomLiveClassController')

const router = require('express').Router()

router.get('/',zoomLiveClassController.getLiveClasses)
router.post('/',zoomLiveClassController.createLiveClass)
router.delete('/:id',zoomLiveClassController.deleteLiveClass)
module.exports = router